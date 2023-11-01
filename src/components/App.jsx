import React, { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleAddContact = () => {
    if (this.state.name.trim() === '') {
      return;
    }
    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
        />
        <button onClick={this.handleAddContact}>Add Contact</button>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
