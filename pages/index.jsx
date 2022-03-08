import Table from "../components/Table/Table";
import data from "../mock-data.json";
import { nanoid } from "nanoid";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className={styles.container}>
      <h2>Contacts</h2>
      <Table
        contacts={contacts}
        editContactId={editContactId}
        handleEditClick={handleEditClick}
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange}
        handleEditFormSubmit={handleEditFormSubmit}
        handleCancelClick={handleCancelClick}
        handleDeleteClick={handleDeleteClick}
      />
      <h2>Add Contact</h2>
      <form onSubmit={handleAddFormSubmit} className={styles.form}>
        <input
          className="input"
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter full name..."
          onChange={handleAddFormChange}
        />
        <input
          className="input"
          type="text"
          name="address"
          required="required"
          placeholder="Enter home address..."
          onChange={handleAddFormChange}
        />
        <input
          className="input"
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter phone number..."
          onChange={handleAddFormChange}
        />
        <input
          className="input"
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
          onChange={handleAddFormChange}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
