// Vyom — n8n Template Library Data
// All templates with local download paths (place JSON files in /templates/ folder)

const CATEGORIES = [
  {
    "id": "all",
    "label": "All Templates",
    "icon": "⚡"
  },
  {
    "id": "gmail",
    "label": "Gmail & Email",
    "icon": "✉️"
  },
  {
    "id": "telegram",
    "label": "Telegram",
    "icon": "✈️"
  },
  {
    "id": "google",
    "label": "Google Drive & Sheets",
    "icon": "📁"
  },
  {
    "id": "wordpress",
    "label": "WordPress",
    "icon": "🌐"
  },
  {
    "id": "pdf",
    "label": "PDF & Documents",
    "icon": "📄"
  },
  {
    "id": "discord",
    "label": "Discord",
    "icon": "🎮"
  },
  {
    "id": "database",
    "label": "Database & Storage",
    "icon": "🗄️"
  },
  {
    "id": "devops",
    "label": "DevOps",
    "icon": "⚙️"
  },
  {
    "id": "airtable",
    "label": "Airtable",
    "icon": "🔷"
  },
  {
    "id": "notion",
    "label": "Notion",
    "icon": "📓"
  },
  {
    "id": "slack",
    "label": "Slack",
    "icon": "💬"
  },
  {
    "id": "openai",
    "label": "OpenAI & LLMs",
    "icon": "🧠"
  },
  {
    "id": "whatsapp",
    "label": "WhatsApp",
    "icon": "📱"
  },
  {
    "id": "social",
    "label": "Social Media",
    "icon": "📸"
  },
  {
    "id": "integrations",
    "label": "Other Integrations",
    "icon": "🔗"
  },
  {
    "id": "forms",
    "label": "Forms & Surveys",
    "icon": "📋"
  },
  {
    "id": "rag",
    "label": "AI Research & RAG",
    "icon": "🔬"
  },
  {
    "id": "other",
    "label": "Other",
    "icon": "🎯"
  }
];

const DEPARTMENTS = [
  "All",
  "Ops",
  "Sales",
  "Support",
  "Marketing",
  "Security",
  "Engineering",
  "HR",
  "Executive"
];

