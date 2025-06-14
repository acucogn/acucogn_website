import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const { data: blogPost, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: async () => {
      if (!id) throw new Error('Blog post ID is required');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .eq('published', true)
        .single();
      
      if (error) throw error;
      return data as BlogPost;
    },
    enabled: !!id,
  });

  const handleBack = () => {
    window.close();
  };

  // Function to format blog content with proper styling
  const formatContent = (content: string) => {
    // Split content by lines to process each line individually
    const lines = content.split('\n').filter(line => line.trim());
    const elements: JSX.Element[] = [];
    let currentIndex = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Handle main headings (##)
      if (line.startsWith('## ')) {
        const heading = line.replace('## ', '').trim();
        elements.push(
          <h2 key={currentIndex++} className="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 border-blue-200 pb-2">
            {heading}
          </h2>
        );
        continue;
      }
      
      // Handle sub headings (###)
      if (line.startsWith('### ')) {
        const heading = line.replace('### ', '').trim();
        elements.push(
          <h3 key={currentIndex++} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            {heading}
          </h3>
        );
        continue;
      }
      
      // Handle bullet points that contain colons (like "**Customer Service**: description")
      if (line.includes(': ') && line.includes('**') && !line.startsWith('##') && !line.startsWith('###')) {
        // Extract the bold title and description
        const boldRegex = /\*\*(.*?)\*\*:\s*(.*)/;
        const match = line.match(boldRegex);
        
        if (match) {
          const boldTitle = match[1];
          const description = match[2];
          
          elements.push(
            <div key={currentIndex++} className="my-3">
              <div className="flex items-start space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <div className="text-gray-700 leading-relaxed">
                  <strong className="font-semibold text-gray-900">{boldTitle}:</strong>
                  <span className="ml-1">{description}</span>
                </div>
              </div>
            </div>
          );
          continue;
        }
      }
      
      // Handle regular paragraphs with bold text
      if (line && !line.startsWith('##') && !line.startsWith('###')) {
        // Process bold text within paragraphs
        const parts = line.split(/(\*\*.*?\*\*)/g);
        
        elements.push(
          <p key={currentIndex++} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={partIndex} className="font-semibold text-gray-900">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      }
    }

    return elements;
  };

  if (!id) {
    return <Navigate to="/404" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-6 w-32"></div>
            <div className="h-64 bg-gray-300 rounded-lg mb-8"></div>
            <div className="h-12 bg-gray-300 rounded mb-4"></div>
            <div className="flex space-x-4 mb-8">
              <div className="h-6 bg-gray-300 rounded w-24"></div>
              <div className="h-6 bg-gray-300 rounded w-32"></div>
              <div className="h-6 bg-gray-300 rounded w-20"></div>
            </div>
            <div className="space-y-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </button>

        <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {blogPost.image_url && (
            <div className="relative">
              <img
                src={blogPost.image_url}
                alt={blogPost.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blogPost.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                <Avatar className="h-5 w-5 mr-2">
                  {blogPost.author_image_url ? (
                    <AvatarImage src={blogPost.author_image_url} alt={blogPost.author} />
                  ) : null}
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                    {blogPost.author.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2 text-blue-600" />
                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
              {blogPost.title}
            </h1>

            <div className="border-l-4 border-blue-500 pl-6 mb-8 bg-blue-50 py-4 rounded-r-lg">
              <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                {blogPost.excerpt}
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed space-y-6">
                {formatContent(blogPost.content)}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    {blogPost.author_image_url ? (
                      <AvatarImage src={blogPost.author_image_url} alt={blogPost.author} />
                    ) : null}
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      {blogPost.author.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">Written by {blogPost.author}</p>
                    <p className="text-gray-600 text-sm">Published on {new Date(blogPost.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <button
                  onClick={handleBack}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Back to All Blogs
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
