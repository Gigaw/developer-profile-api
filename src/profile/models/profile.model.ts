import { Field, ObjectType } from '@nestjs/graphql';
import { Experience } from './experience.model.js';
import { Project } from './project.model.js';
import { Skill } from './skill.model.js';

@ObjectType()
export class Profile {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  github: string;

  @Field()
  linkedin: string;

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experience: Experience[];

  @Field(() => [Project])
  projects: Project[];
}
