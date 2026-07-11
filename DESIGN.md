---
name: Porteña Heritage System
colors:
  surface: '#fff9f0'
  surface-dim: '#dfd9d1'
  surface-bright: '#fff9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3ea'
  surface-container: '#f3ede4'
  surface-container-high: '#ede7df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1b16'
  on-surface-variant: '#5b403c'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f6f0e7'
  outline: '#8f706b'
  outline-variant: '#e4beb8'
  surface-tint: '#b91e14'
  primary: '#a10605'
  on-primary: '#ffffff'
  primary-container: '#c5281c'
  on-primary-container: '#ffdfda'
  inverse-primary: '#ffb4a8'
  secondary: '#6f5d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd828'
  on-secondary-container: '#705e00'
  tertiary: '#0d5c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d770b'
  on-tertiary-container: '#a0fc84'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930002'
  secondary-fixed: '#ffe16a'
  secondary-fixed-dim: '#e8c404'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#9cf981'
  tertiary-fixed-dim: '#81dc68'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#0b5300'
  background: '#fff9f0'
  on-background: '#1d1b16'
  surface-variant: '#e7e2d9'
typography:
  display-lg:
    fontFamily: Domine
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Domine
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Domine
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Domine
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system captures the soul of a traditional Buenos Aires pizzeria—specifically the "Porteña" essence found in the heart of Palermo. The brand personality is warm, nostalgic, and deeply communal, evoking the sensory experience of a wood-fired oven, the dusting of flour on a prep table, and the vibrant splash of fresh herbs.

The aesthetic direction is **Refined Rustic**. It blends the bold, authoritative visual language of historic Italian-Argentine signage with modern UX sensibilities. We use a "tactile" approach where digital surfaces mimic physical materials—cream-colored paper, fresh basil-green accents, and vibrant tomato-red highlights. The goal is to make the user feel the "appetite appeal" through color and texture while maintaining a premium, organized service experience.

## Colors

The palette is rooted in the essential ingredients of the craft:
- **Tomato Red (#C5281C):** Our primary action color. Used for buttons, notifications, and key highlights to stimulate appetite and urgency.
- **Mozzarella Yellow (#F9D423):** A secondary supporting color used for ratings, special offers, and secondary call-to-actions.
- **Fresh Basil (#288016):** Our tertiary color used for highlights, organic ingredient markers, and subtle decorative accents to provide a fresh, grounded contrast.
- **Soft Cream (#FFF9F0):** The canvas for the design system. It replaces pure white to reduce eye strain and provide a "flour-dusted" or "parchment" feel.
- **Black (#1A1A1A):** Used sparingly for high-impact typography and iconography to ensure legibility.

## Typography

This design system utilizes a high-contrast typographic pairing to bridge the gap between "Old World" tradition and "New World" functionality.

**Domine** is used for all headlines and display text. Its sturdy, traditional serif structure reflects the authoritative feel of vintage pizzeria menus and Buenos Aires "Fileteado" style without being overly decorative. It conveys heritage and quality.

**Work Sans** serves as the functional workhorse. Its neutral, professional, and grounded character ensures that menus, prices, and ingredient lists remain legible and clear across all devices. 

For high-level navigation and price tags, we use `label-bold` with increased letter-spacing and uppercase styling to mimic traditional stamp or chalkboard lettering.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is centered within a 1200px container on desktop, while margins and gutters expand fluently on smaller screens to maintain a cozy, packed feel—reminiscent of a crowded pizzeria table.

- **Grid:** A 12-column grid is used for desktop, collapsing to 4 columns for mobile.
- **Rhythm:** We use a strict 8px base unit. Larger sections are separated by `lg` (48px) or `xl` (80px) vertical spacing to allow the "Cream" background to act as negative space, preventing the design from feeling cluttered.
- **Mobile:** On mobile, horizontal margins are reduced to 16px to maximize real estate for appetizing product photography.

## Elevation & Depth

To achieve a "premium rustic" feel, this design system avoids harsh, artificial shadows. Instead, it uses **Tonal Layering** and **Organic Depth**:

1.  **Base Layer:** The Soft Cream (#FFF9F0) background acts as the primary surface.
2.  **Product Cards:** Use a very subtle, low-opacity shadow with a hint of the **Fresh Basil** tint (`rgba(40, 128, 22, 0.08)`) to make them appear slightly lifted off the table, like a wooden serving board.
3.  **Floating Elements:** Modals and bottom sheets use a more pronounced, diffused shadow with a neutral dark tint to maintain focus and warmth.
4.  **Insets:** Input fields and secondary containers use a 1px solid border in a darker cream or muted basil shade rather than shadows, maintaining a "flat but tactile" look.

## Shapes

The shape language is **Soft (0.25rem / 4px base)**. While the brand is traditional, we avoid sharp 90-degree corners to keep the UI friendly and "organic," like hand-stretched dough.

- **Buttons & Inputs:** Use a 4px (Soft) radius to maintain a professional, sturdy appearance.
- **Product Images:** Can use 8px (Large) radius to feel more modern and contained.
- **Special Highlights:** Circular "badges" or "seals" (100% radius) are used for "New" or "Best Seller" labels to mimic wax seals or traditional stickers.

## Components

### Buttons
Primary buttons are solid **Tomato Red** with white text, utilizing a bold weight of `workSans`. Secondary buttons use a **Basil Green** outline with `label-bold` styling. All buttons should have a subtle hover state that slightly darkens the background color.

### Cards (Menu Items)
Cards are the heart of the system. They feature a top-aligned high-resolution image, followed by a `headline-md` title and `body-md` description. The price is always displayed in `label-bold` using the **Tomato Red** color to ensure it stands out.

### Inputs & Selects
Form fields use the **Soft Cream** background but with a 1px border in **Basil Green** (low opacity). Focused states transition the border to solid **Tomato Red**.

### Chips & Tags
Used for dietary requirements (e.g., "Veggie", "Gluten-Free"). These use a light tint of the **Fresh Basil** with dark text to remain visible but secondary to the main action.

### Traditional Accents
Include a "Hand-drawn" divider component—a subtle, charcoal-like line—to separate sections of the menu, reinforcing the artisanal, handmade nature of the product.