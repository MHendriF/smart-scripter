import { FileLock, Home, Settings, WalletCards } from "lucide-react";

export const navbarList = [
  { name: "Home", path: "/dashboard", icon: Home },
  { name: "History", path: "/dashboard/history", icon: FileLock },
  { name: "Billing", path: "/dashboard/billing", icon: WalletCards },
  { name: "Settings", path: "/dashboard/settings", icon: Settings },
];

export const Templates = [
  {
    name: "Blog Title",
    desc: "Generate catchy and SEO-friendly blog titles to attract readers and improve search engine rankings.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "Create well-structured and engaging blog posts on any topic, tailored to your audience and optimized for readability.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt: "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Discover fresh and relevant blog topic ideas to keep your content calendar full and your readers engaged.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "Craft compelling and keyword-rich titles for your YouTube videos to boost visibility and attract more viewers.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "Generate informative and enticing YouTube video descriptions that include relevant keywords and links to increase viewer engagement and SEO performance.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Suggest effective tags for your YouTube videos to improve discoverability and reach a broader audience.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt: "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Rephrase existing articles to create unique, plagiarism-free content while retaining the original meaning and context.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt: "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label: "🤖 Provide your Article/Blog post or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Enhance your text by improving clarity, coherence, and overall readability, making your writing more polished and professional.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Insert relevant emojis into your text to make your messages more expressive and engaging, suitable for social media and informal communication.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt: "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Create captivating Instagram posts with well-crafted captions that resonate with your audience and drive engagement.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt: "Generate 3 Instagram post depends on a given keywords and give output in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "Generate relevant and trending hashtags for your Instagram posts to increase visibility and reach a wider audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt: "Generate 15 Instagram hash tag depends on a given keywords and give output in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram has tag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "Get creative ideas for Instagram posts and Reels to keep your content fresh, entertaining, and aligned with current trends.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "Ensure your text is grammatically correct and free of errors, enhancing the quality and professionalism of your writing.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammar-checker",
    aiPrompt: "Rewrite the inputText by correcting the grammar and give output in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "Generate code snippets in various programming languages based on specific requirements, saving time and effort in development.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt: "Depends on user codeDescription write a code and give output in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Provide clear and concise explanations of code snippets, helping you understand how the code works and its functionality.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Identify and suggest fixes for bugs in your code, streamlining the debugging process and improving code quality.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Create memorable and impactful taglines for your brand, product, or campaign to leave a lasting impression on your audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketing",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Generate detailed and persuasive product descriptions that highlight features and benefits, driving sales and customer interest.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commerce business give output in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];

export const limitCredits = 10000;

export const planData = [
  {
    id: 1,
    name: "Free",
    cost: 0,
    isActive: true,
    offering: [
      {
        value: "✔️ 10,000 Words/Month",
      },
      {
        value: "✔️ 50+ Content Templates",
      },
      {
        value: "✔️ Unlimited Download & Copy",
      },
      {
        value: "✔️ 1 Month of History",
      },
    ],
  },
  {
    id: 1,
    name: "Monthly",
    cost: 9.99,
    paymentLink: "https://buy.stripe.com/test_28o9EjbkvgfQ8VOeUV",
    isActive: false,
    offering: [
      {
        value: "✔️ 1,000,000 Words/Month",
      },
      {
        value: "✔️ 50+ Templates Access",
      },
      {
        value: "✔️ Unlimited Download & Copy",
      },
      {
        value: "✔️ 1 Year of History",
      },
    ],
  },
];
