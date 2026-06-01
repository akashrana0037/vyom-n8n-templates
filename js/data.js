// Vyom — n8n Template Library Data
// All templates with local download paths (place JSON files in /templates/ folder)

const CATEGORIES = [
  { id: "all", label: "All Templates", icon: "⚡" },
  { id: "gmail", label: "Gmail & Email", icon: "✉️" },
  { id: "telegram", label: "Telegram", icon: "✈️" },
  { id: "google", label: "Google Drive & Sheets", icon: "📁" },
  { id: "wordpress", label: "WordPress", icon: "🌐" },
  { id: "pdf", label: "PDF & Documents", icon: "📄" },
  { id: "discord", label: "Discord", icon: "🎮" },
  { id: "database", label: "Database & Storage", icon: "🗄️" },
  { id: "devops", label: "DevOps", icon: "⚙️" },
  { id: "airtable", label: "Airtable", icon: "🔷" },
  { id: "notion", label: "Notion", icon: "📓" },
  { id: "slack", label: "Slack", icon: "💬" },
  { id: "openai", label: "OpenAI & LLMs", icon: "🧠" },
  { id: "whatsapp", label: "WhatsApp", icon: "📱" },
  { id: "social", label: "Social Media", icon: "📸" },
  { id: "integrations", label: "Other Integrations", icon: "🔗" },
  { id: "forms", label: "Forms & Surveys", icon: "📋" },
  { id: "rag", label: "AI Research & RAG", icon: "🔬" },
  { id: "other", label: "Other", icon: "🎯" },
];

const DEPARTMENTS = ["All", "Ops", "Sales", "Support", "Marketing", "Security", "Engineering", "HR", "Executive"];

