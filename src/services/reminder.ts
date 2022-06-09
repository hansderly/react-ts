import axios from 'axios';
import Reminder from '../entities/reminder';

const baseURL = 'https://jsonplaceholder.typicode.com/';

const getReminders = async () => {
	const { data } = await axios.get<Reminder[]>(baseURL + 'todos');
	return data;
};

const addReminder = async (title: string) => {
	const { data } = await axios.post<Reminder>(baseURL + 'todos', { title });
	return data;
};

const deleteReminder = async (id: number) => {
	const { data } = await axios.delete(`todos/${id}`);
	return data;
};

export { getReminders, addReminder, deleteReminder };
