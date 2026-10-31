import express, { type Request, type Response } from "express";
import estudiantesRouter from './ROUTES/estudiantes.ts';
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { isUtf8 } from "buffer";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {  //*este es el de prueba 
    res.json({
        status: "active",
        mensaje: "Servidor respondiendo correctamente en la raíz."
    });
});

app.get("/api/servidor-en-linea", (req, res)=> {
    res.json({
        status: "active",
        mensaje: "servidor en linea, version: 1.0.0"
    });
});
app.use('/api/estudiantes', estudiantesRouter);
app.use('/estudiantes', estudiantesRouter); //*estos son de prueba
app.use('/api/estudiantes', estudiantesRouter);
const swaggerDocument= JSON.parse(fs.readFileSync(path.join(import.meta.dirname, "./swagger-output.json"),
"utf-8",
),
); 
app.use("/api.docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument))
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//* tengo dudas de esta ultima parte, la IA me ayudo a corregir errores pero aun creo que 
// no esta bien del todo... seguire practicando//*
//* 28/10/2026 actualice lo que pude hay varios errores y me parece que algunos
//no estan 
//* tengo dudas de esta ultima parte, la IA me ayudo a corregir errores pero aun creo que 
// no esta bien del todo... s
