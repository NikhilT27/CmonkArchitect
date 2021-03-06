module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://CmonkArchitect:Iamcoolcmonk27@cmonk-shard-00-00.husmy.mongodb.net:27017,cmonk-shard-00-01.husmy.mongodb.net:27017,cmonk-shard-00-02.husmy.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-135mue-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
