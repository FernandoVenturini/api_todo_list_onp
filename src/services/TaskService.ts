// O SERVICE FAZ TODA A REGRA DE NEGOCIO E INTERAGE COM A BASE DE DADOS.

// Assuming there's a Task model defined in models/Task.ts
import { Task } from '../models/Task'; 

import TaskRepository from '../repositories/TaskRepository';

const taskRepository = new TaskRepository(); // Creating an instance of TaskRepository

class TaskService {

	constructor() {

	}

	get(status: string) { // Method to get tasks by status
		const result = taskRepository.get(); // Calling the get method of TaskRepository

		const tasks: Task[] = []; // Initializing an array to hold tasks

		result.map((obj) => { // Iterating through the tasks
			if(obj.status === status) { // Checking if the task status matches the requested status
				tasks.push(obj); // Returning the matching task
			};
		});
		return tasks; // Returning the array of matching tasks
	};


	getById(id_task: string): Task | {} { // Method to get a task by its ID
		const result = taskRepository.get(); // Calling the getById method of TaskRepository

		let task = {}; // Initializing an object to hold the task

		result.map((obj) => {
			if(obj.id === Number(id_task)) {
				task = obj; // Returning the found task
			}
		});
		return task; // Returning the found task
	};

	getIndexById(id_task: string): number { // Method to get the index of a task by its ID
			const result = taskRepository.get(); // Calling the get method of TaskRepository
			let position: number = 99999; // Initializing a variable to hold the index of the task

			result.map((obj, index) => {
			if(obj.id === Number(id_task)) {
				position = index; // Storing the index of the found task
			}

		});
		return position; // Returning the index of the found task
	}
	

	add(data: Task): Task {
		return taskRepository.add(data); // Calling the add method of TaskRepository
	}


	update(data: Task, id_task: string) {
		const position = this.getIndexById(id_task); // Fetching the existing task by ID
		if (position !== 99999) {
			return {}; // If task not found, return empty object}
		}
		
	} 
}

export default TaskService;