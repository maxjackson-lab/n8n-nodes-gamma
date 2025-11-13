# CI/CD Setup Guide for @gammatech/n8n-nodes

## What Your CTO is Setting Up

**Automatic publishing to npm via GitHub Actions**

This means:
1. You create a new GitHub release (like v0.1.0)
2. GitHub Actions automatically builds and publishes to npm
3. **No manual `npm publish` needed!**

---

## ✅ What I Created

**File**: `.github/workflows/publish.yml`

This GitHub Actions workflow:
- ✅ Triggers when you create a GitHub release
- ✅ Checks out code
- ✅ Installs dependencies
- ✅ Builds the package
- ✅ Runs linter
- ✅ Publishes to npm with `--access public`

---

## 🔑 What Your CTO Needs to Do

### Step 1: Create npm Token

1. Log into npm (you or CTO)
2. Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
3. Click "Generate New Token"
4. Select "Automation" type
5. Copy the token (starts with `npm_...`)

### Step 2: Add Token to GitHub

1. Go to your GitHub repo: https://github.com/gamma-app/n8n-nodes-gamma
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste the npm token
6. Click **Add secret**

**That's it!** The workflow will use this token to publish.

---

## 🚀 How to Publish (After CI is Set Up)

### Old Way (Manual):
```bash
npm login
npm publish --access public
```

### New Way (Automatic):
1. Update version in `package.json`: `"version": "0.1.1"`
2. Commit and push
3. Go to GitHub → **Releases** → **Create a new release**
4. Tag: `v0.1.1`
5. Title: `v0.1.1`
6. Description: What changed
7. Click **Publish release**
8. **GitHub Actions automatically publishes to npm!** ✅

---

## 📋 Complete Workflow

```
You: Update version in package.json
  ↓
You: Commit and push to GitHub
  ↓
You: Create GitHub release (v0.1.1)
  ↓
GitHub Actions: Builds package
  ↓
GitHub Actions: Runs tests/linter
  ↓
GitHub Actions: Publishes to npm
  ↓
✅ Package live at @gammatech/n8n-nodes
```

---

## 🎯 Benefits

- ✅ No manual npm login needed
- ✅ Automated testing before publish
- ✅ Consistent process
- ✅ Easier for team members
- ✅ Professional development workflow

---

## 📝 Tell Your CTO

> "I've created the GitHub Actions workflow file (`.github/workflows/publish.yml`). Once you add the npm token to GitHub secrets, we can publish automatically by creating releases. This will publish to `@gammatech/n8n-nodes` with public access."

**He needs to**:
1. Add you to @gammatech npm org
2. Generate npm automation token
3. Add `NPM_TOKEN` secret to GitHub repo

**Then you just create releases and it publishes automatically!** 🚀

---

## ✅ Files Created

- `.github/workflows/publish.yml` - CI/CD workflow
- `CI_SETUP_GUIDE.md` - This guide

**Ready for your CTO to set up!**

