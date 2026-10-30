import express, { type Request, type Response } from "express";
import estudiantesRouter from './ROUTES/estudiantes';

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/api/servidor-en-linea", (req, res)=> {
    res.json({
        status: "active",
        mensaje: "servidor en linea, version: 1.0.0"
    });
});
app.use('/api/estudiantes', estudiantesRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//* tengo dudas de esta ultima parte, la IA me ayudo a corregir errores pero aun creo que 
// no esta bien del todo... seguire practicando//*
//* 28/10/2026 actualice lo que pude hay varios errores y me parece que algunos
//no estan 
//* tengo dudas de esta ultima parte, la IA me ayudo a corregir errores pero aun creo que 
// no esta bien del todo... s
