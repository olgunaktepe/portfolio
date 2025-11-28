import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Marketing Operations & Strategy',
    icon: 'target',
    skills: [
      'Revenue Operations',
      'Marketing Automation',
      'Demand Generation',
      'Account-Based Marketing',
      'Go-to-Market Strategy',
      'Sales Enablement',
      'Customer Journey Mapping',
    ],
  },
  {
    name: 'Marketing Technology Stack',
    icon: 'layers',
    skills: [
      'HubSpot (Advanced)',
      'Marketo',
      'Salesforce',
      'Google Analytics',
      'Looker Studio',
      'LinkedIn Ads',
      'Google Ads',
      'Hootsuite',
      'Sprout Social',
      'Adobe Photoshop',
      'Canva',
    ],
  },
  {
    name: 'Analytics & Optimization',
    icon: 'bar-chart-2',
    skills: [
      'Lead Scoring & Workflows',
      'A/B Testing',
      'Performance Analytics',
      'Conversion Rate Optimization',
      'Marketing ROI Analysis',
      'Customer Acquisition Cost (CAC)',
    ],
  },
  {
    name: 'AI & Custom Development',
    icon: 'cpu',
    skills: [
      'AI-Powered Application Development',
      'HubSpot API Integrations',
      'Workflow Automation',
      'ML Scoring Engines',
      'Predictive Analytics',
      'Custom Solution Building',
    ],
  },
];

export const featuredMetrics = [
  { value: 65, suffix: '%', label: 'Lead Growth' },
  { value: 400, suffix: 'K+', label: 'Social Following' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 12, suffix: '', label: 'Enterprise Partners' },
];
