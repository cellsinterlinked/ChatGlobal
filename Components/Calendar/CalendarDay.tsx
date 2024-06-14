import React from 'react';
import { Day } from '../types';

interface CalendarDayProps {
	day: Day;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => {
	return <div>{day.num}</div>;
};

export default CalendarDay;