const TEMPLATES = [
  {
    id: "gmail-01",
    title: "Auto-label incoming Gmail messages with AI nodes",
    description: "Automatically labels incoming Gmail messages using AI. The workflow retrieves message content, suggests labels like Partnership or Inquiry, and assigns them for better organization.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Gmail","Ops"],
    file: "Gmail_and_Email_Automation/Auto-label incoming Gmail messages with AI nodes.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Auto-label%20incoming%20Gmail%20messages%20with%20AI%20nodes.json"
  },
  {
    id: "gmail-02",
    title: "Basic Automatic Gmail Email Labelling with OpenAI and Gmail API",
    description: "Uses OpenAI and Gmail API to trigger on new emails, analyze content, and assign or create labels automatically. Helps categorize emails efficiently using AI.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","OpenAI","Gmail","Email","Ops"],
    file: "Gmail_and_Email_Automation/Basic Automatic Gmail Email Labelling with OpenAI and Gmail API.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Basic%20Automatic%20Gmail%20Email%20Labelling%20with%20OpenAI%20and%20Gmail%20API.json"
  },
  {
    id: "gmail-03",
    title: "Compose reply draft in Gmail with OpenAI Assistant",
    description: "Generates draft replies in Gmail using OpenAI. Triggers on new emails, extracts content, and creates a suggested reply draft to streamline responses.",
    category: "gmail",
    department: "Executive",
    tags: ["Automation","OpenAI","Gmail","Email","Executive"],
    file: "Gmail_and_Email_Automation/Compose reply draft in Gmail with OpenAI Assistant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Compose%20reply%20draft%20in%20Gmail%20with%20OpenAI%20Assistant.json"
  },
  {
    id: "gmail-04",
    title: "Analyze & Sort Suspicious Email Contents with ChatGPT",
    description: "Analyzes suspicious emails using ChatGPT, classifies them, and can generate screenshots for review. Helps identify and sort potentially dangerous emails.",
    category: "gmail",
    department: "Security",
    tags: ["Automation","Email","Security"],
    file: "Gmail_and_Email_Automation/Analyze & Sort Suspicious Email Contents with ChatGPT.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Analyze%20&%20Sort%20Suspicious%20Email%20Contents%20with%20ChatGPT.json"
  },
  {
    id: "gmail-05",
    title: "Analyze Suspicious Email Contents with ChatGPT Vision",
    description: "Uses both text and image analysis (ChatGPT Vision) to evaluate suspicious emails. Extracts screenshots, analyzes headers and content, and flags phishing attempts.",
    category: "gmail",
    department: "Security",
    tags: ["Automation","Email","Security"],
    file: "Gmail_and_Email_Automation/Analyze Suspicious Email Contents with ChatGPT Vision.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Analyze%20Suspicious%20Email%20Contents%20with%20ChatGPT%20Vision.json"
  },
  {
    id: "gmail-06",
    title: "A Very Simple \"Human in the Loop\" Email Response System Using AI and IMAP",
    description: "Implements a simple workflow for human-in-the-loop email responses. Uses IMAP to fetch emails, summarizes content with AI, and drafts professional replies for review before sending.",
    category: "gmail",
    department: "Support",
    tags: ["Automation","Email","Support"],
    file: "Gmail_and_Email_Automation/A Very Simple _Human in the Loop_ Email Response System Using AI and IMAP.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/A%20Very%20Simple%20_Human%20in%20the%20Loop_%20Email%20Response%20System%20Using%20AI%20and%20IMAP.json"
  },
  {
    id: "gmail-07",
    title: "Auto Categorise Outlook Emails with AI",
    description: "Automatically categorizes Outlook emails using AI models. Moves messages to folders and assigns categories based on content, reducing manual sorting.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Email","Outlook","Ops"],
    file: "Gmail_and_Email_Automation/Auto Categorise Outlook Emails with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Auto%20Categorise%20Outlook%20Emails%20with%20AI.json"
  },
  {
    id: "gmail-08",
    title: "Microsoft Outlook AI Email Assistant with contact support from Monday and Airtable",
    description: "An AI-powered assistant for Outlook that processes emails, sanitizes content, and assigns categories using rules from Airtable. Integrates with Monday.com for contact support.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Airtable","Email","Outlook","Ops"],
    file: "Gmail_and_Email_Automation/Microsoft Outlook AI Email Assistant with contact support from Monday and Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Microsoft%20Outlook%20AI%20Email%20Assistant%20with%20contact%20support%20from%20Monday%20and%20Airtable.json"
  },
  {
    id: "gmail-09",
    title: "📈 Receive Daily Market News from FT.com to your Microsoft outlook inbox",
    description: "Extracts financial news from FT.com and delivers daily updates to your Outlook inbox. Automates content extraction and email delivery for timely market insights.",
    category: "gmail",
    department: "Executive",
    tags: ["Automation","Email","Outlook","Executive"],
    file: "Gmail_and_Email_Automation/📈 Receive Daily Market News from FT.com to your Microsoft outlook inbox.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/📈%20Receive%20Daily%20Market%20News%20from%20FT.com%20to%20your%20Microsoft%20outlook%20inbox.json"
  },
  {
    id: "gmail-10",
    title: "AI Email Auto-Responder with Ollama",
    description: "Classifies incoming emails, filters spam, and drafts context-aware replies using Ollama local AI. No external API keys required.",
    category: "gmail",
    department: "Support",
    tags: ["Automation","Email","Support"],
    file: "Gmail_and_Email_Automation/AI Email Auto-Responder with Ollama.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/AI%20Email%20Auto-Responder%20with%20Ollama.json"
  },
  {
    id: "gmail-11",
    title: "InboxZero Lite - AI Email Classifier",
    description: "AI classifies Gmail emails as urgent, important, info, or spam using OpenAI gpt-4o-mini. Lightweight single-workflow setup with Google Sheets logging.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","OpenAI","Gmail","Google","Sheets"],
    file: "Gmail_and_Email_Automation/InboxZero Lite - AI Email Classifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/InboxZero%20Lite%20-%20AI%20Email%20Classifier.json"
  },
  {
    id: "gmail-12",
    title: "LeadPilot Lite - AI Cold Email Writer",
    description: "AI writes personalized cold emails from a Google Sheets lead list using OpenAI. Generates subject lines and body text tailored to each prospect.",
    category: "gmail",
    department: "Sales",
    tags: ["Automation","OpenAI","Google","Sheets","Email"],
    file: "Gmail_and_Email_Automation/LeadPilot Lite - AI Cold Email Writer.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/LeadPilot%20Lite%20-%20AI%20Cold%20Email%20Writer.json"
  },
  {
    id: "telegram-01",
    title: "Agentic Telegram AI bot with LangChain nodes and new tools",
    description: "An advanced Telegram bot leveraging LangChain and OpenAI for conversational AI. Supports memory, dynamic tool use, and handles incoming events for rich, context-aware chat interactions.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","OpenAI","Telegram","RAG","Support"],
    file: "Telegram/Agentic Telegram AI bot with with LangChain nodes and new tools.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Agentic%20Telegram%20AI%20bot%20with%20with%20LangChain%20nodes%20and%20new%20tools.json"
  },
  {
    id: "telegram-02",
    title: "AI-Powered Children's Arabic Storytelling on Telegram",
    description: "A Telegram bot that uses OpenAI to generate and narrate children's stories in Arabic, making storytelling interactive and educational for young users.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","OpenAI","Telegram","Support"],
    file: "Telegram/AI-Powered Children_s Arabic Storytelling on Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/AI-Powered%20Children_s%20Arabic%20Storytelling%20on%20Telegram.json"
  },
  {
    id: "telegram-03",
    title: "AI-Powered Children's English Storytelling on Telegram with OpenAI",
    description: "Creates and tells children's stories in English using OpenAI to engage young audiences in an interactive way.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","OpenAI","Telegram","Support"],
    file: "Telegram/AI-Powered Children_s English Storytelling on Telegram with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/AI-Powered%20Children_s%20English%20Storytelling%20on%20Telegram%20with%20OpenAI.json"
  },
  {
    id: "telegram-04",
    title: "Automated AI image analysis and response via Telegram",
    description: "Lets users send images to Telegram and receive AI-based analysis and feedback automatically.",
    category: "telegram",
    department: "Ops",
    tags: ["Automation","Telegram","Ops"],
    file: "Telegram/Automated AI image analysis and response via Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Automated%20AI%20image%20analysis%20and%20response%20via%20Telegram.json"
  },
  {
    id: "telegram-05",
    title: "Angie, Personal AI Assistant with Telegram Voice and Text",
    description: "Personal voice & text assistant bot that answers queries, manages tasks, and interacts naturally using AI.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Support"],
    file: "Telegram/Angie, Personal AI Assistant with Telegram Voice and Text.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Angie,%20Personal%20AI%20Assistant%20with%20Telegram%20Voice%20and%20Text.json"
  },
  {
    id: "telegram-06",
    title: "Chat with OpenAI's GPT via a simple Telegram Bot",
    description: "A minimal Telegram bot that forwards user messages to GPT and returns AI-generated replies. Ideal starting point for AI chat.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","OpenAI","Telegram","Support"],
    file: "Telegram/Chat with OpenAIs GPT via a simple Telegram Bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Chat%20with%20OpenAIs%20GPT%20via%20a%20simple%20Telegram%20Bot.json"
  },
  {
    id: "telegram-07",
    title: "Telegram AI bot assistant: ready-made template for voice & text messages",
    description: "Ready-made assistant bot handling both voice and text input, leveraging AI for smart conversational responses in Telegram.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","RAG","Support"],
    file: "Telegram/Telegram AI bot assistant_ ready-made template for voice & text messages.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20bot%20assistant_%20ready-made%20template%20for%20voice%20&%20text%20messages.json"
  },
  {
    id: "telegram-08",
    title: "Telegram AI Bot: NeurochainAI Text & Image",
    description: "Integrates NeurochainAI API for text and image generation inside Telegram, enabling creative media interactions.",
    category: "telegram",
    department: "Marketing",
    tags: ["Automation","Telegram","Marketing"],
    file: "Telegram/Telegram AI Bot_ NeurochainAI Text & Image - NeurochainAI Basic API Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20Bot_%20NeurochainAI%20Text%20&%20Image%20-%20NeurochainAI%20Basic%20API%20Integration.json"
  },
  {
    id: "telegram-09",
    title: "Telegram AI bot with LangChain nodes",
    description: "Uses LangChain nodes for advanced AI conversations and tool use in Telegram.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Support"],
    file: "Telegram/Telegram AI bot with LangChain nodes.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20bot%20with%20LangChain%20nodes.json"
  },
  {
    id: "telegram-10",
    title: "Telegram AI Chatbot",
    description: "A general-purpose AI chatbot template for Telegram that can be customized for various use cases.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Support"],
    file: "Telegram/Telegram AI Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20Chatbot.json"
  },
  {
    id: "telegram-11",
    title: "Telegram Bot with Supabase memory and OpenAI assistant integration",
    description: "Adds long-term memory with Supabase to a Telegram bot, coupled with OpenAI for rich, context-aware conversations.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","OpenAI","Telegram","Supabase","Support"],
    file: "Telegram/Telegram Bot with Supabase memory and OpenAI assistant integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20Bot%20with%20Supabase%20memory%20and%20OpenAI%20assistant%20integration.json"
  },
  {
    id: "telegram-12",
    title: "Telegram chat with PDF",
    description: "Allows users to upload a PDF to Telegram and chat with its contents using AI-powered summarization and Q&A.",
    category: "telegram",
    department: "Ops",
    tags: ["Automation","Telegram","PDF","Ops"],
    file: "Telegram/Telegram chat with PDF.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20chat%20with%20PDF.json"
  },
  {
    id: "telegram-13",
    title: "🤖 Telegram Messaging Agent for Text_Audio_Images",
    description: "Multi-modal agent that processes text, audio, and images in Telegram chats using AI for responses.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Support"],
    file: "Telegram/🤖 Telegram Messaging Agent for Text_Audio_Images.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/%F0%9F%A4%96%20Telegram%20Messaging%20Agent%20for%20Text_Audio_Images.json"
  },
  {
    id: "telegram-14",
    title: "Telegram to Spotify with OpenAI",
    description: "Lets users request songs or playlists in Telegram and automatically create them in Spotify via OpenAI.",
    category: "telegram",
    department: "Marketing",
    tags: ["Automation","OpenAI","Telegram","Marketing"],
    file: "Telegram/Telegram to Spotify with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20to%20Spotify%20with%20OpenAI.json"
  },
  {
    id: "telegram-15",
    title: "Send a random recipe once a day to Telegram",
    description: "Scheduled workflow that fetches a random recipe daily and posts it to a Telegram chat.",
    category: "telegram",
    department: "Marketing",
    tags: ["Automation","Telegram","Marketing"],
    file: "Telegram/Send a random recipe once a day to Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Send%20a%20random%20recipe%20once%20a%20day%20to%20Telegram.json"
  },
  {
    id: "telegram-16",
    title: "Detect toxic language in Telegram messages",
    description: "Monitors Telegram chats and flags messages containing toxic language using AI moderation.",
    category: "telegram",
    department: "Security",
    tags: ["Automation","Telegram","Security"],
    file: "Telegram/Detect toxic language in Telegram messages.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Detect%20toxic%20language%20in%20Telegram%20messages.json"
  },
  {
    id: "telegram-17",
    title: "Translate Telegram audio messages with AI (55 supported languages)",
    description: "Receives voice messages, transcribes them, and sends back translations in over 50 languages.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Support"],
    file: "Telegram/Translate Telegram audio messages with AI (55 supported languages",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Translate%20Telegram%20audio%20messages%20with%20AI%20(55%20supported%20languages"
  },
  {
    id: "google-01",
    title: "Automated End-to-End Fine-Tuning of OpenAI Models with Google Drive Integration",
    description: "Automates the fine-tuning of OpenAI models by integrating with Google Drive for data input and output, streamlining custom AI model training.",
    category: "google",
    department: "Engineering",
    tags: ["Automation","OpenAI","Google","Drive","Engineering"],
    file: "Google_Drive_and_Google_Sheets/Automated End-to-End Fine-Tuning of OpenAI Models with Google Drive Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Automated%20End-to-End%20Fine-Tuning%20of%20OpenAI%20Models%20with%20Google%20Drive%20Integration.json"
  },
  {
    id: "google-02",
    title: "Automatic Background Removal for Images in Google Drive",
    description: "Automatically removes backgrounds from images stored in Google Drive, preparing them for various uses like product catalogs or marketing materials.",
    category: "google",
    department: "Marketing",
    tags: ["Automation","Google","Drive","Marketing"],
    file: "Google_Drive_and_Google_Sheets/Automatic Background Removal for Images in Google Drive.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Automatic%20Background%20Removal%20for%20Images%20in%20Google%20Drive.json"
  },
  {
    id: "google-03",
    title: "Build an OpenAI Assistant with Google Drive Integration",
    description: "Demonstrates building an OpenAI Assistant that accesses and utilizes files in Google Drive, enabling it to answer questions or perform tasks based on document content.",
    category: "google",
    department: "Support",
    tags: ["Automation","OpenAI","Google","Drive","Support"],
    file: "Google_Drive_and_Google_Sheets/Build an OpenAI Assistant with Google Drive Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Build%20an%20OpenAI%20Assistant%20with%20Google%20Drive%20Integration.json"
  },
  {
    id: "google-04",
    title: "RAG Chatbot for Company Documents using Google Drive and Gemini",
    description: "Creates a Retrieval-Augmented Generation (RAG) chatbot that answers questions based on company documents stored in Google Drive, leveraging Google Gemini.",
    category: "google",
    department: "Support",
    tags: ["Automation","Google","Drive","Gemini","RAG"],
    file: "Google_Drive_and_Google_Sheets/RAG Chatbot for Company Documents using Google Drive and Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/RAG%20Chatbot%20for%20Company%20Documents%20using%20Google%20Drive%20and%20Gemini.json"
  },
  {
    id: "google-05",
    title: "RAG_Context-Aware Chunking: Google Drive to Pinecone via OpenRouter & Gemini",
    description: "Implements context-aware chunking for Google Drive documents, sending them to Pinecone for vector storage and using OpenRouter & Gemini for advanced RAG.",
    category: "google",
    department: "Engineering",
    tags: ["Automation","Google","Drive","Pinecone","Gemini"],
    file: "Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/RAG_Context-Aware%20Chunking%20_%20Google%20Drive%20to%20Pinecone%20via%20OpenRouter%20&%20Gemini.json"
  },
  {
    id: "google-06",
    title: "Summarize the New Documents from Google Drive and Save Summary in Google Sheet",
    description: "Monitors Google Drive for new documents, summarizes their content using AI, and saves these summaries into a Google Sheet for quick overview and analysis.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Google","Drive","Ops"],
    file: "Google_Drive_and_Google_Sheets/Summarize the New Documents from Google Drive and Save Summary in Google Sheet.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Summarize%20the%20New%20Documents%20from%20Google%20Drive%20and%20Save%20Summary%20in%20Google%20Sheet.json"
  },
  {
    id: "google-07",
    title: "Upload to Instagram and Tiktok from Google Drive",
    description: "Automates uploading media from Google Drive directly to Instagram and TikTok, streamlining social media content publishing.",
    category: "google",
    department: "Marketing",
    tags: ["Automation","Google","Drive","Marketing"],
    file: "Google_Drive_and_Google_Sheets/Upload to Instagram and Tiktok from Google Drive.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Upload%20to%20Instagram%20and%20Tiktok%20from%20Google%20Drive.json"
  },
  {
    id: "google-08",
    title: "Author and Publish Blog Posts From Google Sheets",
    description: "Enables authoring blog posts in Google Sheets and automatically publishing them to a content management system, simplifying content creation and publishing.",
    category: "google",
    department: "Marketing",
    tags: ["Automation","Google","Sheets","Marketing"],
    file: "Google_Drive_and_Google_Sheets/Author and Publish Blog Posts From Google Sheets.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Author%20and%20Publish%20Blog%20Posts%20From%20Google%20Sheets.json"
  },
  {
    id: "google-09",
    title: "Chat with a Google Sheet using AI",
    description: "Allows users to interact with and query data within a Google Sheet using natural language via an AI model, making data analysis more accessible.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Google","Ops"],
    file: "Google_Drive_and_Google_Sheets/Chat with a Google Sheet using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Chat%20with%20a%20Google%20Sheet%20using%20AI.json"
  },
  {
    id: "google-10",
    title: "Chat with your event schedule from Google Sheets in Telegram",
    description: "Connects a Google Sheet containing an event schedule to Telegram, allowing users to query their schedule through a Telegram bot.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Telegram","Google","Sheets","Ops"],
    file: "Google_Drive_and_Google_Sheets/Chat with your event schedule from Google Sheets in Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Chat%20with%20your%20event%20schedule%20from%20Google%20Sheets%20in%20Telegram.json"
  },
  {
    id: "google-11",
    title: "Qualify new leads in Google Sheets via OpenAI's GPT-4",
    description: "Uses OpenAI's GPT-4 to analyze and qualify new leads entered into a Google Sheet, helping sales teams prioritize their outreach.",
    category: "google",
    department: "Sales",
    tags: ["Automation","OpenAI","Google","Sheets","Sales"],
    file: "Google_Drive_and_Google_Sheets/Qualify new leads in Google Sheets via OpenAI_s GPT-4.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Qualify%20new%20leads%20in%20Google%20Sheets%20via%20OpenAI_s%20GPT-4.json"
  },
  {
    id: "google-12",
    title: "Screen Applicants With AI, notify HR and save them in a Google Sheet",
    description: "Automates the screening of job applicants using AI, notifies HR of qualified candidates, and saves applicant data into a Google Sheet.",
    category: "google",
    department: "HR",
    tags: ["Automation","Google","HR"],
    file: "Google_Drive_and_Google_Sheets/Screen Applicants With AI, notify HR and save them in a Google Sheet.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Screen%20Applicants%20With%20AI,%20notify%20HR%20and%20save%20them%20in%20a%20Google%20Sheet.json"
  },
  {
    id: "google-13",
    title: "Summarize Google Sheets form feedback via OpenAI's GPT-4",
    description: "Summarizes feedback collected through Google Forms and stored in Google Sheets using OpenAI's GPT-4, providing quick insights from survey responses.",
    category: "google",
    department: "Marketing",
    tags: ["Automation","OpenAI","Google","Sheets","Marketing"],
    file: "Google_Drive_and_Google_Sheets/Summarize Google Sheets form feedback via OpenAI_s GPT-4.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Summarize%20Google%20Sheets%20form%20feedback%20via%20OpenAI_s%20GPT-4.json"
  },
  {
    id: "wordpress-01",
    title: "Auto-Categorize blog posts in wordpress using A.I.",
    description: "This workflow automates the categorization of WordPress blog posts using AI, streamlining content organization and management.",
    category: "wordpress",
    department: "Marketing/Content",
    tags: ["Automation","Wordpress","Marketing/Content"],
    file: "WordPress/Auto-Categorize blog posts in wordpress using A.I..json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/Auto-Categorize%20blog%20posts%20in%20wordpress%20using%20A.I..json"
  },
  {
    id: "wordpress-02",
    title: "Auto-Tag Blog Posts in WordPress with AI",
    description: "This workflow automatically tags WordPress blog posts using AI, improving SEO and content discoverability.",
    category: "wordpress",
    department: "Marketing/Content",
    tags: ["Automation","Wordpress","Marketing/Content"],
    file: "WordPress/Auto-Tag Blog Posts in WordPress with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/Auto-Tag%20Blog%20Posts%20in%20WordPress%20with%20AI.json"
  },
  {
    id: "wordpress-03",
    title: "Automate Blog Creation in Brand Voice with AI",
    description: "This workflow automates the creation of blog posts, ensuring they adhere to a specific brand voice using AI.",
    category: "wordpress",
    department: "Marketing/Content",
    tags: ["Automation","Marketing/Content"],
    file: "WordPress/Automate Blog Creation in Brand Voice with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/Automate%20Blog%20Creation%20in%20Brand%20Voice%20with%20AI.json"
  },
  {
    id: "wordpress-04",
    title: "Automate Content Generator for WordPress with DeepSeek R1",
    description: "This workflow automates content generation for WordPress using the DeepSeek R1 AI model, enabling rapid content creation.",
    category: "wordpress",
    department: "Marketing/Content",
    tags: ["Automation","Wordpress","Deepseek","Marketing/Content"],
    file: "WordPress/Automate Content Generator for WordPress with DeepSeek R1.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/Automate%20Content%20Generator%20for%20WordPress%20with%20DeepSeek%20R1.json"
  },
  {
    id: "wordpress-05",
    title: "WordPress - AI Chatbot to enhance user experience - with Supabase and OpenAI",
    description: "This workflow integrates an AI chatbot into WordPress using Supabase and OpenAI to enhance user experience by providing intelligent interactions.",
    category: "wordpress",
    department: "Customer Support/Marketing",
    tags: ["Automation","OpenAI","Wordpress","Supabase","Customer Support/Marketing"],
    file: "WordPress/WordPress - AI Chatbot to enhance user experience - with Supabase and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/WordPress%20-%20AI%20Chatbot%20to%20enhance%20user%20experience%20-%20with%20Supabase%20and%20OpenAI.json"
  },
  {
    id: "wordpress-06",
    title: "Write a WordPress post with AI (starting from a few keywords)",
    description: "This workflow uses AI to write WordPress posts based on a few keywords, simplifying the content creation process.",
    category: "wordpress",
    department: "Marketing/Content",
    tags: ["Automation","Wordpress","Marketing/Content"],
    file: "WordPress/Write a WordPress post with AI (starting from a few keywords",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/Write%20a%20WordPress%20post%20with%20AI%20(starting%20from%20a%20few%20keywords"
  },
  {
    id: "pdf-01",
    title: "Ask questions about a PDF using AI",
    description: "This workflow fetches a PDF from Google Drive, splits it into chunks, embeds the chunks using OpenAI embeddings, and enables chat interactions with the document content.",
    category: "pdf",
    department: "Customer Support/Knowledge Management",
    tags: ["Automation","OpenAI","Google","Drive","PDF"],
    file: "PDF_and_Document_Processing/Ask questions about a PDF using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Ask%20questions%20about%20a%20PDF%20using%20AI.json"
  },
  {
    id: "pdf-02",
    title: "Breakdown Documents into Study Notes using Templating MistralAI and Qdrant",
    description: "This workflow triggers on new files, processes documents with MistralAI embeddings, and stores data in Qdrant vector store for study note generation.",
    category: "pdf",
    department: "Education/Knowledge Management",
    tags: ["Automation","Education/Knowledge Management"],
    file: "PDF_and_Document_Processing/Breakdown Documents into Study Notes using Templating MistralAI and Qdrant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Breakdown%20Documents%20into%20Study%20Notes%20using%20Templating%20MistralAI%20and%20Qdrant.json"
  },
  {
    id: "pdf-03",
    title: "CV Resume PDF Parsing with Multimodal Vision AI",
    description: "This workflow converts candidate resume PDFs to images, uses a Vision Language Model to assess candidate fit, and includes logic to bypass hidden AI prompts in resumes.",
    category: "pdf",
    department: "HR",
    tags: ["Automation","PDF","HR"],
    file: "PDF_and_Document_Processing/CV Resume PDF Parsing with Multimodal Vision AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/CV%20Resume%20PDF%20Parsing%20with%20Multimodal%20Vision%20AI.json"
  },
  {
    id: "pdf-04",
    title: "Chat with PDF docs using AI (quoting sources)",
    description: "This workflow enables chat interactions with PDF documents, allowing users to ask questions and receive answers with quoted sources from the document.",
    category: "pdf",
    department: "Customer Support/Knowledge Management",
    tags: ["Automation","PDF","Customer Support/Knowledge Management"],
    file: "PDF_and_Document_Processing/Chat with PDF docs using AI (quoting sources",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Chat%20with%20PDF%20docs%20using%20AI%20(quoting%20sources"
  },
  {
    id: "pdf-05",
    title: "Convert URL HTML to Markdown Format and Get Page Links",
    description: "This workflow converts HTML content from a given URL into Markdown format and extracts all page links, useful for content scraping and analysis.",
    category: "pdf",
    department: "Marketing/Content",
    tags: ["Automation","Marketing/Content"],
    file: "PDF_and_Document_Processing/Convert URL HTML to Markdown Format and Get Page Links.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Convert%20URL%20HTML%20to%20Markdown%20Format%20and%20Get%20Page%20Links.json"
  },
  {
    id: "pdf-06",
    title: "ETL pipeline for text processing",
    description: "This workflow implements an ETL pipeline for text processing, extracting data from Twitter, storing it in MongoDB and PostgreSQL, and sending alerts to Slack based on sentiment analysis.",
    category: "pdf",
    department: "Data Analytics/IT",
    tags: ["Automation","Slack","Data Analytics/IT"],
    file: "PDF_and_Document_Processing/ETL pipeline for text processing.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/ETL%20pipeline%20for%20text%20processing.json"
  },
  {
    id: "pdf-07",
    title: "Extract and process information directly from PDF using Claude and Gemini",
    description: "This workflow extracts and processes information directly from PDFs using advanced AI models like Claude and Gemini, enabling intelligent document analysis.",
    category: "pdf",
    department: "Data Extraction/IT",
    tags: ["Automation","Gemini","Claude","PDF","Data Extraction/IT"],
    file: "PDF_and_Document_Processing/Extract and process information directly from PDF using Claude and Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Extract%20and%20process%20information%20directly%20from%20PDF%20using%20Claude%20and%20Gemini.json"
  },
  {
    id: "pdf-08",
    title: "Extract data from resume and create PDF with Gotenberg",
    description: "This workflow extracts structured data from resumes using AI, converts it into HTML, and then generates a well-formatted PDF using Gotenberg.",
    category: "pdf",
    department: "HR",
    tags: ["Automation","PDF","HR"],
    file: "PDF_and_Document_Processing/Extract data from resume and create PDF with Gotenberg.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Extract%20data%20from%20resume%20and%20create%20PDF%20with%20Gotenberg.json"
  },
  {
    id: "pdf-09",
    title: "Extract license plate number from image uploaded via an n8n form",
    description: "This workflow extracts license plate numbers from images uploaded via an n8n form using a Vision Language Model, then displays the extracted information.",
    category: "pdf",
    department: "Operations/Logistics",
    tags: ["Automation","Operations/Logistics"],
    file: "PDF_and_Document_Processing/Extract license plate number from image uploaded via an n8n form.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Extract%20license%20plate%20number%20from%20image%20uploaded%20via%20an%20n8n%20form.json"
  },
  {
    id: "pdf-10",
    title: "Extract text from PDF and image using Vertex AI (Gemini) into CSV",
    description: "This workflow extracts text from PDFs and images using Vertex AI (Gemini), routes based on file type, and converts the extracted data into a CSV format.",
    category: "pdf",
    department: "Data Extraction/IT",
    tags: ["Automation","Gemini","PDF","Data Extraction/IT"],
    file: "PDF_and_Document_Processing/Extract text from PDF and image using Vertex AI (Gemini",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Extract%20text%20from%20PDF%20and%20image%20using%20Vertex%20AI%20(Gemini"
  },
  {
    id: "pdf-11",
    title: "Invoice data extraction with LlamaParse and OpenAI",
    description: "This workflow extracts structured data from invoices using LlamaParse and OpenAI, then processes it with a structured output parser for detailed invoice data extraction.",
    category: "pdf",
    department: "Finance/Admin",
    tags: ["Automation","OpenAI","Finance/Admin"],
    file: "PDF_and_Document_Processing/Invoice data extraction with LlamaParse and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Invoice%20data%20extraction%20with%20LlamaParse%20and%20OpenAI.json"
  },
  {
    id: "discord-01",
    title: "Discord AI-powered bot",
    description: "This workflow creates an AI-powered Discord bot that categorizes user messages (success story, urgent issue, ticket) and routes them to the appropriate department (customer success, IT, customer support).",
    category: "discord",
    department: "Customer Support",
    tags: ["Automation","Discord","Customer Support"],
    file: "Discord/Discord AI-powered bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Discord/Discord%20AI-powered%20bot.json"
  },
  {
    id: "discord-02",
    title: "Send daily translated Calvin and Hobbes Comics to Discord",
    description: "This workflow automates the daily retrieval of Calvin and Hobbes comics, translates the dialogues into English and Korean (or other languages), and posts them to Discord.",
    category: "discord",
    department: "Marketing/Content",
    tags: ["Automation","Discord","Marketing/Content"],
    file: "Discord/Send daily translated Calvin and Hobbes Comics to Discord.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Discord/Send%20daily%20translated%20Calvin%20and%20Hobbes%20Comics%20to%20Discord.json"
  },
  {
    id: "discord-03",
    title: "Share YouTube Videos with AI Summaries on Discord",
    description: "This workflow automatically shares new YouTube videos on Discord along with AI-generated summaries of their content, leveraging caption data.",
    category: "discord",
    department: "Marketing",
    tags: ["Automation","Discord","RAG","Marketing"],
    file: "Discord/Share YouTube Videos with AI Summaries on Discord.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Discord/Share%20YouTube%20Videos%20with%20AI%20Summaries%20on%20Discord.json"
  },
  {
    id: "database-01",
    title: "Chat with Postgresql Database",
    description: "This workflow enables an AI assistant to chat with a PostgreSQL database, allowing users to query and retrieve data using natural language. It supports custom SQL queries and schema introspection.",
    category: "database",
    department: "Data Analytics",
    tags: ["Automation","Data Analytics"],
    file: "Database_and_Storage/Chat with Postgresql Database.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/Chat%20with%20Postgresql%20Database.json"
  },
  {
    id: "database-02",
    title: "Generate SQL queries from schema only - AI-powered",
    description: "This workflow uses AI to generate SQL queries based on a given database schema, making it easier to interact with databases without manual query writing.",
    category: "database",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "Database_and_Storage/Generate SQL queries from schema only - AI-powered.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/Generate%20SQL%20queries%20from%20schema%20only%20-%20AI-powered.json"
  },
  {
    id: "database-03",
    title: "MongoDB AI Agent - Intelligent Movie Recommendations",
    description: "This workflow creates an AI agent that provides intelligent movie recommendations by interacting with a MongoDB database, using aggregation pipelines to fetch relevant movie data.",
    category: "database",
    department: "Data Analytics",
    tags: ["Automation","Data Analytics"],
    file: "Database_and_Storage/MongoDB AI Agent - Intelligent Movie Recommendations.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/MongoDB%20AI%20Agent%20-%20Intelligent%20Movie%20Recommendations.json"
  },
  {
    id: "database-04",
    title: "Supabase Insertion & Upsertion & Retrieval",
    description: "This workflow demonstrates how to perform insertion, upsertion, and retrieval operations with Supabase, specifically for handling vector embeddings and associated metadata.",
    category: "database",
    department: "Engineering",
    tags: ["Automation","Supabase","Engineering"],
    file: "Database_and_Storage/Supabase Insertion & Upsertion & Retrieval.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/Supabase%20Insertion%20&%20Upsertion%20&%20Retrieval.json"
  },
  {
    id: "database-05",
    title: "Talk to your SQLite database with a LangChain AI Agent",
    description: "This workflow allows users to interact with a SQLite database using a LangChain AI agent, enabling natural language queries and data retrieval from the database.",
    category: "database",
    department: "Data Analytics",
    tags: ["Automation","Data Analytics"],
    file: "Database_and_Storage/Talk to your SQLite database with a LangChain AI Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/Talk%20to%20your%20SQLite%20database%20with%20a%20LangChain%20AI%20Agent.json"
  },
  {
    id: "devops-01",
    title: "Linux System Update via Webhook",
    description: "Trigger update & upgrade of your Debian-based server via an authenticated POST request and SSH.",
    category: "devops",
    department: "SSH Tools",
    tags: ["Automation","SSH Tools"],
    file: "devops/linux-update-via-webhook.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/devops/linux-update-via-webhook.json"
  },
  {
    id: "devops-02",
    title: "Docker Compose Controller via Webhook",
    description: "Start or stop Docker Compose services on your server via authenticated HTTP POST request with n8n + SSH.",
    category: "devops",
    department: "SSH Tools",
    tags: ["Automation","SSH Tools"],
    file: "devops/docker-compose-controller.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/devops/docker-compose-controller.json"
  },
  {
    id: "airtable-01",
    title: "AI Agent for project management and meetings with Airtable and Fireflies",
    description: "This workflow uses an AI agent to automate project management tasks and meeting follow-ups by analyzing call transcripts from Fireflies. It creates tasks in Airtable and notifies clients about their tasks.",
    category: "airtable",
    department: "Operations",
    tags: ["Automation","Airtable","Operations"],
    file: "Airtable/AI Agent for project management and meetings with Airtable and Fireflies.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/AI%20Agent%20for%20project%20management%20and%20meetings%20with%20Airtable%20and%20Fireflies.json"
  },
  {
    id: "airtable-02",
    title: "AI Agent to chat with Airtable and analyze data",
    description: "This workflow creates an AI agent that can chat with Airtable, analyze data, and perform queries based on user requests. It can handle aggregation functions and generate graphs/images.",
    category: "airtable",
    department: "Data Analytics",
    tags: ["Automation","Airtable","Data Analytics"],
    file: "Airtable/AI Agent to chat with Airtable and analyze data.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/AI%20Agent%20to%20chat%20with%20Airtable%20and%20analyze%20data.json"
  },
  {
    id: "airtable-03",
    title: "Get Airtable data via AI and Obsidian Notes",
    description: "This workflow retrieves data from Airtable using an AI agent and integrates it with Obsidian Notes, allowing for seamless data access and organization within Obsidian.",
    category: "airtable",
    department: "Productivity",
    tags: ["Automation","Airtable","Productivity"],
    file: "Airtable/Get Airtable data via AI and Obsidian Notes.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/Get%20Airtable%20data%20via%20AI%20and%20Obsidian%20Notes.json"
  },
  {
    id: "airtable-04",
    title: "Handling Job Application Submissions with AI and n8n Forms",
    description: "This workflow automates the handling of job application submissions by extracting information from resumes (PDFs) using AI, parsing it into a structured format, and potentially storing it in Airtable.",
    category: "airtable",
    department: "HR",
    tags: ["Automation","Airtable","PDF","HR"],
    file: "Airtable/Handling Job Application Submissions with AI and n8n Forms.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/Handling%20Job%20Application%20Submissions%20with%20AI%20and%20n8n%20Forms.json"
  },
  {
    id: "airtable-05",
    title: "vAssistant for Hubspot Chat using OpenAi and Airtable",
    description: "This workflow integrates an OpenAI assistant with HubSpot Chat and Airtable to provide automated responses and manage customer interactions. It fetches chat messages, processes them with AI, and can store relevant information in Airtable.",
    category: "airtable",
    department: "Sales",
    tags: ["Automation","OpenAI","Airtable","Sales"],
    file: "Airtable/vAssistant for Hubspot Chat using OpenAi and Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/vAssistant%20for%20Hubspot%20Chat%20using%20OpenAi%20and%20Airtable.json"
  },
  {
    id: "notion-01",
    title: "Add positive feedback messages to a table in Notion",
    description: "Captures positive feedback from Typeform, analyzes sentiment with Google Cloud Natural Language, and adds it to a Notion table, with Slack notifications for high-scoring feedback.",
    category: "notion",
    department: "Support",
    tags: ["Automation","Slack","Notion","Google","Support"],
    file: "Notion/Add positive feedback messages to a table in Notion.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Add%20positive%20feedback%20messages%20to%20a%20table%20in%20Notion.json"
  },
  {
    id: "notion-02",
    title: "Analyse papers from Hugging Face with AI and store them in Notion",
    description: "Automatically fetches and analyzes papers from Hugging Face, extracts key information using AI, and stores the structured data in a Notion database.",
    category: "notion",
    department: "Engineering",
    tags: ["Automation","Notion","Engineering"],
    file: "Notion/Analyse papers from Hugging Face with AI and store them in Notion.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Analyse%20papers%20from%20Hugging%20Face%20with%20AI%20and%20store%20them%20in%20Notion.json"
  },
  {
    id: "notion-03",
    title: "Automate Competitor Research with Exa.ai, Notion and AI Agents",
    description: "Builds a competitor research agent using Exa.ai to find similar companies. AI agents then scour the internet for company overviews, product offerings, and customer reviews, compiling a report into a Notion table.",
    category: "notion",
    department: "Marketing",
    tags: ["Automation","Notion","Marketing"],
    file: "Notion/Automate Competitor Research with Exa.ai, Notion and AI Agents.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Automate%20Competitor%20Research%20with%20Exa.ai,%20Notion%20and%20AI%20Agents.json"
  },
  {
    id: "notion-04",
    title: "Automate LinkedIn Outreach with Notion and OpenAI",
    description: "Automates LinkedIn outreach by fetching daily posts from a Notion database, formatting them with OpenAI for LinkedIn engagement, and then posting them to LinkedIn.",
    category: "notion",
    department: "Marketing",
    tags: ["Automation","OpenAI","Notion","Marketing"],
    file: "Notion/Automate LinkedIn Outreach with Notion and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Automate%20LinkedIn%20Outreach%20with%20Notion%20and%20OpenAI.json"
  },
  {
    id: "notion-05",
    title: "Notion AI Assistant Generator",
    description: "Generates a custom AI Assistant chatbot workflow for a specific Notion database schema, allowing users to chat with their Notion data.",
    category: "notion",
    department: "Engineering",
    tags: ["Automation","Notion","Engineering"],
    file: "Notion/Notion AI Assistant Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Notion%20AI%20Assistant%20Generator.json"
  },
  {
    id: "notion-06",
    title: "Notion knowledge base AI assistant",
    description: "Creates an AI assistant that can search and retrieve information from a Notion knowledge base, providing answers to user queries.",
    category: "notion",
    department: "Support",
    tags: ["Automation","Notion","Support"],
    file: "Notion/Notion knowledge base AI assistant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Notion%20knowledge%20base%20AI%20assistant.json"
  },
  {
    id: "notion-07",
    title: "Notion to Pinecone Vector Store Integration",
    description: "Integrates Notion with Pinecone, allowing Notion pages to be converted into vector embeddings and stored in Pinecone for advanced search and retrieval.",
    category: "notion",
    department: "Engineering",
    tags: ["Automation","Notion","Pinecone","Engineering"],
    file: "Notion/Notion to Pinecone Vector Store Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Notion%20to%20Pinecone%20Vector%20Store%20Integration.json"
  },
  {
    id: "notion-08",
    title: "Store Notion's Pages as Vector Documents into Supabase with OpenAI",
    description: "Automates storing Notion pages as vector documents in a Supabase database, using OpenAI to generate embeddings for the content.",
    category: "notion",
    department: "Engineering",
    tags: ["Automation","OpenAI","Notion","Supabase","Engineering"],
    file: "Notion/Store Notion_s Pages as Vector Documents into Supabase with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Store%20Notion_s%20Pages%20as%20Vector%20Documents%20into%20Supabase%20with%20OpenAI.json"
  },
  {
    id: "notion-09",
    title: "Turn Emails into AI-Enhanced Tasks in Notion (Multi-User Support) with Gmail, Airtable and Softr",
    description: "Transforms emails into AI-enhanced tasks in Notion, supporting multiple users. It integrates with Gmail for email triggers, Airtable for routing, and Softr for a user interface.",
    category: "notion",
    department: "Ops",
    tags: ["Automation","Gmail","Notion","Airtable","Email"],
    file: "Notion/Turn Emails into AI-Enhanced Tasks in Notion (Multi-User Support",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Turn%20Emails%20into%20AI-Enhanced%20Tasks%20in%20Notion%20(Multi-User%20Support"
  },
  {
    id: "notion-10",
    title: "Upsert huge documents in a vector store with Supabase and Notion",
    description: "Manages large documents by splitting them into chunks, generating embeddings, and upserting them into a Supabase vector store, with Notion serving as the document source.",
    category: "notion",
    department: "Engineering",
    tags: ["Automation","Notion","Supabase","Engineering"],
    file: "Notion/Upsert huge documents in a vector store with Supabase and Notion.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Upsert%20huge%20documents%20in%20a%20vector%20store%20with%20Supabase%20and%20Notion.json"
  },
  {
    id: "slack-01",
    title: "AI-Powered Information Monitoring with OpenAI, Google Sheets, Jina AI and Slack",
    description: "Monitors RSS feeds, summarizes articles with OpenAI and Jina AI, classifies them, and sends formatted notifications to Slack, enabling AI-powered information monitoring.",
    category: "slack",
    department: "Marketing",
    tags: ["Automation","OpenAI","Slack","Google","Sheets"],
    file: "Slack/AI-Powered Information Monitoring with OpenAI, Google Sheets, Jina AI and Slack.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/AI-Powered%20Information%20Monitoring%20with%20OpenAI,%20Google%20Sheets,%20Jina%20AI%20and%20Slack.json"
  },
  {
    id: "slack-02",
    title: "Creating a AI Slack Bot with Google Gemini",
    description: "Builds an AI Slack bot using Google Gemini, handling webhooks, integrating an AI agent, managing memory, and responding to Slack messages.",
    category: "slack",
    department: "Engineering",
    tags: ["Automation","Slack","Google","Gemini","Engineering"],
    file: "Slack/Creating a AI Slack Bot with Google Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Creating%20a%20AI%20Slack%20Bot%20with%20Google%20Gemini.json"
  },
  {
    id: "slack-03",
    title: "Customer Support Channel and Ticketing System with Slack and Linear",
    description: "Automates customer support by querying Slack for messages with a ticket emoji, deciding if a new Linear ticket is needed, creating or updating tickets, and notifying Slack.",
    category: "slack",
    department: "Support",
    tags: ["Automation","Slack","Support"],
    file: "Slack/Customer Support Channel and Ticketing System with Slack and Linear.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Customer%20Support%20Channel%20and%20Ticketing%20System%20with%20Slack%20and%20Linear.json"
  },
  {
    id: "slack-04",
    title: "Enhance Security Operations with the Qualys Slack Shortcut Bot!",
    description: "Creates a Slack shortcut bot for Qualys to enhance security operations, allowing users to trigger actions like creating reports or starting vulnerability scans directly from Slack.",
    category: "slack",
    department: "Security",
    tags: ["Automation","Slack","Security"],
    file: "Slack/Enhance Security Operations with the Qualys Slack Shortcut Bot!.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Enhance%20Security%20Operations%20with%20the%20Qualys%20Slack%20Shortcut%20Bot!.json"
  },
  {
    id: "slack-05",
    title: "Enrich Pipedrive's Organization Data with OpenAI GPT-4o & Notify it in Slack",
    description: "Enriches Pipedrive organization data by scraping website content, using OpenAI GPT-4o to generate a summary, and adding it as a note in Pipedrive, then notifying a Slack channel.",
    category: "slack",
    department: "Sales",
    tags: ["Automation","OpenAI","Slack","Drive","Sales"],
    file: "Slack/Enrich Pipedrive_s Organization Data with OpenAI GPT-4o & Notify it in Slack.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Enrich%20Pipedrive_s%20Organization%20Data%20with%20OpenAI%20GPT-4o%20&%20Notify%20it%20in%20Slack.json"
  },
  {
    id: "slack-06",
    title: "IT Ops AI SlackBot Workflow - Chat with your knowledge base",
    description: "Creates an AI Slackbot for IT Operations, enabling users to chat with a knowledge base to retrieve information and get answers directly within Slack.",
    category: "slack",
    department: "IT",
    tags: ["Automation","Slack","IT"],
    file: "Slack/IT Ops AI SlackBot Workflow - Chat with your knowledge base.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/IT%20Ops%20AI%20SlackBot%20Workflow%20-%20Chat%20with%20your%20knowledge%20base.json"
  },
  {
    id: "slack-07",
    title: "Sentiment Analysis Tracking on Support Issues with Linear and Slack",
    description: "Tracks sentiment on support issues by integrating with Linear and Slack, performing sentiment analysis using OpenAI on Linear comments, and notifying relevant Slack channels.",
    category: "slack",
    department: "Support",
    tags: ["Automation","OpenAI","Slack","Support"],
    file: "Slack/Sentiment Analysis Tracking on Support Issues with Linear and Slack.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Sentiment%20Analysis%20Tracking%20on%20Support%20Issues%20with%20Linear%20and%20Slack.json"
  },
  {
    id: "slack-08",
    title: "Slack slash commands AI Chat Bot",
    description: "Implements an AI chatbot accessible via Slack slash commands, processing user commands, interacting with an AI model, and responding within Slack.",
    category: "slack",
    department: "IT",
    tags: ["Automation","Slack","IT"],
    file: "Slack/Slack slash commands AI Chat Bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Slack%20slash%20commands%20AI%20Chat%20Bot.json"
  },
  {
    id: "slack-09",
    title: "Venafi Cloud Slack Cert Bot",
    description: "Provides a Slack bot that interacts with Venafi Cloud for certificate management, allowing users to check certificate status, receive alerts, or request certificate actions via Slack.",
    category: "slack",
    department: "Security",
    tags: ["Automation","Slack","Security"],
    file: "Slack/Venafi Cloud Slack Cert Bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Venafi%20Cloud%20Slack%20Cert%20Bot.json"
  },
  {
    id: "openai-01",
    title: "Advanced AI Demo (Presented at AI Developers #14 meetup)",
    description: "Advanced AI capabilities demo.",
    category: "openai",
    department: "AI/Development",
    tags: ["Automation","AI/Development"],
    file: "OpenAI_and_LLMs/Advanced AI Demo (Presented at AI Developers #14 meetup",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Advanced%20AI%20Demo%20(Presented%20at%20AI%20Developers%20%2314%20meetup"
  },
  {
    id: "openai-02",
    title: "AI agent chat",
    description: "Basic AI chat agent.",
    category: "openai",
    department: "AI/Customer Service",
    tags: ["Automation","AI/Customer Service"],
    file: "OpenAI_and_LLMs/AI agent chat.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20agent%20chat.json"
  },
  {
    id: "openai-03",
    title: "AI agent that can scrape webpages",
    description: "AI agent for web scraping.",
    category: "openai",
    department: "AI/Data Extraction",
    tags: ["Automation","AI/Data Extraction"],
    file: "OpenAI_and_LLMs/AI agent that can scrape webpages.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20agent%20that%20can%20scrape%20webpages.json"
  },
  {
    id: "openai-04",
    title: "AI Crew to Automate Fundamental Stock Analysis - Q&A Workflow",
    description: "Stock analysis automation.",
    category: "openai",
    department: "Finance/AI/Data Analysis",
    tags: ["Automation","Finance/AI/Data Analysis"],
    file: "OpenAI_and_LLMs/AI Crew to Automate Fundamental Stock Analysis - Q&A Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Crew%20to%20Automate%20Fundamental%20Stock%20Analysis%20-%20Q&A%20Workflow.json"
  },
  {
    id: "openai-05",
    title: "AI Customer feedback sentiment analysis",
    description: "Sentiment analysis on customer feedback.",
    category: "openai",
    department: "Customer Service/Marketing/Data Analysis",
    tags: ["Automation","Customer Service/Marketing/Data Analysis"],
    file: "OpenAI_and_LLMs/AI Customer feedback sentiment analysis.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Customer%20feedback%20sentiment%20analysis.json"
  },
  {
    id: "openai-06",
    title: "AI Data Extraction with Dynamic Prompts and Airtable",
    description: "AI-driven data extraction with Airtable integration.",
    category: "openai",
    department: "AI/Data Extraction/Database",
    tags: ["Automation","Airtable","Drive","AI/Data Extraction/Database"],
    file: "OpenAI_and_LLMs/AI Data Extraction with Dynamic Prompts and Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Data%20Extraction%20with%20Dynamic%20Prompts%20and%20Airtable.json"
  },
  {
    id: "openai-07",
    title: "AI Data Extraction with Dynamic Prompts and Baserow",
    description: "AI-driven data extraction with Baserow integration.",
    category: "openai",
    department: "AI/Data Extraction/Database",
    tags: ["Automation","Drive","AI/Data Extraction/Database"],
    file: "OpenAI_and_LLMs/AI Data Extraction with Dynamic Prompts and Baserow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Data%20Extraction%20with%20Dynamic%20Prompts%20and%20Baserow.json"
  },
  {
    id: "openai-08",
    title: "AI-Driven Lead Management and Inquiry Automation with ERPNext & n8n",
    description: "Lead management automation.",
    category: "openai",
    department: "Sales/CRM/AI",
    tags: ["Automation","Drive","Sales/CRM/AI"],
    file: "OpenAI_and_LLMs/AI-Driven Lead Management and Inquiry Automation with ERPNext & n8n.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-Driven%20Lead%20Management%20and%20Inquiry%20Automation%20with%20ERPNext%20&%20n8n.json"
  },
  {
    id: "openai-09",
    title: "AI Fitness Coach Strava Data Analysis and Personalized Training Insights",
    description: "Fitness coaching via Strava data analysis.",
    category: "openai",
    department: "Fitness/AI/Data Analysis",
    tags: ["Automation","Fitness/AI/Data Analysis"],
    file: "OpenAI_and_LLMs/AI Fitness Coach Strava Data Analysis and Personalized Training Insights.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Fitness%20Coach%20Strava%20Data%20Analysis%20and%20Personalized%20Training%20Insights.json"
  },
  {
    id: "openai-10",
    title: "AI-Powered Candidate Shortlisting Automation for ERPNext",
    description: "Candidate shortlisting automation.",
    category: "openai",
    department: "HR/AI/Recruitment",
    tags: ["Automation","HR/AI/Recruitment"],
    file: "OpenAI_and_LLMs/AI-Powered Candidate Shortlisting Automation for ERPNext.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-Powered%20Candidate%20Shortlisting%20Automation%20for%20ERPNext.json"
  },
  {
    id: "openai-11",
    title: "AI-Powered Email Automation for Business: Summarize & Respond with RAG",
    description: "Email automation with summarization and response.",
    category: "openai",
    department: "Business Automation/AI/Communication",
    tags: ["Automation","RAG","Email","Business Automation/AI/Communication"],
    file: "OpenAI_and_LLMs/AI-Powered Email Automation for Business_ Summarize & Respond with RAG.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-Powered%20Email%20Automation%20for%20Business_%20Summarize%20&%20Respond%20with%20RAG.json"
  },
  {
    id: "openai-12",
    title: "AI-Powered RAG Workflow For Stock Earnings Report Analysis",
    description: "Stock earnings report analysis with RAG.",
    category: "openai",
    department: "Finance/AI/Data Analysis",
    tags: ["Automation","RAG","Finance/AI/Data Analysis"],
    file: "OpenAI_and_LLMs/AI-Powered RAG Workflow For Stock Earnings Report Analysis.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-Powered%20RAG%20Workflow%20For%20Stock%20Earnings%20Report%20Analysis.json"
  },
  {
    id: "openai-13",
    title: "AI-Powered Social Media Amplifier",
    description: "Amplifies social media presence using AI.",
    category: "openai",
    department: "Marketing/AI/Social Media",
    tags: ["Automation","Marketing/AI/Social Media"],
    file: "OpenAI_and_LLMs/AI-Powered Social Media Amplifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-Powered%20Social%20Media%20Amplifier.json"
  },
  {
    id: "openai-14",
    title: "AI-powered WooCommerce Support-Agent",
    description: "Creates an AI-powered support agent for WooCommerce stores.",
    category: "openai",
    department: "E-commerce/AI/Customer Service",
    tags: ["Automation","E-commerce/AI/Customer Service"],
    file: "OpenAI_and_LLMs/AI-powered WooCommerce Support-Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-powered%20WooCommerce%20Support-Agent.json"
  },
  {
    id: "openai-15",
    title: "AI-Powered YouTube Video Summarization & Analysis",
    description: "Summarizes and analyzes YouTube videos using AI.",
    category: "openai",
    department: "Content Creation/AI/Data Analysis",
    tags: ["Automation","Content Creation/AI/Data Analysis"],
    file: "OpenAI_and_LLMs/⚡AI-Powered YouTube Video Summarization & Analysis.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%E2%9A%A1AI-Powered%20YouTube%20Video%20Summarization%20&%20Analysis.json"
  },
  {
    id: "openai-16",
    title: "AI: Ask questions about any data source (using the n8n workflow retriever)",
    description: "Allows users to ask questions about various data sources using an n8n workflow retriever.",
    category: "openai",
    department: "AI/Data Analysis/Workflow Automation",
    tags: ["Automation","AI/Data Analysis/Workflow Automation"],
    file: "OpenAI_and_LLMs/AI_ Ask questions about any data source (using the n8n workflow retriever",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI_%20Ask%20questions%20about%20any%20data%20source%20(using%20the%20n8n%20workflow%20retriever"
  },
  {
    id: "openai-17",
    title: "AI: Summarize podcast episode and enhance using Wikipedia",
    description: "Summarizes podcast episodes and enhances the summary with information from Wikipedia using AI.",
    category: "openai",
    department: "Content Creation/AI/Data Analysis",
    tags: ["Automation","Content Creation/AI/Data Analysis"],
    file: "OpenAI_and_LLMs/AI_ Summarize podcast episode and enhance using Wikipedia.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI_%20Summarize%20podcast%20episode%20and%20enhance%20using%20Wikipedia.json"
  },
  {
    id: "openai-18",
    title: "AI Blog Writer Pipeline with Ollama",
    description: "Uses Ollama local AI to research topics, create outlines, draft full blog posts, and edit them. Runs entirely locally with no API keys needed.",
    category: "openai",
    department: "Content Creation/AI",
    tags: ["Automation","Content Creation/AI"],
    file: "OpenAI_and_LLMs/AI Blog Writer Pipeline with Ollama.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Blog%20Writer%20Pipeline%20with%20Ollama.json"
  },
  {
    id: "openai-19",
    title: "SupportFlow Lite - Simple AI Customer Support Chatbot",
    description: "A lightweight AI chatbot that answers customer questions using company info and OpenAI gpt-4o-mini. Easy single-workflow setup with Google Sheets knowledge base.",
    category: "openai",
    department: "Customer Support/AI",
    tags: ["Automation","OpenAI","Google","Sheets","Customer Support/AI"],
    file: "OpenAI_and_LLMs/SupportFlow Lite - Simple AI Customer Support Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/SupportFlow%20Lite%20-%20Simple%20AI%20Customer%20Support%20Chatbot.json"
  },
  {
    id: "whatsapp-01",
    title: "Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp",
    description: "This workflow automates sales meeting preparation using AI and Apify, sending relevant information to WhatsApp.",
    category: "whatsapp",
    department: "Sales/AI/Automation",
    tags: ["Automation","Whatsapp","Sales/AI/Automation"],
    file: "./WhatsApp/Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./WhatsApp/Automate%20Sales%20Meeting%20Prep%20with%20AI%20&%20APIFY%20Sent%20To%20WhatsApp.json"
  },
  {
    id: "whatsapp-02",
    title: "Building Your First WhatsApp Chatbot",
    description: "This workflow guides you through building your first WhatsApp chatbot.",
    category: "whatsapp",
    department: "Customer Service/Development",
    tags: ["Automation","Whatsapp","Customer Service/Development"],
    file: "./WhatsApp/Building Your First WhatsApp Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./WhatsApp/Building%20Your%20First%20WhatsApp%20Chatbot.json"
  },
  {
    id: "whatsapp-03",
    title: "Complete business WhatsApp AI-Powered RAG Chatbot using OpenAI",
    description: "This workflow builds a complete business WhatsApp AI-powered RAG chatbot using OpenAI.",
    category: "whatsapp",
    department: "Customer Service/AI/Development",
    tags: ["Automation","OpenAI","Whatsapp","RAG","Customer Service/AI/Development"],
    file: "./WhatsApp/Complete business WhatsApp AI-Powered RAG Chatbot using OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./WhatsApp/Complete%20business%20WhatsApp%20AI-Powered%20RAG%20Chatbot%20using%20OpenAI.json"
  },
  {
    id: "whatsapp-04",
    title: "Respond to WhatsApp Messages with AI Like a Pro!",
    description: "This workflow enables professional AI-powered responses to WhatsApp messages.",
    category: "whatsapp",
    department: "Customer Service/AI/Communication",
    tags: ["Automation","Whatsapp","Customer Service/AI/Communication"],
    file: "./WhatsApp/Respond to WhatsApp Messages with AI Like a Pro!.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./WhatsApp/Respond%20to%20WhatsApp%20Messages%20with%20AI%20Like%20a%20Pro!.json"
  },
  {
    id: "social-01",
    title: "AI agent for Instagram DM_inbox. Manychat + Open AI integration",
    description: "Integrates Manychat with OpenAI to create an AI agent for managing Instagram direct messages.",
    category: "social",
    department: "Marketing/Customer Service/AI",
    tags: ["Automation","OpenAI","Marketing/Customer Service/AI"],
    file: "Instagram_Twitter_Social_Media/AI agent for Instagram DM_inbox. Manychat + Open AI integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/AI%20agent%20for%20Instagram%20DM_inbox.%20Manychat%20%2B%20Open%20AI%20integration.json"
  },
  {
    id: "social-02",
    title: "Create dynamic Twitter profile banner",
    description: "Automates the creation of dynamic Twitter profile banners.",
    category: "social",
    department: "Marketing/Social Media",
    tags: ["Automation","Marketing/Social Media"],
    file: "Instagram_Twitter_Social_Media/Create dynamic Twitter profile banner.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Create%20dynamic%20Twitter%20profile%20banner.json"
  },
  {
    id: "social-03",
    title: "Generate Instagram Content from Top Trends with AI Image Generation",
    description: "Creates Instagram content by analyzing top trends and generating relevant images using AI.",
    category: "social",
    department: "Marketing/AI/Content",
    tags: ["Automation","Marketing/AI/Content"],
    file: "Instagram_Twitter_Social_Media/Generate Instagram Content from Top Trends with AI Image Generation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Generate%20Instagram%20Content%20from%20Top%20Trends%20with%20AI%20Image%20Generation.json"
  },
  {
    id: "social-04",
    title: "OpenAI-powered tweet generator",
    description: "Generates tweets using OpenAI's language models.",
    category: "social",
    department: "Marketing/Social Media/AI",
    tags: ["Automation","OpenAI","Marketing/Social Media/AI"],
    file: "Instagram_Twitter_Social_Media/OpenAI-powered tweet generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/OpenAI-powered%20tweet%20generator.json"
  },
  {
    id: "social-05",
    title: "Post New YouTube Videos to X",
    description: "Automatically posts new YouTube videos to X (formerly Twitter).",
    category: "social",
    department: "Marketing/Social Media",
    tags: ["Automation","Marketing/Social Media"],
    file: "Instagram_Twitter_Social_Media/Post New YouTube Videos to X.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Post%20New%20YouTube%20Videos%20to%20X.json"
  },
  {
    id: "social-06",
    title: "Reddit AI digest",
    description: "Creates an AI-generated digest of Reddit content.",
    category: "social",
    department: "Marketing/Content/AI",
    tags: ["Automation","Marketing/Content/AI"],
    file: "Instagram_Twitter_Social_Media/Reddit AI digest.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Reddit%20AI%20digest.json"
  },
  {
    id: "social-07",
    title: "Social Media Analysis and Automated Email Generation",
    description: "Analyzes social media data and generates automated email reports.",
    category: "social",
    department: "Marketing/Analytics",
    tags: ["Automation","Email","Marketing/Analytics"],
    file: "Instagram_Twitter_Social_Media/Social Media Analysis and Automated Email Generation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Social%20Media%20Analysis%20and%20Automated%20Email%20Generation.json"
  },
  {
    id: "social-08",
    title: "Speed Up Social Media Banners With BannerBear.com",
    description: "Automates the creation of social media banners using BannerBear.com.",
    category: "social",
    department: "Marketing/Design",
    tags: ["Automation","Marketing/Design"],
    file: "Instagram_Twitter_Social_Media/Speed Up Social Media Banners With BannerBear.com.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Speed%20Up%20Social%20Media%20Banners%20With%20BannerBear.com.json"
  },
  {
    id: "social-09",
    title: "Twitter Virtual AI Influencer",
    description: "Manages a virtual AI influencer's Twitter account.",
    category: "social",
    department: "Marketing/AI",
    tags: ["Automation","Marketing/AI"],
    file: "Instagram_Twitter_Social_Media/Twitter Virtual AI Influencer.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Twitter%20Virtual%20AI%20Influencer.json"
  },
  {
    id: "social-10",
    title: "Update Twitter banner using HTTP request",
    description: "Updates a Twitter banner using HTTP requests.",
    category: "social",
    department: "Marketing/Development",
    tags: ["Automation","Marketing/Development"],
    file: "Instagram_Twitter_Social_Media/Update Twitter banner using HTTP request.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Update%20Twitter%20banner%20using%20HTTP%20request.json"
  },
  {
    id: "social-11",
    title: "AI Social Media Content Generator with Ollama",
    description: "Generates optimized posts for Twitter, LinkedIn, Reddit, and Instagram from a single topic using Ollama local AI with built-in quality review.",
    category: "social",
    department: "Marketing/AI/Content",
    tags: ["Automation","Marketing/AI/Content"],
    file: "Instagram_Twitter_Social_Media/AI Social Media Content Generator with Ollama.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/AI%20Social%20Media%20Content%20Generator%20with%20Ollama.json"
  },
  {
    id: "social-12",
    title: "FlowScribe Lite - AI Content Repurposing (4 Platforms)",
    description: "Converts one blog post into four optimized social media posts for Twitter, LinkedIn, Instagram, and Facebook using OpenAI.",
    category: "social",
    department: "Marketing/Content",
    tags: ["Automation","OpenAI","Marketing/Content"],
    file: "Instagram_Twitter_Social_Media/FlowScribe Lite - AI Content Repurposing 4 Platforms.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/FlowScribe%20Lite%20-%20AI%20Content%20Repurposing%204%20Platforms.json"
  },
  {
    id: "other-01",
    title: "API Schema Extractor",
    description: "Extracts API schemas from web services for documentation or integration purposes.",
    category: "other",
    department: "Development/Integration",
    tags: ["Automation","Development/Integration"],
    file: "Other_Integrations_and_Use_Cases/API Schema Extractor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/API%20Schema%20Extractor.json"
  },
  {
    id: "other-02",
    title: "Analyze feedback and send a message on Mattermost",
    description: "Analyzes user feedback and sends notifications to Mattermost channels.",
    category: "other",
    department: "Support/Communication",
    tags: ["Automation","Support/Communication"],
    file: "Other_Integrations_and_Use_Cases/Analyze feedback and send a message on Mattermost.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Analyze%20feedback%20and%20send%20a%20message%20on%20Mattermost.json"
  },
  {
    id: "other-03",
    title: "Analyze feedback using AWS Comprehend",
    description: "Performs sentiment analysis on feedback using AWS Comprehend and sends results to Mattermost.",
    category: "other",
    department: "Support/AI",
    tags: ["Automation","Support/AI"],
    file: "Other_Integrations_and_Use_Cases/Analyze feedback using AWS Comprehend and send it to a Mattermost channel.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Analyze%20feedback%20using%20AWS%20Comprehend%20and%20send%20it%20to%20a%20Mattermost%20channel.json"
  },
  {
    id: "other-04",
    title: "Automate Pinterest Analysis & AI-Powered Content Suggestions",
    description: "Analyzes Pinterest data and provides AI-powered content suggestions.",
    category: "other",
    department: "Marketing/AI",
    tags: ["Automation","Marketing/AI"],
    file: "Other_Integrations_and_Use_Cases/Automate Pinterest Analysis & AI-Powered Content Suggestions With Pinterest API.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Automate%20Pinterest%20Analysis%20%26%20AI-Powered%20Content%20Suggestions%20With%20Pinterest%20API.json"
  },
  {
    id: "other-05",
    title: "Automate SIEM Alert Enrichment",
    description: "Enriches SIEM alerts with MITRE ATT&CK data and integrates with Zendesk.",
    category: "other",
    department: "Security/IT",
    tags: ["Automation","Security/IT"],
    file: "Other_Integrations_and_Use_Cases/Automate SIEM Alert Enrichment with MITRE ATT&CK, Qdrant & Zendesk in n8n.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Automate%20SIEM%20Alert%20Enrichment%20with%20MITRE%20ATT%26CK,%20Qdrant%20%26%20Zendesk%20in%20n8n.json"
  },
  {
    id: "other-06",
    title: "Automate Screenshots with URLbox & Analyze with AI",
    description: "Takes screenshots of webpages and analyzes them using AI.",
    category: "other",
    department: "Development/Marketing",
    tags: ["Automation","Development/Marketing"],
    file: "Other_Integrations_and_Use_Cases/Automate Screenshots with URLbox & Analyze them with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Automate%20Screenshots%20with%20URLbox%20%26%20Analyze%20them%20with%20AI.json"
  },
  {
    id: "other-07",
    title: "Automate testimonials in Strapi",
    description: "Automates the process of collecting and managing testimonials in Strapi.",
    category: "other",
    department: "Marketing/Content",
    tags: ["Automation","Marketing/Content"],
    file: "Other_Integrations_and_Use_Cases/Automate testimonials in Strapi with n8n.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Automate%20testimonials%20in%20Strapi%20with%20n8n.json"
  },
  {
    id: "other-08",
    title: "Bitrix24 Chatbot Application",
    description: "Example workflow for creating a Bitrix24 chatbot with webhook integration.",
    category: "other",
    department: "Business/Communication",
    tags: ["Automation","Business/Communication"],
    file: "Other_Integrations_and_Use_Cases/Bitrix24 Chatbot Application Workflow example with Webhook Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Bitrix24%20Chatbot%20Application%20Workflow%20example%20with%20Webhook%20Integration.json"
  },
  {
    id: "other-09",
    title: "ChatGPT Automatic Code Review in Gitlab MR",
    description: "Automates code reviews in GitLab merge requests using ChatGPT.",
    category: "other",
    department: "Development/DevOps",
    tags: ["Automation","Development/DevOps"],
    file: "Other_Integrations_and_Use_Cases/ChatGPT Automatic Code Review in Gitlab MR.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/ChatGPT%20Automatic%20Code%20Review%20in%20Gitlab%20MR.json"
  },
  {
    id: "other-10",
    title: "Classify new bugs in Linear with OpenAI's GPT-4",
    description: "Automatically classifies and routes new bug reports in Linear using AI.",
    category: "other",
    department: "Development/QA",
    tags: ["Automation","OpenAI","Development/QA"],
    file: "Other_Integrations_and_Use_Cases/Classify new bugs in Linear with OpenAI_s GPT-4 and move them to the right team.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Classify%20new%20bugs%20in%20Linear%20with%20OpenAI_s%20GPT-4%20and%20move%20them%20to%20the%20right%20team.json"
  },
  {
    id: "other-11",
    title: "Create, update, and get a profile in Humantic AI",
    description: "Manages user profiles in Humantic AI platform.",
    category: "other",
    department: "Marketing/AI",
    tags: ["Automation","Marketing/AI"],
    file: "Other_Integrations_and_Use_Cases/Create, update, and get a profile in Humantic AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Create,%20update,%20and%20get%20a%20profile%20in%20Humantic%20AI.json"
  },
  {
    id: "other-12",
    title: "Enhance Customer Chat with Twilio and Redis",
    description: "Implements message buffering for customer chats using Twilio and Redis.",
    category: "other",
    department: "Support/Development",
    tags: ["Automation","Support/Development"],
    file: "Other_Integrations_and_Use_Cases/Enhance Customer Chat by Buffering Messages with Twilio and Redis.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Enhance%20Customer%20Chat%20by%20Buffering%20Messages%20with%20Twilio%20and%20Redis.json"
  },
  {
    id: "other-13",
    title: "Hacker News Throwback Machine",
    description: "Shows what was popular on Hacker News on this day in previous years.",
    category: "other",
    department: "Development/Community",
    tags: ["Automation","Development/Community"],
    file: "Other_Integrations_and_Use_Cases/Hacker News Throwback Machine - See What Was Hot on This Day, Every Year!.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Hacker%20News%20Throwback%20Machine%20-%20See%20What%20Was%20Hot%20on%20This%20Day,%20Every%20Year!.json"
  },
  {
    id: "other-14",
    title: "Handling Appointment Leads with Twilio, Cal.com and AI",
    description: "Manages appointment scheduling and follow-ups using Twilio and Cal.com.",
    category: "other",
    department: "Sales/Support",
    tags: ["Automation","Sales/Support"],
    file: "Other_Integrations_and_Use_Cases/Handling Appointment Leads and Follow-up With Twilio, Cal.com and AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Handling%20Appointment%20Leads%20and%20Follow-up%20With%20Twilio,%20Cal.com%20and%20AI.json"
  },
  {
    id: "other-15",
    title: "Integrating AI with Open-Meteo API",
    description: "Enhances weather forecasting with AI analysis.",
    category: "other",
    department: "Data Science/Weather",
    tags: ["Automation","Data Science/Weather"],
    file: "Other_Integrations_and_Use_Cases/Integrating AI with Open-Meteo API for Enhanced Weather Forecasting.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Integrating%20AI%20with%20Open-Meteo%20API%20for%20Enhanced%20Weather%20Forecasting.json"
  },
  {
    id: "other-16",
    title: "Introduction to the HTTP Tool",
    description: "Basic tutorial on using HTTP tools in n8n.",
    category: "other",
    department: "Development",
    tags: ["Automation","Development"],
    file: "Other_Integrations_and_Use_Cases/Introduction to the HTTP Tool.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Introduction%20to%20the%20HTTP%20Tool.json"
  },
  {
    id: "other-17",
    title: "KB Tool - Confluence Knowledge Base",
    description: "Integrates with Confluence for knowledge base management.",
    category: "other",
    department: "Documentation/IT",
    tags: ["Automation","Documentation/IT"],
    file: "Other_Integrations_and_Use_Cases/KB Tool - Confluence Knowledge Base.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/KB%20Tool%20-%20Confluence%20Knowledge%20Base.json"
  },
  {
    id: "other-18",
    title: "LINE Assistant with Google Calendar and Gmail",
    description: "Creates a LINE assistant that integrates with Google Calendar and Gmail.",
    category: "other",
    department: "Productivity/Communication",
    tags: ["Automation","Gmail","Google","Productivity/Communication"],
    file: "Other_Integrations_and_Use_Cases/LINE Assistant with Google Calendar and Gmail Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/LINE%20Assistant%20with%20Google%20Calendar%20and%20Gmail%20Integration.json"
  },
  {
    id: "other-19",
    title: "Monthly Spotify Track Archiving",
    description: "Archives and classifies monthly Spotify tracks into playlists.",
    category: "other",
    department: "Personal/Music",
    tags: ["Automation","Personal/Music"],
    file: "Other_Integrations_and_Use_Cases/Monthly Spotify Track Archiving and Playlist Classification.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Monthly%20Spotify%20Track%20Archiving%20and%20Playlist%20Classification.json"
  },
  {
    id: "other-20",
    title: "Obsidian Notes Read Aloud",
    description: "Converts Obsidian notes into audio format as a podcast feed.",
    category: "other",
    department: "Productivity/Content",
    tags: ["Automation","Productivity/Content"],
    file: "Other_Integrations_and_Use_Cases/Obsidian Notes Read Aloud using AI_ Available as a Podcast Feed.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Obsidian%20Notes%20Read%20Aloud%20using%20AI_%20Available%20as%20a%20Podcast%20Feed.json"
  },
  {
    id: "other-21",
    title: "Optimize & Update Printify Title and Description",
    description: "Automates optimization of Printify product titles and descriptions.",
    category: "other",
    department: "E-commerce",
    tags: ["Automation","E-commerce"],
    file: "Other_Integrations_and_Use_Cases/Optimize & Update Printify Title and Description Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Optimize%20%26%20Update%20Printify%20Title%20and%20Description%20Workflow.json"
  },
  {
    id: "other-22",
    title: "Qualify replies from Pipedrive persons with AI",
    description: "Uses AI to qualify and categorize replies from Pipedrive contacts.",
    category: "other",
    department: "Sales/AI",
    tags: ["Automation","Drive","Sales/AI"],
    file: "Other_Integrations_and_Use_Cases/Qualify replies from Pipedrive persons with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Qualify%20replies%20from%20Pipedrive%20persons%20with%20AI.json"
  },
  {
    id: "other-23",
    title: "Siri AI Agent with Apple Shortcuts",
    description: "Creates a Siri-powered AI agent using Apple Shortcuts.",
    category: "other",
    department: "Personal/Productivity",
    tags: ["Automation","Personal/Productivity"],
    file: "Other_Integrations_and_Use_Cases/Siri AI Agent_ Apple Shortcuts powered voice template.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Siri%20AI%20Agent_%20Apple%20Shortcuts%20powered%20voice%20template.json"
  },
  {
    id: "other-24",
    title: "Text automations using Apple Shortcuts",
    description: "Implements text-based automations with Apple Shortcuts.",
    category: "other",
    department: "Personal/Productivity",
    tags: ["Automation","Personal/Productivity"],
    file: "Other_Integrations_and_Use_Cases/Text automations using Apple Shortcuts.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Text%20automations%20using%20Apple%20Shortcuts.json"
  },
  {
    id: "other-25",
    title: "UTM Link Creator & QR Code Generator",
    description: "Creates UTM links, generates QR codes, and schedules Google Analytics reports.",
    category: "other",
    department: "Marketing/Analytics",
    tags: ["Automation","Google","Marketing/Analytics"],
    file: "Other_Integrations_and_Use_Cases/UTM Link Creator & QR Code Generator with Scheduled Google Analytics Reports.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/UTM%20Link%20Creator%20%26%20QR%20Code%20Generator%20with%20Scheduled%20Google%20Analytics%20Reports.json"
  },
  {
    id: "other-26",
    title: "Use AI to organize your Todoist Inbox",
    description: "Automatically organizes tasks in Todoist using AI.",
    category: "other",
    department: "Productivity",
    tags: ["Automation","Productivity"],
    file: "Other_Integrations_and_Use_Cases/Use AI to organize your Todoist Inbox.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Use%20AI%20to%20organize%20your%20Todoist%20Inbox.json"
  },
  {
    id: "other-27",
    title: "Using External Workflows as Tools in n8n",
    description: "Demonstrates how to use external workflows as tools within n8n.",
    category: "other",
    department: "Development",
    tags: ["Automation","Development"],
    file: "Other_Integrations_and_Use_Cases/Using External Workflows as Tools in n8n.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Using%20External%20Workflows%20as%20Tools%20in%20n8n.json"
  },
  {
    id: "other-28",
    title: "Visualize SQL Agent queries with OpenAI and Quickchart.io",
    description: "Creates visualizations from SQL queries using OpenAI and Quickchart.io.",
    category: "other",
    department: "Data Analysis/Visualization",
    tags: ["Automation","OpenAI","Data Analysis/Visualization"],
    file: "Other_Integrations_and_Use_Cases/Visualize your SQL Agent queries with OpenAI and Quickchart.io.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Visualize%20your%20SQL%20Agent%20queries%20with%20OpenAI%20and%20Quickchart.io.json"
  },
  {
    id: "other-29",
    title: "Zoom AI Meeting Assistant",
    description: "Creates meeting summaries, ClickUp tasks, and schedules follow-ups from Zoom meetings.",
    category: "other",
    department: "Productivity/Communication",
    tags: ["Automation","Productivity/Communication"],
    file: "Other_Integrations_and_Use_Cases/Zoom AI Meeting Assistant creates mail summary, ClickUp tasks and follow-up call.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Zoom%20AI%20Meeting%20Assistant%20creates%20mail%20summary,%20ClickUp%20tasks%20and%20follow-up%20call.json"
  },
  {
    id: "other-30",
    title: "ClientFlow Lite - Client Onboarding Automation",
    description: "Client submits a form, receives a welcome email, and gets added to a Google Sheets pipeline automatically. Simple onboarding workflow.",
    category: "other",
    department: "Ops/Sales",
    tags: ["Automation","Google","Sheets","Email","Ops/Sales"],
    file: "Other_Integrations_and_Use_Cases/ClientFlow Lite - Client Onboarding Automation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/ClientFlow%20Lite%20-%20Client%20Onboarding%20Automation.json"
  },
  {
    id: "other-31",
    title: "VoiceAgent Lite - Phone Call Logger",
    description: "Logs phone calls from Vapi.ai or Bland.ai to Google Sheets via webhook. Captures caller info, duration, and transcript summary.",
    category: "other",
    department: "Ops/Support",
    tags: ["Automation","Google","Sheets","Ops/Support"],
    file: "Other_Integrations_and_Use_Cases/VoiceAgent Lite - Phone Call Logger.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/VoiceAgent%20Lite%20-%20Phone%20Call%20Logger.json"
  },
  {
    id: "forms-01",
    title: "Conversational Interviews with AI Agents and n8n Forms",
    description: "Implements AI-powered conversational interviews using n8n Forms for interactive data collection.",
    category: "forms",
    department: "Research/Marketing",
    tags: ["Automation","Research/Marketing"],
    file: "Forms_and_Surveys/Conversational Interviews with AI Agents and n8n Forms.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Forms_and_Surveys/Conversational%20Interviews%20with%20AI%20Agents%20and%20n8n%20Forms.json"
  },
  {
    id: "forms-02",
    title: "Email Subscription Service with n8n Forms, Airtable and AI",
    description: "Manages email subscriptions with n8n Forms, stores data in Airtable, and uses AI for processing.",
    category: "forms",
    department: "Marketing/Communication",
    tags: ["Automation","Airtable","Email","Marketing/Communication"],
    file: "Forms_and_Surveys/Email Subscription Service with n8n Forms, Airtable and AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Forms_and_Surveys/Email%20Subscription%20Service%20with%20n8n%20Forms,%20Airtable%20and%20AI.json"
  },
  {
    id: "forms-03",
    title: "Qualifying Appointment Requests with AI & n8n Forms",
    description: "Uses AI to qualify and process appointment requests submitted through n8n Forms.",
    category: "forms",
    department: "Sales/Support",
    tags: ["Automation","Sales/Support"],
    file: "Forms_and_Surveys/Qualifying Appointment Requests with AI & n8n Forms.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Forms_and_Surveys/Qualifying%20Appointment%20Requests%20with%20AI%20&%20n8n%20Forms.json"
  },
  {
    id: "rag-01",
    title: "Analyze tradingview.com charts with Chrome extension, N8N and OpenAI",
    description: "Analyzes TradingView charts using a Chrome extension, n8n, and OpenAI for automated insights.",
    category: "rag",
    department: "Data Analysis",
    tags: ["Automation","OpenAI","Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Analyze%20tradingview.com%20charts%20with%20Chrome%20extension,%20N8N%20and%20OpenAI.json"
  },
  {
    id: "rag-02",
    title: "Automated Hugging Face Paper Summary Fetching & Categorization Workflow",
    description: "Automates fetching, summarizing, and categorizing research papers from Hugging Face.",
    category: "rag",
    department: "AI Research",
    tags: ["Automation","AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Automated%20Hugging%20Face%20Paper%20Summary%20Fetching%20%26%20Categorization%20Workflow.json"
  },
  {
    id: "rag-03",
    title: "Autonomous AI crawler",
    description: "An autonomous AI-powered web crawler for data collection and analysis.",
    category: "rag",
    department: "AI Research",
    tags: ["Automation","AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Autonomous%20AI%20crawler.json"
  },
  {
    id: "rag-04",
    title: "Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearch",
    description: "Builds an image search engine using AI object detection, CDN, and Elasticsearch for efficient image retrieval.",
    category: "rag",
    department: "AI Research",
    tags: ["Automation","AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearchBuild Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Build%20Your%20Own%20Image%20Search%20Using%20AI%20Object%20Detection,%20CDN%20and%20ElasticSearchBuild%20Your%20Own%20Image%20Search%20Using%20AI%20Object%20Detection,%20CDN%20and%20ElasticSearch.json"
  },
  {
    id: "rag-05",
    title: "Build a Financial Documents Assistant using Qdrant and Mistral.ai",
    description: "Creates an AI assistant for financial document analysis using Qdrant for vector search and Mistral.ai for language processing.",
    category: "rag",
    department: "Finance, AI Research",
    tags: ["Automation","Finance, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Build%20a%20Financial%20Documents%20Assistant%20using%20Qdrant%20and%20Mistral.ai.json"
  },
  {
    id: "rag-06",
    title: "Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI",
    description: "Develops an AI assistant for tax code queries using Qdrant, Mistral.ai, and OpenAI for comprehensive responses.",
    category: "rag",
    department: "Finance, AI Research",
    tags: ["Automation","OpenAI","Finance, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Build%20a%20Tax%20Code%20Assistant%20with%20Qdrant,%20Mistral.ai%20and%20OpenAI.json"
  },
  {
    id: "rag-07",
    title: "Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI",
    description: "Constructs a RAG-based chatbot for movie recommendations, leveraging Qdrant for retrieval and OpenAI for generation.",
    category: "rag",
    department: "AI Research, Entertainment",
    tags: ["Automation","OpenAI","RAG","AI Research, Entertainment"],
    file: "./AI_Research_RAG_and_Data_Analysis/Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Building%20RAG%20Chatbot%20for%20Movie%20Recommendations%20with%20Qdrant%20and%20Open%20AI.json"
  },
  {
    id: "rag-08",
    title: "Chat with GitHub API Documentation: RAG-Powered Chatbot with Pinecone & OpenAI",
    description: "Implements a RAG-powered chatbot for interacting with GitHub API documentation using Pinecone and OpenAI.",
    category: "rag",
    department: "Development, AI Research",
    tags: ["Automation","OpenAI","Pinecone","RAG","Github"],
    file: "./AI_Research_RAG_and_Data_Analysis/Chat with GitHub API Documentation_ RAG-Powered Chatbot with Pinecone & OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Chat%20with%20GitHub%20API%20Documentation_%20RAG-Powered%20Chatbot%20with%20Pinecone%20%26%20OpenAI.json"
  },
  {
    id: "rag-09",
    title: "Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram",
    description: "Generates Google Analytics data reports using AI and sends them via email and Telegram.",
    category: "rag",
    department: "Data Analysis, Marketing",
    tags: ["Automation","Telegram","Google","Email","Data Analysis, Marketing"],
    file: "./AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Create%20a%20Google%20Analytics%20Data%20Report%20with%20AI%20and%20sent%20it%20to%20E-Mail%20and%20Telegram.json"
  },
  {
    id: "rag-10",
    title: "Customer Insights with Qdrant, Python and Information Extractor",
    description: "Extracts customer insights using Qdrant, Python, and an information extraction module.",
    category: "rag",
    department: "Data Analysis, Customer Service",
    tags: ["Automation","Data Analysis, Customer Service"],
    file: "./AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Customer%20Insights%20with%20Qdrant,%20Python%20and%20Information%20Extractor.json"
  },
  {
    id: "rag-11",
    title: "Deduplicate Scraping AI Grants for Eligibility using AI",
    description: "Automates the deduplication and eligibility assessment of scraped AI grant data using AI.",
    category: "rag",
    department: "AI Research, Data Management",
    tags: ["Automation","AI Research, Data Management"],
    file: "./AI_Research_RAG_and_Data_Analysis/Deduplicate Scraping AI Grants for Eligibility using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Deduplicate%20Scraping%20AI%20Grants%20for%20Eligibility%20using%20AI.json"
  },
  {
    id: "rag-12",
    title: "Enrich Property Inventory Survey with Image Recognition and AI Agent",
    description: "Enhances property inventory surveys with image recognition and AI agents for automated data enrichment.",
    category: "rag",
    department: "Real Estate, AI Research",
    tags: ["Automation","Real Estate, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Enrich Property Inventory Survey with Image Recognition and AI Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Enrich%20Property%20Inventory%20Survey%20with%20Image%20Recognition%20and%20AI%20Agent.json"
  },
  {
    id: "rag-13",
    title: "Extract insights & analyse YouTube comments via AI Agent chat",
    description: "Extracts insights and analyzes YouTube comments through an AI agent chat interface.",
    category: "rag",
    department: "Social Media, Data Analysis",
    tags: ["Automation","Social Media, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Extract%20insights%20%26%20analyse%20YouTube%20comments%20via%20AI%20Agent%20chat.json"
  },
  {
    id: "rag-14",
    title: "Generate SEO Seed Keywords Using AI",
    description: "Generates SEO seed keywords using AI to optimize content for search engines.",
    category: "rag",
    department: "Marketing, AI Research",
    tags: ["Automation","Marketing, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Generate SEO Seed Keywords Using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Generate%20SEO%20Seed%20Keywords%20Using%20AI.json"
  },
  {
    id: "rag-15",
    title: "Hacker News Job Listing Scraper and Parser",
    description: "Scrapes and parses job listings from Hacker News for job seekers or recruiters.",
    category: "rag",
    department: "Data Collection, HR",
    tags: ["Automation","Data Collection, HR"],
    file: "./AI_Research_RAG_and_Data_Analysis/Hacker News Job Listing Scraper and Parser.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Hacker%20News%20Job%20Listing%20Scraper%20and%20Parser.json"
  },
  {
    id: "rag-16",
    title: "Hacker News to Video Content",
    description: "Converts Hacker News articles into video content automatically.",
    category: "rag",
    department: "Content Creation, Media",
    tags: ["Automation","Content Creation, Media"],
    file: "./AI_Research_RAG_and_Data_Analysis/Hacker News to Video Content.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Hacker%20News%20to%20Video%20Content.json"
  },
  {
    id: "rag-17",
    title: "Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3",
    description: "Sets up a self-hosted AI deep research agent using n8n, Apify, and OpenAI.",
    category: "rag",
    department: "AI Research, Automation",
    tags: ["Automation","OpenAI","AI Research, Automation"],
    file: "./AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Host%20Your%20Own%20AI%20Deep%20Research%20Agent%20with%20n8n,%20Apify%20and%20OpenAI%20o3.json"
  },
  {
    id: "rag-18",
    title: "Intelligent Web Query and Semantic Re-Ranking Flow using Brave and Google Gemini",
    description: "Performs intelligent web queries and semantic re-ranking using Brave browser and Google Gemini AI.",
    category: "rag",
    department: "AI Research, Data Analysis",
    tags: ["Automation","Google","Gemini","AI Research, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Intelligent Web Query and Semantic Re-Ranking Flow using Brave and Google Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Intelligent%20Web%20Query%20and%20Semantic%20Re-Ranking%20Flow%20using%20Brave%20and%20Google%20Gemini.json"
  },
  {
    id: "rag-19",
    title: "Learn Anything from HN - Get Top Resource Recommendations from Hacker News",
    description: "Extracts top resource recommendations from Hacker News to facilitate learning on any topic.",
    category: "rag",
    department: "Education, Data Analysis",
    tags: ["Automation","Education, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Learn Anything from HN - Get Top Resource Recommendations from Hacker News.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Learn%20Anything%20from%20HN%20-%20Get%20Top%20Resource%20Recommendations%20from%20Hacker%20News.json"
  },
  {
    id: "rag-20",
    title: "Make OpenAI Citation for File Retrieval RAG",
    description: "Generates citations for file retrieval in RAG systems using OpenAI.",
    category: "rag",
    department: "AI Research, Documentation",
    tags: ["Automation","OpenAI","RAG","AI Research, Documentation"],
    file: "./AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Make%20OpenAI%20Citation%20for%20File%20Retrieval%20RAG.json"
  },
  {
    id: "rag-21",
    title: "Open Deep Research - AI-Powered Autonomous Research Workflow",
    description: "An AI-powered autonomous workflow for conducting deep research.",
    category: "rag",
    department: "AI Research, Automation",
    tags: ["Automation","AI Research, Automation"],
    file: "./AI_Research_RAG_and_Data_Analysis/Open Deep Research - AI-Powered Autonomous Research Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Open%20Deep%20Research%20-%20AI-Powered%20Autonomous%20Research%20Workflow.json"
  },
  {
    id: "rag-22",
    title: "Query Perplexity AI from your n8n workflows",
    description: "Integrates Perplexity AI into n8n workflows for advanced querying capabilities.",
    category: "rag",
    department: "AI Research, Automation",
    tags: ["Automation","AI Research, Automation"],
    file: "./AI_Research_RAG_and_Data_Analysis/Query Perplexity AI from your n8n workflows.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Query%20Perplexity%20AI%20from%20your%20n8n%20workflows.json"
  },
  {
    id: "rag-23",
    title: "Recipe Recommendations with Qdrant and Mistral",
    description: "Provides recipe recommendations using Qdrant for vector search and Mistral AI for content generation.",
    category: "rag",
    department: "Food, AI Research",
    tags: ["Automation","Food, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Recipe Recommendations with Qdrant and Mistral.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Recipe%20Recommendations%20with%20Qdrant%20and%20Mistral.json"
  },
  {
    id: "rag-24",
    title: "Reconcile Rent Payments with Local Excel Spreadsheet and OpenAI",
    description: "Reconciles rent payments by comparing local Excel spreadsheets with data processed by OpenAI.",
    category: "rag",
    department: "Finance, Data Management",
    tags: ["Automation","OpenAI","Sheets","Finance, Data Management"],
    file: "./AI_Research_RAG_and_Data_Analysis/Reconcile Rent Payments with Local Excel Spreadsheet and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Reconcile%20Rent%20Payments%20with%20Local%20Excel%20Spreadsheet%20and%20OpenAI.json"
  },
  {
    id: "rag-25",
    title: "Scrape Trustpilot Reviews with DeepSeek, Analyze Sentiment with OpenAI",
    description: "Scrapes Trustpilot Reviews using DeepSeek and analyzes sentiment with OpenAI.",
    category: "rag",
    department: "Marketing, Data Analysis",
    tags: ["Automation","OpenAI","Deepseek","Marketing, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Scrape Trustpilot Reviews with DeepSeek, Analyze Sentiment with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Scrape%20Trustpilot%20Reviews%20with%20DeepSeek,%20Analyze%20Sentiment%20with%20OpenAI.json"
  },
  {
    id: "rag-26",
    title: "Scrape and summarize posts of a news site without RSS feed using AI and save them to a NocoDB",
    description: "Scrapes and summarizes news posts without RSS feeds using AI, saving the output to NocoDB.",
    category: "rag",
    department: "Content Curation, Data Management",
    tags: ["Automation","RSS","Content Curation, Data Management"],
    file: "./AI_Research_RAG_and_Data_Analysis/Scrape and summarize posts of a news site without RSS feed using AI and save them to a NocoDB.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Scrape%20and%20summarize%20posts%20of%20a%20news%20site%20without%20RSS%20feed%20using%20AI%20and%20save%20them%20to%20a%20NocoDB.json"
  },
  {
    id: "rag-27",
    title: "Scrape and summarize webpages with AI",
    description: "Scrapes and summarizes content from webpages using AI.",
    category: "rag",
    department: "Content Curation, Data Analysis",
    tags: ["Automation","Content Curation, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Scrape and summarize webpages with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Scrape%20and%20summarize%20webpages%20with%20AI.json"
  },
  {
    id: "rag-28",
    title: "Send Google analytics data to A.I. to analyze then save results in Baserow",
    description: "Sends Google Analytics data to AI for analysis and saves the results in Baserow.",
    category: "rag",
    department: "Data Analysis, Marketing",
    tags: ["Automation","Google","Data Analysis, Marketing"],
    file: "./AI_Research_RAG_and_Data_Analysis/Send Google analytics data to A.I. to analyze then save results in Baserow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Send%20Google%20analytics%20data%20to%20A.I.%20to%20analyze%20then%20save%20results%20in%20Baserow.json"
  },
  {
    id: "rag-29",
    title: "Spot Workplace Discrimination Patterns with AI",
    description: "Identifies patterns of workplace discrimination using AI-driven analysis.",
    category: "rag",
    department: "HR, AI Research",
    tags: ["Automation","Drive","HR, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Spot Workplace Discrimination Patterns with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Spot%20Workplace%20Discrimination%20Patterns%20with%20AI.json"
  },
  {
    id: "rag-30",
    title: "Summarize SERPBear data with AI (via Openrouter) and save it to Baserow",
    description: "Summarizes SERPBear data using AI (via Openrouter) and saves the insights to Baserow.",
    category: "rag",
    department: "SEO, Data Analysis",
    tags: ["Automation","SEO, Data Analysis"],
    file: "via Openrouter",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/via Openrouter"
  },
  {
    id: "rag-31",
    title: "Summarize Umami data with AI (via Openrouter) and save it to Baserow",
    description: "Summarizes Umami analytics data using AI (via Openrouter) and saves the insights to Baserow.",
    category: "rag",
    department: "Data Analysis, Marketing",
    tags: ["Automation","Data Analysis, Marketing"],
    file: "via Openrouter",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/via Openrouter"
  },
  {
    id: "rag-32",
    title: "Survey Insights with Qdrant, Python and Information Extractor",
    description: "Extracts and analyzes insights from survey data using Qdrant, Python, and an information extractor.",
    category: "rag",
    department: "Data Analysis, Market Research",
    tags: ["Automation","Data Analysis, Market Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Survey Insights with Qdrant, Python and Information Extractor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Survey%20Insights%20with%20Qdrant,%20Python%20and%20Information%20Extractor.json"
  },
  {
    id: "rag-33",
    title: "Ultimate Scraper Workflow for n8n",
    description: "A comprehensive scraping workflow for n8n to extract data from various sources.",
    category: "rag",
    department: "Data Collection, Automation",
    tags: ["Automation","Data Collection, Automation"],
    file: "./AI_Research_RAG_and_Data_Analysis/Ultimate Scraper Workflow for n8n.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Ultimate%20Scraper%20Workflow%20for%20n8n.json"
  },
  {
    id: "rag-34",
    title: "Vector Database as a Big Data Analysis Tool for AI Agents [1/3 anomaly][1/2 KNN]",
    description: "Utilizes a vector database for big data analysis, focusing on anomaly detection and KNN classification for AI agents.",
    category: "rag",
    department: "AI Research, Data Analysis",
    tags: ["Automation","AI Research, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [1_3 anomaly][1_2 KNN].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20[1_3%20anomaly][1_2%20KNN].json"
  },
  {
    id: "rag-35",
    title: "Vector Database as a Big Data Analysis Tool for AI Agents [2/2 KNN]",
    description: "Continues the use of a vector database for big data analysis, focusing on KNN classification for AI agents.",
    category: "rag",
    department: "AI Research, Data Analysis",
    tags: ["Automation","AI Research, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [2_2 KNN].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20[2_2%20KNN].json"
  },
  {
    id: "rag-36",
    title: "Vector Database as a Big Data Analysis Tool for AI Agents [2/3 - anomaly]",
    description: "Explores the use of a vector database for big data analysis, focusing on anomaly detection for AI agents.",
    category: "rag",
    department: "AI Research, Data Analysis",
    tags: ["Automation","AI Research, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [2_3 - anomaly].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20[2_3%20-%20anomaly].json"
  },
  {
    id: "rag-37",
    title: "Vector Database as a Big Data Analysis Tool for AI Agents [3/3 - anomaly]",
    description: "Concludes the use of a vector database for big data analysis, focusing on anomaly detection for AI agents.",
    category: "rag",
    department: "AI Research, Data Analysis",
    tags: ["Automation","AI Research, Data Analysis"],
    file: "./AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [3_3 - anomaly].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20[3_3%20-%20anomaly].json"
  },
  {
    id: "rag-38",
    title: "Visual Regression Testing with Apify and AI Vision Model",
    description: "Performs visual regression testing using Apify and an AI vision model to detect UI changes.",
    category: "rag",
    department: "QA, AI Research",
    tags: ["Automation","QA, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/Visual Regression Testing with Apify and AI Vision Model.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/Visual%20Regression%20Testing%20with%20Apify%20and%20AI%20Vision%20Model.json"
  },
  {
    id: "rag-39",
    title: "SocialPulse Lite - Reddit Trend Monitor",
    description: "Monitors Reddit subreddits for trending topics and analyzes them with OpenAI. Saves insights to Google Sheets for tracking emerging trends.",
    category: "rag",
    department: "Data Analysis, Marketing",
    tags: ["Automation","OpenAI","Google","Sheets","Data Analysis, Marketing"],
    file: "AI_Research_RAG_and_Data_Analysis/SocialPulse Lite - Reddit Trend Monitor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/SocialPulse%20Lite%20-%20Reddit%20Trend%20Monitor.json"
  },
  {
    id: "rag-40",
    title: "DataForge Lite - AI URL Data Extractor",
    description: "POST any URL and extract structured data using OpenAI. Returns clean JSON output for easy integration with other workflows.",
    category: "rag",
    department: "Data Extraction, AI Research",
    tags: ["Automation","OpenAI","Data Extraction, AI Research"],
    file: "AI_Research_RAG_and_Data_Analysis/DataForge Lite - AI URL Data Extractor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/DataForge%20Lite%20-%20AI%20URL%20Data%20Extractor.json"
  },
  {
    id: "rag-41",
    title: "🔍 Perplexity Research to HTML: AI-Powered Content Creation",
    description: "Transforms Perplexity AI research into HTML content for AI-powered content creation.",
    category: "rag",
    department: "Content Creation, AI Research",
    tags: ["Automation","Content Creation, AI Research"],
    file: "./AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/./AI_Research_RAG_and_Data_Analysis/%F0%9F%94%8D%20Perplexity%20Research%20to%20HTML_%20AI-Powered%20Content%20Creation.json"
  },
  {
    id: "other-32",
    title: "AI Product Images",
    description: "Ready-to-use n8n workflow for AI Product Imagines. Import the JSON file and configure your credentials.",
    category: "other",
    department: "Ops",
    tags: ["Automation","Ops"],
    file: "AI product imagines.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI%20product%20imagines.json"
  },
  {
    id: "other-33",
    title: "Chrome Extension Backend With AI",
    description: "Ready-to-use n8n workflow for Analyze Tradingview.com Charts With Chrome Extension, N8N And OpenAI. Import the JSON file and configure your credentials.",
    category: "other",
    department: "HR",
    tags: ["Automation","OpenAI","HR"],
    file: "AI_Research_RAG_and_Data_Analysis/Analyze tradingview.com charts with Chrome extension, N8N and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Analyze%20tradingview.com%20charts%20with%20Chrome%20extension%2C%20N8N%20and%20OpenAI.json"
  },
  {
    id: "rag-42",
    title: "[3/3] Anomaly Detection Tool (crops Dataset)",
    description: "Ready-to-use n8n workflow for Automated Hugging Face Paper Summary Fetching & Categorization Workflow. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Automated Hugging Face Paper Summary Fetching & Categorization Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Automated%20Hugging%20Face%20Paper%20Summary%20Fetching%20%26%20Categorization%20Workflow.json"
  },
  {
    id: "rag-43",
    title: "Autonomous AI Crawler",
    description: "Ready-to-use n8n workflow for Autonomous AI Crawler. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Autonomous AI crawler.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Autonomous%20AI%20crawler.json"
  },
  {
    id: "rag-44",
    title: "Build A Financial Documents Assistant Using Qdrant And Mistral.ai",
    description: "Ready-to-use n8n workflow for Build A Financial Documents Assistant Using Qdrant And Mistral.ai. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Build a Financial Documents Assistant using Qdrant and Mistral.ai.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Build%20a%20Financial%20Documents%20Assistant%20using%20Qdrant%20and%20Mistral.ai.json"
  },
  {
    id: "rag-45",
    title: "Build A Tax Code Assistant With Qdrant, Mistral.ai And OpenAI",
    description: "Ready-to-use n8n workflow for Build A Tax Code Assistant With Qdrant, Mistral.ai And OpenAI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Build a Tax Code Assistant with Qdrant, Mistral.ai and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Build%20a%20Tax%20Code%20Assistant%20with%20Qdrant%2C%20Mistral.ai%20and%20OpenAI.json"
  },
  {
    id: "rag-46",
    title: "Build Your Own Image Search Using AI Object Detection, CDN And ElasticSearchBuild Your Own Image Search Using AI Object Detection, CDN And ElasticSearch",
    description: "Ready-to-use n8n workflow for Build Your Own Image Search Using AI Object Detection, CDN And ElasticSearchBuild Your Own Image Search Using AI Object Detection, CDN And ElasticSearch. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Build Your Own Image Search Using AI Object Detection, CDN and ElasticSearchBuild Your Own Image Search Using AI Object Detection, CDN and ElasticSearch.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Build%20Your%20Own%20Image%20Search%20Using%20AI%20Object%20Detection%2C%20CDN%20and%20ElasticSearchBuild%20Your%20Own%20Image%20Search%20Using%20AI%20Object%20Detection%2C%20CDN%20and%20ElasticSearch.json"
  },
  {
    id: "rag-47",
    title: "Building RAG Chatbot For Movie Recommendations With Qdrant And Open AI",
    description: "Ready-to-use n8n workflow for Building RAG Chatbot For Movie Recommendations With Qdrant And Open AI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","RAG","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Building RAG Chatbot for Movie Recommendations with Qdrant and Open AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Building%20RAG%20Chatbot%20for%20Movie%20Recommendations%20with%20Qdrant%20and%20Open%20AI.json"
  },
  {
    id: "rag-48",
    title: "Chat With GitHub OpenAPI Specification Using RAG (Pinecone And OpenAI)",
    description: "Ready-to-use n8n workflow for Chat With GitHub API Documentation  RAG Powered Chatbot With Pinecone & OpenAI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","OpenAI","Pinecone","RAG","Github"],
    file: "AI_Research_RAG_and_Data_Analysis/Chat with GitHub API Documentation_ RAG-Powered Chatbot with Pinecone & OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Chat%20with%20GitHub%20API%20Documentation_%20RAG-Powered%20Chatbot%20with%20Pinecone%20%26%20OpenAI.json"
  },
  {
    id: "rag-49",
    title: "Google Analytics: Weekly Report",
    description: "Ready-to-use n8n workflow for Create A Google Analytics Data Report With AI And Sent It To E Mail And Telegram. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Telegram","Google","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Create a Google Analytics Data Report with AI and sent it to E-Mail and Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Create%20a%20Google%20Analytics%20Data%20Report%20with%20AI%20and%20sent%20it%20to%20E-Mail%20and%20Telegram.json"
  },
  {
    id: "rag-50",
    title: "Customer Insights With Qdrant, Python And Information Extractor",
    description: "Ready-to-use n8n workflow for Customer Insights With Qdrant, Python And Information Extractor. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Customer Insights with Qdrant, Python and Information Extractor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Customer%20Insights%20with%20Qdrant%2C%20Python%20and%20Information%20Extractor.json"
  },
  {
    id: "rag-51",
    title: "Deduplicate Scraping AI Grants For Eligibility Using AI",
    description: "Ready-to-use n8n workflow for Deduplicate Scraping AI Grants For Eligibility Using AI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Deduplicate Scraping AI Grants for Eligibility using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Deduplicate%20Scraping%20AI%20Grants%20for%20Eligibility%20using%20AI.json"
  },
  {
    id: "rag-52",
    title: "Enrich Property Inventory Survey With Image Recognition And AI Agent",
    description: "Ready-to-use n8n workflow for Enrich Property Inventory Survey With Image Recognition And AI Agent. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Enrich Property Inventory Survey with Image Recognition and AI Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Enrich%20Property%20Inventory%20Survey%20with%20Image%20Recognition%20and%20AI%20Agent.json"
  },
  {
    id: "rag-53",
    title: "Extract Insights & Analyse YouTube Comments Via AI Agent Chat",
    description: "Ready-to-use n8n workflow for Extract Insights & Analyse YouTube Comments Via AI Agent Chat. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Extract insights & analyse YouTube comments via AI Agent chat.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Extract%20insights%20%26%20analyse%20YouTube%20comments%20via%20AI%20Agent%20chat.json"
  },
  {
    id: "rag-54",
    title: "Generate SEO Seed Keywords Using AI",
    description: "Ready-to-use n8n workflow for Generate SEO Seed Keywords Using AI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Generate SEO Seed Keywords Using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Generate%20SEO%20Seed%20Keywords%20Using%20AI.json"
  },
  {
    id: "rag-55",
    title: "HN Who Is Hiring Scrape",
    description: "Ready-to-use n8n workflow for Hacker News Job Listing Scraper And Parser. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Hacker News Job Listing Scraper and Parser.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Hacker%20News%20Job%20Listing%20Scraper%20and%20Parser.json"
  },
  {
    id: "rag-56",
    title: "Hacker News To Video Template   AlexK1919",
    description: "Ready-to-use n8n workflow for Hacker News To Video Content. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Hacker News to Video Content.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Hacker%20News%20to%20Video%20Content.json"
  },
  {
    id: "rag-57",
    title: "Host Your Own AI Deep Research Agent With N8n, Apify And OpenAI O3",
    description: "Ready-to-use n8n workflow for Host Your Own AI Deep Research Agent With N8n, Apify And OpenAI O3. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Host%20Your%20Own%20AI%20Deep%20Research%20Agent%20with%20n8n%2C%20Apify%20and%20OpenAI%20o3.json"
  },
  {
    id: "rag-58",
    title: "Intelligent Web Query And Semantic Re Ranking Flow",
    description: "Ready-to-use n8n workflow for Intelligent Web Query And Semantic Re Ranking Flow Using Brave And Google Gemini. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Google","Gemini","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Intelligent Web Query and Semantic Re-Ranking Flow using Brave and Google Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Intelligent%20Web%20Query%20and%20Semantic%20Re-Ranking%20Flow%20using%20Brave%20and%20Google%20Gemini.json"
  },
  {
    id: "rag-59",
    title: "Learn Anything From HN   Get Top Resource Recommendations From Hacker News",
    description: "Ready-to-use n8n workflow for Learn Anything From HN   Get Top Resource Recommendations From Hacker News. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Learn Anything from HN - Get Top Resource Recommendations from Hacker News.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Learn%20Anything%20from%20HN%20-%20Get%20Top%20Resource%20Recommendations%20from%20Hacker%20News.json"
  },
  {
    id: "rag-60",
    title: "Make OpenAI Citation For File Retrieval RAG",
    description: "Ready-to-use n8n workflow for Make OpenAI Citation For File Retrieval RAG. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","OpenAI","RAG","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Make OpenAI Citation for File Retrieval RAG.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Make%20OpenAI%20Citation%20for%20File%20Retrieval%20RAG.json"
  },
  {
    id: "rag-61",
    title: "Open Deep Research   AI Powered Autonomous Research Workflow",
    description: "Ready-to-use n8n workflow for Open Deep Research   AI Powered Autonomous Research Workflow. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Open Deep Research - AI-Powered Autonomous Research Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Open%20Deep%20Research%20-%20AI-Powered%20Autonomous%20Research%20Workflow.json"
  },
  {
    id: "rag-62",
    title: "Query Perplexity AI From Your N8n Workflows",
    description: "Ready-to-use n8n workflow for Query Perplexity AI From Your N8n Workflows. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Query Perplexity AI from your n8n workflows.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Query%20Perplexity%20AI%20from%20your%20n8n%20workflows.json"
  },
  {
    id: "rag-63",
    title: "Recipe Recommendations With Qdrant And Mistral",
    description: "Ready-to-use n8n workflow for Recipe Recommendations With Qdrant And Mistral. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Recipe Recommendations with Qdrant and Mistral.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Recipe%20Recommendations%20with%20Qdrant%20and%20Mistral.json"
  },
  {
    id: "rag-64",
    title: "Reconcile Rent Payments With Local Excel Spreadsheet And OpenAI",
    description: "Ready-to-use n8n workflow for Reconcile Rent Payments With Local Excel Spreadsheet And OpenAI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Reconcile Rent Payments with Local Excel Spreadsheet and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Reconcile%20Rent%20Payments%20with%20Local%20Excel%20Spreadsheet%20and%20OpenAI.json"
  },
  {
    id: "rag-65",
    title: "News Extraction",
    description: "Ready-to-use n8n workflow for Scrape And Summarize Posts Of A News Site Without RSS Feed Using AI And Save Them To A NocoDB. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","RSS","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Scrape and summarize posts of a news site without RSS feed using AI and save them to a NocoDB.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Scrape%20and%20summarize%20posts%20of%20a%20news%20site%20without%20RSS%20feed%20using%20AI%20and%20save%20them%20to%20a%20NocoDB.json"
  },
  {
    id: "rag-66",
    title: "Scrape And Summarize Webpages With AI",
    description: "Ready-to-use n8n workflow for Scrape And Summarize Webpages With AI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Scrape and summarize webpages with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Scrape%20and%20summarize%20webpages%20with%20AI.json"
  },
  {
    id: "rag-67",
    title: "Scrape Trustpilot Reviews With DeepSeek, Analyze Sentiment With OpenAI",
    description: "Ready-to-use n8n workflow for Scrape Trustpilot Reviews With DeepSeek, Analyze Sentiment With OpenAI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","OpenAI","Deepseek","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Scrape Trustpilot Reviews with DeepSeek, Analyze Sentiment with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Scrape%20Trustpilot%20Reviews%20with%20DeepSeek%2C%20Analyze%20Sentiment%20with%20OpenAI.json"
  },
  {
    id: "rag-68",
    title: "Google Analytics Template",
    description: "Ready-to-use n8n workflow for Send Google Analytics Data To A.I. To Analyze Then Save Results In Baserow. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Google","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Send Google analytics data to A.I. to analyze then save results in Baserow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Send%20Google%20analytics%20data%20to%20A.I.%20to%20analyze%20then%20save%20results%20in%20Baserow.json"
  },
  {
    id: "rag-69",
    title: "Google Analytics Template",
    description: "Ready-to-use n8n workflow for Send Google Analytics Data To A.I. To Analyze Then Save Results In BaserowSend Google Analytics Data To A.I. To Analyze Then Save Results In Baserow. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Google","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Send Google analytics data to A.I. to analyze then save results in BaserowSend Google analytics data to A.I. to analyze then save results in Baserow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Send%20Google%20analytics%20data%20to%20A.I.%20to%20analyze%20then%20save%20results%20in%20BaserowSend%20Google%20analytics%20data%20to%20A.I.%20to%20analyze%20then%20save%20results%20in%20Baserow.json"
  },
  {
    id: "rag-70",
    title: "Spot Workplace Discrimination Patterns With AI",
    description: "Ready-to-use n8n workflow for Spot Workplace Discrimination Patterns With AI. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Spot Workplace Discrimination Patterns with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Spot%20Workplace%20Discrimination%20Patterns%20with%20AI.json"
  },
  {
    id: "rag-71",
    title: "SERPBear Analytics Template",
    description: "Ready-to-use n8n workflow for Summarize SERPBear Data With AI (via Openrouter) And Save It To Baserow. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Summarize SERPBear data with AI (via Openrouter) and save it to Baserow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Summarize%20SERPBear%20data%20with%20AI%20(via%20Openrouter)%20and%20save%20it%20to%20Baserow.json"
  },
  {
    id: "rag-72",
    title: "Umami Analytics Template",
    description: "Ready-to-use n8n workflow for Summarize Umami Data With AI (via Openrouter) And Save It To Baserow. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Summarize Umami data with AI (via Openrouter) and save it to Baserow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Summarize%20Umami%20data%20with%20AI%20(via%20Openrouter)%20and%20save%20it%20to%20Baserow.json"
  },
  {
    id: "rag-73",
    title: "Survey Insights With Qdrant, Python And Information Extractor",
    description: "Ready-to-use n8n workflow for Survey Insights With Qdrant, Python And Information Extractor. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Survey Insights with Qdrant, Python and Information Extractor.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Survey%20Insights%20with%20Qdrant%2C%20Python%20and%20Information%20Extractor.json"
  },
  {
    id: "rag-74",
    title: "Selenium Ultimate Scraper Workflow",
    description: "Ready-to-use n8n workflow for Ultimate Scraper Workflow For N8n. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Ultimate Scraper Workflow for n8n.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Ultimate%20Scraper%20Workflow%20for%20n8n.json"
  },
  {
    id: "rag-75",
    title: "[1/3   Anomaly Detection] [1/2   KNN Classification] Batch Upload Dataset To Qdrant (crops Dataset)",
    description: "Ready-to-use n8n workflow for Vector Database As A Big Data Analysis Tool For AI Agents [1 3 Anomaly][1 2 KNN]. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [1_3 anomaly][1_2 KNN].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20%5B1_3%20anomaly%5D%5B1_2%20KNN%5D.json"
  },
  {
    id: "rag-76",
    title: "[2/2] KNN Classifier (lands Dataset)",
    description: "Ready-to-use n8n workflow for Vector Database As A Big Data Analysis Tool For AI Agents [2 2 KNN]. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [2_2 KNN].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20%5B2_2%20KNN%5D.json"
  },
  {
    id: "rag-77",
    title: "[2/3] Set Up Medoids (2 Types) For Anomaly Detection (crops Dataset)",
    description: "Ready-to-use n8n workflow for Vector Database As A Big Data Analysis Tool For AI Agents [2 3   Anomaly]. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [2_3 - anomaly].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20%5B2_3%20-%20anomaly%5D.json"
  },
  {
    id: "rag-78",
    title: "[3/3] Anomaly Detection Tool (crops Dataset)",
    description: "Ready-to-use n8n workflow for Vector Database As A Big Data Analysis Tool For AI Agents [3 3   Anomaly]. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Vector Database as a Big Data Analysis Tool for AI Agents [3_3 - anomaly].json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Vector%20Database%20as%20a%20Big%20Data%20Analysis%20Tool%20for%20AI%20Agents%20%5B3_3%20-%20anomaly%5D.json"
  },
  {
    id: "rag-79",
    title: "Visual Regression Testing With Apify And AI Vision Model",
    description: "Ready-to-use n8n workflow for Visual Regression Testing With Apify And AI Vision Model. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/Visual Regression Testing with Apify and AI Vision Model.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Visual%20Regression%20Testing%20with%20Apify%20and%20AI%20Vision%20Model.json"
  },
  {
    id: "rag-80",
    title: "🔍 Perplexity Research To HTML  AI Powered Content Creation",
    description: "Ready-to-use n8n workflow for 🔍 Perplexity Research To HTML  AI Powered Content Creation. Import the JSON file and configure your credentials.",
    category: "rag",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "AI_Research_RAG_and_Data_Analysis/🔍 Perplexity Research to HTML_ AI-Powered Content Creation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/%F0%9F%94%8D%20Perplexity%20Research%20to%20HTML_%20AI-Powered%20Content%20Creation.json"
  },
  {
    id: "gmail-13",
    title: "AI Email Processing Autoresponder With Approval (Yes/No)",
    description: "Ready-to-use n8n workflow for AI Powered Email Processing Autoresponder And Response Approval (Yes No). Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Email","Ops"],
    file: "Gmail_and_Email_Automation/AI-powered email processing autoresponder and response approval (Yes_No).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/AI-powered%20email%20processing%20autoresponder%20and%20response%20approval%20(Yes_No).json"
  },
  {
    id: "gmail-14",
    title: "Classify Lemlist Replies Using OpenAI And Automate Reply Handling",
    description: "Ready-to-use n8n workflow for Classify Lemlist Replies Using OpenAI And Automate Reply Handling. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","OpenAI","Ops"],
    file: "Gmail_and_Email_Automation/Classify lemlist replies using OpenAI and automate reply handling.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Classify%20lemlist%20replies%20using%20OpenAI%20and%20automate%20reply%20handling.json"
  },
  {
    id: "gmail-15",
    title: "Create E Mail Responses With Fastmail And OpenAI",
    description: "Ready-to-use n8n workflow for Create E Mail Responses With Fastmail And OpenAI. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","OpenAI","Ops"],
    file: "Gmail_and_Email_Automation/create e-mail responses with fastmail and OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/create%20e-mail%20responses%20with%20fastmail%20and%20OpenAI.json"
  },
  {
    id: "gmail-16",
    title: "Effortless Email Management With AI",
    description: "Ready-to-use n8n workflow for Effortless Email Management With AI Powered Summarization & Review. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Email","Ops"],
    file: "Gmail_and_Email_Automation/Effortless Email Management with AI-Powered Summarization & Review.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Effortless%20Email%20Management%20with%20AI-Powered%20Summarization%20%26%20Review.json"
  },
  {
    id: "gmail-17",
    title: "Email Summary Agent",
    description: "Ready-to-use n8n workflow for Email Summary Agent. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Email","Ops"],
    file: "Gmail_and_Email_Automation/Email Summary Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Email%20Summary%20Agent.json"
  },
  {
    id: "gmail-18",
    title: "Extract Spend Details (template)",
    description: "Ready-to-use n8n workflow for Extract Spending History From Gmail To Google Sheet. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Gmail","Google","Ops"],
    file: "Gmail_and_Email_Automation/Extract spending history from gmail to google sheet.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Extract%20spending%20history%20from%20gmail%20to%20google%20sheet.json"
  },
  {
    id: "gmail-19",
    title: "Gmail AI Auto Responder: Create Draft Replies To Incoming Emails",
    description: "Ready-to-use n8n workflow for Gmail AI Auto Responder  Create Draft Replies To Incoming Emails. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Gmail","Email","Ops"],
    file: "Gmail_and_Email_Automation/Gmail AI Auto-Responder_ Create Draft Replies to incoming emails.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Gmail%20AI%20Auto-Responder_%20Create%20Draft%20Replies%20to%20incoming%20emails.json"
  },
  {
    id: "gmail-20",
    title: "Contact Form Text Classifier For ECommerce",
    description: "Ready-to-use n8n workflow for Modular & Customizable AI Powered Email Routing  Text Classifier For ECommerce. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Email","Ops"],
    file: "Gmail_and_Email_Automation/Modular & Customizable AI-Powered Email Routing_ Text Classifier for eCommerce.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Modular%20%26%20Customizable%20AI-Powered%20Email%20Routing_%20Text%20Classifier%20for%20eCommerce.json"
  },
  {
    id: "gmail-21",
    title: "Send A ChatGPT Email Reply And Save Responses To Google Sheets",
    description: "Ready-to-use n8n workflow for Send A ChatGPT Email Reply And Save Responses To Google Sheets. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Google","Sheets","Email","Ops"],
    file: "Gmail_and_Email_Automation/Send a ChatGPT email reply and save responses to Google Sheets.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Send%20a%20ChatGPT%20email%20reply%20and%20save%20responses%20to%20Google%20Sheets.json"
  },
  {
    id: "gmail-22",
    title: "Send Specific PDF Attachments From Gmail To Google Drive Using OpenAI",
    description: "Ready-to-use n8n workflow for Send Specific PDF Attachments From Gmail To Google Drive Using OpenAI. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","OpenAI","Gmail","Google","Drive"],
    file: "Gmail_and_Email_Automation/Send specific PDF attachments from Gmail to Google Drive using OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Send%20specific%20PDF%20attachments%20from%20Gmail%20to%20Google%20Drive%20using%20OpenAI.json"
  },
  {
    id: "gmail-23",
    title: "Summarize Emails With A.I. Then Send To Messenger",
    description: "Ready-to-use n8n workflow for Summarize Your Emails With A.I. (via Openrouter) And Send To Line Messenger. Import the JSON file and configure your credentials.",
    category: "gmail",
    department: "Ops",
    tags: ["Automation","Email","Ops"],
    file: "Gmail_and_Email_Automation/Summarize your emails with A.I. (via Openrouter) and send to Line messenger.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Summarize%20your%20emails%20with%20A.I.%20(via%20Openrouter)%20and%20send%20to%20Line%20messenger.json"
  },
  {
    id: "google-14",
    title: "AI Logo Sheet Extractor To Airtable",
    description: "Ready-to-use n8n workflow for Extract Information From A Logo Sheet Using Forms, AI, Google Sheet And Airtable. Import the JSON file and configure your credentials.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Airtable","Google","Ops"],
    file: "Google_Drive_and_Google_Sheets/Extract Information from a Logo Sheet using forms, AI, Google Sheet and Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Extract%20Information%20from%20a%20Logo%20Sheet%20using%20forms%2C%20AI%2C%20Google%20Sheet%20and%20Airtable.json"
  },
  {
    id: "google-15",
    title: "Flux Dev Image Generation Fal.ai",
    description: "Ready-to-use n8n workflow for Flux Dev Image Generation (Fal.ai) To Google Drive. Import the JSON file and configure your credentials.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Google","Drive","Ops"],
    file: "Google_Drive_and_Google_Sheets/Flux Dev Image Generation (Fal.ai) to Google Drive.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Flux%20Dev%20Image%20Generation%20(Fal.ai)%20to%20Google%20Drive.json"
  },
  {
    id: "google-16",
    title: "AI Agent: Expense Tracker In Google Sheets And N8n Chat",
    description: "Ready-to-use n8n workflow for Simple Expense Tracker With N8n Chat, AI Agent And Google Sheets. Import the JSON file and configure your credentials.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Google","Sheets","Ops"],
    file: "Google_Drive_and_Google_Sheets/Simple Expense Tracker with n8n Chat, AI Agent and Google Sheets.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Simple%20Expense%20Tracker%20with%20n8n%20Chat%2C%20AI%20Agent%20and%20Google%20Sheets.json"
  },
  {
    id: "google-17",
    title: "Vision Based AI Agent Scraper   With Google Sheets, ScrapingBee, And Gemini",
    description: "Ready-to-use n8n workflow for ✨ Vision Based AI Agent Scraper   With Google Sheets, ScrapingBee, And Gemini. Import the JSON file and configure your credentials.",
    category: "google",
    department: "Ops",
    tags: ["Automation","Google","Sheets","Gemini","Ops"],
    file: "Google_Drive_and_Google_Sheets/✨ Vision-Based AI Agent Scraper - with Google Sheets, ScrapingBee, and Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/%E2%9C%A8%20Vision-Based%20AI%20Agent%20Scraper%20-%20with%20Google%20Sheets%2C%20ScrapingBee%2C%20and%20Gemini.json"
  },
  {
    id: "other-34",
    title: "BambooHR AI Powered Company Policies And Benefits Chatbot",
    description: "Ready-to-use n8n workflow for BambooHR AI Powered Company Policies And Benefits Chatbot. Import the JSON file and configure your credentials.",
    category: "other",
    department: "HR",
    tags: ["Automation","HR"],
    file: "HR_and_Recruitment/BambooHR AI-Powered Company Policies and Benefits Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/HR_and_Recruitment/BambooHR%20AI-Powered%20Company%20Policies%20and%20Benefits%20Chatbot.json"
  },
  {
    id: "other-35",
    title: "CV Screening With OpenAI",
    description: "Ready-to-use n8n workflow for CV Screening With OpenAI. Import the JSON file and configure your credentials.",
    category: "other",
    department: "HR",
    tags: ["Automation","OpenAI","HR"],
    file: "HR_and_Recruitment/CV Screening with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/HR_and_Recruitment/CV%20Screening%20with%20OpenAI.json"
  },
  {
    id: "other-36",
    title: "HR & IT Helpdesk Chatbot With Audio Transcription",
    description: "Ready-to-use n8n workflow for HR & IT Helpdesk Chatbot With Audio Transcription. Import the JSON file and configure your credentials.",
    category: "other",
    department: "HR",
    tags: ["Automation","HR"],
    file: "HR_and_Recruitment/HR & IT Helpdesk Chatbot with Audio Transcription.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/HR_and_Recruitment/HR%20%26%20IT%20Helpdesk%20Chatbot%20with%20Audio%20Transcription.json"
  },
  {
    id: "other-37",
    title: "HR Job Posting And Evaluation With AI",
    description: "Ready-to-use n8n workflow for HR Job Posting And Evaluation With AI. Import the JSON file and configure your credentials.",
    category: "other",
    department: "HR",
    tags: ["Automation","HR"],
    file: "HR_and_Recruitment/HR Job Posting and Evaluation with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/HR_and_Recruitment/HR%20Job%20Posting%20and%20Evaluation%20with%20AI.json"
  },
  {
    id: "notion-11",
    title: "Mails2notion V2",
    description: "Ready-to-use n8n workflow for Turn Emails Into AI Enhanced Tasks In Notion (Multi User Support) With Gmail, Airtable And Softr. Import the JSON file and configure your credentials.",
    category: "notion",
    department: "Ops",
    tags: ["Automation","Gmail","Notion","Airtable","Email"],
    file: "Notion/Turn Emails into AI-Enhanced Tasks in Notion (Multi-User Support) with Gmail, Airtable and Softr.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Turn%20Emails%20into%20AI-Enhanced%20Tasks%20in%20Notion%20(Multi-User%20Support)%20with%20Gmail%2C%20Airtable%20and%20Softr.json"
  },
  {
    id: "openai-20",
    title: "Actioning Your Meeting Next Steps Using Transcripts And AI",
    description: "Ready-to-use n8n workflow for Actioning Your Meeting Next Steps Using Transcripts And AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Actioning Your Meeting Next Steps using Transcripts and AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Actioning%20Your%20Meeting%20Next%20Steps%20using%20Transcripts%20and%20AI.json"
  },
  {
    id: "openai-21",
    title: "Advanced AI Demo (Presented At AI Developers #14 Meetup)",
    description: "Ready-to-use n8n workflow for Advanced AI Demo (Presented At AI Developers #14 Meetup). Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Advanced AI Demo (Presented at AI Developers #14 meetup).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Advanced%20AI%20Demo%20(Presented%20at%20AI%20Developers%20%2314%20meetup).json"
  },
  {
    id: "openai-22",
    title: "AI Agent For Realtime Insights On Meetings",
    description: "Ready-to-use n8n workflow for AI Agent For Realtime Insights On Meetings. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI Agent for realtime insights on meetings.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20for%20realtime%20insights%20on%20meetings.json"
  },
  {
    id: "openai-23",
    title: "AI Agent To Chat With Files In Supabase Storage",
    description: "Ready-to-use n8n workflow for AI Agent To Chat With Files In Supabase Storage. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Supabase","RAG","Engineering"],
    file: "OpenAI_and_LLMs/AI Agent To Chat With Files In Supabase Storage.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20To%20Chat%20With%20Files%20In%20Supabase%20Storage.json"
  },
  {
    id: "openai-24",
    title: "AI Agent To Chat With Supabase PostgreSQL DB",
    description: "Ready-to-use n8n workflow for AI Agent To Chat With Supabase PostgreSQL DB. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Supabase","Engineering"],
    file: "OpenAI_and_LLMs/AI Agent to chat with Supabase_PostgreSQL DB.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20to%20chat%20with%20Supabase_PostgreSQL%20DB.json"
  },
  {
    id: "openai-25",
    title: "AI Agent To Chat With You Search Console Data, Using OpenAI And Postgres",
    description: "Ready-to-use n8n workflow for AI Agent To Chat With You Search Console Data, Using OpenAI And Postgres. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/AI Agent to chat with you Search Console Data, using OpenAI and Postgres.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20to%20chat%20with%20you%20Search%20Console%20Data%2C%20using%20OpenAI%20and%20Postgres.json"
  },
  {
    id: "openai-26",
    title: "AI Agent With Ollama For Current Weather And Wiki",
    description: "Ready-to-use n8n workflow for AI Agent With Ollama For Current Weather And Wiki. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI Agent with Ollama for current weather and wiki.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20with%20Ollama%20for%20current%20weather%20and%20wiki.json"
  },
  {
    id: "openai-27",
    title: "AI Agent : Google Calendar Assistant Using OpenAI",
    description: "Ready-to-use n8n workflow for AI Agent   Google Calendar Assistant Using OpenAI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Google","Engineering"],
    file: "OpenAI_and_LLMs/AI Agent _ Google calendar assistant using OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20_%20Google%20calendar%20assistant%20using%20OpenAI.json"
  },
  {
    id: "other-38",
    title: "HR Focused Automation Pipeline With AI",
    description: "Ready-to-use n8n workflow for AI Automated HR Workflow For CV Analysis And Candidate Evaluation. Import the JSON file and configure your credentials.",
    category: "other",
    department: "HR",
    tags: ["Automation","HR"],
    file: "OpenAI_and_LLMs/AI Automated HR Workflow for CV Analysis and Candidate Evaluation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Automated%20HR%20Workflow%20for%20CV%20Analysis%20and%20Candidate%20Evaluation.json"
  },
  {
    id: "openai-28",
    title: "AI Chat With Any Data Source (using The N8n Workflow Tool)",
    description: "Ready-to-use n8n workflow for AI Chat With Any Data Source (using The N8n Workflow Tool). Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI chat with any data source (using the n8n workflow tool).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20chat%20with%20any%20data%20source%20(using%20the%20n8n%20workflow%20tool).json"
  },
  {
    id: "openai-29",
    title: "AI Chatbot That Can Search The Web",
    description: "Ready-to-use n8n workflow for AI Chatbot That Can Search The Web. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI chatbot that can search the web.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20chatbot%20that%20can%20search%20the%20web.json"
  },
  {
    id: "openai-30",
    title: "AI Powered Web Scraping With Jina, Google Sheets And OpenAI   The EASY Way",
    description: "Ready-to-use n8n workflow for AI Powered Web Scraping With Jina, Google Sheets And OpenAI   The EASY Way. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Google","Sheets","Engineering"],
    file: "OpenAI_and_LLMs/AI Powered Web Scraping with Jina, Google Sheets and OpenAI _ the EASY way.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Powered%20Web%20Scraping%20with%20Jina%2C%20Google%20Sheets%20and%20OpenAI%20_%20the%20EASY%20way.json"
  },
  {
    id: "openai-31",
    title: "AI Social Media Caption Creator",
    description: "Ready-to-use n8n workflow for AI Social Media Caption Creator Creates Social Media Post Captions In Airtable. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Airtable","Engineering"],
    file: "OpenAI_and_LLMs/AI Social Media Caption Creator creates social media post captions in Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Social%20Media%20Caption%20Creator%20creates%20social%20media%20post%20captions%20in%20Airtable.json"
  },
  {
    id: "openai-32",
    title: "AI Voice Chat Using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs",
    description: "Ready-to-use n8n workflow for AI Voice Chat Using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Google","Gemini","Engineering"],
    file: "OpenAI_and_LLMs/AI Voice Chat using Webhook, Memory Manager, OpenAI, Google Gemini & ElevenLabs.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Voice%20Chat%20using%20Webhook%2C%20Memory%20Manager%2C%20OpenAI%2C%20Google%20Gemini%20%26%20ElevenLabs.json"
  },
  {
    id: "openai-33",
    title: "Voice RAG Chatbot With ElevenLabs And OpenAI",
    description: "Ready-to-use n8n workflow for AI Voice Chatbot With ElevenLabs & OpenAI For Customer Service And Restaurants. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","RAG","Engineering"],
    file: "OpenAI_and_LLMs/AI Voice Chatbot with ElevenLabs & OpenAI for Customer Service and Restaurants.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Voice%20Chatbot%20with%20ElevenLabs%20%26%20OpenAI%20for%20Customer%20Service%20and%20Restaurants.json"
  },
  {
    id: "openai-34",
    title: "AI Web Researcher For Sales",
    description: "Ready-to-use n8n workflow for AI Web Researcher For Sales. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI web researcher for sales.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20web%20researcher%20for%20sales.json"
  },
  {
    id: "openai-35",
    title: "Complete Youtube",
    description: "Ready-to-use n8n workflow for AI Youtube Trend Finder Based On Niche. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI Youtube Trend Finder Based On Niche.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Youtube%20Trend%20Finder%20Based%20On%20Niche.json"
  },
  {
    id: "openai-36",
    title: "AI Generated Summary Block For WordPress Posts   With OpenAI, WordPress, Google Sheets & Slack",
    description: "Ready-to-use n8n workflow for AI Generated Summary Block For WordPress Posts. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Slack","Google","Sheets"],
    file: "OpenAI_and_LLMs/AI-Generated Summary Block for WordPress Posts.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI-Generated%20Summary%20Block%20for%20WordPress%20Posts.json"
  },
  {
    id: "openai-37",
    title: "LangChain   Example   Workflow Retriever",
    description: "Ready-to-use n8n workflow for AI  Ask Questions About Any Data Source (using The N8n Workflow Retriever). Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/AI_ Ask questions about any data source (using the n8n workflow retriever).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI_%20Ask%20questions%20about%20any%20data%20source%20(using%20the%20n8n%20workflow%20retriever).json"
  },
  {
    id: "openai-38",
    title: "Ask A Human",
    description: "Ready-to-use n8n workflow for Ask A Human For Help When The AI Doesn T Know The Answer. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Ask a human for help when the AI doesn_t know the answer.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Ask%20a%20human%20for%20help%20when%20the%20AI%20doesn_t%20know%20the%20answer.json"
  },
  {
    id: "openai-39",
    title: "Automate Customer Support Issue Resolution Using AI Text Classifier",
    description: "Ready-to-use n8n workflow for Automate Customer Support Issue Resolution Using AI Text Classifier. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Automate Customer Support Issue Resolution using AI Text Classifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Automate%20Customer%20Support%20Issue%20Resolution%20using%20AI%20Text%20Classifier.json"
  },
  {
    id: "openai-40",
    title: "Automate Image Validation Tasks Using AI Vision",
    description: "Ready-to-use n8n workflow for Automate Image Validation Tasks Using AI Vision. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Automate Image Validation Tasks using AI Vision.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Automate%20Image%20Validation%20Tasks%20using%20AI%20Vision.json"
  },
  {
    id: "openai-41",
    title: "Automate Your RFP Process With OpenAI Assistants",
    description: "Ready-to-use n8n workflow for Automate Your RFP Process With OpenAI Assistants. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Automate Your RFP Process with OpenAI Assistants.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Automate%20Your%20RFP%20Process%20with%20OpenAI%20Assistants.json"
  },
  {
    id: "openai-42",
    title: "Modelo Do Chatbot",
    description: "Ready-to-use n8n workflow for Chat Assistant (OpenAI Assistant) With Postgres Memory And API Calling Capabalities. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Chat Assistant (OpenAI assistant) with Postgres Memory And API Calling Capabalities.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Chat%20Assistant%20(OpenAI%20assistant)%20with%20Postgres%20Memory%20And%20API%20Calling%20Capabalities.json"
  },
  {
    id: "openai-43",
    title: "Chat With Local LLMs Using N8n And Ollama",
    description: "Ready-to-use n8n workflow for Chat With Local LLMs Using N8n And Ollama. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","LLM","Engineering"],
    file: "OpenAI_and_LLMs/Chat with local LLMs using n8n and Ollama.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Chat%20with%20local%20LLMs%20using%20n8n%20and%20Ollama.json"
  },
  {
    id: "openai-44",
    title: "Chat With OpenAI Assistant (by Adding A Memory)",
    description: "Ready-to-use n8n workflow for Chat With OpenAI Assistant (by Adding A Memory). Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Chat with OpenAI Assistant (by adding a memory).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Chat%20with%20OpenAI%20Assistant%20(by%20adding%20a%20memory).json"
  },
  {
    id: "openai-45",
    title: "Image Generation API",
    description: "Ready-to-use n8n workflow for Configure Your Own Image Creation API Using OpenAI DALLE 3. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Configure your own Image Creation API Using OpenAI DALLE-3.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Configure%20your%20own%20Image%20Creation%20API%20Using%20OpenAI%20DALLE-3.json"
  },
  {
    id: "openai-46",
    title: "Text To Speech (OpenAI)",
    description: "Ready-to-use n8n workflow for Convert Text To Speech With OpenAI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Convert text to speech with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Convert%20text%20to%20speech%20with%20OpenAI.json"
  },
  {
    id: "openai-47",
    title: "Create A Branded AI Powered Website Chatbot",
    description: "Ready-to-use n8n workflow for Create A Branded AI Powered Website Chatbot. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Create a Branded AI-Powered Website Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Create%20a%20Branded%20AI-Powered%20Website%20Chatbot.json"
  },
  {
    id: "openai-48",
    title: "LangChain   Example   Code Node Example",
    description: "Ready-to-use n8n workflow for Custom LangChain Agent Written In JavaScript. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Custom LangChain agent written in JavaScript.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Custom%20LangChain%20agent%20written%20in%20JavaScript.json"
  },
  {
    id: "openai-49",
    title: "Daily Meetings Summarization With Gemini AI",
    description: "Ready-to-use n8n workflow for Daily Meetings Summarization With Gemini AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Gemini","Engineering"],
    file: "OpenAI_and_LLMs/Daily meetings summarization with Gemini AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Daily%20meetings%20summarization%20with%20Gemini%20AI.json"
  },
  {
    id: "openai-50",
    title: "Daily Podcast Summary",
    description: "Ready-to-use n8n workflow for Daily Podcast Summary. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Daily Podcast Summary.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Daily%20Podcast%20Summary.json"
  },
  {
    id: "openai-51",
    title: "Detect Hallucinations Using Specialised Ollama Model Bespoke Minicheck",
    description: "Ready-to-use n8n workflow for Detect Hallucinations Using Specialised Ollama Model Bespoke Minicheck. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Detect hallucinations using specialised Ollama model bespoke-minicheck.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Detect%20hallucinations%20using%20specialised%20Ollama%20model%20bespoke-minicheck.json"
  },
  {
    id: "openai-52",
    title: "Dynamically Generate HTML Page From User Request Using OpenAI Structured Output",
    description: "Ready-to-use n8n workflow for Dynamically Generate A Webpage From User Request Using OpenAI Structured Output. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Dynamically generate a webpage from user request using OpenAI Structured Output.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Dynamically%20generate%20a%20webpage%20from%20user%20request%20using%20OpenAI%20Structured%20Output.json"
  },
  {
    id: "openai-53",
    title: "Easy Image Captioning With Gemini 1.5 Pro",
    description: "Ready-to-use n8n workflow for Easy Image Captioning With Gemini 1.5 Pro. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Gemini","Engineering"],
    file: "OpenAI_and_LLMs/Easy Image Captioning with Gemini 1.5 Pro.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Easy%20Image%20Captioning%20with%20Gemini%201.5%20Pro.json"
  },
  {
    id: "openai-54",
    title: "Enrich FAQ Sections On Your Website Pages At Scale With AI",
    description: "Ready-to-use n8n workflow for Enrich FAQ Sections On Your Website Pages At Scale With AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Enrich FAQ sections on your website pages at scale with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Enrich%20FAQ%20sections%20on%20your%20website%20pages%20at%20scale%20with%20AI.json"
  },
  {
    id: "openai-55",
    title: "Extract Personal Data With A Self Hosted LLM Mistral NeMo",
    description: "Ready-to-use n8n workflow for Extract Personal Data With Self Hosted LLM Mistral NeMo. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","LLM","Engineering"],
    file: "OpenAI_and_LLMs/Extract personal data with self-hosted LLM Mistral NeMo.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Extract%20personal%20data%20with%20self-hosted%20LLM%20Mistral%20NeMo.json"
  },
  {
    id: "openai-56",
    title: "Load Prompts From Github Repo And Auto Populate N8n Expressions",
    description: "Ready-to-use n8n workflow for Fetch Dynamic Prompts From GitHub And Auto Populate N8n Expressions In Prompt. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Github","Engineering"],
    file: "OpenAI_and_LLMs/Fetch Dynamic Prompts from GitHub and Auto-Populate n8n Expressions in Prompt.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Fetch%20Dynamic%20Prompts%20from%20GitHub%20and%20Auto-Populate%20n8n%20Expressions%20in%20Prompt.json"
  },
  {
    id: "openai-57",
    title: "Flux AI Image Generator",
    description: "Ready-to-use n8n workflow for Flux AI Image Generator. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Flux AI Image Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Flux%20AI%20Image%20Generator.json"
  },
  {
    id: "openai-58",
    title: "[AI/LangChain] Output Parser 4",
    description: "Ready-to-use n8n workflow for Force AI To Use A Specific Output Format. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Force AI to use a specific output format.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Force%20AI%20to%20use%20a%20specific%20output%20format.json"
  },
  {
    id: "openai-59",
    title: "Content To 9:16 Aspect Image Generator V1",
    description: "Ready-to-use n8n workflow for Generate 9 16 Images From Content And Brand Guidelines. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Generate 9_16 Images from Content and Brand Guidelines.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Generate%209_16%20Images%20from%20Content%20and%20Brand%20Guidelines.json"
  },
  {
    id: "openai-60",
    title: "Generate Audio From Text Using OpenAI   Text To Speech Workflow",
    description: "Ready-to-use n8n workflow for Generate Audio From Text Using OpenAI And Webhook   Text To Speech Workflow. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/Generate audio from text using OpenAI and Webhook _ Text to Speech Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Generate%20audio%20from%20text%20using%20OpenAI%20and%20Webhook%20_%20Text%20to%20Speech%20Workflow.json"
  },
  {
    id: "openai-61",
    title: "Generate Text To Speech Using Elevenlabs Via API",
    description: "Ready-to-use n8n workflow for Generate Text To Speech Using Elevenlabs Via API. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Generate Text-to-Speech Using Elevenlabs via API.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Generate%20Text-to-Speech%20Using%20Elevenlabs%20via%20API.json"
  },
  {
    id: "openai-62",
    title: "Generating Image Embeddings Via Textual Summarisation",
    description: "Ready-to-use n8n workflow for Generating Image Embeddings Via Textual Summarisation. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Generating Image Embeddings via Textual Summarisation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Generating%20Image%20Embeddings%20via%20Textual%20Summarisation.json"
  },
  {
    id: "openai-63",
    title: "Lemlist    GPT 3  Supercharge Your Sales Workflows",
    description: "Ready-to-use n8n workflow for Lemlist    GPT 3  Supercharge Your Sales Workflows. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/lemlist __ GPT-3_ Supercharge your sales workflows.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/lemlist%20__%20GPT-3_%20Supercharge%20your%20sales%20workflows.json"
  },
  {
    id: "openai-64",
    title: "Narrating Over A Video Using Multimodal AI",
    description: "Ready-to-use n8n workflow for Narrating Over A Video Using Multimodal AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Narrating over a Video using Multimodal AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Narrating%20over%20a%20Video%20using%20Multimodal%20AI.json"
  },
  {
    id: "openai-65",
    title: "OpenAI Assistant With Custom N8n Tools",
    description: "Ready-to-use n8n workflow for OpenAI Assistant With Custom Tools. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/OpenAI assistant with custom tools.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/OpenAI%20assistant%20with%20custom%20tools.json"
  },
  {
    id: "openai-66",
    title: "OpenAI Assistant Workflow: Uploa File, Create An Assistant, Chat With It!",
    description: "Ready-to-use n8n workflow for OpenAI Assistant Workflow  Upload File, Create An Assistant, Chat With It!. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/OpenAI Assistant workflow_ upload file, create an Assistant, chat with it!.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/OpenAI%20Assistant%20workflow_%20upload%20file%2C%20create%20an%20Assistant%2C%20chat%20with%20it!.json"
  },
  {
    id: "openai-67",
    title: "OpenAI Model Examples",
    description: "Ready-to-use n8n workflow for OpenAI Examples  ChatGPT, DALLE 2, Whisper 1 – 5 In 1. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Engineering"],
    file: "OpenAI_and_LLMs/OpenAI examples_ ChatGPT, DALLE-2, Whisper-1 – 5-in-1.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/OpenAI%20examples_%20ChatGPT%2C%20DALLE-2%2C%20Whisper-1%20%E2%80%93%205-in-1.json"
  },
  {
    id: "openai-68",
    title: "Organise Your Local File Directories With AI",
    description: "Ready-to-use n8n workflow for Organise Your Local File Directories With AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Organise Your Local File Directories With AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Organise%20Your%20Local%20File%20Directories%20With%20AI.json"
  },
  {
    id: "openai-69",
    title: "OpenAI Personal Shopper With RAG And WooCommerce",
    description: "Ready-to-use n8n workflow for Personal Shopper Chatbot For WooCommerce With RAG Using Google Drive And OpenAI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","OpenAI","Google","Drive","RAG"],
    file: "OpenAI_and_LLMs/Personal Shopper Chatbot for WooCommerce with RAG using Google Drive and openAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Personal%20Shopper%20Chatbot%20for%20WooCommerce%20with%20RAG%20using%20Google%20Drive%20and%20openAI.json"
  },
  {
    id: "openai-70",
    title: "Prompt Based Object Detection With Gemini 2.0",
    description: "Ready-to-use n8n workflow for Prompt Based Object Detection With Gemini 2.0. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Gemini","Engineering"],
    file: "OpenAI_and_LLMs/Prompt-based Object Detection with Gemini 2.0.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Prompt-based%20Object%20Detection%20with%20Gemini%202.0.json"
  },
  {
    id: "openai-71",
    title: "Proxmox AI Agent With N8n And Generative AI Integration",
    description: "Ready-to-use n8n workflow for Proxmox AI Agent With N8n And Generative AI Integration. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Proxmox AI Agent with n8n and Generative AI Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Proxmox%20AI%20Agent%20with%20n8n%20and%20Generative%20AI%20Integration.json"
  },
  {
    id: "openai-72",
    title: "Query N8n Credentials With AI SQL Agent",
    description: "Ready-to-use n8n workflow for Query N8n Credentials With AI SQL Agent. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Query n8n Credentials with AI SQL Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Query%20n8n%20Credentials%20with%20AI%20SQL%20Agent.json"
  },
  {
    id: "openai-73",
    title: "Calendar Scheduling",
    description: "Ready-to-use n8n workflow for Suggest Meeting Slots Using AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Suggest meeting slots using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Suggest%20meeting%20slots%20using%20AI.json"
  },
  {
    id: "openai-74",
    title: "Summarize YouTube Videos From Transcript",
    description: "Ready-to-use n8n workflow for Summarize YouTube Videos From Transcript. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Summarize YouTube Videos from Transcript.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Summarize%20YouTube%20Videos%20from%20Transcript.json"
  },
  {
    id: "openai-75",
    title: "Transform Image To Lego Style Using Line And Dall E",
    description: "Ready-to-use n8n workflow for Transform Image To Lego Style Using Line And Dall E. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Transform Image to Lego Style Using Line and Dall-E.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Transform%20Image%20to%20Lego%20Style%20Using%20Line%20and%20Dall-E.json"
  },
  {
    id: "openai-76",
    title: "Translate Audio Using AI",
    description: "Ready-to-use n8n workflow for Translate Audio Using AI. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/Translate audio using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Translate%20audio%20using%20AI.json"
  },
  {
    id: "openai-77",
    title: "Use Any LLM Model Via OpenRouter",
    description: "Ready-to-use n8n workflow for Use OpenRouter In N8n Versions  1.78. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","LLM","Engineering"],
    file: "OpenAI_and_LLMs/Use OpenRouter in n8n versions _1.78.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Use%20OpenRouter%20in%20n8n%20versions%20_1.78.json"
  },
  {
    id: "openai-78",
    title: "FLUX Fill Standalone",
    description: "Ready-to-use n8n workflow for 🎨 Interactive Image Editor With FLUX.1 Fill Tool For Inpainting. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/🎨 Interactive Image Editor with FLUX.1 Fill Tool for Inpainting.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%8E%A8%20Interactive%20Image%20Editor%20with%20FLUX.1%20Fill%20Tool%20for%20Inpainting.json"
  },
  {
    id: "openai-79",
    title: "🐋DeepSeek V3 Chat & R1 Reasoning Quick Start",
    description: "Ready-to-use n8n workflow for 🐋DeepSeek V3 Chat & R1 Reasoning Quick Start. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Deepseek","Engineering"],
    file: "OpenAI_and_LLMs/🐋DeepSeek V3 Chat & R1 Reasoning Quick Start.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%90%8BDeepSeek%20V3%20Chat%20%26%20R1%20Reasoning%20Quick%20Start.json"
  },
  {
    id: "openai-80",
    title: "Docsify Example",
    description: "Ready-to-use n8n workflow for 📚 Auto Generate Documentation For N8n Workflows With GPT And Docsify. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/📚 Auto-generate documentation for n8n workflows with GPT and Docsify.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%93%9A%20Auto-generate%20documentation%20for%20n8n%20workflows%20with%20GPT%20and%20Docsify.json"
  },
  {
    id: "openai-81",
    title: "🗨️Ollama Chat",
    description: "Ready-to-use n8n workflow for 🔐🦙🤖 Private & Local Ollama Self Hosted AI Assistant. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/🔐🦙🤖 Private & Local Ollama Self-Hosted AI Assistant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%94%90%F0%9F%A6%99%F0%9F%A4%96%20Private%20%26%20Local%20Ollama%20Self-Hosted%20AI%20Assistant.json"
  },
  {
    id: "openai-82",
    title: "🔥📈🤖 AI Agent For N8n Creators Leaderboard   Find Popular Workflows",
    description: "Ready-to-use n8n workflow for 🔥📈🤖 AI Agent For N8n Creators Leaderboard   Find Popular Workflows. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/🔥📈🤖 AI Agent for n8n Creators Leaderboard - Find Popular Workflows.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%94%A5%F0%9F%93%88%F0%9F%A4%96%20AI%20Agent%20for%20n8n%20Creators%20Leaderboard%20-%20Find%20Popular%20Workflows.json"
  },
  {
    id: "openai-83",
    title: "Testing Mulitple Local LLM With LM Studio",
    description: "Ready-to-use n8n workflow for 🚀 Local Multi LLM Testing & Performance Tracker. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","LLM","Engineering"],
    file: "OpenAI_and_LLMs/🚀 Local Multi-LLM Testing & Performance Tracker.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%9A%80%20Local%20Multi-LLM%20Testing%20%26%20Performance%20Tracker.json"
  },
  {
    id: "openai-84",
    title: "🤖🧑‍💻 AI Agent For Top N8n Creators Leaderboard Reporting",
    description: "Ready-to-use n8n workflow for 🤖🧑 💻 AI Agent For Top N8n Creators Leaderboard Reporting. Import the JSON file and configure your credentials.",
    category: "openai",
    department: "Engineering",
    tags: ["Automation","Engineering"],
    file: "OpenAI_and_LLMs/🤖🧑_💻 AI Agent for Top n8n Creators Leaderboard Reporting.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/%F0%9F%A4%96%F0%9F%A7%91_%F0%9F%92%BB%20AI%20Agent%20for%20Top%20n8n%20Creators%20Leaderboard%20Reporting.json"
  },
  {
    id: "other-39",
    title: "ALL Unique Nodes",
    description: "Ready-to-use n8n workflow for ALL Unique Nodes. Import the JSON file and configure your credentials.",
    category: "other",
    department: "Ops",
    tags: ["Automation","Ops"],
    file: "Other/ALL_unique_nodes.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other/ALL_unique_nodes.json"
  },
  {
    id: "pdf-12",
    title: "Chat With PDF Docs Using AI (quoting Sources)",
    description: "Ready-to-use n8n workflow for Chat With PDF Docs Using AI (quoting Sources). Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","PDF","Ops"],
    file: "PDF_and_Document_Processing/Chat with PDF docs using AI (quoting sources).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Chat%20with%20PDF%20docs%20using%20AI%20(quoting%20sources).json"
  },
  {
    id: "pdf-13",
    title: "Extract Text From PDF And Image Using Vertex AI (Gemini) Into CSV",
    description: "Ready-to-use n8n workflow for Extract Text From PDF And Image Using Vertex AI (Gemini) Into CSV. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","Gemini","PDF","Ops"],
    file: "PDF_and_Document_Processing/Extract text from PDF and image using Vertex AI (Gemini) into CSV.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Extract%20text%20from%20PDF%20and%20image%20using%20Vertex%20AI%20(Gemini)%20into%20CSV.json"
  },
  {
    id: "pdf-14",
    title: "Manipulate PDF With Adobe Developer API",
    description: "Ready-to-use n8n workflow for Manipulate PDF With Adobe Developer API. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","PDF","Ops"],
    file: "PDF_and_Document_Processing/Manipulate PDF with Adobe developer API.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Manipulate%20PDF%20with%20Adobe%20developer%20API.json"
  },
  {
    id: "pdf-15",
    title: "Parse PDF With LlamaParse And Save To Airtable",
    description: "Ready-to-use n8n workflow for Parse PDF With LlamaParse And Save To Airtable. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","Airtable","PDF","Ops"],
    file: "PDF_and_Document_Processing/Parse PDF with LlamaParse and save to Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Parse%20PDF%20with%20LlamaParse%20and%20save%20to%20Airtable.json"
  },
  {
    id: "pdf-16",
    title: "Prepare CSV Files With GPT 4",
    description: "Ready-to-use n8n workflow for Prepare CSV Files With GPT 4Prepare CSV Files With GPT 4. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","Ops"],
    file: "PDF_and_Document_Processing/Prepare CSV files with GPT-4Prepare CSV files with GPT-4.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Prepare%20CSV%20files%20with%20GPT-4Prepare%20CSV%20files%20with%20GPT-4.json"
  },
  {
    id: "pdf-17",
    title: "Remove Personally Identifiable Information (PII) From CSV Files With OpenAI",
    description: "Ready-to-use n8n workflow for Remove Personally Identifiable Information (PII) From CSV Files With OpenAI. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","OpenAI","Ops"],
    file: "PDF_and_Document_Processing/Remove Personally Identifiable Information (PII) from CSV Files with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Remove%20Personally%20Identifiable%20Information%20(PII)%20from%20CSV%20Files%20with%20OpenAI.json"
  },
  {
    id: "pdf-18",
    title: "Whisper Transkription Copy",
    description: "Ready-to-use n8n workflow for Transcribe Audio Files, Summarize With GPT 4, And Store In Notion. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","Notion","Ops"],
    file: "PDF_and_Document_Processing/Transcribe Audio Files, Summarize with GPT-4, and Store in Notion.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Transcribe%20Audio%20Files%2C%20Summarize%20with%20GPT-4%2C%20and%20Store%20in%20Notion.json"
  },
  {
    id: "pdf-19",
    title: "Transcribing Bank Statements To Markdown Using Gemini Vision AI",
    description: "Ready-to-use n8n workflow for Transcribing Bank Statements To Markdown Using Gemini Vision AI. Import the JSON file and configure your credentials.",
    category: "pdf",
    department: "Ops",
    tags: ["Automation","Gemini","Ops"],
    file: "PDF_and_Document_Processing/Transcribing Bank Statements To Markdown Using Gemini Vision AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Transcribing%20Bank%20Statements%20To%20Markdown%20Using%20Gemini%20Vision%20AI.json"
  },
  {
    id: "telegram-18",
    title: "Image Creation With OpenAI And Telegram",
    description: "Ready-to-use n8n workflow for Image Creation With OpenAI And Telegram. Import the JSON file and configure your credentials.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","OpenAI","Telegram","Support"],
    file: "Telegram/Image Creation with OpenAI and Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Image%20Creation%20with%20OpenAI%20and%20Telegram.json"
  },
  {
    id: "telegram-19",
    title: "TeleBot KnowledgeHub",
    description: "Ready-to-use n8n workflow for TeleBot KnowledgeHub. Import the JSON file and configure your credentials.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Support"],
    file: "Telegram/TeleBot_KnowledgeHub.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/TeleBot_KnowledgeHub.json"
  },
  {
    id: "telegram-20",
    title: "Translate Telegram Audio Messages With AI (55 Supported Languages) V1",
    description: "Ready-to-use n8n workflow for Translate Telegram Audio Messages With AI (55 Supported Languages). Import the JSON file and configure your credentials.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Support"],
    file: "Telegram/Translate Telegram audio messages with AI (55 supported languages).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Translate%20Telegram%20audio%20messages%20with%20AI%20(55%20supported%20languages).json"
  },
  {
    id: "telegram-21",
    title: "🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠",
    description: "Ready-to-use n8n workflow for 🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠. Import the JSON file and configure your credentials.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","Deepseek","Support"],
    file: "Telegram/🐋🤖 DeepSeek AI Agent + Telegram + LONG TERM Memory 🧠.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/%F0%9F%90%8B%F0%9F%A4%96%20DeepSeek%20AI%20Agent%20%2B%20Telegram%20%2B%20LONG%20TERM%20Memory%20%F0%9F%A7%A0.json"
  },
  {
    id: "telegram-22",
    title: "🤖🧠 AI Agent Chatbot + LONG TERM Memory + Note Storage + Telegram",
    description: "Ready-to-use n8n workflow for 🤖🧠 AI Agent Chatbot + LONG TERM Memory + Note Storage + Telegram. Import the JSON file and configure your credentials.",
    category: "telegram",
    department: "Support",
    tags: ["Automation","Telegram","RAG","Support"],
    file: "Telegram/🤖🧠 AI Agent Chatbot + LONG TERM Memory + Note Storage + Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/%F0%9F%A4%96%F0%9F%A7%A0%20AI%20Agent%20Chatbot%20%2B%20LONG%20TERM%20Memory%20%2B%20Note%20Storage%20%2B%20Telegram.json"
  },
  {
    id: "whatsapp-05",
    title: "Automate Sales Meeting Prep With AI & APIFY Sent To WhatsApp",
    description: "Ready-to-use n8n workflow for Automate Sales Meeting Prep With AI & APIFY Sent To WhatsApp. Import the JSON file and configure your credentials.",
    category: "whatsapp",
    department: "Support",
    tags: ["Automation","Whatsapp","Support"],
    file: "WhatsApp/Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/Automate%20Sales%20Meeting%20Prep%20with%20AI%20%26%20APIFY%20Sent%20To%20WhatsApp.json"
  },
  {
    id: "whatsapp-06",
    title: "Building Your First WhatsApp Chatbot",
    description: "Ready-to-use n8n workflow for Building Your First WhatsApp Chatbot. Import the JSON file and configure your credentials.",
    category: "whatsapp",
    department: "Support",
    tags: ["Automation","Whatsapp","Support"],
    file: "WhatsApp/Building Your First WhatsApp Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/Building%20Your%20First%20WhatsApp%20Chatbot.json"
  },
  {
    id: "whatsapp-07",
    title: "Business WhatsApp AI RAG Chatbot",
    description: "Ready-to-use n8n workflow for Complete Business WhatsApp AI Powered RAG Chatbot Using OpenAI. Import the JSON file and configure your credentials.",
    category: "whatsapp",
    department: "Support",
    tags: ["Automation","OpenAI","Whatsapp","RAG","Support"],
    file: "WhatsApp/Complete business WhatsApp AI-Powered RAG Chatbot using OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/Complete%20business%20WhatsApp%20AI-Powered%20RAG%20Chatbot%20using%20OpenAI.json"
  },
  {
    id: "whatsapp-08",
    title: "Respond To WhatsApp Messages With AI Like A Pro!",
    description: "Ready-to-use n8n workflow for Respond To WhatsApp Messages With AI Like A Pro!. Import the JSON file and configure your credentials.",
    category: "whatsapp",
    department: "Support",
    tags: ["Automation","Whatsapp","Support"],
    file: "WhatsApp/Respond to WhatsApp Messages with AI Like a Pro!.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/Respond%20to%20WhatsApp%20Messages%20with%20AI%20Like%20a%20Pro!.json"
  },
  {
    id: "wordpress-07",
    title: "Write A WordPress Post With AI (starting From A Few Keywords)",
    description: "Ready-to-use n8n workflow for Write A WordPress Post With AI (starting From A Few Keywords). Import the JSON file and configure your credentials.",
    category: "wordpress",
    department: "Marketing",
    tags: ["Automation","Wordpress","Marketing"],
    file: "WordPress/Write a WordPress post with AI (starting from a few keywords).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/Write%20a%20WordPress%20post%20with%20AI%20(starting%20from%20a%20few%20keywords).json"
  },
  {
    id: "other-40",
    title: "Automated Resume Review System Using OpenAI & Google Sheets",
    description: "Extracts applicant details from resume submissions via n8n forms, uploads resumes to Google Drive, extracts qualifications and info using OpenAI GPT, rates alignment against target profiles, and stores candidate evaluation scores in Google Sheets.",
    category: "other",
    department: "HR",
    tags: ["HR","Resume Review","OpenAI","Google Sheets","Google Drive"],
    file: "78-Automated_Resume_Review_System_Using_OpenAI___Google_Sheets.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/78-Automated_Resume_Review_System_Using_OpenAI___Google_Sheets.json"
  },
  {
    id: "other-41",
    title: "HR Job Application Screening & Evaluation with AI & Airtable",
    description: "An end-to-end recruitment screening workflow. Triggers when an applicant submits a job application form, uploads their CV to Google Drive, logs contact info in Airtable, extracts text from the CV, and uses an AI Agent to score the candidate against the Job Description in Airtable, moving them to Decision Needed or No Hire stages accordingly.",
    category: "other",
    department: "HR",
    tags: ["HR","Recruitment","AI Agent","Airtable","Google Drive"],
    file: "87-HR_Job_Posting_and_Evaluation_with_AI.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/87-HR_Job_Posting_and_Evaluation_with_AI.json"
  },
  {
    id: "gmail-24",
    title: "Scheduled Cold Email Campaign & Batch Sender",
    description: "A robust batch cold email outreach workflow. Triggers daily at 9 AM, reads prospect contacts from Google Sheets, randomizes and filters pending leads, normalizes name formats, and sends batches of personalized HTML emails via Gmail every hour while automatically pausing outside of business hours (8 PM IST) and logging status to the sheet.",
    category: "gmail",
    department: "Marketing",
    tags: ["Gmail","Cold Email","Outreach","Google Sheets","Batch Sender"],
    file: "brands2be_email_automation.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/brands2be_email_automation.json"
  },
  {
    id: "integrations-01",
    title: "Google Ads Competitor Analysis & Ingestion Pipeline",
    description: "An automated competitor analysis pipeline. Triggers when keywords and location are submitted, queries Google Search results across multiple pages via SearchAPI, extracts and deduplicates competitor domains (ranking by Ads, Local, and Organic), queries SerpAPI's Google Ads Transparency Center to determine how many ads each competitor is running, and logs results in Airtable.",
    category: "integrations",
    department: "Marketing",
    tags: ["Google Ads","Competitor Analysis","Airtable","SerpAPI","SearchAPI"],
    file: "googleads_competitor_analysis.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/googleads_competitor_analysis.json"
  },
  {
    id: "social-13",
    title: "Meta Lead Intelligence & Daily Performance Report with Claude AI",
    description: "An automated daily performance reporting workflow. Fetches campaign, adset, and ad-level performance metrics from Meta Graph API, calculates rolling performance baselines using Google Sheets, and uses Claude AI to analyze ads data and generate strategic recommendations, saving the results back to Google Sheets.",
    category: "social",
    department: "Marketing",
    tags: ["Meta Ads","Facebook Ads","Claude AI","Marketing Analytics","Google Sheets"],
    file: "Meta Lead Intelligence — Daily Report.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/Meta%20Lead%20Intelligence%20%E2%80%94%20Daily%20Report.json"
  },
  {
    id: "social-14",
    title: "Omnichannel Social Media Auto-Poster & Scheduler",
    description: "An advanced multi-platform scheduling and auto-posting system. Triggers by reading scheduled posts from a database, routes content dynamically based on target platforms (Instagram, Facebook Page, LinkedIn, YouTube) and formats (Single Image, Carousel, Reels/Videos, Stories, Articles), downloads media, and auto-posts via official Graph APIs.",
    category: "social",
    department: "Marketing",
    tags: ["Social Media","Facebook API","Instagram API","LinkedIn API","YouTube API"],
    file: "social_media_preeti.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/social_media_preeti.json"
  },
  {
    id: "rag-81",
    title: "RAG-Powered AI Voice & Support Agent",
    description: "An AI support agent (\"Riya\") built using Google Gemini and Pinecone. Takes incoming search queries via webhooks, retrieves context from a Pinecone vector index using Gemini embeddings, answers support questions based only on retrieved context, and returns the response dynamically.",
    category: "rag",
    department: "Support",
    tags: ["RAG","Gemini","Pinecone","Support Bot","Webhook"],
    file: "voice agent.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/voice%20agent.json"
  },
  {
    id: "whatsapp-09",
    title: "WhatsApp AI Lead Capture Chatbot (NIHT Institute)",
    description: "An AI-powered conversational chatbot (\"Nisha\") for WhatsApp. Triggers on incoming WhatsApp messages, uses Gemini and Pinecone to answer course queries, maintains session memory, politely collects lead information (name, email, phone) step-by-step, saves leads to Airtable, and routes pricing queries.",
    category: "whatsapp",
    department: "Sales",
    tags: ["WhatsApp","AI Chatbot","Gemini","Pinecone","Lead Capture"],
    file: "whatsapp_chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/akashrana0037/vyom-n8n-templates/master/whatsapp_chatbot.json"
  },
];
