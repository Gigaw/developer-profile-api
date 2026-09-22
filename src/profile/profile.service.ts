import { Injectable } from '@nestjs/common';
import { Profile } from './models/profile.model';
import { PrismaService } from '../prisma/prisma.service';



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
