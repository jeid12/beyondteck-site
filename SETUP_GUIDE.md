# 🚀 Beyond Tech - Setup & Configuration Guide

## 📋 Quick Start Checklist

### ✅ Phase 1: Immediate Setup (Do Now)

- [ ] **Install dependencies**
  ```bash
  npm install
  ```

- [ ] **Create `.env.local` file**
  ```env
  NEXT_PUBLIC_GMAIL_USER=your-email@gmail.com
  NEXT_PUBLIC_GMAIL_PASS=your-app-password
  ```

- [ ] **Test the application**
  ```bash
  npm run dev
  ```
  Visit: http://localhost:3000

### ✅ Phase 2: Email Configuration (Critical)

1. **Gmail Setup for Nodemailer**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Factor Authentication
   - Navigate to: Security > 2-Step Verification > App passwords
   - Create password for "Mail"
   - Copy the 16-character password
   - Add to `.env.local` as `NEXT_PUBLIC_GMAIL_PASS`

2. **Test Email Features**
   - Newsletter subscription (Footer)
   - Contact form (Contact section)
   - Consultation booking (Hero CTA button)

### ✅ Phase 3: Google Analytics (Important)

1. **Create GA4 Property**
   - Go to: https://analytics.google.com
   - Create new property
   - Get Measurement ID (format: G-XXXXXXXXXX)

2. **Update Code**
   - Open: `app/layout.tsx`
   - Find: `<GoogleAnalytics gaId="G-XXXXXXXXXX" />`
   - Replace with your Measurement ID

### ✅ Phase 4: Content Customization

#### Replace Placeholder Images
Location: `/public/images/`

**Upload these images:**
- Company logo (replace `logoo.png`)
- Hero images (replace `image1.png`, `image2.png`)
- Team photo (replace `group.png`)
- Client logos (for ClientLogosSection)
- Portfolio screenshots (for Portfolio page)

**Recommended sizes:**
- Logo: 500x500px (transparent PNG)
- Hero images: 800x800px
- Team photo: 1200x800px
- Client logos: 400x400px
- Portfolio: 1200x800px

#### Update Contact Information
Search and replace in all files:
- Phone: `+250781274642` → Your number
- Email: `beyondtech@gmail.com` → Your email
- WhatsApp: Update in `WhatsAppButton.tsx`

#### Update Domain
Replace `yourdomain.com` in:
- `app/layout.tsx` (metadata, structured data)
- All API email templates
- Footer links

### ✅ Phase 5: Testimonials & Portfolio

#### Add Real Client Testimonials
File: `app/components/TestimonialsSection.tsx`

Update the `testimonials` array with:
- Real client names
- Actual company names
- Client photos (add to `/public/images/clients/`)
- Genuine feedback

#### Update Portfolio Projects
File: `app/portfolio/page.tsx`

Update the `projects` array with:
- Real project details
- Actual screenshots
- True metrics and results
- Verified testimonials

### ✅ Phase 6: SEO Optimization

1. **Update Metadata**
   - File: `app/layout.tsx`
   - Update title, description, keywords
   - Add your domain to canonical URLs
   - Update Open Graph images

2. **Create Sitemap**
   - Create: `public/sitemap.xml`
   - List all pages
   - Submit to Google Search Console

3. **Create robots.txt**
   - Create: `public/robots.txt`
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

### ✅ Phase 7: Performance Optimization

1. **Image Optimization**
   - Use: https://tinypng.com
   - Compress all images in `/public/images/`
   - Aim for <500KB per image

2. **Test Performance**
   ```bash
   npm run build
   npm start
   ```
   - Test on: https://pagespeed.web.dev
   - Target: 90+ score

### ✅ Phase 8: Deployment

#### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Add Environment Variables in Vercel:**
1. Go to: Project Settings > Environment Variables
2. Add:
   - `NEXT_PUBLIC_GMAIL_USER`
   - `NEXT_PUBLIC_GMAIL_PASS`

#### Option B: Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Option C: Custom Server
```bash
npm run build
npm start
# Use PM2 or similar for process management
```

---

## 🎨 Customization Guide

### Change Brand Colors

File: `tailwind.config.ts`
```typescript
colors: {
  primary: '#F6A019',  // Your primary color
  secondary: '#27B755', // Your secondary color
  // Add more colors
}
```

Also update in components:
- Search for: `#F6A019` (orange)
- Search for: `#27B755` (green)
- Replace with your brand colors

### Add New Service

File: `app/components/WhatWeOffer.tsx`

Add to `cards` array:
```typescript
{
  key: "yourservice",
  icon: <YourIcon />,
  title: "Service Name",
  subtitle: "Service Tagline",
  desc: "Description...",
  features: ["Feature 1", "Feature 2"],
  color: "green" // or "orange"
}
```

Update `ServiceModal.tsx` with matching details.

### Modify FAQ

File: `app/components/FAQSection.tsx`

Add to `faqs` array:
```typescript
{
  id: 9,
  question: "Your question?",
  answer: "Your answer..."
}
```

---

## 🔒 Security Checklist

- [ ] Never commit `.env.local` to git
- [ ] Use environment variables for sensitive data
- [ ] Enable CORS properly in production
- [ ] Validate all form inputs server-side
- [ ] Use HTTPS in production
- [ ] Rate limit API endpoints
- [ ] Sanitize user inputs

---

## 📱 Testing Checklist

### Desktop Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet (iPad/Android)

### Functionality Testing
- [ ] Mobile menu opens/closes
- [ ] WhatsApp button works
- [ ] Consultation modal opens/closes
- [ ] Contact form submits
- [ ] Newsletter subscription works
- [ ] All links work
- [ ] Portfolio page loads
- [ ] FAQ accordion works
- [ ] Testimonials carousel navigates
- [ ] Service modals open/close

### Performance Testing
- [ ] Page load speed (<3 seconds)
- [ ] Images load properly
- [ ] No console errors
- [ ] Smooth animations
- [ ] Mobile scroll performance

---

## 🆘 Common Issues & Solutions

### Email Not Sending
**Problem:** Contact form doesn't send emails

**Solutions:**
1. Check `.env.local` exists and has correct values
2. Verify Gmail 2FA is enabled
3. Use app-specific password (not regular password)
4. Check Gmail security settings
5. Test with: https://ethereal.email for development

### Build Errors
**Problem:** `npm run build` fails

**Solutions:**
```bash
# Clear cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
**Problem:** Images show broken icon

**Solutions:**
1. Check image paths are correct
2. Verify images exist in `/public/images/`
3. Check image file extensions
4. Clear browser cache
5. Restart dev server

### Styles Not Applying
**Problem:** Tailwind CSS not working

**Solutions:**
```bash
# Reinstall Tailwind
npm install -D tailwindcss@^4 @tailwindcss/postcss
npm run dev
```

---

## 📞 Support

**Technical Issues:**
- Email: beyondtech@gmail.com
- Phone: +250781274642

**Documentation:**
- Main README: `/README.md`
- This Guide: `/SETUP_GUIDE.md`

---

## ✨ Congratulations!

You've successfully set up Beyond Tech website. Your professional online presence is ready to attract clients and grow your business in Rwanda and beyond! 🇷🇼

**Next Steps:**
1. Test all features thoroughly
2. Add real content and images
3. Deploy to production
4. Share with your network
5. Start getting clients! 🚀
