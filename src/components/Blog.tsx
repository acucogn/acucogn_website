
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

const Blog = () => {
  const { data: blogPosts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  const handleReadMore = (blogId: string) => {
    window.open(`/blog/${blogId}`, '_blank');
  };

  if (isLoading) {
    return (
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Insights</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 animate-pulse">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-3"></div>
                  <div className="h-6 bg-gray-300 rounded mb-3"></div>
                  <div className="h-16 bg-gray-300 rounded mb-4"></div>
                  <div className="h-10 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-red-600">Error loading blog posts. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and developments in artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map((post) => (
            <article
              key={post.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <img
                src={post.image_url || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Author section with avatar */}
                <div className="flex items-center mb-4">
                  <Avatar className="h-8 w-8 mr-3">
                    {post.author_image_url ? (
                      <AvatarImage src={post.author_image_url} alt={post.author} />
                    ) : null}
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                      {post.author.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-600 font-medium">
                    By {post.author}
                  </span>
                </div>

                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 mt-auto"
                >
                  📖 Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        {blogPosts && blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
