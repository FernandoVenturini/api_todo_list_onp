import { Task } from "../models/Task";


class TaskRepository {

	private tasks: Task[]; // In-memory storage for tasks

	constructor() {
		this.tasks = []; // Initialize the tasks array
	}

	add(data: Task): Task { // Method to add a new task
		this.tasks.push(data); // Add the new task to the tasks array
		return data; // Return the added task
	}
}

export default TaskRepository;