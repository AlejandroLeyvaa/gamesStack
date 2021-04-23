import cyberpunk from './assets/images/cyberpunk_2077.jpg';
import cyberpunkPreview from './assets/images/cyberpunk_preview.jpg';
import halo from './assets/images/halo.jpg';
import haloPreview from './assets/images/halo_preview.jpg';

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
      date: '',
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
      date: '',
      platforms: ['XBOX'],
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: ''
    },
  ],
};

export default initialState;
