
-- Add author_image_url column to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN author_image_url TEXT;

-- Update the existing blog posts with sample author images (optional)
UPDATE public.blog_posts 
SET author_image_url = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
WHERE author = 'Admin';
