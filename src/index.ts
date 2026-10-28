import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/api/servidor en linea", (req, res)=> {
    res.json({
        status: "active",
        mensaje: "servidor en linea, version: 1.0.0"
    });
});

app.listen(PORT,function(){
console.log(`servidor corriendo en: http://localhost:${PORT}`);

})