const TEMPLATES = [
  // ─── Gmail & Email Automation ───────────────────────────────
  {
    id: "gmail-01",
    title: "Auto-label Incoming Gmail Messages with AI",
    description: "Automatically labels incoming Gmail messages using AI. Retrieves message content, suggests labels like Partnership or Inquiry, and assigns them for better organization.",
    category: "gmail",
    department: "Ops",
    tags: ["Gmail", "AI", "Labels", "Automation"],
    file: "Gmail_and_Email_Automation/Auto-label incoming Gmail messages with AI nodes.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Auto-label%20incoming%20Gmail%20messages%20with%20AI%20nodes.json"
  },
  {
    id: "gmail-02",
    title: "Basic Automatic Gmail Email Labelling with OpenAI",
    description: "Uses OpenAI and Gmail API to trigger on new emails, analyze content, and assign or create labels automatically. Categorizes emails efficiently using AI.",
    category: "gmail",
    department: "Ops",
    tags: ["Gmail", "OpenAI", "Labels", "API"],
    file: "Gmail_and_Email_Automation/Basic Automatic Gmail Email Labelling with OpenAI and Gmail API.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Basic%20Automatic%20Gmail%20Email%20Labelling%20with%20OpenAI%20and%20Gmail%20API.json"
  },
  {
    id: "gmail-03",
    title: "Compose Reply Draft in Gmail with OpenAI Assistant",
    description: "Generates draft replies in Gmail using OpenAI. Triggers on new emails, extracts content, and creates a suggested reply draft to streamline responses.",
    category: "gmail",
    department: "Executive",
    tags: ["Gmail", "OpenAI", "Draft", "Assistant"],
    file: "Gmail_and_Email_Automation/Compose reply draft in Gmail with OpenAI Assistant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Compose%20reply%20draft%20in%20Gmail%20with%20OpenAI%20Assistant.json"
  },
  {
    id: "gmail-04",
    title: "Analyze & Sort Suspicious Emails with ChatGPT",
    description: "Analyzes suspicious emails using ChatGPT, classifies them, and generates screenshots for review. Helps identify and sort potentially dangerous emails.",
    category: "gmail",
    department: "Security",
    tags: ["ChatGPT", "Security", "Phishing", "Email"],
    file: "Gmail_and_Email_Automation/Analyze & Sort Suspicious Email Contents with ChatGPT.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Analyze%20%26%20Sort%20Suspicious%20Email%20Contents%20with%20ChatGPT.json"
  },
  {
    id: "gmail-05",
    title: "Analyze Suspicious Emails with ChatGPT Vision",
    description: "Uses text and image analysis (ChatGPT Vision) to evaluate suspicious emails. Extracts screenshots, analyzes headers and content, and flags phishing attempts.",
    category: "gmail",
    department: "Security",
    tags: ["ChatGPT Vision", "Security", "Phishing", "Vision AI"],
    file: "Gmail_and_Email_Automation/Analyze Suspicious Email Contents with ChatGPT Vision.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Analyze%20Suspicious%20Email%20Contents%20with%20ChatGPT%20Vision.json"
  },
  {
    id: "gmail-06",
    title: "Human-in-the-Loop Email Response System (IMAP)",
    description: "A simple human-in-the-loop workflow for email responses. Fetches emails via IMAP, summarizes with AI, and drafts professional replies for human review before sending.",
    category: "gmail",
    department: "Support",
    tags: ["IMAP", "AI", "Human-in-loop", "Email"],
    file: "Gmail_and_Email_Automation/A Very Simple Human in the Loop Email Response System Using AI and IMAP.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/A%20Very%20Simple%20_Human%20in%20the%20Loop_%20Email%20Response%20System%20Using%20AI%20and%20IMAP.json"
  },
  {
    id: "gmail-07",
    title: "Auto Categorise Outlook Emails with AI",
    description: "Automatically categorizes Outlook emails using AI models. Moves messages to folders and assigns categories based on content, reducing manual sorting effort.",
    category: "gmail",
    department: "Ops",
    tags: ["Outlook", "AI", "Categories", "Microsoft"],
    file: "Gmail_and_Email_Automation/Auto Categorise Outlook Emails with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Auto%20Categorise%20Outlook%20Emails%20with%20AI.json"
  },
  {
    id: "gmail-08",
    title: "Microsoft Outlook AI Email Assistant with Monday & Airtable",
    description: "AI-powered assistant for Outlook that processes emails, sanitizes content, assigns categories using Airtable rules, and integrates with Monday.com for contact support.",
    category: "gmail",
    department: "Ops",
    tags: ["Outlook", "Airtable", "Monday.com", "AI"],
    file: "Gmail_and_Email_Automation/Microsoft Outlook AI Email Assistant with contact support from Monday and Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/Microsoft%20Outlook%20AI%20Email%20Assistant%20with%20contact%20support%20from%20Monday%20and%20Airtable.json"
  },
  {
    id: "gmail-09",
    title: "Daily Market News from FT.com to Outlook Inbox",
    description: "Extracts financial news from FT.com and delivers daily updates to your Outlook inbox. Automates content extraction and email delivery for timely market insights.",
    category: "gmail",
    department: "Executive",
    tags: ["Outlook", "News", "Finance", "FT.com"],
    file: "Gmail_and_Email_Automation/📈 Receive Daily Market News from FT.com to your Microsoft outlook inbox.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/%F0%9F%93%88%20Receive%20Daily%20Market%20News%20from%20FT.com%20to%20your%20Microsoft%20outlook%20inbox.json"
  },
  {
    id: "gmail-10",
    title: "AI Email Auto-Responder with Ollama (Local)",
    description: "Classifies incoming emails, filters spam, and drafts context-aware replies using Ollama local AI. No external API keys required — fully private.",
    category: "gmail",
    department: "Support",
    tags: ["Ollama", "Local AI", "Email", "Privacy"],
    file: "Gmail_and_Email_Automation/AI Email Auto-Responder with Ollama.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/AI%20Email%20Auto-Responder%20with%20Ollama.json"
  },
  {
    id: "gmail-11",
    title: "InboxZero Lite — AI Email Classifier",
    description: "AI classifies Gmail emails as urgent, important, info, or spam using OpenAI GPT-4o-mini. Lightweight single-workflow setup with Google Sheets logging.",
    category: "gmail",
    department: "Ops",
    tags: ["Gmail", "GPT-4o-mini", "InboxZero", "Classifier"],
    file: "Gmail_and_Email_Automation/InboxZero Lite - AI Email Classifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/InboxZero%20Lite%20-%20AI%20Email%20Classifier.json"
  },
  {
    id: "gmail-12",
    title: "LeadPilot Lite — AI Cold Email Writer",
    description: "AI writes personalized cold emails from a Google Sheets lead list using OpenAI. Generates subject lines and body text tailored to each prospect automatically.",
    category: "gmail",
    department: "Sales",
    tags: ["OpenAI", "Cold Email", "Leads", "Google Sheets"],
    file: "Gmail_and_Email_Automation/LeadPilot Lite - AI Cold Email Writer.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Gmail_and_Email_Automation/LeadPilot%20Lite%20-%20AI%20Cold%20Email%20Writer.json"
  },

  // ─── Telegram ───────────────────────────────────────────────
  {
    id: "telegram-01",
    title: "Agentic Telegram AI Bot with LangChain",
    description: "Advanced Telegram bot leveraging LangChain and OpenAI for conversational AI. Supports memory, dynamic tool use, and handles incoming events for rich context-aware chat.",
    category: "telegram",
    department: "Support",
    tags: ["LangChain", "OpenAI", "Telegram", "Agentic"],
    file: "Telegram/Agentic Telegram AI bot with with LangChain nodes and new tools.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Agentic%20Telegram%20AI%20bot%20with%20with%20LangChain%20nodes%20and%20new%20tools.json"
  },
  {
    id: "telegram-02",
    title: "AI Children's Arabic Storytelling Bot (Telegram)",
    description: "A Telegram bot that uses OpenAI to generate and narrate children's stories in Arabic, making storytelling interactive and educational for young users.",
    category: "telegram",
    department: "Support",
    tags: ["OpenAI", "Arabic", "Stories", "Education"],
    file: "Telegram/AI-Powered Children_s Arabic Storytelling on Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/AI-Powered%20Children_s%20Arabic%20Storytelling%20on%20Telegram.json"
  },
  {
    id: "telegram-03",
    title: "AI Children's English Storytelling Bot (Telegram)",
    description: "Creates and tells children's stories in English using OpenAI to engage young audiences in an interactive way via Telegram.",
    category: "telegram",
    department: "Support",
    tags: ["OpenAI", "Stories", "Education", "English"],
    file: "Telegram/AI-Powered Children_s English Storytelling on Telegram with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/AI-Powered%20Children_s%20English%20Storytelling%20on%20Telegram%20with%20OpenAI.json"
  },
  {
    id: "telegram-04",
    title: "Automated AI Image Analysis via Telegram",
    description: "Lets users send images to Telegram and receive AI-based analysis and feedback automatically. Perfect for visual inspection and moderation workflows.",
    category: "telegram",
    department: "Ops",
    tags: ["Vision AI", "Image Analysis", "Telegram", "Automation"],
    file: "Telegram/Automated AI image analysis and response via Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Automated%20AI%20image%20analysis%20and%20response%20via%20Telegram.json"
  },
  {
    id: "telegram-05",
    title: "Angie — Personal AI Assistant (Voice & Text)",
    description: "Personal voice & text assistant bot that answers queries, manages tasks, and interacts naturally using AI. Handles both audio and text messages.",
    category: "telegram",
    department: "Support",
    tags: ["Voice", "AI Assistant", "Personal", "Telegram"],
    file: "Telegram/Angie, Personal AI Assistant with Telegram Voice and Text.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Angie,%20Personal%20AI%20Assistant%20with%20Telegram%20Voice%20and%20Text.json"
  },
  {
    id: "telegram-06",
    title: "Chat with OpenAI GPT via Telegram Bot",
    description: "A minimal Telegram bot that forwards user messages to GPT and returns AI-generated replies. Ideal starting point for building AI chat integrations.",
    category: "telegram",
    department: "Support",
    tags: ["GPT", "Telegram", "Chatbot", "Simple"],
    file: "Telegram/Chat with OpenAIs GPT via a simple Telegram Bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Chat%20with%20OpenAIs%20GPT%20via%20a%20simple%20Telegram%20Bot.json"
  },
  {
    id: "telegram-07",
    title: "Telegram AI Assistant — Voice & Text Ready",
    description: "Ready-made assistant bot handling both voice and text input, leveraging AI for smart conversational responses. Plug-and-play template.",
    category: "telegram",
    department: "Support",
    tags: ["Voice", "Text", "Assistant", "Telegram"],
    file: "Telegram/Telegram AI bot assistant_ ready-made template for voice & text messages.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20bot%20assistant_%20ready-made%20template%20for%20voice%20%26%20text%20messages.json"
  },
  {
    id: "telegram-08",
    title: "Telegram AI Bot with NeurochainAI (Text & Image)",
    description: "Integrates NeurochainAI API for text and image generation inside Telegram, enabling creative media interactions and AI-generated content.",
    category: "telegram",
    department: "Marketing",
    tags: ["NeurochainAI", "Image Generation", "Text", "Telegram"],
    file: "Telegram/Telegram AI Bot_ NeurochainAI Text & Image - NeurochainAI Basic API Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20Bot_%20NeurochainAI%20Text%20%26%20Image%20-%20NeurochainAI%20Basic%20API%20Integration.json"
  },
  {
    id: "telegram-09",
    title: "Telegram AI Bot with LangChain Nodes",
    description: "Uses LangChain nodes for advanced AI conversations and dynamic tool use in Telegram. Supports multi-step reasoning and external tool calls.",
    category: "telegram",
    department: "Support",
    tags: ["LangChain", "AI", "Tools", "Telegram"],
    file: "Telegram/Telegram AI bot with LangChain nodes.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20bot%20with%20LangChain%20nodes.json"
  },
  {
    id: "telegram-10",
    title: "Telegram AI Chatbot (General Purpose)",
    description: "A general-purpose AI chatbot template for Telegram that can be customized for various use cases. Includes conversation handling and AI response generation.",
    category: "telegram",
    department: "Support",
    tags: ["Chatbot", "General", "Telegram", "AI"],
    file: "Telegram/Telegram AI Chatbot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20AI%20Chatbot.json"
  },
  {
    id: "telegram-11",
    title: "Telegram Bot with Supabase Memory & OpenAI",
    description: "Adds long-term memory with Supabase to a Telegram bot, combined with OpenAI for rich, context-aware conversations that remember past interactions.",
    category: "telegram",
    department: "Support",
    tags: ["Supabase", "Memory", "OpenAI", "Telegram"],
    file: "Telegram/Telegram Bot with Supabase memory and OpenAI assistant integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20Bot%20with%20Supabase%20memory%20and%20OpenAI%20assistant%20integration.json"
  },
  {
    id: "telegram-12",
    title: "Telegram Chat with PDF",
    description: "Allows users to upload a PDF to Telegram and chat with its contents using AI-powered summarization and Q&A. Ideal for document analysis workflows.",
    category: "telegram",
    department: "Ops",
    tags: ["PDF", "Chat", "AI", "Telegram"],
    file: "Telegram/Telegram chat with PDF.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20chat%20with%20PDF.json"
  },
  {
    id: "telegram-13",
    title: "Telegram Messaging Agent (Text, Audio & Images)",
    description: "Multi-modal agent that processes text, audio, and images in Telegram chats using AI for responses. Handles all major input types seamlessly.",
    category: "telegram",
    department: "Support",
    tags: ["Multi-modal", "Audio", "Images", "Telegram"],
    file: "Telegram/🤖 Telegram Messaging Agent for Text_Audio_Images.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/%F0%9F%A4%96%20Telegram%20Messaging%20Agent%20for%20Text_Audio_Images.json"
  },
  {
    id: "telegram-14",
    title: "Telegram to Spotify with OpenAI",
    description: "Lets users request songs or playlists in Telegram and automatically creates them in Spotify via OpenAI. Bridges conversational AI and music streaming.",
    category: "telegram",
    department: "Marketing",
    tags: ["Spotify", "OpenAI", "Music", "Telegram"],
    file: "Telegram/Telegram to Spotify with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Telegram%20to%20Spotify%20with%20OpenAI.json"
  },
  {
    id: "telegram-15",
    title: "Daily Random Recipe to Telegram",
    description: "Scheduled workflow that fetches a random recipe daily and posts it to a Telegram chat. Great for food communities and cooking bots.",
    category: "telegram",
    department: "Marketing",
    tags: ["Recipe", "Scheduled", "Daily", "Telegram"],
    file: "Telegram/Send a random recipe once a day to Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Send%20a%20random%20recipe%20once%20a%20day%20to%20Telegram.json"
  },
  {
    id: "telegram-16",
    title: "Detect Toxic Language in Telegram Messages",
    description: "Monitors Telegram chats and flags messages containing toxic language using AI moderation. Keeps communities safe with automated content moderation.",
    category: "telegram",
    department: "Security",
    tags: ["Moderation", "Toxic", "Safety", "Telegram"],
    file: "Telegram/Detect toxic language in Telegram messages.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Detect%20toxic%20language%20in%20Telegram%20messages.json"
  },
  {
    id: "telegram-17",
    title: "Translate Telegram Audio Messages (55 Languages)",
    description: "Receives voice messages, transcribes them using AI, and sends back translations in over 55 languages. Breaks language barriers in global Telegram groups.",
    category: "telegram",
    department: "Support",
    tags: ["Translation", "Voice", "STT", "55 Languages"],
    file: "Telegram/Translate Telegram audio messages with AI (55 supported languages).json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Telegram/Translate%20Telegram%20audio%20messages%20with%20AI%20(55%20supported%20languages).json"
  },

  // ─── Google Drive & Google Sheets ───────────────────────────
  {
    id: "google-01",
    title: "Automated End-to-End OpenAI Model Fine-Tuning with Google Drive",
    description: "Automates fine-tuning of OpenAI models by integrating with Google Drive for data input and output. Streamlines custom AI model training pipelines.",
    category: "google",
    department: "Engineering",
    tags: ["OpenAI", "Fine-tuning", "Google Drive", "ML"],
    file: "Google_Drive_and_Google_Sheets/Automated End-to-End Fine-Tuning of OpenAI Models with Google Drive Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Automated%20End-to-End%20Fine-Tuning%20of%20OpenAI%20Models%20with%20Google%20Drive%20Integration.json"
  },
  {
    id: "google-02",
    title: "Automatic Background Removal for Google Drive Images",
    description: "Automatically removes backgrounds from images stored in Google Drive, preparing them for product catalogs, marketing materials, or social media.",
    category: "google",
    department: "Marketing",
    tags: ["Image Processing", "Background Removal", "Google Drive"],
    file: "Google_Drive_and_Google_Sheets/Automatic Background Removal for Images in Google Drive.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Automatic%20Background%20Removal%20for%20Images%20in%20Google%20Drive.json"
  },
  {
    id: "google-03",
    title: "Build an OpenAI Assistant with Google Drive",
    description: "Demonstrates building an OpenAI Assistant that accesses files in Google Drive, enabling it to answer questions or perform tasks based on document content.",
    category: "google",
    department: "Support",
    tags: ["OpenAI Assistant", "Google Drive", "Q&A", "Documents"],
    file: "Google_Drive_and_Google_Sheets/Build an OpenAI Assistant with Google Drive Integration.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Build%20an%20OpenAI%20Assistant%20with%20Google%20Drive%20Integration.json"
  },
  {
    id: "google-04",
    title: "RAG Chatbot for Company Documents (Google Drive + Gemini)",
    description: "Creates a Retrieval-Augmented Generation chatbot that answers questions based on company documents stored in Google Drive, leveraging Google Gemini.",
    category: "google",
    department: "Support",
    tags: ["RAG", "Gemini", "Google Drive", "Chatbot"],
    file: "Google_Drive_and_Google_Sheets/RAG Chatbot for Company Documents using Google Drive and Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/RAG%20Chatbot%20for%20Company%20Documents%20using%20Google%20Drive%20and%20Gemini.json"
  },
  {
    id: "google-05",
    title: "Context-Aware RAG Chunking — Google Drive to Pinecone",
    description: "Implements context-aware chunking for Google Drive documents, sending them to Pinecone for vector storage using OpenRouter & Gemini for advanced RAG.",
    category: "google",
    department: "Engineering",
    tags: ["RAG", "Pinecone", "Chunking", "Vector DB"],
    file: "Google_Drive_and_Google_Sheets/RAG_Context-Aware Chunking _ Google Drive to Pinecone via OpenRouter & Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/RAG_Context-Aware%20Chunking%20_%20Google%20Drive%20to%20Pinecone%20via%20OpenRouter%20%26%20Gemini.json"
  },
  {
    id: "google-06",
    title: "Summarize Google Drive Documents & Save to Sheets",
    description: "Monitors Google Drive for new documents, summarizes content using AI, and saves summaries into a Google Sheet for quick overview and analysis.",
    category: "google",
    department: "Ops",
    tags: ["Summarization", "Google Drive", "Google Sheets", "AI"],
    file: "Google_Drive_and_Google_Sheets/Summarize the New Documents from Google Drive and Save Summary in Google Sheet.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Summarize%20the%20New%20Documents%20from%20Google%20Drive%20and%20Save%20Summary%20in%20Google%20Sheet.json"
  },
  {
    id: "google-07",
    title: "Upload to Instagram and TikTok from Google Drive",
    description: "Automates uploading media from Google Drive directly to Instagram and TikTok. Streamlines social media content publishing workflows.",
    category: "google",
    department: "Marketing",
    tags: ["Instagram", "TikTok", "Google Drive", "Social Media"],
    file: "Google_Drive_and_Google_Sheets/Upload to Instagram and Tiktok from Google Drive.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Upload%20to%20Instagram%20and%20Tiktok%20from%20Google%20Drive.json"
  },
  {
    id: "google-08",
    title: "Author and Publish Blog Posts from Google Sheets",
    description: "Enables authoring blog posts in Google Sheets and automatically publishing them to a CMS. Simplifies content creation and publishing workflows.",
    category: "google",
    department: "Marketing",
    tags: ["Blog", "Google Sheets", "CMS", "Publishing"],
    file: "Google_Drive_and_Google_Sheets/Author and Publish Blog Posts From Google Sheets.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Author%20and%20Publish%20Blog%20Posts%20From%20Google%20Sheets.json"
  },
  {
    id: "google-09",
    title: "Chat with a Google Sheet using AI",
    description: "Allows users to interact with and query data within a Google Sheet using natural language via an AI model. Makes spreadsheet data analysis conversational.",
    category: "google",
    department: "Ops",
    tags: ["Google Sheets", "AI Chat", "Natural Language", "Data"],
    file: "Google_Drive_and_Google_Sheets/Chat with a Google Sheet using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Chat%20with%20a%20Google%20Sheet%20using%20AI.json"
  },
  {
    id: "google-10",
    title: "Chat with Your Event Schedule from Google Sheets in Telegram",
    description: "Connects a Google Sheet event schedule to Telegram, allowing users to query their schedule through a Telegram bot using natural language.",
    category: "google",
    department: "Ops",
    tags: ["Events", "Google Sheets", "Telegram", "Schedule"],
    file: "Google_Drive_and_Google_Sheets/Chat with your event schedule from Google Sheets in Telegram.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Chat%20with%20your%20event%20schedule%20from%20Google%20Sheets%20in%20Telegram.json"
  },
  {
    id: "google-11",
    title: "Qualify New Leads in Google Sheets via GPT-4",
    description: "Uses OpenAI GPT-4 to analyze and qualify new leads entered into a Google Sheet. Helps sales teams prioritize outreach with AI-scored leads.",
    category: "google",
    department: "Sales",
    tags: ["GPT-4", "Lead Qualification", "Google Sheets", "Sales"],
    file: "Google_Drive_and_Google_Sheets/Qualify new leads in Google Sheets via OpenAI_s GPT-4.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Qualify%20new%20leads%20in%20Google%20Sheets%20via%20OpenAI_s%20GPT-4.json"
  },
  {
    id: "google-12",
    title: "Screen Applicants with AI and Save to Google Sheet",
    description: "Automates the screening of job applicants using AI, notifies HR of qualified candidates, and saves applicant data into a Google Sheet.",
    category: "google",
    department: "HR",
    tags: ["HR", "Applicant Screening", "Google Sheets", "AI"],
    file: "Google_Drive_and_Google_Sheets/Screen Applicants With AI, notify HR and save them in a Google Sheet.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Screen%20Applicants%20With%20AI%2C%20notify%20HR%20and%20save%20them%20in%20a%20Google%20Sheet.json"
  },
  {
    id: "google-13",
    title: "Summarize Google Sheets Feedback via GPT-4",
    description: "Summarizes feedback collected through Google Forms and stored in Google Sheets using GPT-4, providing quick insights from survey responses.",
    category: "google",
    department: "Marketing",
    tags: ["GPT-4", "Feedback", "Google Sheets", "Summarization"],
    file: "Google_Drive_and_Google_Sheets/Summarize Google Sheets form feedback via OpenAI_s GPT-4.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Google_Drive_and_Google_Sheets/Summarize%20Google%20Sheets%20form%20feedback%20via%20OpenAI_s%20GPT-4.json"
  },

  // ─── WordPress ───────────────────────────────────────────────
  {
    id: "wp-01",
    title: "AI-Powered WordPress Blog Post Creator",
    description: "Automatically generates SEO-optimized blog posts using AI and publishes them directly to WordPress. Streamlines content creation for blogs and news sites.",
    category: "wordpress",
    department: "Marketing",
    tags: ["WordPress", "AI", "Blog", "SEO"],
    file: "WordPress/AI-Powered WordPress Blog Post Creator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/AI-Powered%20WordPress%20Blog%20Post%20Creator.json"
  },
  {
    id: "wp-02",
    title: "WordPress Post Auto-Publisher from RSS Feed",
    description: "Monitors RSS feeds and automatically creates WordPress posts from new items. Perfect for news aggregation and content curation sites.",
    category: "wordpress",
    department: "Marketing",
    tags: ["WordPress", "RSS", "Publishing", "Automation"],
    file: "WordPress/WordPress Post Auto-Publisher from RSS Feed.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WordPress/WordPress%20Post%20Auto-Publisher%20from%20RSS%20Feed.json"
  },

  // ─── PDF & Document Processing ───────────────────────────────
  {
    id: "pdf-01",
    title: "Chat with PDF Documents using AI",
    description: "Upload any PDF and chat with its contents using AI-powered Q&A. Extracts text, creates vector embeddings, and answers questions from the document.",
    category: "pdf",
    department: "Ops",
    tags: ["PDF", "Chat", "AI", "Documents"],
    file: "PDF_and_Document_Processing/Chat with PDF Documents using AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Chat%20with%20PDF%20Documents%20using%20AI.json"
  },
  {
    id: "pdf-02",
    title: "AI PDF Summarizer and Report Generator",
    description: "Automatically summarizes PDF documents using AI and generates structured reports. Ideal for processing research papers, contracts, and business documents.",
    category: "pdf",
    department: "Ops",
    tags: ["PDF", "Summarization", "Reports", "AI"],
    file: "PDF_and_Document_Processing/AI PDF Summarizer and Report Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/AI%20PDF%20Summarizer%20and%20Report%20Generator.json"
  },
  {
    id: "pdf-03",
    title: "Extract Data from PDFs with AI",
    description: "Extracts structured data from PDF invoices, forms, and reports using AI. Outputs clean JSON data ready for further processing or storage.",
    category: "pdf",
    department: "Ops",
    tags: ["PDF", "Data Extraction", "OCR", "AI"],
    file: "PDF_and_Document_Processing/Extract Data from PDFs with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/PDF_and_Document_Processing/Extract%20Data%20from%20PDFs%20with%20AI.json"
  },

  // ─── Discord ─────────────────────────────────────────────────
  {
    id: "discord-01",
    title: "Discord AI Chatbot with OpenAI",
    description: "AI-powered Discord bot that responds to messages using OpenAI. Supports conversational context and can be configured for specific server use cases.",
    category: "discord",
    department: "Support",
    tags: ["Discord", "OpenAI", "Chatbot", "Community"],
    file: "Discord/Discord AI Chatbot with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Discord/Discord%20AI%20Chatbot%20with%20OpenAI.json"
  },
  {
    id: "discord-02",
    title: "Discord Welcome Bot with Role Assignment",
    description: "Automatically welcomes new Discord members with a personalized message and assigns roles based on their onboarding responses.",
    category: "discord",
    department: "Ops",
    tags: ["Discord", "Welcome", "Roles", "Onboarding"],
    file: "Discord/Discord Welcome Bot with Role Assignment.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Discord/Discord%20Welcome%20Bot%20with%20Role%20Assignment.json"
  },
  {
    id: "discord-03",
    title: "Discord Notification Bot for GitHub Events",
    description: "Sends Discord notifications for GitHub events like pushes, pull requests, and issues. Keeps your development team informed in real-time.",
    category: "discord",
    department: "Engineering",
    tags: ["Discord", "GitHub", "Notifications", "DevOps"],
    file: "Discord/Discord Notification Bot for GitHub Events.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Discord/Discord%20Notification%20Bot%20for%20GitHub%20Events.json"
  },

  // ─── Database & Storage ──────────────────────────────────────
  {
    id: "db-01",
    title: "AI-Powered PostgreSQL Query Generator",
    description: "Generate and execute PostgreSQL queries using natural language. Connects AI to your database for non-technical users to query data conversationally.",
    category: "database",
    department: "Engineering",
    tags: ["PostgreSQL", "AI", "Natural Language", "SQL"],
    file: "Database_and_Storage/AI-Powered PostgreSQL Query Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/AI-Powered%20PostgreSQL%20Query%20Generator.json"
  },
  {
    id: "db-02",
    title: "Sync Airtable to PostgreSQL Automatically",
    description: "Automatically syncs Airtable records to a PostgreSQL database. Keeps your relational database up-to-date with no-code data from Airtable.",
    category: "database",
    department: "Engineering",
    tags: ["Airtable", "PostgreSQL", "Sync", "Database"],
    file: "Database_and_Storage/Sync Airtable to PostgreSQL Automatically.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/Sync%20Airtable%20to%20PostgreSQL%20Automatically.json"
  },
  {
    id: "db-03",
    title: "Supabase Vector Store for RAG Pipeline",
    description: "Sets up a Supabase pgvector store for RAG (Retrieval-Augmented Generation) pipelines. Ingests documents, creates embeddings, and enables semantic search.",
    category: "database",
    department: "Engineering",
    tags: ["Supabase", "Vector DB", "RAG", "Embeddings"],
    file: "Database_and_Storage/Supabase Vector Store for RAG Pipeline.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Database_and_Storage/Supabase%20Vector%20Store%20for%20RAG%20Pipeline.json"
  },

  // ─── DevOps ──────────────────────────────────────────────────
  {
    id: "devops-01",
    title: "Server Uptime Monitor with Slack Alerts",
    description: "Monitors server uptime at regular intervals and sends Slack alerts when a service goes down. Includes recovery notifications when services come back online.",
    category: "devops",
    department: "Engineering",
    tags: ["Monitoring", "Uptime", "Slack", "Alerts"],
    file: "devops/Server Uptime Monitor with Slack Alerts.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/devops/Server%20Uptime%20Monitor%20with%20Slack%20Alerts.json"
  },
  {
    id: "devops-02",
    title: "GitHub PR Review Reminder Bot",
    description: "Sends automated reminders for open pull requests that haven't been reviewed. Pings team members in Slack or Discord based on PR age.",
    category: "devops",
    department: "Engineering",
    tags: ["GitHub", "PR Review", "Reminders", "Team"],
    file: "devops/GitHub PR Review Reminder Bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/devops/GitHub%20PR%20Review%20Reminder%20Bot.json"
  },
  {
    id: "devops-03",
    title: "Automated Docker Container Health Check",
    description: "Monitors Docker containers health status and automatically restarts failed containers. Sends alert notifications when manual intervention is needed.",
    category: "devops",
    department: "Engineering",
    tags: ["Docker", "Health Check", "Monitoring", "Automation"],
    file: "devops/Automated Docker Container Health Check.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/devops/Automated%20Docker%20Container%20Health%20Check.json"
  },

  // ─── Airtable ────────────────────────────────────────────────
  {
    id: "airtable-01",
    title: "AI Lead Scoring in Airtable",
    description: "Automatically scores new leads added to Airtable using AI analysis. Ranks prospects by conversion probability and updates records with score and reasoning.",
    category: "airtable",
    department: "Sales",
    tags: ["Airtable", "Lead Scoring", "AI", "CRM"],
    file: "Airtable/AI Lead Scoring in Airtable.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/AI%20Lead%20Scoring%20in%20Airtable.json"
  },
  {
    id: "airtable-02",
    title: "Airtable CRM to Email Campaign Automation",
    description: "Reads contacts from Airtable CRM and triggers personalized email campaigns based on lifecycle stage. Syncs status back after emails are sent.",
    category: "airtable",
    department: "Sales",
    tags: ["Airtable", "CRM", "Email", "Campaign"],
    file: "Airtable/Airtable CRM to Email Campaign Automation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/Airtable%20CRM%20to%20Email%20Campaign%20Automation.json"
  },
  {
    id: "airtable-03",
    title: "Airtable & Slack Project Update Notifier",
    description: "Watches Airtable project records for status changes and sends formatted Slack notifications. Keeps teams in sync without manual updates.",
    category: "airtable",
    department: "Ops",
    tags: ["Airtable", "Slack", "Notifications", "Projects"],
    file: "Airtable/Airtable & Slack Project Update Notifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Airtable/Airtable%20%26%20Slack%20Project%20Update%20Notifier.json"
  },

  // ─── Notion ──────────────────────────────────────────────────
  {
    id: "notion-01",
    title: "AI Meeting Notes to Notion",
    description: "Transcribes meeting recordings using AI, extracts action items, and saves structured notes to a Notion database. Never miss a follow-up again.",
    category: "notion",
    department: "Ops",
    tags: ["Notion", "Meeting Notes", "AI", "Transcription"],
    file: "Notion/AI Meeting Notes to Notion.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/AI%20Meeting%20Notes%20to%20Notion.json"
  },
  {
    id: "notion-02",
    title: "Sync Notion Database to Google Sheets",
    description: "Automatically syncs Notion database entries to Google Sheets in real-time. Enables spreadsheet-based analysis of Notion data.",
    category: "notion",
    department: "Ops",
    tags: ["Notion", "Google Sheets", "Sync", "Database"],
    file: "Notion/Sync Notion Database to Google Sheets.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Sync%20Notion%20Database%20to%20Google%20Sheets.json"
  },
  {
    id: "notion-03",
    title: "Notion AI Content Generator",
    description: "Generates content for Notion pages using AI based on a title or brief. Populates pages with structured sections, summaries, and action items.",
    category: "notion",
    department: "Marketing",
    tags: ["Notion", "AI", "Content", "Generator"],
    file: "Notion/Notion AI Content Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Notion/Notion%20AI%20Content%20Generator.json"
  },

  // ─── Slack ───────────────────────────────────────────────────
  {
    id: "slack-01",
    title: "Slack AI Assistant with OpenAI",
    description: "Adds an AI assistant to your Slack workspace that responds to questions and commands. Powered by OpenAI with context from your workspace.",
    category: "slack",
    department: "Support",
    tags: ["Slack", "OpenAI", "Assistant", "Workspace"],
    file: "Slack/Slack AI Assistant with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Slack%20AI%20Assistant%20with%20OpenAI.json"
  },
  {
    id: "slack-02",
    title: "Slack Daily Standup Collector",
    description: "Sends standup prompts to team members via Slack DM, collects responses, and posts a consolidated summary to a team channel. Asynchronous standups made easy.",
    category: "slack",
    department: "Engineering",
    tags: ["Slack", "Standup", "Team", "Daily"],
    file: "Slack/Slack Daily Standup Collector.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Slack%20Daily%20Standup%20Collector.json"
  },
  {
    id: "slack-03",
    title: "Slack Incident Alert from Monitoring Tools",
    description: "Receives alerts from monitoring tools (Grafana, PagerDuty, etc.) and posts formatted incident notifications to Slack channels with severity levels.",
    category: "slack",
    department: "Engineering",
    tags: ["Slack", "Incidents", "Monitoring", "Alerts"],
    file: "Slack/Slack Incident Alert from Monitoring Tools.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Slack/Slack%20Incident%20Alert%20from%20Monitoring%20Tools.json"
  },

  // ─── OpenAI & LLMs ───────────────────────────────────────────
  {
    id: "openai-01",
    title: "Multi-LLM Router — OpenAI, Claude & Gemini",
    description: "Intelligently routes requests to the best LLM (OpenAI, Claude, or Gemini) based on task type, cost, and performance. Reduces AI costs with smart routing.",
    category: "openai",
    department: "Engineering",
    tags: ["OpenAI", "Claude", "Gemini", "LLM Router"],
    file: "OpenAI_and_LLMs/Multi-LLM Router - OpenAI, Claude & Gemini.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Multi-LLM%20Router%20-%20OpenAI%2C%20Claude%20%26%20Gemini.json"
  },
  {
    id: "openai-02",
    title: "AI Agent with Web Search and Memory",
    description: "A fully agentic AI assistant with web search capabilities and persistent memory. Uses LangChain, OpenAI, and vector storage for context-aware responses.",
    category: "openai",
    department: "Engineering",
    tags: ["AI Agent", "Web Search", "Memory", "LangChain"],
    file: "OpenAI_and_LLMs/AI Agent with Web Search and Memory.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Agent%20with%20Web%20Search%20and%20Memory.json"
  },
  {
    id: "openai-03",
    title: "DeepSeek R1 AI Assistant",
    description: "Integrates DeepSeek R1 reasoning model for complex analytical tasks. Ideal for tasks requiring deep reasoning, math, and code analysis.",
    category: "openai",
    department: "Engineering",
    tags: ["DeepSeek", "R1", "Reasoning", "AI"],
    file: "OpenAI_and_LLMs/DeepSeek R1 AI Assistant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/DeepSeek%20R1%20AI%20Assistant.json"
  },
  {
    id: "openai-04",
    title: "AI Code Review Assistant",
    description: "Automatically reviews code changes using AI, identifies bugs, security issues, and suggests improvements. Integrates with GitHub PRs.",
    category: "openai",
    department: "Engineering",
    tags: ["Code Review", "AI", "GitHub", "Security"],
    file: "OpenAI_and_LLMs/AI Code Review Assistant.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/AI%20Code%20Review%20Assistant.json"
  },
  {
    id: "openai-05",
    title: "Ollama Local LLM Chat Interface",
    description: "Complete chat interface using Ollama for running LLMs locally. No API costs, full privacy, supports Llama, Mistral, and other open-source models.",
    category: "openai",
    department: "Engineering",
    tags: ["Ollama", "Local LLM", "Privacy", "Open Source"],
    file: "OpenAI_and_LLMs/Ollama Local LLM Chat Interface.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/OpenAI_and_LLMs/Ollama%20Local%20LLM%20Chat%20Interface.json"
  },

  // ─── WhatsApp ────────────────────────────────────────────────
  {
    id: "whatsapp-01",
    title: "WhatsApp AI Customer Support Bot",
    description: "Full AI-powered customer support bot for WhatsApp Business. Handles FAQs, escalates complex issues, and maintains conversation history.",
    category: "whatsapp",
    department: "Support",
    tags: ["WhatsApp", "Customer Support", "AI", "Business"],
    file: "WhatsApp/WhatsApp AI Customer Support Bot.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/WhatsApp%20AI%20Customer%20Support%20Bot.json"
  },
  {
    id: "whatsapp-02",
    title: "WhatsApp Order Status Notifier",
    description: "Sends automated WhatsApp messages for order status updates, shipping notifications, and delivery confirmations from your e-commerce platform.",
    category: "whatsapp",
    department: "Ops",
    tags: ["WhatsApp", "Orders", "E-commerce", "Notifications"],
    file: "WhatsApp/WhatsApp Order Status Notifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/WhatsApp%20Order%20Status%20Notifier.json"
  },
  {
    id: "whatsapp-03",
    title: "WhatsApp Lead Capture & CRM Sync",
    description: "Captures leads from WhatsApp conversations and syncs them to your CRM (HubSpot, Salesforce, or Airtable). Automates the sales pipeline intake.",
    category: "whatsapp",
    department: "Sales",
    tags: ["WhatsApp", "Leads", "CRM", "Sales"],
    file: "WhatsApp/WhatsApp Lead Capture & CRM Sync.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/WhatsApp/WhatsApp%20Lead%20Capture%20%26%20CRM%20Sync.json"
  },

  // ─── Social Media ─────────────────────────────────────────────
  {
    id: "social-01",
    title: "AI Social Media Content Generator",
    description: "Generates platform-optimized content for Instagram, Twitter/X, LinkedIn, and TikTok using AI. Creates captions, hashtags, and posting schedules.",
    category: "social",
    department: "Marketing",
    tags: ["Social Media", "AI", "Content", "Multi-platform"],
    file: "Instagram_Twitter_Social_Media/AI Social Media Content Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/AI%20Social%20Media%20Content%20Generator.json"
  },
  {
    id: "social-02",
    title: "Twitter/X Auto-Reply Bot with Sentiment Filter",
    description: "Monitors Twitter mentions and auto-replies using AI. Includes sentiment analysis to only respond to positive or neutral mentions, ignoring negative ones.",
    category: "social",
    department: "Marketing",
    tags: ["Twitter", "X", "Auto-Reply", "Sentiment"],
    file: "Instagram_Twitter_Social_Media/Twitter Auto-Reply Bot with Sentiment Filter.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Twitter%20Auto-Reply%20Bot%20with%20Sentiment%20Filter.json"
  },
  {
    id: "social-03",
    title: "Instagram Automated Post Scheduler",
    description: "Schedules and publishes Instagram posts automatically from a content calendar. Handles captions, hashtags, and optimal posting times.",
    category: "social",
    department: "Marketing",
    tags: ["Instagram", "Scheduler", "Content Calendar", "Publishing"],
    file: "Instagram_Twitter_Social_Media/Instagram Automated Post Scheduler.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/Instagram%20Automated%20Post%20Scheduler.json"
  },
  {
    id: "social-04",
    title: "LinkedIn AI Post Writer and Publisher",
    description: "Creates and publishes engaging LinkedIn posts using AI. Analyzes your industry trends and generates thought leadership content on a schedule.",
    category: "social",
    department: "Marketing",
    tags: ["LinkedIn", "AI Writing", "Publishing", "Thought Leadership"],
    file: "Instagram_Twitter_Social_Media/LinkedIn AI Post Writer and Publisher.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Instagram_Twitter_Social_Media/LinkedIn%20AI%20Post%20Writer%20and%20Publisher.json"
  },

  // ─── Other Integrations & Use Cases ──────────────────────────
  {
    id: "integrations-01",
    title: "HubSpot Contact Enrichment with AI",
    description: "Automatically enriches new HubSpot contacts with company data, social profiles, and AI-generated insights. Saves hours of manual research per lead.",
    category: "integrations",
    department: "Sales",
    tags: ["HubSpot", "Enrichment", "AI", "CRM"],
    file: "Other_Integrations_and_Use_Cases/HubSpot Contact Enrichment with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/HubSpot%20Contact%20Enrichment%20with%20AI.json"
  },
  {
    id: "integrations-02",
    title: "Calendly to CRM Sync with AI Summary",
    description: "Syncs new Calendly bookings to your CRM, generates AI meeting prep summaries, and sends briefing emails to sales reps before each call.",
    category: "integrations",
    department: "Sales",
    tags: ["Calendly", "CRM", "AI Summary", "Meetings"],
    file: "Other_Integrations_and_Use_Cases/Calendly to CRM Sync with AI Summary.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Calendly%20to%20CRM%20Sync%20with%20AI%20Summary.json"
  },
  {
    id: "integrations-03",
    title: "Stripe Payment to Notion & Slack Notifier",
    description: "Triggers on Stripe payment events and creates Notion records while notifying the team via Slack. Full payment lifecycle tracking in your workspace.",
    category: "integrations",
    department: "Ops",
    tags: ["Stripe", "Notion", "Slack", "Payments"],
    file: "Other_Integrations_and_Use_Cases/Stripe Payment to Notion & Slack Notifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Stripe%20Payment%20to%20Notion%20%26%20Slack%20Notifier.json"
  },
  {
    id: "integrations-04",
    title: "Zapier-Style Multi-App Connector",
    description: "A flexible multi-app connector that bridges services without a direct integration. Includes HTTP request handling, data transformation, and error recovery.",
    category: "integrations",
    department: "Engineering",
    tags: ["HTTP", "API", "Multi-app", "Connector"],
    file: "Other_Integrations_and_Use_Cases/Zapier-Style Multi-App Connector.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Other_Integrations_and_Use_Cases/Zapier-Style%20Multi-App%20Connector.json"
  },

  // ─── Forms & Surveys ──────────────────────────────────────────
  {
    id: "forms-01",
    title: "Typeform to Notion + Slack Notifier",
    description: "Saves new Typeform responses to Notion and sends a Slack notification. Perfect for lead capture forms, contact forms, and event registrations.",
    category: "forms",
    department: "Marketing",
    tags: ["Typeform", "Notion", "Slack", "Forms"],
    file: "Forms_and_Surveys/Typeform to Notion + Slack Notifier.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Forms_and_Surveys/Typeform%20to%20Notion%20%2B%20Slack%20Notifier.json"
  },
  {
    id: "forms-02",
    title: "AI Survey Analysis and Report Generator",
    description: "Collects survey responses and uses AI to analyze sentiment, identify themes, and generate executive summary reports automatically.",
    category: "forms",
    department: "Marketing",
    tags: ["Survey", "AI Analysis", "Reports", "Sentiment"],
    file: "Forms_and_Surveys/AI Survey Analysis and Report Generator.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Forms_and_Surveys/AI%20Survey%20Analysis%20and%20Report%20Generator.json"
  },
  {
    id: "forms-03",
    title: "n8n Form to Google Sheets with Validation",
    description: "Uses n8n's native form trigger to collect submissions, validate data with business rules, and store results in Google Sheets with formatting.",
    category: "forms",
    department: "Ops",
    tags: ["n8n Forms", "Google Sheets", "Validation", "Data Collection"],
    file: "Forms_and_Surveys/n8n Form to Google Sheets with Validation.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/Forms_and_Surveys/n8n%20Form%20to%20Google%20Sheets%20with%20Validation.json"
  },

  // ─── AI Research, RAG & Data Analysis ────────────────────────
  {
    id: "rag-01",
    title: "Full RAG Pipeline with Pinecone & OpenAI",
    description: "Complete Retrieval-Augmented Generation pipeline: document ingestion, chunking, embedding, Pinecone storage, and semantic Q&A. Production-ready.",
    category: "rag",
    department: "Engineering",
    tags: ["RAG", "Pinecone", "OpenAI", "Embeddings"],
    file: "AI_Research_RAG_and_Data_Analysis/Full RAG Pipeline with Pinecone & OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Full%20RAG%20Pipeline%20with%20Pinecone%20%26%20OpenAI.json"
  },
  {
    id: "rag-02",
    title: "Perplexity AI Research Agent",
    description: "An autonomous research agent using Perplexity AI to gather, synthesize, and summarize information on any topic. Outputs structured research reports.",
    category: "rag",
    department: "Engineering",
    tags: ["Perplexity", "Research", "Agent", "Summarization"],
    file: "AI_Research_RAG_and_Data_Analysis/Perplexity AI Research Agent.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Perplexity%20AI%20Research%20Agent.json"
  },
  {
    id: "rag-03",
    title: "Qdrant Vector Search with OpenAI",
    description: "Integrates Qdrant vector database with OpenAI for similarity search and RAG. Includes document ingestion, embedding generation, and query pipelines.",
    category: "rag",
    department: "Engineering",
    tags: ["Qdrant", "Vector Search", "OpenAI", "Similarity"],
    file: "AI_Research_RAG_and_Data_Analysis/Qdrant Vector Search with OpenAI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Qdrant%20Vector%20Search%20with%20OpenAI.json"
  },
  {
    id: "rag-04",
    title: "Web Scraper + AI Summarizer Pipeline",
    description: "Scrapes websites on schedule, extracts article content, and uses AI to create structured summaries. Ideal for competitive intelligence and news monitoring.",
    category: "rag",
    department: "Engineering",
    tags: ["Web Scraping", "AI", "Summarizer", "Intelligence"],
    file: "AI_Research_RAG_and_Data_Analysis/Web Scraper + AI Summarizer Pipeline.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Web%20Scraper%20%2B%20AI%20Summarizer%20Pipeline.json"
  },
  {
    id: "rag-05",
    title: "Sentiment Analysis Pipeline with AI",
    description: "Analyzes text data (reviews, tweets, feedback) for sentiment using AI. Aggregates results into dashboards with positive/negative/neutral breakdowns.",
    category: "rag",
    department: "Marketing",
    tags: ["Sentiment Analysis", "AI", "Reviews", "Analytics"],
    file: "AI_Research_RAG_and_Data_Analysis/Sentiment Analysis Pipeline with AI.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI_Research_RAG_and_Data_Analysis/Sentiment%20Analysis%20Pipeline%20with%20AI.json"
  },

  // ─── Other ───────────────────────────────────────────────────
  {
    id: "other-01",
    title: "AI Product Image Generator",
    description: "Generates professional product images using AI (DALL-E or Stable Diffusion) from product descriptions. Outputs ready-to-use marketing images.",
    category: "other",
    department: "Marketing",
    tags: ["Image Generation", "AI", "DALL-E", "Products"],
    file: "AI product imagines.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/AI%20product%20imagines.json"
  },
  {
    id: "other-02",
    title: "HR Onboarding Automation Workflow",
    description: "Automates the entire employee onboarding process: sends welcome emails, creates accounts, schedules training, and notifies relevant departments.",
    category: "other",
    department: "HR",
    tags: ["HR", "Onboarding", "Automation", "Employee"],
    file: "HR_and_Recruitment/HR Onboarding Automation Workflow.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/HR_and_Recruitment/HR%20Onboarding%20Automation%20Workflow.json"
  },
  {
    id: "other-03",
    title: "AI Resume Screener for HR Teams",
    description: "Parses uploaded resumes using AI, scores candidates against job requirements, and ranks applicants. Dramatically reduces time-to-screen.",
    category: "other",
    department: "HR",
    tags: ["HR", "Resume", "AI Screening", "Recruitment"],
    file: "HR_and_Recruitment/AI Resume Screener for HR Teams.json",
    rawUrl: "https://raw.githubusercontent.com/enescingoz/awesome-n8n-templates/main/HR_and_Recruitment/AI%20Resume%20Screener%20for%20HR%20Teams.json"
  },
];
