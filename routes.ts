// Importing Router from express
import { Router } from 'express'; 

// Importing TaskController from controllers
import TaskController from './src/controllers/TaskController';

// Creating an instance of TaskController
const taskController = new TaskController(); 

// Creating a new router instance
const router = Router(); 


// BUSCAR TAREFAS
router.get('/tasks');

// BUSCAR UMA UNICA TAREFA
router.get('/task/:id_task');

// ADICIONA UMA TAREFA
router.post('/task', taskController.add);

// ATUALIZA UMA TAREFA
router.put('/task/:id_task');

// DELETA UMA TAREFA
router.delete('/task/:id_task');


export default router; // Exporting the router as default export