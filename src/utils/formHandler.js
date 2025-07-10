// Form submission utilities
export const submitContactForm = async (formData) => {
  // Option 1: EmailJS (for frontend-only solution)
  // You'll need to install: npm install @emailjs/browser
  // And set up EmailJS account
  
  // Option 2: Netlify Forms (if deploying to Netlify)
  // Just add name="contact" to your form and it works automatically
  
  // Option 3: Custom backend API
  // Replace this with your actual API endpoint
  
  try {
    // Example with fetch to your backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

// EmailJS implementation (uncomment and configure if using EmailJS)
/*
import emailjs from '@emailjs/browser';

export const submitContactFormEmailJS = async (formData) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    );
    
    return result;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};
*/

// Form validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}; 