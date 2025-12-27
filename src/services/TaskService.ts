// O SERVICE FAZ TODA A REGRA DE NEGOCIO E INTERAGE COM A BASE DE DADOS.

// Assuming there's a Task model defined in models/Task.ts
import { Task } from '../models/Task'; 

import TaskRepository from '../repositories/TaskRepository';

const taskRepository = new TaskRepository(); // Creating an instance of TaskRepository

class TaskService {

	constructor() {

	}

	add(data: Task) {
		return taskRepository.add(data); // Calling the add method of TaskRepository
	}
}

export default TaskService;