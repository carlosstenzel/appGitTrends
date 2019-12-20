export default class FavoritosSchema {
  static schema = {
    name: 'Favorito',
    properties: {
      idc: 'string',
      name: 'string',
      fullName: 'string',
      description: 'string',
      stars: 'int',
      forks: 'int',
      languageName: 'string',
      languageColor: 'string',
      url: 'string',
    },
  };
}
