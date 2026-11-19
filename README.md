# CODE-8 | Single-Page Food Ordering Web App

> **Good Food, Great Vibes.**  
> **Our Code-Ate.**  
> **Pick Up & Delivery**

A modern, responsive, mobile-first single-page frontend application for **CODE-8**, built strictly from the brand, menu, and business details in `code8.me` (derived from the official CODE-8 promotional flyer).

---

## 🌟 Brand & Business Details

- **Brand Name:** CODE-8
- **Main Slogan:** Good Food, Great Vibes.
- **Brand Line:** Our Code-Ate.
- **Service Message:** Pick Up & Delivery
- **Direct Phone / WhatsApp:** `08054493605` (International click-to-chat: `+2348054493605`)
- **Official Address:** 8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos.
- **Brand Commitments:**
  1. *Fresh Meals Daily*
  2. *Affordable & Pocket Friendly Meals*
  3. *Quality Food Always*

---

## 🍽️ Complete Menu Items (Faithfully Preserved)

### Main Meals
1. **Jollof Rice** — Classic party-style seasoned rice prepared fresh with rich aromatic savoury spices.
2. **Amala** — Traditional smooth yam flour swallow prepared soft and served hot with savoury soup.
3. **Yam Porridge** — Hearty slow-simmered tender yam pottage cooked in savoury seasoned sauce.
4. **Ewa Agoyin** — Soft slow-cooked mashed beans served with CODE-8 signature spicy Agoyin sauce.

### Snacks
5. **Pie** — Golden-baked flaky pastry stuffed with savoury, seasoned hearty filling.
6. **Donut** — Soft, fluffy golden glazed fried dough ring, perfectly sweet and light.
7. **Popcorn** — Crisp, freshly popped crunchy corn kernels with delicious savoury sweetness.

### Drinks
8. **Yogurt** — Smooth, rich and chilled creamy sweetened drinking yogurt.
9. **Zobo** — Deep ruby-red chilled hibiscus flower drink infused with warming natural spices.

### Special Addition
- **And Much More…** — Preserves the promotional flyer promise for daily specials and inquiry on WhatsApp.

*Pricing Note:* In accordance with the prompt guidelines, no prices have been invented. Prices and daily availability are confirmed directly through WhatsApp with CODE-8.

---

## 🚀 How to Run the Project

### Option 1: Development Server (Vite + React + TypeScript + Tailwind)
```bash
# In the project directory:
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Production Build
```bash
npm run build
npm run preview
```
The optimized production bundle is in the `dist/` directory.

### Option 3: Instant Standalone (No Node.js Required)
Simply double-click or open `standalone.html` in any browser.

---

## 📋 Final Acceptance Checklist Verification

| # | Requirement | Status | Verification Detail |
|---|---|:---:|---|
| 1 | Single-page webpage application | ✅ PASS | One continuous single-page web app with smooth anchor navigation. |
| 2 | Design reflects CODE-8 flyer | ✅ PASS | Deep forest green (`#0e3822`), bright golden yellow (`#eab308`), warm cream (`#faf7f2`), dark charcoal text. |
| 3 | Brand wording & business details accurate | ✅ PASS | Phone `08054493605`, Address `8thGear Hub, 41 CMD Road, Magodo Secretariat, Lagos.` |
| 4 | Every menu item present | ✅ PASS | All 9 flyer items + "And Much More…" teaser included. |
| 5 | No invented prices or claims | ✅ PASS | Explicitly noted as "Confirmed via WhatsApp"; no fabricated prices or medical claims. |
| 6 | Working page navigation | ✅ PASS | Sticky header links scroll smoothly to Home, Menu, About, Pickup & Delivery, Contact. |
| 7 | Item selection & quantity controls | ✅ PASS | Add to Order, increment/decrement stepper, and remove item functionality. |
| 8 | Order summary panel | ✅ PASS | Order tray slide-over drawer shows item count, live quantities, and details. |
| 9 | Pickup & delivery selection | ✅ PASS | Toggle buttons between Self Pickup and Doorstep Delivery. |
| 10| Delivery address requested | ✅ PASS | Delivery address input appears and is validated when delivery is chosen. |
| 11| Formatted WhatsApp draft message | ✅ PASS | Compiles formatted order and opens `https://wa.me/2348054493605?text=...` |
| 12| Working telephone link | ✅ PASS | `tel:08054493605` opens phone dialer. |
| 13| Responsive & Accessible | ✅ PASS | Mobile hamburger menu, mobile floating tray bar, keyboard focus, semantic HTML. |
| 14| Frontend-only scope | ✅ PASS | 100% client-side state; no backend, DB, admin dashboard, or real payment processor. |
| 15| Honest order fulfillment flow | ✅ PASS | Clearly informs the user they review and send the pre-filled message themselves in WhatsApp. |

---

## 🛠️ Technology Stack
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom CODE-8 brand theme palette
- **Icons:** Lucide React
- **Build Tool:** Vite 6
- **Architecture:** Modular components with strict TypeScript types
