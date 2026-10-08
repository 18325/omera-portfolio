export type NavItem = {
  href: string;
  label: string;
};

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  current?: boolean;
  tasks: string[];
};

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  details?: string[];
};

export type FormationItem = {
  id: string;
  title: string;
  provider?: string;
  period: string;
  ongoing?: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type SpokenLanguage = {
  name: string;
  level: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message?: string;
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactPayload, string>
>;
