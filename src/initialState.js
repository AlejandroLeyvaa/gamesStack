import cyberpunk from './assets/images/cyberpunk_2077.jpg';
import halo from './assets/images/halo.jpg';

const initialState = {
  user: {},
  games: [
    {
      id: '1',
      name: 'Cyberpunk 2077',
      cover: cyberpunk,
      previewImage: '',
      rank: 4,
      about: '',
      date: '',
      platforms: '',
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: 'IGN - "Game of the year"'
    },
    {
      id: '2',
      name: 'Halo Infinite',
      cover: halo,
      previewImage: '',
      rank: 4,
      about: '',
      date: '',
      platforms: '',
      price: 60,
      specifications: '',
      gameplay: '',
      gameOfTheYear: ''
    },
  ],
};

export default initialState;
