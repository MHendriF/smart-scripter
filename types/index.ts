export type TemplateProps = {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: {
    label: string;
    field: string;
    name: string;
    required?: boolean;
  }[];
};
