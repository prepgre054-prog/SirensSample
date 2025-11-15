# Sirens Marketing Agency Website

## Overview
A premium, character-driven marketing agency website featuring sophisticated watery animations, deep blue color scheme, and elegant typography. The site showcases Sirens as a one-stop marketing agency with a distinctive, engaging visual identity.

## Current State
✅ **Production Ready** - All features implemented and tested

## Project Architecture

### Frontend
- **Framework**: React 18 with Vite
- **Routing**: Wouter (client-side routing)
- **State Management**: TanStack Query v5 for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for content emergence and scroll-triggered effects
- **Styling**: Tailwind CSS with Shadcn UI components
- **Typography**: Montserrat (headings) and Inter (body text)

### Backend
- **Server**: Express.js
- **Validation**: Zod schemas
- **Storage**: In-memory Map-based storage (MemStorage)
- **API Routes**:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact-submissions` - Retrieve all submissions

### Key Features

#### 1. Watery Entrance Animation
- Canvas-based particle system with flowing liquid effects
- Deep blue gradient with glowing cyan particles
- Organic wave motion (3-4 second entrance, continuous subtle loop)
- Non-blocking (pointer-events: none) for full UI interactivity

#### 2. Homepage Sections
1. **Hero Section**: Animated emergence with staggered content reveal
2. **Services Grid**: 6 service cards (Brand Strategy, Digital Marketing, Content Creation, Analytics, Social Media, Web Development)
3. **Portfolio Showcase**: 6 project cards with hover overlay effects
4. **Trust Section**: 8 client logos + animated counter metrics
5. **About Section**: Team image with mission and approach content
6. **Contact Form**: Full validation with success/error handling
7. **Footer**: 4-column layout with navigation, services, and social links

#### 3. Responsive Design
- Mobile-first approach with breakpoints at md (768px) and lg (1024px)
- Hamburger menu for mobile navigation
- Grid layouts: 3-col → 2-col → 1-col progression
- Optimized spacing and typography for all screen sizes

#### 4. Accessibility
- Comprehensive data-testid attributes for testing
- Proper semantic HTML structure
- Focus states on all interactive elements
- WCAG AA contrast ratios with deep blue backgrounds
- Descriptive alt text and ARIA labels

## Recent Changes (November 15, 2025)

### Initial Implementation
- Set up complete design system with color palette and typography
- Generated 7 stock images for portfolio and team sections
- Built all React components with proper animations
- Implemented backend API with Zod validation
- Integrated contact form with TanStack Query
- Fixed critical issues:
  - Added pointer-events: none to WaterAnimation canvas
  - Improved error handling to parse JSON error messages
  - Updated react-icons imports to use valid exports (SiX instead of SiTwitter, etc.)

### Testing Results
- E2E tests passed: 34/34 steps successful
- All user journeys verified (navigation, form submission, responsive design)
- Contact form validation and submission working correctly
- All animations and interactions functional

## Technologies Used

### Dependencies
- React 18 + Vite
- TanStack Query v5
- Framer Motion
- React Hook Form + Zod
- Wouter (routing)
- Shadcn UI components
- Lucide React (icons)
- React Icons (brand logos)
- Express.js
- Drizzle ORM + Zod

### Design System
- **Color Palette**: Deep blues (primary: hsl(210 95% 38%)) with glowing cyan accents
- **Typography**: 
  - Headings: Montserrat 700-800
  - Body: Inter 400-500
  - Accents: Inter 300
- **Spacing**: Tailwind units (4, 8, 12, 16, 24) for consistent rhythm
- **Animations**: Selective use - entrance animation, content emergence, scroll reveals

## File Structure

```
client/
├── src/
│   ├── components/
│   │   ├── WaterAnimation.tsx (Canvas animation)
│   │   ├── Navigation.tsx (Fixed header with backdrop blur)
│   │   ├── HeroSection.tsx (Animated hero with CTA)
│   │   ├── ServicesSection.tsx (6-card service grid)
│   │   ├── PortfolioSection.tsx (Project showcase)
│   │   ├── TrustSection.tsx (Client logos + metrics)
│   │   ├── AboutSection.tsx (Team & mission)
│   │   ├── ContactSection.tsx (Form with validation)
│   │   ├── Footer.tsx (Site footer)
│   │   └── ui/ (Shadcn components)
│   ├── pages/
│   │   ├── home.tsx (Main homepage)
│   │   └── not-found.tsx (404 page)
│   ├── lib/
│   │   ├── queryClient.ts (TanStack Query config + apiRequest)
│   │   └── utils.ts (Utility functions)
│   ├── App.tsx (Root component with routing)
│   └── index.css (Tailwind + custom utilities)
├── index.html (SEO meta tags)
└── public/ (Static assets)

server/
├── index.ts (Express server setup)
├── routes.ts (API endpoints)
├── storage.ts (In-memory storage interface)
└── vite.ts (Vite middleware)

shared/
└── schema.ts (Zod schemas + TypeScript types)

attached_assets/
└── stock_images/ (7 portfolio/team images)
```

## Development

### Running the App
The workflow "Start application" runs `npm run dev`:
- Express server on port 5000
- Vite dev server with HMR
- Both frontend and backend on same port

### API Endpoints

#### POST /api/contact
Submit contact form with validation.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services..."
}
```

**Validation Rules:**
- name: min 2 characters
- email: valid email format
- message: min 10 characters

**Success Response (201):**
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in your services...",
  "submittedAt": "2025-11-15T08:00:00.000Z"
}
```

**Error Response (400):**
```json
{
  "error": "Name must be at least 2 characters"
}
```

#### GET /api/contact-submissions
Retrieve all contact submissions.

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "...",
    "submittedAt": "2025-11-15T08:00:00.000Z"
  }
]
```

## User Preferences
- Premium, sophisticated aesthetic
- Distinctive watery animations with deep blue theme
- Elegant, modern typography
- Non-distracting looping animations
- Mobile-responsive design
- Accessibility-first approach

## Future Enhancements
- Add Services detail pages
- Create About page with full team profiles
- Implement Portfolio case studies
- Add CMS integration for content management
- Enhance analytics tracking
- Implement dark/light theme toggle
- Add more advanced water effects (WebGL)
