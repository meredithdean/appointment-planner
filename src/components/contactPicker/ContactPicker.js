import React from "react";

export const ContactPicker = ({ name, contacts, handleContact }) => {
  return (
    <select name={name} onChange={handleContact}>
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option key={contact} value={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
