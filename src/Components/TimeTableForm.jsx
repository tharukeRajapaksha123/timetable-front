import React, { useState } from "react";
import "../css/TimeTableForm.css"; // Import CSS file

const TimeTableForm = () => {
  const [formData, setFormData] = useState({
    cell: "",
    subject: "",
    teacherName: "",
    day: "",
    classroom: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to submit form data to backend or update state
    console.log(formData);
  };

  return (
    <form className="TimeTableForm" onSubmit={handleSubmit}>
      <label>
        Cell:
        <input
          type="text"
          name="cell"
          value={formData.cell}
          onChange={handleChange}
          className="TimeTableForm-input"
        />
      </label>
      <label>
        Subject:
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="TimeTableForm-input"
        >
          <option value="">Select a subject</option>
          <option value="physics">Physics</option>
          <option value="biology">Biology</option>
          <option value="chemistry">Chemistry</option>
        </select>
      </label>
      <label>
        Teacher Name:
        <input
          type="text"
          name="teacherName"
          value={formData.teacherName}
          onChange={handleChange}
          className="TimeTableForm-input"
        />
      </label>
      <label>
        Day:
        <input
          type="text"
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="TimeTableForm-input"
        />
      </label>
      <label>
        Classroom:
        <input
          type="text"
          name="classroom"
          value={formData.classroom}
          onChange={handleChange}
          className="TimeTableForm-input"
        />
      </label>
      <button type="submit" className="TimeTableForm-button">
        Submit
      </button>
    </form>
  );
};

export default TimeTableForm;
