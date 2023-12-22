import React from "react";

export const ContactPicker = ( {contacts, onChange} ) => {
  return (
    <>
      <select name={contacts} onChange={onChange}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact) => {
          return (
            <option value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
