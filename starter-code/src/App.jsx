import React, { Component } from "react";
// import logo from "./logo.svg";

import "./App.css";
import contacts from "./contacts.json";
import Container from "react-bootstrap/Container";
import ContactList from "./components/ContactList";

class App extends Component {
  render() {
    // const message = "This is my app";
    const contactList = contacts.slice(0, 5);
    return (
      <Container>
        <ContactList contacts={contactList} />
      </Container>
    );
  }
}

export default App;
