import type { NextPage } from "next";
import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { env } from "~/env.mjs";

// Make sure to call `loadStripe` outside a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const PRICING_TYPE_1: string = "price_1NrUxJBFnPGxhxouBLAUxcdm";

type StripeProps = {
  priceId: string;
};

const StripePage: NextPage<StripeProps> = (props) => {
  const router = useRouter();
  const mutation = api.stripe.checkoutSession.useMutation();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const handleCheckout = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // const redirectURL = await mutation.mutateAsync({
      //   priceId: PRICING_TYPE_1,
      // });
      // await router.push(redirectURL ?? "some failed url");
    },
    []
  );

  return (
    <div className="flex h-screen items-center justify-center pb-96">
      <form onSubmit={handleCheckout}>
        <section>
          <div className="product">
            <img
              src="https://i.imgur.com/EHyR2nP.png"
              alt="The cover of Stubborn Attachments"
            />
            <div className="description bg-white">
              <h3>Stubborn Attachments</h3>
              <h5>$20.00</h5>
            </div>
          </div>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
    </div>
  );
};
export default StripePage;
