export default class FavoritosSchema {
  static schema = {
    name: 'Favorit',
    properties: {
      id: 'string',
      name: 'string',
      owner: 'string',
      description: 'string',
      stars: 'int',
      forks: 'int',
      languageName: 'string',
      languageColor: 'string',
    },
  };
}
