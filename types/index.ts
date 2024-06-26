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

export type TemplateSlugProps = {
  params: {
    "template-slug": string;
  };
};

export type SelectedTemplateProps = {
  selectedTemplate?: TemplateProps;
  userFormInput: any;
  isLoading: boolean;
};

export type ContentResultProps = {
  contentResult: string;
};

export type HistoryProps = {
  id: number;
  formData: string;
  templateSlug: string;
  aiResponse: string;
  createdBy: string;
  createdAt: string;
};
