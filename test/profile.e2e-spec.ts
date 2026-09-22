import 'reflect-metadata';
import { Test } from '@nestjs/testing';
import type { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { AppModule } from '../src/app.module.js';
import { PrismaService } from '../src/prisma/prisma.service.js';

describe('Profile GraphQL (e2e)', () => {
  let app: INestApplication;

  const profile = {
    id: 'profile-1',
    name: 'Igor Gigolaev',
    description: 'TypeScript developer',
    github: 'https://github.com/example',
    linkedin: 'https://linkedin.com/in/example',
    skills: [
      {
        id: 'skill-1',
        name: 'TypeScript',
        profileId: 'profile-1',
      },
    ],
    experience: [],
    projects: [],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        profile: {
          findFirstOrThrow: vi.fn().mockResolvedValue(profile),
        },
      })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns profile through GraphQL', async () => {
    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `
          query {
            profile {
              name
              skills {
                name
              }
            }
          }
        `,
      })
      .expect(200);

    expect(response.body.data.profile).toEqual({
      name: 'Igor Gigolaev',
      skills: [{ name: 'TypeScript' }],
    });
  });
});
