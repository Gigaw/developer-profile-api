import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';


const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL as string,
})

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Igor',
      linkedin: 'https://www.linkedin.com/in/igor/',
      github: '/github/igor',
      description: 'TypeScript developer',
      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'React Native' },
          { name: 'Node.js' },
        ],
      },
      experience: {
        create: [
          {
            company: 'BIOCAD',
            title: 'React Native Developer',
            period: '2024–2026',
            achievements: [
              'Developed production mobile applications',
              'Worked with React Native and Expo',
            ],
          },
        ],
      },
      projects: {
        create: [
          {
            name: 'Project example',
            url: 'https://github.com/...',
          },
        ],
      },
    },
  });
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
})