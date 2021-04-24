import cyberpunk from './assets/images/cyberpunk_2077.jpg';
import cyberpunkPreview from './assets/images/cyberpunk_preview.jpg';
import halo from './assets/images/halo.jpg';
import haloPreview from './assets/images/halo_preview.jpg';
import redDeadII from './assets/images/red_dead_2.jpg';
import redDeadIIPreview from './assets/images/red_dead_2_preview.jpg';
import redReadIIVideo from './assets/videos/red_dead_redemption_2.mp4';

const initialState = {
  user: {},
  games: [
    {
      id: '1',
      name: 'Cyberpunk 2077',
      developed: 'CD Project Red',
      cover: cyberpunk,
      previewImage: cyberpunkPreview,
      rank: 4,
      about: '',
      date: 'Dec 10, 2020',
      platforms: ['XBOX', 'PS4', 'PS5', 'PC'],
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: 'IGN - "Game of the year"',
    },
    {
      id: '2',
      name: 'Halo Infinite',
      developed: '343i',
      cover: halo,
      previewImage: haloPreview,
      rank: 4,
      about: '',
      date: 'November 2021',
      platforms: ['XBOX'],
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: '',
    },
    {
      id: '3',
      name: 'Red Deade Redemption II',
      developed: 'Rockstar Games',
      cover: redDeadII,
      previewImage: redDeadIIPreview,
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
