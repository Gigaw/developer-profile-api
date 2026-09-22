import 'reflect-metadata';
import { Test } from '@nestjs/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PrismaService } from '../prisma/prisma.service.js';
import { ProfileService } from './profile.service.js';

describe('ProfileService', () => {
  let service: ProfileService;

  const profile = {
    id: 'profile-1',
    name: 'Igor Gigolaev',
    description: 'TypeScript developer',
    github: 'https://github.com/example',
    linkedin: 'https://linkedin.com/in/example',
    skills: [{ id: 'skill-1', name: 'TypeScript', profileId: 'profile-1' }],
    experience: [],
    projects: [],
  };

  const prismaMock = {
    profile: {
      findFirstOrThrow: vi.fn().mockResolvedValue(profile),
    },
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    const module = await Test.createTestingModule({
      providers: [
        ProfileService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get(ProfileService);
  });

  it('returns profile with related data', async () => {
    const result = await service.getProfile();

    expect(result).toEqual(profile);

    expect(prismaMock.profile.findFirstOrThrow).toHaveBeenCalledWith({
      include: {
        skills: true,
        experience: true,
        projects: true,
      },
    });
  });
});
