# Glamour - Modern Makeup Parlour Website

A stunning, fully functional demo website for a professional makeup parlour built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Pages
- **Home**: Hero section with CTA, featured services, testimonials carousel, and animated banner
- **About**: Story of the parlour, mission/vision, team stats
- **Services**: Filterable service grid with pricing cards and hover animations
- **Gallery**: Image gallery with category filters and lightbox preview
- **Staff**: Team member cards with roles, experience, and social links
- **Reviews**: Testimonials carousel and grid with star ratings
- **Contact**: Contact form with validation and map placeholder
- **Booking**: Functional booking form with date/time picker and localStorage persistence
- **Admin Panel**: View and manage all bookings with password protection

### Core Features
✨ **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
🎨 **Smooth Animations** - Framer Motion entrance, scroll, and hover effects
📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
🎯 **Form Validation** - Real-time validation on booking and contact forms
💾 **LocalStorage Booking** - All bookings saved in browser localStorage
🔐 **Admin Panel** - Protected admin dashboard to view and manage bookings (password: `admin123`)
🎨 **Modern Design** - Luxury color palette with gold accents and elegant typography

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide Icons** - Modern icon library
- **React DatePicker** - Date and time selection

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
npm run preview
```

## 🎯 Key Pages

| Page | URL | Features |
|------|-----|----------|
| Home | `/` | Hero, services, testimonials |
| About | `/about` | Story, mission, stats |
| Services | `/services` | Filterable grid, pricing |
| Gallery | `/gallery` | Image gallery, lightbox |
| Staff | `/staff` | Team members, social links |
| Reviews | `/reviews` | Testimonials, ratings |
| Contact | `/contact` | Contact form, map |
| Booking | `/booking` | Booking form, date picker |
| Admin | `/admin` | Dashboard (password: `admin123`) |

## 📁 Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── context/         # Global state (Theme, Booking)
├── hooks/           # Custom hooks
├── data/            # Mock data
├── styles/          # Global CSS
├── utils/           # Utilities
└── App.tsx          # Main app
```

## 🔐 Admin Panel

- **URL**: `/admin`
- **Password**: `admin123`
- Features:
  - View all bookings
  - Filter by status
  - Delete bookings
  - Export as JSON

## 💾 Data Persistence

- Bookings saved to localStorage
- Theme preference saved to localStorage
- Persists across browser sessions
- Cleared when browser cache is cleared

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your colors */ },
  accent: { /* Gold accents */ }
}
```

### Mock Data
Update files in `src/data/`:
- `services.ts` - Services list
- `staff.ts` - Team members
- `testimonials.ts` - Reviews
- `gallery.ts` - Gallery images

## 📱 Responsive Design

- Mobile (375px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🌙 Dark Mode

- Toggle in navbar
- Auto-persists preference
- All components themed

## ⚙️ Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📦 Dependencies

- react@latest
- react-router-dom
- framer-motion
- tailwindcss
- react-datepicker
- lucide-react

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub and connect to Vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### Other Platforms
- Build: `npm run build`
- Serve from: `dist/` folder
- Route all to `index.html` for SPA

## 🐛 Troubleshooting

### Dev server issues
```bash
rm -r node_modules
npm install
npm run dev
```

### Styles not loading
Check that `src/styles/globals.css` is imported in `App.tsx`

### Bookings not saving
Ensure localStorage is enabled in browser settings

## 📝 Notes

- Demo project with mock data only
- No backend API (educational purposes)
- All components are reusable and modular
- Production-ready code structure

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

Built with ❤️ using React and Vite


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
