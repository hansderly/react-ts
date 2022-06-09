import React from 'react';
import Reminder from '../entities/reminder';

interface ReminderListProps {
	items: Reminder[];
	onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
	return (
		<ul className='list-group'>
			{items.map((item) => (
				<li className='list-group-item' key={item.id}>
					{item.title}
					<button
						onClick={() => onRemoveReminder(item.id)}
						className='btn btn-outline-danger mx-4 rounded-pill'
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
};

export default ReminderList;
