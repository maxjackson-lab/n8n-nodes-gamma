# Gamma n8n Node - Example Workflows

These are ready-to-import workflows demonstrating common Gamma automation patterns.

---

## 🔄 auto-polling-workflow.json

**Auto-polling workflow that waits for generation to complete**

### What it does:
1. Creates a Gamma generation
2. Automatically polls every 30 seconds
3. Loops until status = "completed"
4. Outputs the gammaUrl when done

### How to use:
1. In n8n, click **Workflows** → **Import from File**
2. Select `auto-polling-workflow.json`
3. Add your Gamma API credential
4. Click **Execute Workflow**
5. It will automatically poll until complete!

### Why this is better:
- ✅ No manual clicking "Execute" repeatedly
- ✅ Automatic retry every 30 seconds
- ✅ Stops when completed
- ✅ Better user experience

---

## 📋 Workflow Pattern

```
Manual Trigger
    ↓
Gamma: Create Generation
    ↓
Wait 30 seconds
    ↓
Gamma: Check Status ←──────┐
    ↓                      │
Is Completed?              │
    ↓                      │
  YES → ✅ Done!           │
    ↓                      │
   NO → Wait 30s ──────────┘
```

---

## 🎯 Use This Pattern

**Recommended for all async operations:**
- Creating presentations
- Creating documents
- Exporting to PDF/PPTX
- Any operation that returns a generationId

**Users will love it** because they don't have to manually poll!

---

## 🚀 Next Steps

1. Import the workflow
2. Customize the Create Generation parameters
3. Save as template for users
4. Include in your README as a recommended pattern

---

**This solves the polling problem!** Include this in your npm package README.


