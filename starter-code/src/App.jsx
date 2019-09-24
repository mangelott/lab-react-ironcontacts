import React, { Component } from "react";
// import logo from "./logo.svg";
import Tittle from "./components/Tittle";

import "./App.css";
import contacts from "./contacts.json";
import { Container, Button } from "react-bootstrap";

import ContactList from "./components/ContactList";

class App extends Component {
  constructor() {
    super();
    this.contactList = contacts.slice(0, 5);

    this.state = {
      contactList: this.contactList
    };
    this.addNew = this.addNew.bind(this);
    this.sort = this.sort.bind(this);
    this.sortPop = this.sortPop.bind(this);
  }

  addNew() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contactList: [...this.state.contactList, randomContact]
    });
  }

  sort() {
    this.setState({
      contactList: this.state.contactList.sort((a, b) =>
        a.name > b.name ? 1 : -1
      )
    });
  }

  sortPop() {
    this.setState({
      contactList: this.state.contactList.sort((a, b) =>
        a.popularity > b.popularity ? 1 : -1
      )
    });
  }

  render() {
    const contactList = this.state.contactList;
    // const message = "This is my app";
    return (
      <Container>
        <Tittle />
        <Button onClick={this.addNew}>Add New Contact</Button>
        <Button onClick={this.sort}>Sort By Contact</Button>
        <Button onClick={this.sortPop}>Sort by Popularity</Button>
        <ContactList contacts={contactList} />
      </Container>
    );
  }
}

export default App;
