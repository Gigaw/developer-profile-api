import { Module } from "@nestjs/common";
import { ProfileResolver } from "./profile.resolver";
import { ProfileService } from "./profile.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [ProfileResolver, ProfileService],
})

export class ProfileModule { }