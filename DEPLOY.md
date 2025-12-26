# Quick Deployment Guide

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/nse4real/portfolio.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/new
2. Import your `portfolio` repository
3. Vercel auto-detects Next.js settings
4. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

**Done.** Your site is live.

---

## ⚙️ Before You Deploy

### Update These Details

1. **Email** (pages/index.jsx, line ~366)
   - Change: `mailto:hello@nse4real.dev`
   - To: Your actual email

2. **LinkedIn URL** (pages/index.jsx, line ~382)
   - Update to your LinkedIn profile
   - Or remove if not applicable

3. **Repo URLs** 
   - All GitHub links are already set to `github.com/nse4real/[repo-name]`
   - Verify these match your actual repos

---

## 📝 Content Updates

### To Add More Projects

Edit `pages/index.jsx`, find the `projects` array (~line 47), add:

```javascript
{
  id: 'new-project',
  title: 'Project Name',
  description: 'What it does',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  github: 'https://github.com/nse4real/repo-name'
}
```

### To Update Featured Project

Edit the `featuredProject` object (~line 35). Update:
- `title`: Project name
- `description`: Main pitch
- `highlights`: Key technical decisions
- `tags`: Technology/approach tags

---

## 🎨 Design Tweaks

### Colors

Edit in `<style jsx>` section:

```css
--bg-primary: #0a0e1a;      /* Main background */
--accent: #00d9ff;           /* Cyan highlights */
--text-primary: #e2e8f0;     /* Main text */
```

### Fonts

Current: JetBrains Mono + Space Mono

To change, update Google Fonts link in `<Head>` (~line 253)

---

## 🔍 What Recruiters See

**First 5 seconds:**
- "DATA ENGINEER" label
- Bold value prop about real-world constraints
- Clean, technical aesthetic

**Scroll 1: Featured Work**
- Private repo positioned as constraint-engineering showcase
- "Case Study" badge signals depth
- Clear explanation of why it matters

**Scroll 2: Project Grid**
- 9 public repos with descriptions
- GitHub links for verification
- Tags show breadth (ML, NLP, Analytics, Engineering)

**Final impression:**
- Technical competence (design + content)
- Production awareness (constraint focus)
- Clear communication (no fluff)

---

## 🐛 Troubleshooting

### Build fails on Vercel

- Check Node version (should work with 18+)
- Verify package.json is valid
- Check for typos in JSX

### Fonts not loading

- Ensure Google Fonts link is in `<Head>`
- Check network tab for blocked requests

### Links broken

- Verify all `github.com/nse4real/` URLs exist
- Update any renamed repositories

---

## 📊 Performance Notes

- No external CSS frameworks = fast load
- Single-page design = minimal routing
- CSS animations = smooth, GPU-accelerated
- Lighthouse score should be 90+

---

## 🎯 Next Steps After Deploy

1. Test on mobile (especially nav links)
2. Verify all GitHub links work
3. Check email link opens correct client
4. Share link to get feedback
5. Consider adding Google Analytics (optional)

---

**Questions?** Check Next.js docs or Vercel support.
