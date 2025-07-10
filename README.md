# Dr. Asher George Joseph - Portfolio Website

A professional medical portfolio website for Dr. Asher George Joseph, Senior Cardiothoracic Surgeon.

## 🚀 Live Demo

[View Live Site](https://your-deployed-url.com) - *Update this link once deployed*

## 🚀 Features

- **Professional Design**: Modern, clean medical website design with medical imagery
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Interactive Contact Form**: Functional contact form with validation
- **Comprehensive CV**: Detailed professional profile and achievements based on Dr. Asher's actual CV
- **Surgical Procedures**: Information about various cardiac procedures with high-quality medical imagery
- **FAQ Section**: Common questions and answers
- **Educational Content**: Space for videos and patient education materials
- **Hero Section**: Dynamic background with medical imagery and professional overlay
- **Slider Section**: Showcase of surgical specialties with relevant medical images

## 🎨 Design Highlights

- **Medical Imagery**: High-quality images from Unsplash, Pexels, and medical sources
- **Professional Color Scheme**: Medical blues and professional styling
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Modern UI**: Clean, professional interface suitable for medical professionals

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Home.jsx            # Homepage with hero and slider sections
│   ├── Profile.jsx         # CV and professional information
│   ├── Surgeries.jsx       # Surgical procedures and videos
│   ├── FAQ.jsx             # Frequently asked questions
│   └── Contact.jsx         # Contact form and information
├── utils/
│   └── formHandler.js      # Form submission utilities
├── App.jsx                 # Main app component with routing
├── App.css                 # Main styles
└── index.css               # Global styles
```

## 🛠️ Contact Form Data Handling

The contact form is currently set up to handle submissions in several ways:

### Option 1: EmailJS (Recommended for Frontend-Only)
1. Install EmailJS: `npm install @emailjs/browser`
2. Sign up at [EmailJS](https://www.emailjs.com/)
3. Create an email service and template
4. Update `src/utils/formHandler.js` with your credentials
5. Uncomment the EmailJS implementation

### Option 2: Netlify Forms (If deploying to Netlify)
1. Add `name="contact"` to your form element
2. Deploy to Netlify
3. Forms are automatically handled

### Option 3: Custom Backend API
1. Set up your backend API endpoint
2. Update the `submitContactForm` function in `src/utils/formHandler.js`
3. Replace the fetch URL with your API endpoint

### Current Implementation
The form currently logs data to console and shows success/error messages. To make it functional:

```javascript
// In Contact.jsx, replace the handleSubmit function:
import { submitContactForm } from '../utils/formHandler';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await submitContactForm(formData);
    setSubmitStatus("success");
    // Reset form
  } catch (error) {
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🚀 Deployment

### GitHub Pages
1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... other config
})
```

2. Build and deploy:
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Forms will work automatically

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push

## 🎨 Customization

### Colors
The main color scheme is defined in `src/App.css`:
- Primary Blue: `#1a4d8f`
- Secondary Blue: `#2d6bb1`
- Accent Pink: `#e94e77`

### Content
- Update personal information in each page component
- Replace placeholder images with actual photos
- Add your real contact information
- Update CV details in `Profile.jsx`

### Images and Videos
- Replace Unsplash placeholder images with your own
- Add actual surgical videos to the video section
- Update hero image with your professional photo

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Optimized navigation for mobile
- Touch-friendly buttons and forms

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Contact Form Setup Guide

### For EmailJS (Recommended):
1. Go to [EmailJS](https://www.emailjs.com/) and create an account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your service ID, template ID, and public key
5. Update `src/utils/formHandler.js`:

```javascript
import emailjs from '@emailjs/browser';

export const submitContactFormEmailJS = async (formData) => {
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',        // Replace with your service ID
      'YOUR_TEMPLATE_ID',       // Replace with your template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'         // Replace with your public key
    );
    
    return result;
  } catch (error) {
    throw error;
  }
};
```

6. Update `Contact.jsx` to use the EmailJS function

### For Netlify Forms:
Simply add `name="contact"` to your form element and deploy to Netlify. The form will work automatically.

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder images and text
2. **Set Up Contact Form**: Choose and implement one of the contact form options
3. **Add Videos**: Replace video placeholders with actual educational content
4. **SEO Optimization**: Add meta tags and descriptions
5. **Analytics**: Add Google Analytics or similar tracking
6. **Custom Domain**: Set up your custom domain

## 📄 License

This project is for Dr. Asher George Joseph's personal use.
