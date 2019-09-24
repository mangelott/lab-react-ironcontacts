import React from "react";
import Table from "react-bootstrap/Table";

import ContactItem from "./ContactItem";

export default class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <ContactItem key={contact.name} contact={contact} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
