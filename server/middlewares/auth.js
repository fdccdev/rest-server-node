const jwt = require("jsonwebtoken");

//Función validación token
let authToken = (req, res, next) => {
  let token = req.get("Auth");

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token no es válido."
        }
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};

//Función USER is ADMIN
let userAuth = (req, res, next) => {
  let usuario = req.usuario;
  if (usuario.role === "ADMIN_ROLE") {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      err: {
        message: "No tiene privilegios para realizar esta acción."
      }
    });
  }
};

module.exports = { authToken, userAuth };
