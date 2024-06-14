const CalendarDay = (
  item: object[{ name: string; num: number; status: any }]
) => {
  return (
    <div className={item.num !== 0 ? "bg-[grey]" : "bg-[white]"}>
      {item.num}
    </div>
  );
};

export default CalendarDay;
