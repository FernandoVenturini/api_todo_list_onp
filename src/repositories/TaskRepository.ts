import { Task } from "../models/Task";


class TaskRepository {

	private tasks: Task[]; // In-memory storage for tasks

	constructor() {
		this.tasks = []; // Initialize the tasks array
	}

	get(): Task[] { // Method to get tasks by status
		return this.tasks; // Return all tasks
	}


	add(data: Task): Task { // Method to add a new task
		this.tasks.push(data); // Add the new task to the tasks array
		return data; // Return the added task
	}



	update(data: Task, position: number) { // Method to update an existing task		
		this.tasks[position] = data; // Update the task at the specified index
		return data; // Return the updated task
	}
}

export default TaskRepository;