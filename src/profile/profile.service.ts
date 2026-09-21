import { Injectable } from '@nestjs/common';
import { Profile } from './models/profile.model';



@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {
      name: 'Igor',
      description: 'TypeScript developer',
      github: 'https://github.com/test',
      linkedin: 'https://linkedin.com/in/test',
      skills: [
        { name: 'TypeScript', id: '1' },
        { name: 'React Native', id: '2' },
        { name: 'Node.js', id: '3' },
      ],

      experience: [
        {
          id: '1',
          company: 'BIOCAD',
          position: 'React Native Developer',
          period: '2024–2026',
          achievements: [
            'Developed production mobile applications',
            'Worked with React Native and Expo',
          ],
        },
      ],

      projects: [
        {
          id: '1',
          name: 'Project example',
          url: 'https://github.com/...',
        },
      ],
    };
  }
}
