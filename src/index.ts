import express, { type Request, type Response } from "express";

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


app.use(express.json());


app.put('/usuarios/:id', (req, res) => {
    // Código para modificar un usuario existente
});

interface Estudiante {
  id: number;
  nombre: string;
  email: string;
  bootcamp: string;
}

 

    let estudiantes: Estudiante[] = [
    { id: 1, 
        nombre: "Alejandro Gómez", 
        email: "alejandro.gomez@email.com", 
        bootcamp: "Full Stack Web Development" 
    },

  { id: 2, 
    nombre: "Sofía Rodríguez", 
    email: "sofia.rod@email.com", 
    bootcamp: "Data Science & AI" 
},

  { id: 3, 
    nombre: "Mateo Fernández", 
    email: "mateo.f@email.com", 
    bootcamp: "UX/UI Design" 
},

  { id: 4, 
    nombre: "Valeria Martínez", 
    email: "valeria.m@email.com", 
    bootcamp: "Cybersecurity" 
},

  { id: 5,
    nombre: "Lucas Cloud", 
    email: "lucas.c@email.com",
     bootcamp: "Cloud Computing & DevOps" 
    },

  { id: 6, 
    nombre: "Camila López", 
    email: "camila.lopez@email.com", 
    bootcamp: "Full Stack Web Development"
 },

  { id: 7, 
    nombre: "Diego Torres", 
    email: "diego.t@email.com", 
    bootcamp: "Data Science & AI" 
},

  { id: 8, 
    nombre: "Elena Benítez", 
    email: "elena.b@email.com", 
    bootcamp: "Mobile App Development"
 },

  { id: 9, 
    nombre: "Nicolás Silva", 
    email: "nicolas.s@email.com", 
    bootcamp: "UX/UI Design" 
},

  { id: 10, 
    nombre: "Isabella Ruiz", 
    email: "isabella.r@email.com", 
    bootcamp: "Full Stack Web Development"
 }

];

app.get('/api/estudiantes', function ( req: Request, res: Response) {
  res.status(200).json(estudiantes));
  ok: true;
  mensaje: "lista de estudiantes";
  data: estudiantes
 


app.post('/api/estudiantes',function(req:Request, res:Response) {
    const { nombre, email, bootcamp } = req.body;
    if (!email) {
    return res.status(400).json({ 
      error: "Bad Request", 
      mensaje: "El campo 'email' es obligatorio para registrar un estudiante." 
    });
  }
    const nuevoId = estudiantes.length > 0 ? estudiantes[estudiantes.length -1].id + 1 : 1;
     const nuevoEstudiante: Estudiante = {
    id: nuevoId,
    nombre,
    email,
    bootcamp
  };
  res.status(201).json(nuevoEstudiante);
});
app.put('/api/estudiantes/:id', (req: Request, res: Response) => {
  const idEstudiante = Number(req.params.id);
  const { nombre, email, bootcamp } = req.body;
  
  // Buscamos la posición del estudiante
  const indice = estudiantes.findIndex(e => e.id === idEstudiante);
  
  // Si no existe, respondemos 404 y cortamos la ejecución con 'return'
  if (indice === -1) {
    return res.status(404).json({ 
      error: "Not Found", 
      mensaje: `No se encontró ningún estudiante con el ID ${idEstudiante}`
    });
  }
  
  
  estudiantes[indice] = {
    id: idEstudiante,
    nombre: nombre || estudiantes[indice].nombre, 
    email: email || estudiantes[indice].email,
    bootcamp: bootcamp || estudiantes[indice].bootcamp
  };
  
  
  res.status(200).json(estudiantes[indice]);
});


app.delete('/api/estudiantes/:id', (req: Request, res: Response) => {
  const idEliminar = Number(req.params.id); 
  
  const existe = estudiantes.some(e => e.id === idEliminar);
  
  
  if (!existe) {
    return res.status(404).json({ 
      error: "Not Found", 
      mensaje: `No se puede eliminar: no existe el estudiante con ID ${idEliminar}` 
    });
  }
  
  
  estudiantes = estudiantes.filter(e => e.id !== idEliminar);
  

  res.status(200).json({ 
    mensaje: `Estudiante con ID ${idEliminar} fue eliminado correctamente.` 
  });
});

//* tengo dudas de esta ultima parte, la IA me ayudo a corregir errores pero aun creo que 
// no esta bien del todo... seguire practicando//*