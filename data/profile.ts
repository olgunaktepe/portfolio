import { Profile } from '@/types';

export const profile: Profile = {
  name: 'Olgun Aktepe',
  title: 'Digital Marketing & Marketing Operations Leader',
  summary: `Digital marketing and marketing operations leader with 8+ years driving B2B revenue growth through data-driven strategies and marketing technology optimization. Currently managing integrated marketing operations across 3 healthcare companies with proven results: 65% lead growth, 25% customer acquisition increase, 55% sales productivity improvement. Expert in HubSpot enterprise implementation, demand generation, and custom AI solution development.`,
  location: 'Huntsville, AL',
  email: 'olgunaktepe@gmail.com',
  phone: '205-261-3601',
  linkedin: 'https://linkedin.com/in/olgun-aktepe-5408aa284/',
  languages: [
    { name: 'English', level: 'Native', code: 'en' },
    { name: 'Dutch', level: 'Native', code: 'nl' },
    { name: 'Turkish', level: 'Very Good', code: 'tr' },
    { name: 'French', level: 'Good', code: 'fr' },
    { name: 'German', level: 'Good', code: 'de' },
  ],
  education: [
    {
      degree: 'BS',
      field: 'Cybersecurity',
      institution: 'Western Governors University',
      location: 'Millcreek, UT',
      years: 'Expected May 2027',
      inProgress: true,
    },
    {
      degree: 'MBA',
      field: 'Business Administration',
      institution: 'Karel De Grote University',
      location: 'Antwerpen, Belgium',
      years: '2017-2019',
      gpa: '3.7',
    },
    {
      degree: 'Bachelor',
      field: 'International Business Management',
      institution: 'Karel de Grote University',
      location: 'Antwerpen, Belgium',
      years: '2014-2017',
      gpa: '3.7',
    },
    {
      degree: 'Bachelor',
      field: 'Law',
      institution: 'University of Antwerp',
      location: 'Antwerpen, Belgium',
      years: '2011-2014',
      gpa: '3.7',
    },
  ],
};
