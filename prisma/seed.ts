import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { profileSeedData } from './seed-data.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const existingProfile = await prisma.profile.findFirst({
    select: { id: true },
  });
  const profileId = existingProfile?.id ?? 'igor-gigolaev';
  const { skills, experience, projects, ...profile } = profileSeedData;

  await prisma.profile.upsert({
    where: { id: profileId },
    create: {
      id: profileId,
      ...profile,
      skills,
      experience,
      projects,
    },
    update: {
      ...profile,
      skills: {
        deleteMany: {},
        create: skills.create,
      },
      experience: {
        deleteMany: {},
        create: experience.create,
      },
      projects: {
        deleteMany: {},
        create: projects.create,
      },
    },
  });

  console.log(existingProfile ? 'Seed updated' : 'Seed completed');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
