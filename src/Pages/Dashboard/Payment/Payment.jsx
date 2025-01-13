import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Add Publishable Key
const stripePromise = loadStripe()

const Payment = () => {
    return (
      <div>
        <h1 className="text-center text-5xl font-bold">Payment</h1>

        <div>
            <Elements stripe={stripePromise}></Elements>
        </div>
      </div>
    );
};

export default Payment;