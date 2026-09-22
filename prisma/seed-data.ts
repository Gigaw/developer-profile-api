import { Prisma } from '../src/generated/prisma/client';

export const profileSeedData = {
  name: 'Igor Gigolaev',

  description:
    'Senior React Native Engineer with 5+ years of commercial experience delivering production iOS and Android applications across healthcare, commerce, white-label platforms, and residential services. Strong background in TypeScript, application architecture, API integrations, CI/CD, native tooling, and production releases.',

  // GitHub URL в резюме не указан — замени на свой.
  github: 'REPLACE_WITH_YOUR_GITHUB_URL',

  linkedin: 'https://www.linkedin.com/in/igor-gigolaev-803b63213',

  skills: {
    create: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'React Native' },
      { name: 'Expo' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Socket.IO' },
      { name: 'Kotlin' },
      { name: 'OpenAPI' },
      { name: 'CI/CD' },
      { name: 'Jest' },
      { name: 'Detox' },
      { name: 'Fastlane' },
      { name: 'Turborepo' },
      { name: 'GitLab Package Registry' },
    ],
  },

  experience: {
    create: [
      {
        company: 'BIOCAD',
        position: 'React Native Engineer',
        period: 'Apr 2024 – Present',
        achievements: [
          'Helped define application architecture, navigation structure, screen organization, and client-side data flows for Revmo.',
          'Independently delivered more than 10 major product areas for a healthcare application.',
          'Designed reusable base UI components adopted by the mobile team.',
          'Contributed to Expo SDK and React Native migrations and resolved cross-platform native issues.',
          'Worked with PNPM, Turborepo, private GitLab packages, typed OpenAPI clients, and CI/CD.',
        ],
      },
      {
        company: 'Per Diem',
        position: 'React Native Engineer',
        period: 'Oct 2022 – Mar 2024',
        achievements: [
          'Developed critical commerce flows for a reusable white-label mobile platform.',
          'Covered critical purchase scenarios with unit and end-to-end tests.',
          'Owned build and release operations for multiple branded iOS and Android applications.',
          'Contributed to Fastlane-based release automation.',
          'Participated in architecture discussions, code reviews, and technical interviews.',
        ],
      },
      {
        company: 'PMP Tech',
        position: 'React Native Engineer',
        period: 'Apr 2022 – Oct 2022',
        achievements: [
          'Took ownership of an existing React Native application and independently delivered key product features.',
          'Implemented camera access for monitoring private and shared community areas.',
          'Built service-request workflows, notifications, surveys, news, and construction reports.',
        ],
      },
      {
        company: 'Liga Digital Economy',
        position: 'JavaScript / React Native Engineer',
        period: 'Mar 2022 – Apr 2022',
        achievements: [
          'Developed application screens and reusable UI components for a large internal banking iPad application.',
        ],
      },
      {
        company: 'Odva',
        position: 'React Native Engineer',
        period: 'Sep 2021 – Feb 2022',
        achievements: [
          'Implemented real-time customer support using Node.js, Express, Socket.IO, and the Crisp API.',
          'Built screens and backend integrations for the Zvet furniture marketplace.',
          'Diagnosed a critical performance regression caused by excessive Context-driven rerenders.',
          'Contributed to several production React Native applications.',
        ],
      },
      {
        company: 'Introvert',
        position: 'Junior Software Developer, JavaScript/PHP',
        period: 'Jul 2021 – Sep 2021',
        achievements: [
          'Maintained PHP scripts and AmoCRM widgets.',
        ],
      },
      {
        company: 'QSOFT',
        position: 'Junior Frontend Developer',
        period: 'Mar 2021 – May 2021',
        achievements: [
          'Developed internal web pages using HTML, CSS, SCSS, jQuery, and JavaScript.',
        ],
      },
    ],
  },

  projects: {
    create: [
      {
        name: 'Revmo',
        url: 'https://apps.apple.com/ru/app/revmo-info/id6744959470',
      },
      {
        name: 'Betalife',
        url: 'https://apps.apple.com/ru/app/betalife/id1507787822',
      },
      {
        name: 'Per Diem',
        url: 'https://apps.apple.com/ge/app/square-mobile-app/id6444345498',
      },
      {
        name: 'Service',
        url: 'https://apps.apple.com/us/app/service/id1619949563',
      },
      {
        name: 'Roads',
        url: 'https://apps.apple.com/ge/app/roads/id1572475386',
      },
      {
        name: 'Zvet',
        url: 'https://apps.apple.com/ru/app/id1613525748',
      },
      {
        name: 'Ossetian Calendar',
        url: 'https://apps.apple.com/ge/app/id1620866376',
      },
    ],
  },
} satisfies Prisma.ProfileCreateInput;