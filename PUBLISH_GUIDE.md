# Publishing n8n-nodes-gamma to npm

## Step 1: Login to npm

You need to log in to npm first:

```bash
cd "/Users/max.jackson/claude-skills + documentation extracter/n8n-gamma-node"
npm login
```

You'll be prompted for:
- Username
- Password  
- Email
- 2FA code (if enabled)

---

## Step 2: Verify Package is Ready

```bash
# Check package name and version
cat package.json | grep -E "name|version"

# Should show:
# "name": "n8n-nodes-gamma",
# "version": "0.1.0",
```

---

## Step 3: Test Build

```bash
npm run build
```

Should complete with no errors ✅

---

## Step 4: Publish to npm!

```bash
npm publish
```

This will:
1. Run the build
2. Run the linter
3. Upload to npm registry
4. Make it available immediately for self-hosted n8n users!

---

## After Publishing

Your package will be at: **https://www.npmjs.com/package/n8n-nodes-gamma**

Self-hosted n8n users can install it via:
```
Settings → Community Nodes → Install → n8n-nodes-gamma
```

---

## Step 5: Submit for Verification (n8n Cloud)

To make it available on n8n Cloud (much larger user base):

1. Go to: **n8n Creator Portal** (finding URL now...)
2. Sign up/log in
3. Submit package: `n8n-nodes-gamma`
4. Wait for review (~1-2 weeks)

Once verified, it will be available on n8n Cloud!

---

## If npm Login Fails

Create an npm account first:
1. Go to https://www.npmjs.com/signup
2. Create account
3. Verify email
4. Then run `npm login`


