import { Query, Resolver } from '@nestjs/graphql';
import { Profile } from './models/profile.model';
import { ProfileService } from './profile.service';


@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) { }

  @Query(() => Profile)
  async profile(): Promise<Profile> {
    return this.profileService.getProfile();
  }


}