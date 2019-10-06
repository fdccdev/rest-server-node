// Puerto
process.env.PORT = process.env.PORT || 3000;

//entorno

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//base de datos

let urlDB;

//Vencimiento 30 dias token

process.env.EXP_TOKEN = 60 * 60 * 24 * 30;

//Seed

process.env.SEED = process.env.SEED || "serverNode-js";

if (process.env.NODE_ENV === "dev") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = `${process.env.MONGO_URI}&${process.env.REPL}&${process.env.AUTH}&${process.env.RETR}&${process.env.W}`;
}

process.env.URLDB = urlDB;
