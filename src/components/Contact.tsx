import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    countryCode: '',
    service: '',
    budget: '',
    message: ''
  });

  // Country codes data with flag emojis
  const countryCodes = [
    { code: '+1', country: 'US', name: 'United States', flag: '🇺🇸' },
    { code: '+1', country: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: '+44', country: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', country: 'IN', name: 'India', flag: '🇮🇳' },
    { code: '+86', country: 'CN', name: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', country: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'FR', name: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: '+7', country: 'RU', name: 'Russia', flag: '🇷🇺' },
    { code: '+55', country: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: '+52', country: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: '+61', country: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: '+82', country: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: '+65', country: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: '+971', country: 'AE', name: 'UAE', flag: '🇦🇪' },
    { code: '+966', country: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+31', country: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+46', country: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: '+41', country: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: '+32', country: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: '+48', country: 'PL', name: 'Poland', flag: '🇵🇱' }
  ];

  // Find the selected country for display
  const selectedCountry = countryCodes.find(country => country.code === formData.countryCode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Combine country code and phone number if both are provided
      const fullPhoneNumber = formData.countryCode && formData.phone 
        ? `${formData.countryCode} ${formData.phone}`
        : formData.phone || null;

      // Insert form data into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: fullPhoneNumber,
          service: formData.service,
          budget: formData.budget || null,
          message: formData.message
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Submission failed",
          description: "There was an error submitting your form. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Success
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        countryCode: '',
        service: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Submission failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ready to transform your business with AI? Let's discuss your project.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full"
                  placeholder="Enter your company name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <Select 
                    onValueChange={(value) => handleInputChange('countryCode', value)}
                    disabled={isSubmitting}
                    value={formData.countryCode}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="🌍 Code">
                        {selectedCountry && (
                          <span className="flex items-center gap-2">
                            <span className="text-lg">{selectedCountry.flag}</span>
                            <span>{selectedCountry.code}</span>
                          </span>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {countryCodes.map((country, index) => (
                        <SelectItem 
                          key={`${country.code}-${country.country}-${index}`} 
                          value={country.code}
                          className="flex items-center gap-2"
                        >
                          <div className="flex items-center gap-2 w-full">
                            <span className="text-lg">{country.flag}</span>
                            <span className="font-medium">{country.code}</span>
                            <span className="text-sm text-gray-500">{country.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest *
                </label>
                <Select 
                  onValueChange={(value) => handleInputChange('service', value)} 
                  required
                  disabled={isSubmitting}
                  value={formData.service}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chatbot">Chatbot Generation</SelectItem>
                    <SelectItem value="genai">GenAI Consulting</SelectItem>
                    <SelectItem value="consulting">AI Consulting for Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget
                </label>
                <Select 
                  onValueChange={(value) => handleInputChange('budget', value)}
                  disabled={isSubmitting}
                  value={formData.budget}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-10k">Below $10k</SelectItem>
                    <SelectItem value="10k-50k">$10k–$50k</SelectItem>
                    <SelectItem value="50k-100k">$50k–$100k</SelectItem>
                    <SelectItem value="100k-plus">$100k+</SelectItem>
                    <SelectItem value="not-sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                rows={4}
                className="w-full"
                placeholder="Tell us about your project requirements and goals..."
                disabled={isSubmitting}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">sales@acucogn.com</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (516) 957-8453</p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">📍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">5717 Legacy Dr Suite 250, Plano, TX 75024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
