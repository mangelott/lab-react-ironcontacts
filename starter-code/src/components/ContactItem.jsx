import React from "react";
import Table from "react-bootstrap/Table";

const ContactItem = ({ contact }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={contact.pictureUrl} alt={contact.name} />
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ContactItem;
