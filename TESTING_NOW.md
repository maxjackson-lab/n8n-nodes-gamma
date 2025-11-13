# 🧪 Testing Gamma n8n Node - RIGHT NOW!

**Status**: ✅ n8n is running with your Gamma node installed!

---

## 🎯 Quick Access

**n8n is running at**: http://localhost:5678

Open that URL in your browser to start testing!

---

## 🚀 Step-by-Step Testing Guide

### Step 1: Open n8n
1. Go to: http://localhost:5678
2. Create account or skip setup (for local testing)

### Step 2: Find the Gamma Node
1. Click the **"+"** button to add a node
2. In the search box, type **"Gamma"**
3. You should see the **Gamma** node with the Gamma icon!
4. Click on it to add it to your workflow

### Step 3: Set Up Credentials

#### Get Your Gamma API Key First:
1. Open https://gamma.app in another tab
2. Go to **Settings & Members** → **API**
3. Click **Generate API Key**
4. Copy the key (starts with `sk-gamma-`)

#### Add to n8n:
1. In the Gamma node, click **"Select Credential"**
2. Click **"Create New"** → **"Gamma API"**
3. Paste your API key
4. Click **"Save"**
5. Click **"Test"** to verify (should say "Connection successful")

---

## 🧪 Test Cases (Do These in Order)

### Test 1: Get User Info (Easiest Test)
**Purpose**: Verify authentication works

1. **Resource**: Select **"User"**
2. **Operation**: Select **"Get Me"**  
3. Click **"Execute Node"**

**Expected Result**: ✅
```json
{
  "email": "your@email.com",
  "workspaceName": "Your Workspace"
}
```

**If it fails**: Check your API key is correct

---

### Test 2: List Themes
**Purpose**: Verify GET requests with query parameters work

1. Add a new Gamma node (or change the existing one)
2. **Resource**: Select **"Themes"**
3. **Operation**: Select **"List Themes"**
4. **(Optional)** Add parameter:
   - Click **"Add Field"**
   - **limit**: 5
5. Click **"Execute Node"**

**Expected Result**: ✅
```json
{
  "data": [
    {
      "id": "theme_xxx",
      "name": "Modern Professional",
      "type": "standard"
    },
    ...
  ],
  "hasMore": false
}
```

---

### Test 3: List Folders
**Purpose**: Verify another resource works

1. **Resource**: Select **"Folders"**
2. **Operation**: Select **"List Folders"**
3. Click **"Execute Node"**

**Expected Result**: ✅
```json
{
  "data": [
    {
      "id": "fold_xxx",
      "name": "Marketing"
    },
    ...
  ]
}
```

---

### Test 4: Create Generation (The Big Test!)
**Purpose**: Verify POST requests with complex request bodies work

1. **Resource**: Select **"Generations"**
2. **Operation**: Select **"Create Generation"**
3. Fill in **required fields**:
   - **Input Text**: "Create a presentation about renewable energy"
   - **Text Mode**: Select **"generate"**
4. **(Optional)** Add more fields:
   - Click **"Add Field"**
   - **format**: "presentation"
   - **numCards**: 10
5. Click **"Execute Node"**

**Expected Result**: ✅
```json
{
  "generationId": "abc123xyz"
}
```

**Save this generationId** - you'll need it for the next test!

---

### Test 5: Check Generation Status
**Purpose**: Verify path parameters work

1. **Resource**: Select **"Generations"**
2. **Operation**: Select **"Get Generation Status"**
3. **ID**: Paste the `generationId` from Test 4
4. Click **"Execute Node"**
5. Keep clicking Execute until status changes to "completed"

**Expected Results**:

First few times (while pending):
```json
{
  "generationId": "abc123xyz",
  "status": "pending"
}
```

When completed:
```json
{
  "generationId": "abc123xyz",
  "status": "completed",
  "gammaUrl": "https://gamma.app/docs/...",
  "credits": {
    "deducted": 40,
    "remaining": 960
  }
}
```

**Click the gammaUrl** to see your generated presentation! 🎉

---

## ✅ Success Checklist

After testing, verify:
- [ ] Node appears in n8n search
- [ ] Gamma icon displays correctly
- [ ] Credentials can be created and tested
- [ ] All 4 resources are available (Generations, Themes, Folders, User)
- [ ] User → Get Me works
- [ ] Themes → List Themes works
- [ ] Folders → List Folders works
- [ ] Generations → Create Generation works
- [ ] Generations → Get Generation Status works
- [ ] Generated content is accessible via gammaUrl

---

## 🐛 Troubleshooting

### Node doesn't appear in search
- Stop n8n (Ctrl+C in terminal)
- Check `npm list n8n-nodes-gamma` shows the package
- Restart: `npx n8n start`

### Credentials test fails
- Verify API key starts with `sk-gamma-`
- Check you have Gamma API access enabled
- Try generating a new API key at gamma.app

### Create Generation fails
- Check "Input Text" and "Text Mode" are filled (required)
- Verify your account has credits remaining
- Check error message for validation issues

### Status polling stuck on "pending"
- Wait 30-60 seconds - generations take time
- Click Execute again
- Check Gamma app to see if generation completed there

---

## 🎨 Advanced Testing (Optional)

### Test 6: Create from Template
1. First create a single-page Gamma at gamma.app
2. Copy its file ID from the URL (the part after `/docs/`)
3. In n8n:
   - **Resource**: Generations
   - **Operation**: Create From Template Generation
   - **Prompt**: "Remake this for students"
   - **Gamma ID**: Paste the file ID
4. Execute and poll status like Test 5

### Test 7: Build a Complete Workflow
Create a workflow that:
1. Trigger (Manual or Schedule)
2. Gamma: Create Generation
3. Wait node (30 seconds)
4. Gamma: Get Status (loop until complete)
5. Send notification with gammaUrl

---

## 📊 What You're Testing

Each test verifies different node capabilities:

| Test | Verifies |
|------|----------|
| Get Me | Authentication, GET requests |
| List Themes | Query parameters, pagination |
| List Folders | Multiple resources work |
| Create Generation | POST requests, request bodies |
| Get Status | Path parameters, polling |

---

## 🎉 After Testing

If everything works:
1. ✅ The node is production-ready!
2. 📦 Ready to publish to npm
3. 🚀 Can be used by the n8n community
4. ⭐ Consider submitting for verification

---

## 📝 Report Issues

If you find any problems:
1. Note which test failed
2. Copy the error message
3. Check the browser console for details
4. Document in BUILD_SUMMARY.md

---

## 🛑 Stopping n8n

When done testing:
```bash
# Find the process
ps aux | grep n8n

# Kill it (use the PID number)
kill <PID>

# Or just close the terminal
```

---

**Happy Testing! Your Gamma integration is live! 🎊**

Open http://localhost:5678 and start building workflows!

