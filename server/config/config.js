// Puerto
process.env.PORT = process.env.PORT || 3000;

//entorno

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//base de datos

let urlDB;

//aa12345678

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = `mongodb://ertuu:aa12345678@cluster0-shard-00-00-mvnwy.mongodb.net:27017,cluster0-shard-00-01-mvnwy.mongodb.net:27017,cluster0-shard-00-02-mvnwy.mongodb.net:27017/cafe?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;
}

process.env.URLDB = urlDB;
