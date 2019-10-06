// Puerto
process.env.PORT = process.env.PORT || 3000;

//entorno

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//base de datos

let urlDB;

if (process.env.NODE_ENV === "dev1") {
  urlDB = "mongodb://localhost:27017/cafe";
} else {
  urlDB = `${process.env.MONGO_URI}&${process.env.REPL}&${process.env.AUTH}&${process.env.RETR}&${process.env.W}`;
}

process.env.URLDB = urlDB;
