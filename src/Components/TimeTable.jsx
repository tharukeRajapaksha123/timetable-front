import React from "react";
import "../css/TimeTable.css";

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const periods = ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6", "Period 7", "Period 8"];

  return (
    <div className="TimeTable">
      <div className="TimeTable-header">
        <div className="TimeTable-cell"></div>
        {days.map((day, index) => (
          <div className="TimeTable-cell" key={index}>
            {day}
          </div>
        ))}
      </div>
      {periods.map((period, index) => (
        <div className="TimeTable-row" key={index}>
          <div className="TimeTable-cell TimeTable-period">{period}</div>
          <div className="TimeTable-cell"></div>
          <div className="TimeTable-cell"></div>
          <div className="TimeTable-cell"></div>
          <div className="TimeTable-cell"></div>
          <div className="TimeTable-cell"></div>
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
