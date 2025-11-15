# Sirens Marketing Agency - Design Guidelines

## Design Approach
**Reference-Based**: Premium agency aesthetic inspired by Stripe's sophistication, combined with Apple's minimalist elegance and Linear's modern typography. Deep blue nautical theme with animated liquid effects creating a distinctive brand experience.

## Visual Identity

### Typography
- **Primary Headings**: Inter or Montserrat (700-800 weight) for "Sirens" branding and major headlines
- **Body Text**: Inter (400-500 weight) for all content
- **Accent Text**: Lighter weights (300) for subtle taglines
- **Hierarchy**: Hero headline (4xl-6xl), section headers (3xl-4xl), body (base-lg)

### Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, and 24 for consistent rhythm
- Section padding: py-24 (desktop), py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Container max-width: max-w-7xl with px-8 padding

## Homepage Structure

### 1. Animated Hero Section (Full Viewport)
- **Watery Canvas Animation**: Full-screen WebGL/Canvas implementation with flowing liquid effects (deep blue with lighter cyan particles)
- **Content Emergence**: "Sirens" logo and headline rise through water effect at center
- **Headline**: "Your One-Stop Marketing Agency" - emerges 0.5s after logo
- **Navigation**: Horizontal menu (Services, About, Portfolio, Contact) fades in subtly at top after 1.5s
- **CTA Button**: "Explore Our Services" with blurred background (backdrop-blur-md), appears after 2s
- **Background Loop**: Continuous subtle wave motion with glowing blue particle drift

### 2. Services Grid Section
- **Layout**: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- **Cards**: Each service card with icon, title, description
- **Services**: Brand Strategy, Digital Marketing, Content Creation, Analytics & Insights, Social Media Management, Web Development
- **Interaction**: Subtle hover lift effect (translate-y-1)

### 3. Portfolio Showcase
- **Layout**: Asymmetric masonry grid showcasing client work
- **Images**: 4-6 project thumbnails with overlay text on hover
- **Style**: Clean, modern project cards with client logos

### 4. Trust Indicators
- **Layout**: 2-column split (lg:grid-cols-2)
- **Left**: "Trusted by Industry Leaders" with 8-12 client logos in grid
- **Right**: Key metrics (Projects Delivered, Client Satisfaction, Years Experience) as animated counters

### 5. Team/About Section
- **Layout**: Full-width with centered content (max-w-4xl)
- **Content**: Brief agency story, mission statement
- **Visual**: Team photo or agency workspace image with overlay

### 6. Contact/CTA Section
- **Layout**: Centered content with blurred card overlay
- **Form**: Name, Email, Message fields with submit button
- **Background**: Subtle animated gradient matching hero theme

### 7. Footer
- **Layout**: 4-column grid with Sirens branding, Quick Links, Services list, Contact info
- **Social**: LinkedIn, Twitter, Instagram icons
- **Copyright**: Minimal bottom bar

## Component Library

### Navigation
- Fixed header with backdrop blur on scroll
- Logo left, menu items center/right
- Mobile: Hamburger menu with slide-in drawer

### Buttons
- Primary: Solid with subtle glow effect using box-shadow
- Secondary: Outline with border-2
- All buttons: Rounded-lg, px-8, py-3, transition-all

### Cards
- Service Cards: White/transparent background, rounded-xl, p-8, shadow-lg
- Portfolio Cards: rounded-lg with image, overlay gradient on hover
- Consistent hover: transform scale-105, transition duration-300

### Forms
- Inputs: rounded-lg, border-2, px-4, py-3, focus ring in accent blue
- Labels: text-sm, font-medium, mb-2
- Validation: Inline error messages in red accent

## Images

### Hero Section
**No static hero image** - Canvas/WebGL animation serves as hero visual

### Portfolio Section
**6 Project Images**: Client work samples, case study previews (1200x800px recommended)
- Description: Professional marketing deliverables, brand campaigns, web designs
- Treatment: Slight overlay for text readability

### Team Section
**1 Team Photo**: Agency workspace or team collaboration shot (1600x900px)
- Description: Modern office setting, creative professionals collaborating
- Treatment: Slight blue tint overlay to match brand

## Animations (Selective Use)

### Critical Animations
- **Entrance**: Watery emergence (one-time, 3-4s total duration)
- **Background Loop**: Minimal particle drift, slow wave motion (continuous, subtle)
- **Scroll Reveals**: Fade-up on sections (duration-700, once per section)

### No Animation
- Navigation hover
- Button interactions (use native component states)
- Form interactions
- Card hovers beyond subtle lift

## Accessibility
- Maintain WCAG AA contrast ratios with deep blue backgrounds
- Provide "Skip to content" link post-animation
- Ensure all interactive elements have focus states (ring-2 ring-offset-2)
- Animation respects prefers-reduced-motion

## Responsive Behavior
- Hero: Full viewport on all devices, scale text appropriately
- Grids: 3-col → 2-col → 1-col progression
- Navigation: Horizontal → Hamburger at md breakpoint
- Typography: Scale down by 1-2 sizes on mobile
- Spacing: Reduce py-24 to py-16, px-8 to px-4 on mobile