# Publishing @gammatech/n8n-nodes (Scoped Package)

## ✅ Package Name

**Official**: `@gammatech/n8n-nodes`

This follows n8n's scoped package pattern: `@<org>/n8n-nodes-<name>`

---

## 📋 Requirements for Scoped Packages

### 1. npm Organization Setup

You need access to the `@gammatech` npm organization.

**Check if you have access:**
```bash
npm org ls gammatech
```

**If you don't have access**, someone with admin access needs to add you:
```bash
npm org add gammatech <your-npm-username>
```

---

## 🚀 Publishing Steps

### Step 1: Login to npm

```bash
cd "/Users/max.jackson/claude-skills + documentation extracter/n8n-gamma-node"
npm login
```

### Step 2: Publish (with access setting)

For scoped packages, you need to specify public access:

```bash
npm publish --access public
```

**Note**: The `--access public` flag is required for scoped packages to be publicly installable.

---

## 📦 After Publishing

**npm URL**: https://www.npmjs.com/package/@gammatech/n8n-nodes

**Installation in n8n**:
```
Settings → Community Nodes → Install → @gammatech/n8n-nodes
```

**Install via CLI**:
```bash
npm install @gammatech/n8n-nodes
```

---

## ⚠️ Troubleshooting

### "You do not have permission to publish"

**Solution**: Ask your CTO or npm org admin to add you:
```bash
npm org add gammatech <your-npm-username> --role developer
```

### "Package name too similar to existing package"

This shouldn't happen with `@gammatech/n8n-nodes` but if it does, you can use:
- `@gammatech/n8n-nodes-gamma`
- `@gammatech/n8n-nodes-integration`

---

## ✅ Verification

n8n Creator Portal accepts scoped packages!

**Submit at**: https://creators.n8n.io/nodes  
**Package name**: `@gammatech/n8n-nodes`

---

## 🎯 Benefits of Scoped Package

- ✅ Professional branding (@gammatech namespace)
- ✅ Easier to find ("official Gamma package")
- ✅ Can publish more n8n nodes in future under same namespace
- ✅ Follows enterprise best practices

---

## 📝 Summary

**Package**: `@gammatech/n8n-nodes`  
**Command**: `npm publish --access public`  
**Portal**: https://creators.n8n.io/nodes  

Tell your CTO it's using the @gammatech namespace! ✅

