import React from "react";
// import Table from "react-bootstrap/Table";

const ContactItem = ({ contact }) => {
  return (
    <tr>
      <td>
        <img
          src={contact.pictureUrl}
          alt={contact.name}
          width="100"
          height="150"
        />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
    </tr>
  );
};

export default ContactItem;
