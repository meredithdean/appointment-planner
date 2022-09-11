import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({contacts, title, contact, date, time, setTitle, setContact, setDate, setTime, handleSubmit}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };


  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="text"
          name="title"
          value={title}
          onChange={handleTitle}
          required
          placeholder="Appointment For" />
      </label>
      <br />
      <label>
        <ContactPicker 
          name="contact"
          value={contact}
          onChange={handleContact}
          contacts={getContactNames()}
          required
          placeholder="Appointment With" />
      </label>
      <br />
      <label>
        <input 
          type="date"
          name="date"
          value={date} 
          onChange={handleDate}
          min={getTodayString()}
          required />
      </label>
      <br />
      <label>
        <input 
          type="time"
          name="time"
          value={time} 
          onChange={handleTime}
          required />
      </label>
      <br />
      <input type="submit" value="add appointment"/>
    </form>
  );
};
