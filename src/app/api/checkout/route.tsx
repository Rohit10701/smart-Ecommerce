import { NextResponse, NextRequest } from "next/server";
import { Products } from "../../../../type";
import Stripe from "stripe";

const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
    apiVersion : "2023-08-16"
  });
  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;

    const extractingItems = await items.map((item: Products) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/checkout`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export default POST