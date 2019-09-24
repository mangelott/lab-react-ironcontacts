import React from "react";
import Table from "react-bootstrap/Table";

import ContactItem from "./ContactItem";

export default class ContactList extends React.Component {
  render() {
    const contacts = this.props.contacts;
    return (
      <div>
        {contacts.map(contact => (
          <ContactItem contact={contact} />
        ))}
      </div>
    );
  }
}
