# UMM AL TARAFA SWEETS & NUTS TR.
### ام الطرافة لتجارة الحلويات والمكسرات
**Chocolates, Fresh Nuts, Dry Fruits, Sweets & Spices**  
*Souq Al Rolla Building, Shop No. 10, Umm Al Tarafa, Rolla, Sharjah, U.A.E*

---

## 🌟 Overview & Recent Upgrades
This codebase has been upgraded in place with a luxury chocolatier aesthetic balanced by authentic Arabian souq warmth:

1. **Brand Facts Preserved Exclusively**:
   - Shop Name (EN & AR): `UMM AL TARAFA SWEETS & NUTS TR.` / `ام الطرافة لتجارة الحلويات والمكسرات`
   - Contact Person: Hussain
   - Shop Phone: `+971 55 537 3788` (`055 537 3788`)
   - Mobile / WhatsApp: `+971 55 817 2666` (`055 817 2666`)
   - Address: `Souq Al Rolla Building, Shop No. 10, Umm Al Tarafa, Rolla, Sharjah, U.A.E`
   - Specialties: Chocolates, nuts, dry fruits, sweets, and spices.

2. **Cleaned Up & Verified**:
   - **Removed**: Reference photos of the shop storefront and business card.
   - **Removed**: All invented claims ("10+ years", "50+ / 100% / 4.9★", "24k gold leaf", "Grade A+", invented origin claims, "oven-roasted daily", "Free tastings", "Sharjah Local Time").
   - **Removed**: Visible "PLACEHOLDER" labels and fake customer reviews. Replaced with an authentic **"Review us on Google"** call-to-action button.
   - **Removed**: Pop-up chat bubbles. Pinned exactly **one floating WhatsApp button**.

3. **Design & Layout Enhancements**:
   - **Balanced Color Palette**: Alternating warm cream (`#FFF4E3`) and deep chocolate (`#2A1008`) sections with caramel (`#C9782B`), shop red (`#C8102E`), and fresh pistachio green (`#8DB255`).
   - **Real-Time 3D Hero Scene**: Custom Three.js canvas featuring floating chocolate bar, chocolate chunks, almonds, and pistachios responding to mouse movement and device tilt, with graceful fallback for `prefers-reduced-motion`.
   - **Shortened Hero Headline**: Focused on 5 words ("Sweet moments. Fresh nuts.") with clean secondary Arabic typography.
   - **Bilingual Marquee Ribbon**: Infinite scrolling ticker highlighting specialties in English and Arabic.
   - **Smooth Scrolling**: Powered by [Lenis](https://github.com/darkroomengineering/lenis).
   - **Interactive "Build Your Own Gift Box"**: Customers tap chocolates, nuts, dates, and sweets into an interactive box with live item counters, celebration confetti, and direct WhatsApp dispatch.
   - **ProductImage Component**: Automatically checks for product imagery and falls back to custom illustrated SVGs with category styling.
   - **Mobile Sticky Bottom Bar**: Pinned Call | WhatsApp | Directions bar for seamless phone access.
   - **Streamlined Navbar**: Exactly 5 clean links (Categories, Gift Box, Why Us, Visit, Contact) + Language Switcher + Order on WhatsApp button.

---

## 🚀 How to Run

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📋 Checklist: What You Still Need to Supply

The website is fully functional, free of placeholder text, and strictly accurate. You only need to supply your specific real-world links and assets when ready:

- [ ] **1. Real Product Photos**:
  - Add your custom product photos in WebP or JPG format into `public/products/<slug>.webp` or `public/assets/products/`.
  - The `ProductImage` component will automatically display them or show the matching illustrated SVG.

- [ ] **2. Opening Hours**:
  - In `src/data/translations.js` (`visit.hoursNote`), currently directs customers to call or message on WhatsApp. When ready, add your exact store schedule (e.g., Saturday–Thursday 9am–11:30pm, Friday 4pm–11:30pm).

- [ ] **3. Social Media Links**:
  - In `src/components/Footer.jsx`, update the Instagram and Facebook anchor links (`href="#visit"`) to your active profiles (e.g., `https://instagram.com/yourhandle`).

- [ ] **4. Google Review Link**:
  - In `src/data/translations.js` (`googleReviewUrl`), update with your official Google Business Profile review link (e.g., `https://g.page/r/.../review`).
