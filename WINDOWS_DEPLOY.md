# Windows Deployment Guide - Step by Step

## Prerequisites Check ✓
- Git installed ✓
- Node v20.10.0 ✓
- GitHub account (nse4real) ✓
- SSH keys configured ✓

---

## STEP 1: Download Portfolio Files

You have the portfolio in `/mnt/user-data/outputs/portfolio` from Claude.
You need to download this to your Windows machine.

**Location to save:** `C:\Users\nsena\portfolio`

---

## STEP 2: Open Terminal & Navigate

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Run these commands:

```cmd
cd C:\Users\nsena
```

**Checkpoint:** You should see `C:\Users\nsena>` in your terminal.

---

## STEP 3: Verify Portfolio Files

After downloading the portfolio folder, verify it's there:

```cmd
dir portfolio
```

**You should see:**
- pages (folder)
- package.json
- next.config.js
- README.md
- .gitignore

**If these files are missing, STOP.** The download didn't work correctly.

---

## STEP 4: Install Dependencies

```cmd
cd portfolio
npm install
```

**What this does:** Downloads Next.js and React libraries.

**Expected output:** You'll see a progress bar, then "added X packages".

**Time:** 30-60 seconds depending on internet speed.

**Checkpoint:** When done, you should see a `node_modules` folder appear.

```cmd
dir
```

Look for `node_modules` in the list.

---

## STEP 5: Test Locally (Optional but Recommended)

```cmd
npm run dev
```

**What this does:** Starts a local server so you can preview the site.

**Expected output:** 
```
- Local:        http://localhost:3000
```

**Action:** 
1. Open browser
2. Go to `http://localhost:3000`
3. You should see your portfolio with dark theme

**Problems?**
- If port 3000 is busy, it'll ask to use 3001
- If you see errors, we need to fix them before deploying

**When satisfied:** Press `Ctrl + C` in terminal to stop the server.

---

## STEP 6: Initialize Git Repository

```cmd
git init
```

**What this does:** Creates a local Git repository in your portfolio folder.

**Expected output:** `Initialized empty Git repository in C:/Users/nsena/portfolio/.git/`

---

## STEP 7: Add All Files to Git

```cmd
git add .
```

**What this does:** Stages all files for commit (. means "everything").

**No output is normal.** It's working silently.

**Verify it worked:**
```cmd
git status
```

**You should see:** Green text listing all your files ready to commit.

---

## STEP 8: Create First Commit

```cmd
git commit -m "Initial portfolio deployment"
```

**What this does:** Saves a snapshot of all files with a message.

**Expected output:** Something like:
```
[main (root-commit) abc1234] Initial portfolio deployment
 X files changed, Y insertions(+)
 create mode 100644 package.json
 ...
```

---

## STEP 9: Set Default Branch to Main

```cmd
git branch -M main
```

**What this does:** Renames the branch from "master" to "main" (GitHub's standard).

**No output is normal.**

---

## STEP 10: Create GitHub Repository

**In your browser:**

1. Go to `https://github.com/new`
2. Repository name: `portfolio` (or whatever you want)
3. Description: "Personal portfolio website"
4. Keep it **Public** (required for free Vercel hosting)
5. Do NOT initialize with README (we already have one)
6. Click **"Create repository"**

**Important:** After creating, GitHub shows you setup instructions. IGNORE those. We'll use our own commands.

**Copy this URL:** `https://github.com/nse4real/portfolio.git`

(Replace "portfolio" with whatever name you chose)

---

## STEP 11: Connect Local Repository to GitHub

```cmd
git remote add origin git@github.com:nse4real/portfolio.git
```

**Replace "portfolio" with your repo name if different.**

**What this does:** Links your local folder to the GitHub repository.

**No output is normal.**

**Verify:**
```cmd
git remote -v
```

**You should see:**
```
origin  git@github.com:nse4real/portfolio.git (fetch)
origin  git@github.com:nse4real/portfolio.git (push)
```

---

## STEP 12: Push Code to GitHub

```cmd
git push -u origin main
```

**What this does:** Uploads all your files to GitHub.

**Expected output:** Progress bars showing upload, ending with:
```
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**Checkpoint:** Go to `https://github.com/nse4real/portfolio` in browser. You should see all your files there.

**If it asks for passphrase:** That's your SSH key passphrase (you set this when creating SSH keys). Enter it.

---

## STEP 13: Create Vercel Account

**In browser:**

1. Go to `https://vercel.com/signup`
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Complete signup

**Why GitHub signup?** Vercel needs access to your repos to deploy them.

---

## STEP 14: Deploy to Vercel

**In Vercel dashboard:**

1. Click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find `nse4real/portfolio` and click **"Import"**
4. Vercel detects it's Next.js automatically
5. **Leave all settings as default**
6. Click **"Deploy"**

**What happens:** Vercel builds your site and deploys it. Takes 1-2 minutes.

**You'll see:**
- Build logs scrolling
- "Building..." status
- Then: "Congratulations! Your project has been deployed."

---

## STEP 15: Access Your Live Site

**After successful deploy, Vercel shows:**

```
https://portfolio-[random-string].vercel.app
```

**Action:**
1. Click that URL
2. Your portfolio is now LIVE on the internet
3. Test it on your phone too

---

## STEP 16: Optional - Custom Domain

**If you own a domain (like simonnudoh.com):**

1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your domain
4. Update DNS records (Vercel provides exact instructions)

**If you don't have a domain:** The `.vercel.app` URL works fine for job applications.

---

## DONE ✓

Your portfolio is now:
- ✓ Live on the internet
- ✓ Backed up on GitHub
- ✓ Auto-deploys when you push changes

---

## Making Updates Later

**To update your portfolio:**

1. Edit files in `C:\Users\nsena\portfolio`
2. Test locally: `npm run dev`
3. Commit changes:
   ```cmd
   git add .
   git commit -m "Update project descriptions"
   git push
   ```
4. Vercel automatically rebuilds and deploys (takes 1-2 minutes)

---

## Troubleshooting

**"Permission denied (publickey)"**
- SSH key issue. Run: `ssh -T git@github.com`
- Should say "Hi nse4real! You've successfully authenticated"
- If it fails, your SSH keys aren't configured correctly

**"Port 3000 already in use"**
- Another app is using that port
- Kill it or use the suggested alternative port

**Vercel build fails**
- Check build logs in Vercel dashboard
- Usually a typo in code or missing dependency
- Fix locally, test with `npm run dev`, then push again

**Changes not showing on live site**
- Check Vercel dashboard - might still be building
- Hard refresh browser: `Ctrl + Shift + R`
- Clear cache if needed

---

## Next Steps

1. Share portfolio link on LinkedIn
2. Add link to resume
3. Test on different devices
4. Get feedback from peers
5. Iterate based on feedback

