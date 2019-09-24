import React, { Component } from "react";
// import logo from "./logo.svg";
import Tittle from "./components/Tittle";

import "./App.css";
import contacts from "./contacts.json";
import Container from "react-bootstrap/Container";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ContactList from "./components/ContactList";

class App extends Component {
  constructor() {
    super();
    const contactList = contacts.slice(0, 5);
    this.state = { contactList };
    this.addNew = this.addNew.bind(this);
  }

  addNew() {
    console.log("Adding new");
  }
  render() {
    const contactList = this.state.contactList;
    // const message = "This is my app";
    return (
      <Container>
        <Tittle />
        <ButtonToolbar onClick={this.addNew}>Add New Contact</ButtonToolbar>
        <ContactList contacts={contactList} />
      </Container>
    );
  }
}

export default App;
