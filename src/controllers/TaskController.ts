// QUAL A FUNCAO DOS CONTROLLERS?
// Controllers sao responsaveis por receber as requisicoes do usuario, processar essas requisicoes (as vezes com a ajuda dos services) e retornar uma resposta adequada ao usuario. Eles so controlam as informacoes que estao chegando.

// Importing Request and Response from express
import { Request, Response } from "express";

// Importing TaskService (though not used in this snippet)
import TaskService from "../services/TaskService";

import { Task } from "../models/Task";

// Creating an instance of TaskService
const taskService = new TaskService();

// Defining TaskController class
class TaskController {
	
	// Constructor method
	constructor() {

	}

	get(Req: Request, Res: Response) {
		const status = Req.query.status; // Extracting status from query parameters

		if(status && (status === "in_progress" || status === "completed")) {
		
			const result = taskService.get(status); // Calling the get method of TaskService
			Res.status(200).json(result); // Sending success response with the retrieved tasks

		} else {
			Res.status(401).json({ message: "Status da tarefa não fornecido." });
		}
	}

	getById(Req: Request, Res: Response) {
		const { id_task } = Req.params;

		if(id_task) {
			const result = taskService.getById(id_task); // Calling the getById method of TaskService
			Res.status(200).json(result); // Sending success response with the retrieved task
		} else {
			Res.status(401).json({ message: "ID da tarefa não fornecido." });
		}
	};

	add(Req: Request, Res: Response) {
		// Method to add a task
		const { id, descricao, data, status } = Req.body; // Destructuring task details from request body

		if (id && descricao && data && status) {
			// Checking if all required fields are present

			if (
				status === "in_progress" ||
				status === "completed"
			) {
				const result = taskService.add(Req.body); // Calling the add method of TaskService
				Res.status(201).json(result); // Sending success response with the added task
			} else {
				Res.status(400).json({
					message:
						'Status da tarefa inválido. Use "in_progress", "completed".',
				}); // Sending error response for invalid status
			}
		} else {
			Res.status(400).json({
				message: "Dados incompletos para adicionar a tarefa.",
			}); // Sending error response for incomplete data
		}
	} 

	update(Req: Request, Res: Response) {
		const { id, descricao, data, status } = Req.body; // Destructuring task details from request body
		
	}
} 

export default TaskController;
