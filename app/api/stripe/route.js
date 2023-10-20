import { apiVersion } from '@/sanity/env';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(request) {
    const body = await request.json()
    // console.log(body);
    // console.log(request);
    try {  
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
            //   { shipping_rate: 'shr_1Kn3IaEnylLNWUqj5rqhg9oV' },
            ],
            line_items: body.map((item) => {
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-', 'https://cdn.sanity.io/images/yuz6reli/production/').replace('-webp', '.webp').replace('-jpg', '.jpg');
  
              // console.log('IMAGE',newImage);
              return {
                price_data: { 
                  currency: 'usd',
                  product_data: { 
                    name: item.name,
                    images: [newImage],
                  },
                  unit_amount: item.price * 100,
                },
                adjustable_quantity: {
                  enabled:true,
                  minimum: 1,
                },
                quantity: item.quantity
              }
            }),
            
            success_url: 'https://www.infinitycoltd.com/success',
            cancel_url: 'https://www.infinitycoltd.com/store',
          } 
    
          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create(params);
     
          // NextResponse.redirect(session.url)
          return NextResponse.json(session)

          // return NextResponse.json({success: true, session: session})
    //   return NextResponse.json({success: true});
    } catch (error) {
      console.log(error);
      return NextResponse.json({message: error.message});
    }
  }