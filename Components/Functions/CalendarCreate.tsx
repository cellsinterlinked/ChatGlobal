import { Day } from '../types';

interface CreatedMonth {
	month: number;
	year: number;
	monthString: string;
	days: Day[];
}

const createCalendar = (monthProp: number, yearProp: number) => {
	const monthStrings = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const dayStrings = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const date = new Date(yearProp, monthProp, 1);
	const monthString = monthStrings[date.getMonth()];
	const month = date.getMonth();
	const year = date.getFullYear();

	const altMonth = month + 1;

	const daysInMonth = (month: number, year: number) => {
		return new Date(year, month, 0).getDate();
	};

	const firstDayOfMonth = (year: number, month: number) => {
		let datenew = new Date(year, month, 1);
		let dateIndex = datenew.getDay();
		return dayStrings[dateIndex];
	};

	let content: Day[] = [];
	let totalDays = daysInMonth(altMonth, year) + 1;

	let firstDay = firstDayOfMonth(year, month);

	if (firstDay === 'Monday') {
		content = [{ name: '', num: 0, status: 'none' }, ...content];
	}
	if (firstDay === 'Tuesday') {
		content = [
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			...content,
		];
	}
	if (firstDay === 'Wednesday') {
		content = [
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			...content,
		];
	}
	if (firstDay === 'Thursday') {
		content = [
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			...content,
		];
	}

	if (firstDay === 'Friday') {
		content = [
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			...content,
		];
	}

	if (firstDay === 'Saturday') {
		content = [
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			{ name: '', num: 0, status: 'none' },
			...content,
		];
	}

	for (let i = 1; i < totalDays; i++) {
		content.push({ name: '', num: i, status: true });
	}

	const createdMonth: CreatedMonth = {
		month: month,
		year: year,
		monthString: monthString,
		days: content,
	};

	return createdMonth;
};

export default createCalendar;
