export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  languages: Language[];
  education: Education[];
}

export interface Language {
  name: string;
  level: 'Native' | 'Very Good' | 'Good' | 'Basic';
  code: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  years: string;
  gpa?: string;
  inProgress?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  logo?: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  metrics: Metric[];
  industry: 'web3' | 'healthcare' | 'tech';
  leadership?: {
    teamSize?: string;
    directReports?: number;
    crossFunctional?: string[];
  };
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  slug: string;
  company: string;
  logo?: string;
  title: string;
  role: string;
  period: string;
  description: string;
  challenge: string;
  solution: string;
  results: Metric[];
  collateral: Collateral[];
  technologies: string[];
  featured: boolean;
  industry: 'web3' | 'healthcare' | 'tech';
  strategicContext?: {
    businessContext: string;
    strategicApproach: string;
    keyDecisions: string[];
    lessonsLearned: string;
  };
}

export interface Collateral {
  id: string;
  type: 'pdf' | 'image' | 'external';
  title: string;
  description?: string;
  filename?: string;
  url?: string;
  source?: string;
}
