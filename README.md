# Vyom — n8n Template Library
## Setup Guide

### Directory Structure

```
n8n files/
├── index.html          ← Main website (open this in browser)
├── css/
│   └── styles.css
├── js/
│   ├── data.js         ← Template metadata & download URLs
│   └── app.js          ← Search, filter, download logic
└── templates/          ← PUT YOUR JSON FILES HERE
    ├── Gmail_and_Email_Automation/
    │   ├── Auto-label incoming Gmail messages with AI nodes.json
    │   └── ...
    ├── Telegram/
    │   ├── Agentic Telegram AI bot with with LangChain nodes and new tools.json
    │   └── ...
    ├── Google_Drive_and_Google_Sheets/
    ├── WordPress/
    ├── PDF_and_Document_Processing/
    ├── Discord/
    ├── Database_and_Storage/
    ├── devops/
    ├── Airtable/
    ├── Notion/
    ├── Slack/
    ├── OpenAI_and_LLMs/
    ├── WhatsApp/
    ├── Instagram_Twitter_Social_Media/
    ├── Other_Integrations_and_Use_Cases/
    ├── Forms_and_Surveys/
    ├── AI_Research_RAG_and_Data_Analysis/
    ├── HR_and_Recruitment/
    └── Other/
```

### How to Add JSON Files

1. **Clone or download** the source repo:
   ```
   git clone https://github.com/enescingoz/awesome-n8n-templates.git
   ```

2. **Copy all category folders** into `templates/`:
   ```
   xcopy /E /I "path\to\awesome-n8n-templates\*" "templates\"
   ```

3. **Open `index.html`** in your browser — downloads will now work locally!

### Without Local Files

If the `templates/` folder doesn't exist, the download button will still work
by fetching directly from the GitHub raw URL. No setup needed for this mode.

### Customizing

- **Add templates**: Edit `js/data.js` and add entries to the `TEMPLATES` array
- **Change branding**: Update the logo and colors in `css/styles.css` (`:root` variables)
- **Add categories**: Add entries to the `CATEGORIES` array in `js/data.js`

### Tech Stack

- Pure HTML5 + Vanilla CSS + Vanilla JavaScript
- No build tools, no frameworks, no dependencies
- Google Fonts (Outfit + Inter) loaded from CDN
- Works offline once fonts are cached
