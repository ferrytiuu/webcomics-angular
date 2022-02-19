import { NgxIndexedDBModule, DBConfig } from "ngx-indexed-db";



const dbConfig: DBConfig = {
  name: "AngularWebtoon",
  version: 9,
  objectStoresMeta: [
    {
      store: "WebtoonsFavs",
      storeConfig: { keyPath: "id", autoIncrement: false },
      storeSchema: [
        { name: "fav", keypath: "fav", options: { unique: false } },
      ]
    }
  ]
};

export const CONFIG = dbConfig;
