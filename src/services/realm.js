import Realm from 'realm';

import FavoritosSchema from '../schemas/FavoritosSchema';

export default function getRealm() {
  return Realm.open({
    schema: [FavoritosSchema],
  });
}
