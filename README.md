# Beyond Tech - Company Website

A modern, professional website for Beyond Tech, Rwanda's leading technology partner offering cutting-edge software solutions, UI/UX design, and consulting services.

## 🚀 Features

### ✅ Implemented Features

- **Fully Responsive Design** - Mobile-first approach with hamburger menu
- **WhatsApp Integration** - Floating button for instant communication
- **Free Consultation Modal** - Lead capture system with email automation
- **Testimonials Carousel** - Client reviews with navigation
- **FAQ Section** - Accordion-style frequently asked questions
- **Rwanda Trust Signals** - Local presence, payment methods (MTN/Airtel Money)
- **Portfolio/Case Studies** - Detailed project showcase page
- **Newsletter System** - Email subscription with welcome automation
- **Client Logos Showcase** - Animated scrolling client logos
- **SEO Optimized** - Schema.org structured data, meta tags
- **Google Analytics** - GA4 integration ready
- **Contact Form** - Email integration with Nodemailer

### 🎨 Design Features

- Modern gradient backgrounds
- Smooth animations and transitions
- Consistent brand colors (#F6A019 orange, #27B755 green)
- Professional typography (Geist fonts)
- Accessible and user-friendly interface

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4 (with Turbopack)
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5
- **Icons:** React Icons 5.5.0
- **Email:** Nodemailer 7.0.6
- **Analytics:** @next/third-parties/google
- **Fonts:** Geist Sans & Geist Mono

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd beyondteck
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Gmail Configuration for Email Services
NEXT_PUBLIC_GMAIL_USER=your-email@gmail.com
NEXT_PUBLIC_GMAIL_PASS=your-app-specific-password

# Google Analytics (Optional)
# Replace G-XXXXXXXXXX in layout.tsx with your GA4 ID
```

**To get Gmail App Password:**
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > App Passwords
4. Generate a new app password for "Mail"
5. Use this password in your `.env.local`

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📄 Project Structure

```
beyondteck/
├── app/
│   ├── api/
│   │   ├── contact/route.ts          # Contact form API
│   │   ├── consultation/route.ts     # Consultation booking API
│   │   └── newsletter/route.ts       # Newsletter subscription API
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ClientLogosSection.tsx    # Client logos carousel
│   │   ├── ConsultationModal.tsx     # Free consultation modal
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx            # FAQ accordion
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx                # Mobile-responsive navbar
│   │   ├── ServiceModal.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx   # Client testimonials
│   │   ├── TrustSignalsSection.tsx   # Rwanda-specific content
│   │   ├── WhatDriverUs.tsx
│   │   ├── WhatWeOffer.tsx
│   │   └── WhatsAppButton.tsx        # Floating WhatsApp button
│   ├── portfolio/
│   │   └── page.tsx                  # Portfolio page
│   ├── globals.css
│   ├── layout.tsx                    # Root layout with SEO
│   └── page.tsx                      # Home page
├── public/
│   └── images/                       # Website images
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Sections

### Home Page
- **Hero Section** - Main value proposition with CTA buttons
- **About Section** - Vision and mission
- **Trust Signals** - Rwanda-specific features
- **Stats** - Project metrics
- **Core Values** - What drives us
- **Services** - 6 service offerings with modals
- **Client Logos** - Animated showcase
- **Testimonials** - Client reviews
- **FAQ** - Common questions
- **Contact Form** - Lead capture

### Portfolio Page
- **Project Showcase** - 4 detailed case studies
- **Results & Impact** - Measurable outcomes
- **Client Testimonials** - Project-specific feedback
- **Tech Stack** - Technologies used

## 📧 Email Features

### Contact Form
- Sends inquiry to admin
- Field validation
- Service selection
- Success/error feedback

### Consultation Booking
- Admin notification
- Client confirmation email
- Date/time preferences
- Project details capture

### Newsletter
- Admin notification
- Welcome email to subscriber
- HTML email templates
- Double opt-in ready

## 🎨 Customization

### Brand Colors
Update in `tailwind.config.ts` and components:
- Primary: `#F6A019` (Orange)
- Secondary: `#27B755` (Green)
- Accent: `#59B9D1` (Light Blue)

### Content
- Update service details in `WhatWeOffer.tsx`
- Modify testimonials in `TestimonialsSection.tsx`
- Edit FAQ in `FAQSection.tsx`
- Update portfolio projects in `portfolio/page.tsx`

### Contact Information
- Phone: +250781274642
- Email: beyondtech@gmail.com
- Update in: WhatsAppButton, ContactSection, Footer

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Vercel Deployment (Recommended)
```bash
vercel --prod
```

### Environment Variables
Don't forget to add environment variables in your hosting platform:
- `NEXT_PUBLIC_GMAIL_USER`
- `NEXT_PUBLIC_GMAIL_PASS`

## 📊 Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Replace `G-XXXXXXXXXX` in `app/layout.tsx` with your ID

## 🔧 Configuration Tips

### Update Domain
Replace all instances of `yourdomain.com` in:
- `app/layout.tsx` (metadata and structured data)
- Email templates in API routes

### Add Real Images
Replace placeholder images in `public/images/`:
- Client logos
- Project screenshots
- Team photos

### Optimize Images
```bash
# Use tools like:
- TinyPNG for compression
- ImageOptim for batch processing
- Next.js Image component handles optimization
```

## 📱 Mobile Testing

Test on various screen sizes:
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🆘 Troubleshooting

### Email not sending
- Check Gmail credentials in `.env.local`
- Verify 2FA is enabled
- Use app-specific password, not regular password
- Check Gmail "Less secure app access" settings

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

## 📈 Performance

- Lighthouse Score: 90+
- Mobile-first design
- Lazy loading images
- Optimized bundle size
- Fast page loads with Next.js

## 🎯 Future Enhancements

- [ ] Blog system with MDX
- [ ] Multi-language support (English, French, Kinyarwanda)
- [ ] Payment integration
- [ ] Client dashboard
- [ ] Project management portal
- [ ] Live chat integration
- [ ] Video testimonials
- [ ] Animated stats counter

## 📝 License

© 2025 Beyond Tech. All rights reserved.

## 🤝 Support

For technical support:
- Email: beyondtech@gmail.com
- Phone: +250781274642
- WhatsApp: +250781274642

---

**Made with ❤️ in Rwanda**