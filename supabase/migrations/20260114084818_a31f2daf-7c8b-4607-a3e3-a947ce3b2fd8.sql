-- Add columns for activity bookings to cart_items table
ALTER TABLE public.cart_items 
ADD COLUMN IF NOT EXISTS item_type text NOT NULL DEFAULT 'transfer',
ADD COLUMN IF NOT EXISTS adults integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS children integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS selected_date text,
ADD COLUMN IF NOT EXISTS selected_time text,
ADD COLUMN IF NOT EXISTS child_price numeric DEFAULT 0;

-- Make transfer-specific columns nullable for activities
ALTER TABLE public.cart_items 
ALTER COLUMN transfer_id DROP NOT NULL,
ALTER COLUMN vehicle_id DROP NOT NULL,
ALTER COLUMN vehicle_name DROP NOT NULL,
ALTER COLUMN capacity DROP NOT NULL,
ALTER COLUMN pickup_location DROP NOT NULL,
ALTER COLUMN drop_location DROP NOT NULL;

-- Add constraint to ensure item_type is valid
ALTER TABLE public.cart_items 
ADD CONSTRAINT cart_items_type_check CHECK (item_type IN ('transfer', 'activity'));