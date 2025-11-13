# Complete Gamma n8n Node Fields - v1.0 API

## ✅ All Fields Implemented

### Generation → Create (23 fields total)

**Required:**
1. ✅ Input Text
2. ✅ Text Mode (generate/condense/preserve)

**Format & Structure:**
3. ✅ Format (presentation/document/social/webpage)
4. ✅ Number of Cards (1-75)
5. ✅ Card Split (auto/inputTextBreaks)
6. ✅ Card Dimensions (fluid/16x9/4x3/letter/a4/etc.)

**Styling:**
7. ✅ Theme ID
8. ✅ Additional Instructions

**Text Options:**
9. ✅ Text Amount (brief/medium/detailed/extensive)
10. ✅ Tone
11. ✅ Audience
12. ✅ Language (dropdown with 18 common languages)

**Image Options:**
13. ✅ Image Source (aiGenerated/unsplash/giphy/web/etc.)
14. ✅ AI Image Model (11 models with credit costs)
15. ✅ Image Style

**Organization:**
16. ✅ Folder IDs (comma-separated)

**Advanced:**
17. ✅ Header/Footer Config (JSON) - NEW!

**Sharing:**
18. ✅ Workspace Access (noAccess/view/comment/edit/fullAccess)
19. ✅ External Access (noAccess/view/comment/edit)
20. ✅ Enable Search Engine Indexing (boolean)
21. ✅ Email Recipients (comma-separated)
22. ✅ Email Access Level (view/comment/edit/fullAccess)

**Export:**
23. ✅ Export As (none/pdf/pptx)

### Generation → Create from Template
1. ✅ Prompt (required)
2. ✅ Gamma ID (required)
3. ✅ Theme ID (optional)

### Generation → Get Status
1. ✅ Generation ID (required)

### Theme → List
1. ✅ Limit (1-200)
2. ✅ Search Query
3. ✅ After Cursor (pagination)

### Folder → List
1. ✅ Limit (1-200)
2. ✅ Search Query
3. ✅ After Cursor (pagination)

### User → Get Me
- No parameters (just executes)

---

## 📋 Alignment with Official API Docs

Compared against: https://developers.gamma.app/v1.0/update/docs/generate-api-parameters-explained

### Top Level Parameters
- ✅ inputText → Input Text
- ✅ textMode → Text Mode dropdown
- ✅ format → Format dropdown
- ✅ themeId → Theme ID
- ✅ numCards → Number of Cards
- ✅ cardSplit → Card Split dropdown
- ✅ additionalInstructions → Additional Instructions
- ✅ folderIds → Folder IDs (comma-separated, converts to array)
- ✅ exportAs → Export As dropdown

### textOptions
- ✅ amount → Text Amount dropdown
- ✅ tone → Tone
- ✅ audience → Audience
- ✅ language → Language dropdown

### imageOptions
- ✅ source → Image Source dropdown
- ✅ model → AI Image Model dropdown
- ✅ style → Image Style

### cardOptions
- ✅ dimensions → Card Dimensions dropdown
- ✅ headerFooter → Header/Footer Config (JSON with example)

### sharingOptions
- ✅ workspaceAccess → Workspace Access dropdown
- ✅ externalAccess → External Access dropdown
- ✅ enableSearchEngineIndexing → Enable Search Engine Indexing toggle
- ✅ emailOptions.recipients → Email Recipients
- ✅ emailOptions.access → Email Access Level dropdown

---

## ✅ 100% Complete

Every parameter from the v1.0 API documentation is now implemented!

Only v1.0 endpoints - no beta, no v0.2 legacy.


