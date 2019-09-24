import React from "react";
// import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

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
      <td>
        <Button>Delete</Button>
      </td>
    </tr>
  );
};

export default ContactItem;
