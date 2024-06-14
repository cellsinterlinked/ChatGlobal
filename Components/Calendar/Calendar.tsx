"use client";

import CalendarDay from "./CalendarDay";
import createCalendar from "../Functions/CalendarCreate";

const item = createCalendar(6, 2024);



const Calendar = () => {
  return (
    <div>
      <div className="calendar_container">
        <div className="calendar_body">
          <div className="calendar_title">
            <p>{item.monthString}</p>
            <p>{item.year}</p>
          </div>
          <div className="calendar_head">
            <div className="day_box">SUNDAY</div>
            <div className="day_box">MONDAY</div>
            <div className="day_box">TUESDAY</div>
            <div className="day_box">WEDNESDAY</div>
            <div className="day_box">THURSDAY</div>
            <div className="day_box">FRIDAY</div>
            <div className="day_box">SATURDAY</div>
          </div>
          <div className="calendar_content">
            {item.days.map((item, index) => {
              return <CalendarDay key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
