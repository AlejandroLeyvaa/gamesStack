import cyberpunk from './assets/images/cyberpunk_2077.jpg';
import cyberpunkPreview from './assets/images/cyberpunk_preview.jpg';
import cyberpunkTablet from './assets/images/cyberpunk2077_tablet.jpg';
import cyberpunkDesktop from './assets/images/cyberpunk2077_desktop1600.jpg';
import cyberPunkVideo from './assets/videos/cyberpunk_2077.mp4';

import halo from './assets/images/halo.jpg';
import haloPreview from './assets/images/halo_preview.jpg';
import haloTablet from './assets/images/halo_infinite_tablet.jpg';
import haloDesktop from './assets/images/halo_infinite_desktop1600.jpg';
import HaloVideo from './assets/videos/halo_infinite.mp4';

import redDeadII from './assets/images/red_dead_2.jpg';
import redDeadIIPreview from './assets/images/red_dead_2_preview.jpg';
import redDeadIITablet from './assets/images/red_dead_2_tablet.jpg';
import redDeadIIDesktop from './assets/images/red_dead_2_desktop1600.jpg';
import redReadIIVideo from './assets/videos/red_dead_redemption_2.mp4';

const initialState = {
  user: {},
  cart: [],
  favs: [],
  orders: [],
  total: null,
  games: [
    {
      id: '1',
      name: 'Cyberpunk 2077',
      developed: 'CD Project Red',
      cover: cyberpunk,
      previewImage: cyberpunkPreview,
      tabletImage: cyberpunkTablet,
      desktopImage: cyberpunkDesktop,
      rank: 4,
      about: `Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.`,
      date: 'Dec 10, 2020',
      platforms: ['XBOX', 'PS4', 'PS5', 'PC'],
      price: 60,
      specifications: {
        minimum: [
          'Playable: Low graphics, 1080p',
          'OS: 64-bit Windows 7 or 64-bit Windows 10',
          'DirectX Version: DirectX 12',
          'Processor: Intel Core i5-3570K or AMD FX-8310',
          'Memory: 8 GB',
          'Graphics Card: Nvidia GeForce GTX 780 3 GB or AMD Radeon RX 470',
          'Storage: HDD (70 GB, SSD recommended)',
        ],
        recommended: [
          'Playable: High graphics, 1080p',
          'OS: 64-bit Windows 10',
          'DirectX Version: DirectX 12',
          'Processor: Intel Core i7-4790 or AMD Ryzen 3 3200G',
          'Memory: 12 GB',
          'Graphics Card: Nvidia GeForce GTX 1060 6 GB or AMD Radeon R9 Fury',
          'Storage: SDD (70 GB)',
        ],
      },
      gameplay: cyberPunkVideo,
      gameOfTheYear: 'IGN - "Game of the year"',
    },
    {
      id: '2',
      name: 'Halo Infinite',
      developed: '343i',
      cover: halo,
      previewImage: haloPreview,
      tabletImage: haloTablet,
      desktopImage: haloDesktop,
      rank: 4,
      about:
        'When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. The legendary Halo series returns with the most expansive Master Chief story yet.',
      date: 'November 2021',
      platforms: ['XBOX'],
      price: 60,
      specifications: {
        minimum: ['XBOX one','XBOX Series X', 'XBOX Series S'],
        recommended: [],
      },
      gameplay: HaloVideo,
      gameOfTheYear: '',
    },
    {
      id: '3',
      name: 'Red Dead Redemption II',
      developed: 'Rockstar Games',
      cover: redDeadII,
      previewImage: redDeadIIPreview,
      tabletImage: redDeadIITablet,
      desktopImage: redDeadIIDesktop,
      rank: 4,
      about: `America, 1899. The end of the Wild West era has begun. After a robbery
              goes badly wrong in the western town of Blackwater, Arthur Morgan and
              the Van der Linde gang are forced to flee. With federal agents and the
              best bounty hunters in the nation massing on their heels, the gang must rob,
              steal and fight their way across the rugged heartland of America in order to survive.
              As deepening internal divisions threaten to tear the gang apart, Arthur
              must make a choice between his own ideals and loyalty to the gang who raised him.`,
      date: 'October 25th, 2018',
      platforms: ['XBOX', 'PS4', 'PC'],
      price: 60,
      specifications: {
        minimum: [
          'OS:  Windows 7 - Service Pack 1 (6.1.7601)',
          'Processor:  Intel® Core™ i5-2500K / AMD FX-6300',
          'Memory:  8GB',
          'Graphics Card:  Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB',
          'HDD Space:  150GB',
          'Sound Card:  DirectX compatible',
        ],
        recommended: [
          'OS:  Windows 10 - April 2018 Update (v1803)',
          'Processor:  Intel® Core™ i7-4770K / AMD Ryzen 5 1500X',
          'Memory:  12GB',
          'Graphics Card:  Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB',
          'HDD Space:  150GB',
          'Sound Card:  DirectX compatible',
        ],
      },
      gameplay: redReadIIVideo,
      gameOfTheYear: '',
    },
  ],
};

export default initialState;
