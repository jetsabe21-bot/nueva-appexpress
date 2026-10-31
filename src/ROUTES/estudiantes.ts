 import { Router, type Request, type Response } from 'express';

const router = Router();


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

router.get('/', function(req: Request, res: Response) {
  const bootcampQuery = req.query.bootcamp as string;
  // #swagger.description = 'Obtiene la lista de estudiantes en el bootcamp'

  if (bootcampQuery) {
    const filtrados = estudiantes.filter(e => e.bootcamp.toLowerCase() === bootcampQuery.toLowerCase());

    return res.status(200).json(filtrados);
  }
  
  
  res.status(200).json(estudiantes);
});

// OBTENER POR ID
router.get('/:id', (req: Request, res: Response) => {
  const idBuscar = Number(req.params.id);
  const estudianteEncontrado = estudiantes.find(e => e.id === idBuscar);
  // #swagger.description = 'Obtiene un id de un estudiante'

  if (!estudianteEncontrado) {
    return res.status(404).json({
      error: "Not Found",
      mensaje: `No se encontró ningún estudiante con el ID ${idBuscar}`
    });
  }
  res.status(200).json(estudianteEncontrado);
});


router.post('/', function(req: Request, res: Response) {
  const { nombre, email, bootcamp } = req.body;
  // #swagger.description = 'Crea un estudiante'
  
  if (!email) {
    return res.status(400).json({ 
      error: "Bad Request", 
      mensaje: "El campo 'email' es obligatorio para registrar un estudiante." 
    });
  } 
  
  
  const ultimoEstudiante = estudiantes[estudiantes.length - 1];
  const nuevoId = ultimoEstudiante ? ultimoEstudiante.id + 1 : 1;
  
  const nuevoEstudiante: Estudiante = {
    id: nuevoId,
    nombre: nombre || "",
    email,
    bootcamp: bootcamp || ""
  };
   
  estudiantes.push(nuevoEstudiante); 
  res.status(201).json(nuevoEstudiante);
});

// ACTUALIZAR ESTUDIANTE (PUT /:id)
router.put('/:id', (req: Request, res: Response) => {
  const idEstudiante = Number(req.params.id);
  const { nombre, email, bootcamp } = req.body;
  // #swagger.description = 'Se Actualiza un estudiante'
  const indice = estudiantes.findIndex(e => e.id === idEstudiante);
  
  if (indice === -1) {
    return res.status(404).json({ 
      error: "Not Found", 
      mensaje: `No se encontró ningún estudiante con el ID ${idEstudiante}`
    });
  }

  
  const estudianteActual = estudiantes[indice];
  if (!estudianteActual) {
    return res.status(404).json({ error: "Not Found" });
  }

  estudiantes[indice] = {
    id: idEstudiante,
    nombre: nombre || estudianteActual.nombre, 
    email: email || estudianteActual.email,
    bootcamp: bootcamp || estudianteActual.bootcamp
  };
  
  res.status(200).json(estudiantes[indice]);
});


router.delete('/:id', (req: Request, res: Response) => {
  const idEliminar = Number(req.params.id); 
  const existe = estudiantes.some(e => e.id === idEliminar);
  // #swagger.description = 'Se elimina un estudiante'
  
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

export default router;