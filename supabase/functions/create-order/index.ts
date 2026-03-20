import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RAZORPAY_KEY_ID = Deno.env.get('RAZORPAY_KEY_ID');
    const RAZORPAY_KEY_SECRET = Deno.env.get('RAZORPAY_KEY_SECRET');

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      console.error('Missing Razorpay credentials. KEY_ID set:', !!RAZORPAY_KEY_ID, 'KEY_SECRET set:', !!RAZORPAY_KEY_SECRET);
      return new Response(JSON.stringify({ error: 'Razorpay credentials not configured' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Log key ID prefix for debugging (safe - only first 10 chars)
    console.log('Using Razorpay Key ID:', RAZORPAY_KEY_ID.substring(0, 10) + '...');
    console.log('Key Secret length:', RAZORPAY_KEY_SECRET.length);

    const { amount, currency, customer_name, customer_email, services, booking_date, city, pickup_time } = await req.json();

    // Encode credentials for Basic Auth
    const credentials = `${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(credentials);
    const base64 = btoa(String.fromCharCode(...data));

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64}`,
      },
      body: JSON.stringify({
        amount: Math.round(amount),
        currency: currency || 'INR',
        notes: {
          customer_name: customer_name || '',
          customer_email: customer_email || '',
          services: (services || '').substring(0, 512),
          booking_date: booking_date || '',
          city: city || '',
          pickup_time: pickup_time || '',
        },
      }),
    });

    const order = await response.json();

    if (!response.ok) {
      console.error('Razorpay API error:', JSON.stringify(order));
      return new Response(JSON.stringify({ error: 'Failed to create order', details: order }), {
        status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(order), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
