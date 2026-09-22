import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import type { Profile } from './models/profile.model.js';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  async getProfile(): Promise<Profile> {
    return this.prisma.profile.findFirstOrThrow({
      include: {
        skills: true,
        experience: true,
        projects: true,
      },
    });
  }
}
