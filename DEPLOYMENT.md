# Deploying to Vercel - Production Guide

Your portfolio is ready to deploy! Here are two methods to deploy to Vercel:

## Method 1: Using Vercel CLI (Recommended for quick deployment)

### Step 1: Login to Vercel
```bash
vercel login
```
This will open a browser window for you to authenticate with Vercel.

### Step 2: Deploy to Production
```bash
vercel --prod
```

The CLI will:
- Detect your Next.js project automatically
- Configure build settings
- Deploy to production
- Give you a production URL

### Step 3: Future Deployments
After the initial setup, you can simply run:
```bash
vercel --prod
```
Or push to your main branch if you've connected your Git repository (see Method 2).

---

## Method 2: Using Vercel Dashboard (Recommended for continuous deployment)

### Step 1: Go to Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (or create an account)

### Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. Import your GitHub repository: `adiqa/adi-portfolio`
3. Vercel will automatically detect it's a Next.js project

### Step 3: Configure Project
Vercel will auto-detect:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

You can leave these as default - they're already correct!

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete (~1-2 minutes)
3. Your site will be live at: `https://adi-portfolio-[hash].vercel.app`

### Step 5: Custom Domain (Optional)
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `adikadic.com`)

---

## Automatic Deployments

Once connected via Method 2:
- **Every push to `main` branch** → Automatic production deployment
- **Pull requests** → Preview deployments
- **All deployments** are tracked in the Vercel dashboard

---

## Environment Variables (if needed)

If you add environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy (or they'll be added to next deployment)

---

## Build Configuration

Your `next.config.mjs` is already optimized for Vercel:
- ✅ ESLint errors ignored during builds
- ✅ TypeScript errors ignored during builds
- ✅ Images unoptimized (Vercel will handle optimization automatically)

---

## Quick Deploy Now

If you want to deploy right now via CLI:

```bash
# 1. Login (if not already logged in)
vercel login

# 2. Deploy to production
vercel --prod
```

That's it! Your portfolio will be live in production. 🚀


