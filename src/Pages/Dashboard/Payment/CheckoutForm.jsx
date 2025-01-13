import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errors, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransitionId] = useState("");
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Confirm Payment //

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("Confirm Error");
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction Id", paymentIntent.id);
        setTransitionId(paymentIntent.id);

        // now save the payments in database //

        const payments = {
          email: user.email,
          price: totalPrice,
          transitionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payments);
        console.log("payment save", res);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank You For Purchasing!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "600px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Secure Payment</h2>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                fontFamily: "'Roboto', sans-serif",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
          style={{
            padding: "10px",
            border: "2px solid black",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          style={{
            backgroundColor: stripe ? "#4CAF50" : "#ccc",
            color: "#fff",
            fontSize: "16px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: stripe ? "pointer" : "not-allowed",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => {
            if (stripe) e.target.style.backgroundColor = "#45a049";
          }}
          onMouseLeave={(e) => {
            if (stripe) e.target.style.backgroundColor = "#4CAF50";
          }}
        >
          Pay
        </button>
        <p className="text-red-600 font-bold text-base">{errors}</p>
        <div>
          {transitionId && (
            <p className="text-green-600 font-bold text-xl">{transitionId}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
