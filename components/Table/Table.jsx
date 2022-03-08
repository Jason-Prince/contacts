import EditableRow from "./EditableRow/EditableRow";
import React from "react";
import ReadOnlyRow from "./ReadOnlyRow/ReadOnlyRow";
import styles from "./Table.module.css";

const Table = ({
  contacts,
  editContactId,
  handleEditClick,
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
  handleCancelClick,
  handleDeleteClick,
}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <table className={styles.tTable}>
        <tr className={styles.tHeadRow}>
          <th className={styles.tHeadCol}>Name</th>
          <th className={styles.tHeadCol}>Address</th>
          <th className={styles.tHeadCol}>Phone Number</th>
          <th className={styles.tHeadCol}>Email</th>
          <th className={styles.tHeadCol}>Actions</th>
        </tr>
        <tbody className={styles.tBody}>
          {contacts.map((contact) => (
            <>
              {editContactId === contact.id ? (
                <EditableRow
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  key={contact.id}
                  contact={contact}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Table;
