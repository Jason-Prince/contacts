import React from "react";
import styles from "./ReadOnlyRow.module.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className={styles.tBodyRow}>
      <td className={styles.tDataCol}>{contact.fullName}</td>
      <td className={styles.tDataCol}>{contact.address}</td>
      <td className={styles.tDataCol}>{contact.phoneNumber}</td>
      <td className={styles.tDataCol}>{contact.email}</td>
      <td className={styles.tDataCol}>
        <div className={styles.btnContainer}>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
            className="button"
          >
            Edit
          </button>
          <button
            className="button"
            type="button"
            onClick={() => handleDeleteClick(contact.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
