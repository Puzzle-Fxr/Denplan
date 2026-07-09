# Denplan project rules

- This project is a premium React + TypeScript + Vite storefront for Deplan Trading Enterprise. Preserve the luxury, dark, editorial feel rather than introducing a generic or bright UI.
- Keep the existing visual language: deep black backgrounds, gold accents, warm off-white text, and elegant serif headings. Match the current palette from the existing CSS variables and Tailwind classes.
- Prefer Tailwind utility classes for layout and styling. Reuse existing patterns from the app instead of inventing new component styles unless there is a clear need.
- Use functional React components with hooks and TypeScript. Keep state local unless a shared state flow is clearly required.
- Preserve the current route structure and navigation experience: home, shotgun, ammunition, accessories, about, and contact pages.
- Maintain the business tone of the site. Keep compliance and licensing language accurate and avoid changing legal-copy wording unless explicitly requested.
- Use existing assets from public/images and public/uploads when adding media. Prefer absolute paths like /images/... or /uploads/....
- Keep interactions subtle and polished. Use lucide-react icons and framer-motion transitions for premium motion, but avoid overly flashy animations.
- Follow accessibility best practices: semantic HTML, descriptive alt text, keyboard-friendly controls, visible focus states, and clear form labels.
- Avoid introducing new dependencies, state libraries, or styling systems unless the task truly requires them.
- Prefer small, targeted changes that fit the existing architecture. Avoid large rewrites unless asked.
- Keep TypeScript correctness and lint hygiene in mind: avoid unused imports, unsafe casts, and type errors.
