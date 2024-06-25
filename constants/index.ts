export const Templates = [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic in bullet wise only based on give niche & outline topic and give me result in Rich text editor format",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    aiPrompt: "",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
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
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    aiPrompt:
      "Generate top 5 blog topic ideas in bullet only, (no description) based on niche in rich text editor format",
    slug: "blog-topic-idea",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    aiPrompt: "Give me best SEO optimized high ranked 5 title ",
    slug: "youtube-seo-title",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    aiPrompt: "Generate youtube description with emoji under outline",
    slug: "youtube-description",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    aiPrompt: "",
    slug: "youtube-tag",
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
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    category: "Rewriting Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    aiPrompt: "Rewrite give article without any Plagiarism",
    slug: "rewrite-article",
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
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    category: "",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    aiPrompt: "",
    slug: "text-improver",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
    ],
  },
  {
    name: "Add Emoji to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    aiPrompt: "Add emoji to outline text depends on outline",
    slug: "add-emoji-to-text",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    aiPrompt: "",
    slug: "instagram-post-generator",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    aiPrompt: "Generate 15 Instagram hash tag depends on a given keyword",
    slug: "instagram-hash-tag-generator",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    aiPrompt: "",
    slug: "instagram-post-idea-generator",
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
    desc: "AI Model to Correct your english grammar by providing the text",
    category: "",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    aiPrompt: "",
    slug: "english-grammar-checker",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "sentence",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    category: "Code",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    aiPrompt: "",
    slug: "write-code",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    category: "Code",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    aiPrompt: "",
    slug: "explain-code",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    category: "Code",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    aiPrompt: "",
    slug: "code-bug-detector",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    category: "",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    aiPrompt: "",
    slug: "tagline-generator",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "What you are selling / Marketing",
        field: "textarea",
        name: "marketing",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    category: "",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    aiPrompt: "",
    slug: "product-description",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "product_name",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "product_desc",
      },
    ],
  },
];
