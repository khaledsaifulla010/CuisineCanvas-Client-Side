import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errors, setError] = useState();

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
      setError(error.message);
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
          disabled={!stripe}
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
      </form>
    </div>
  );
};

export default CheckoutForm;
