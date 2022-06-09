import React, { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './components/NewReminder';
import ReminderList from './components/ReminderList';
import Reminder from './entities/reminder';
import { addReminder, getReminders } from './services/reminder';

function App() {
	const [reminders, setReminders] = useState<Reminder[]>([]);

	useEffect(() => {
		loadReminder();
	}, []);

	const loadReminder = async () => {
		const reminders = await getReminders();
		setReminders(reminders);
	};

	const removeReminder = (id: number) => {
		setReminders(reminders.filter((remider) => remider.id !== id));
	};

	const newReminder = async (title: string) => {
		const reminder = await addReminder(title);
		return setReminders([reminder, ...reminders]);
	};

	return (
		<div className='App'>
			<NewReminder onAddReminder={newReminder} />
			<ReminderList items={reminders} onRemoveReminder={removeReminder} />
		</div>
	);
}

export default App;
