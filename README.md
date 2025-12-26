# NSE4REAL Portfolio

Dark mode portfolio website for data engineer and ML specialist.

## Tech Stack

- Next.js 14
- React 18
- Custom CSS (no frameworks)
- Monospace fonts (JetBrains Mono, Space Mono)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Quick Deploy

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Alternative: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts. Your site will be live in seconds.

## Customization

### Update Contact Email

Edit `pages/index.jsx` line with `mailto:` link (search for "hello@nse4real.dev")

### Update Social Links

Edit footer section in `pages/index.jsx`:
- GitHub: Update href to your GitHub profile
- LinkedIn: Update href to your LinkedIn profile

### Add/Remove Projects

Edit the `projects` array in `pages/index.jsx`

### Modify Featured Project

Edit the `featuredProject` object in `pages/index.jsx`

## Design Choices

**Color Scheme:**
- Primary: Navy black (#0a0e1a)
- Accent: Electric cyan (#00d9ff)
- Text: Slate whites

**Typography:**
- Headers: JetBrains Mono (technical, modern)
- Body: Space Mono (readable, monospace aesthetic)

**Layout:**
- Single-page scroll
- Fixed navigation
- Grid system for data engineer aesthetic
- Minimalist with focused attention on projects

## Performance

- CSS-in-JS for scoped styles
- No external frameworks (fast load)
- Optimized fonts from Google Fonts
- Smooth scroll animations with CSS

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Dark mode native
