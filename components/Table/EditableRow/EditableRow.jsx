import React from "react";
import styles from "./EditiableRow.module.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr className={styles.tRow}>
      <td className={styles.tData}>
        <input
          className={styles.input}
          type="text"
          name="fullName"
          value={editFormData.fullName}
          required="required"
          placeholder="Enter full name..."
          onChange={handleEditFormChange}
        />
      </td>
      <td className={styles.tData}>
        <input
          className={styles.input}
          type="text"
          name="address"
          value={editFormData.address}
          required="required"
          placeholder="Enter home address..."
          onChange={handleEditFormChange}
        />
      </td>
      <td className={styles.tData}>
        <input
          className={styles.input}
          type="text"
          name="phoneNumber"
          value={editFormData.phoneNumber}
          required="required"
          placeholder="Enter phone number..."
          onChange={handleEditFormChange}
        />
      </td>
      <td className={styles.tData}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={editFormData.email}
          required="required"
          placeholder="Enter email..."
          onChange={handleEditFormChange}
        />
      </td>
      <td className={styles.tData}>
        <div className={styles.btnContainer}>
          <button type="submit" className={styles.button}>
            Save
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
