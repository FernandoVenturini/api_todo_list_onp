export interface Task {
	id: number;
	descricao: string;
	data: Date;
	status: 'completed' | 'in_progress' | 'pending';
}

const tarefa: Task = {
	id: 1,
	descricao: 'Estudar TypeScript',
	data: new Date('2024-06-15'),
	status: 'in_progress',
}