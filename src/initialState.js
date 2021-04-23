import cyberpunk from './assets/images/cyberpunk_2077.jpg';
import cyberpunkPreview from './assets/images/cyberpunk_preview.jpg';
import halo from './assets/images/halo.jpg';
import haloPreview from './assets/images/halo_preview.jpg';
import redDeadII from './assets/images/red_dead_2.jpg';
import redDeadIIPreview from './assets/images/red_dead_2_preview.jpg';

const initialState = {
  user: {},
  games: [
    {
      id: '1',
      name: 'Cyberpunk 2077',
      cover: cyberpunk,
      previewImage: cyberpunkPreview,
      rank: 4,
      about: '',
      date: 'Dec 10, 2020',
      platforms: ['XBOX', 'PS4', 'PS5', 'PC'],
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: 'IGN - "Game of the year"'
    },
    {
      id: '2',
      name: 'Halo Infinite',
      cover: halo,
      previewImage: haloPreview,
      rank: 4,
      about: '',
      date: 'November 2021',
      platforms: ['XBOX'],
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: ''
    },
    {
      id: '3',
      name: 'Red Deade Redemption II',
      cover: redDeadII,
      previewImage: redDeadIIPreview,
      rank: 4,
      about: '',
      date: 'October 25th, 2018',
      platforms: ['XBOX', 'PS4', 'PC'],
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: ''
    },
  ],
};

export default initialState;
