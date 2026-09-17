# KUBERR PLYWOOD public website

## Goal
Build a polished, scalable public business website for product discovery, project solutions, showroom enquiries, contact, and quote requests. Keep it completely separate from any ERP interface while making its content layer ready for a future product API.

## Visual direction
- Use the supplied KUBERR PLYWOOD logo unchanged in the header and footer, with a padded square favicon derived from it.
- Build a bright architectural identity: near-white backgrounds, deep charcoal type, KUBERR red for key actions and active states, and muted blue-gray for structure and secondary details.
- Use Manrope throughout, with strong editorial headings, compact labels, disciplined grids, square-to-subtle corner radii, and generous whitespace.
- Create a consistent set of photorealistic architectural images for every major product and solution category, using warm neutral interiors and realistic material detail.
- Use restrained motion: short reveals, soft image scaling, selector transitions, and subtle hero parallax, all disabled when reduced motion is preferred.

## Shared site framework
- Create a sticky, compact-on-scroll header with full desktop navigation, accessible Products and Solutions menus, mobile drawer, Get a Quote action, and configurable WhatsApp action.
- Create a structured footer with brand summary, route groups, showroom actions, and only configured contact details.
- Add shared containers, headings, buttons, image treatments, breadcrumbs, page introductions, enquiry prompts, and a floating WhatsApp control that becomes inactive with a clear accessible label until configured.
- Replace the generic error and not-found experiences with KUBERR-branded versions.

## Content and data architecture
- Centralize company details, contact placeholders, navigation, audiences, products, and solutions in typed data modules.
- Define API-ready category and product interfaces, then expose catalogue data through a small service layer so an ERP endpoint can replace the local source later.
- Keep unknown address, phone, email, opening hours, WhatsApp number, and map URL in one configuration module; never display fake values.

## Pages
- Home: architectural image-led opening, six product categories, six trust benefits, customer audiences, interactive project solution selector, featured materials, bulk-order feature, showroom feature, and final enquiry prompt.
- About: business positioning, offering, audiences, retail/bulk support, and dependable project assistance without invented history or claims.
- Products hub plus detail pages for Plywood, Laminates, Hardware, Flush Doors, Furniture Materials, and Interior Materials.
- Solutions hub plus detail pages for Kitchen, Wardrobe, Furniture, Home Interior, and Office & Commercial.
- Bulk Orders: buyer types, requirement planning, project-material workflow, and quote/WhatsApp actions.
- Request a Quote: validated, accessible form with all specified fields and product selection; because no delivery service is configured, submission ends in an honest “ready to send once connected” state.
- Contact: contact options, validated enquiry form, showroom information, and an unconfigured map panel rather than a fabricated location.

## Search, sharing, and accessibility
- Add unique title, description, Open Graph text, canonical path, social card type, and semantic headings to every public page.
- Add LocalBusiness structured data using only known values and conditionally include future contact/location fields when configured.
- Use descriptive image alternatives, keyboard-operable navigation and menus, visible focus states, labelled controls, inline validation, comfortable touch targets, and one main content landmark.
- Lazy-load below-the-fold imagery and keep generated assets appropriately sized.

## Responsive and interaction QA
- Verify navigation, menus, image cropping, grids, forms, focus behavior, and overflow across 320, 375, 390, 768, 1024, 1280, and 1440 pixel widths.
- Exercise every linked page, dropdown, drawer, selector, form state, and configurable contact action.
- Resolve preview, console, and route errors before completion.

## Technical notes
- The existing project uses TanStack Start with React and TypeScript rather than Next.js; retain that project-native framework while implementing the requested behavior and URL structure.
- Use the existing Tailwind and interface component system, Lucide icons, native lightweight transitions, and reusable React components. Avoid adding a large animation dependency when CSS and browser APIs provide the requested effects more efficiently.
- No backend, CRM, map connection, or ERP integration will be claimed or added in this phase; the interfaces and configuration points will be prepared for them.
