// ListContainer.js
import { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./UsersList";
import Modal from "./Modal";
import Form from "./Form";
import SearchBar from "./SearchBar";

const ListContainer = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserModalOpen, setNewUserModalOpen] = useState(false);
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users${
          debouncedSearchText ? `?username=${debouncedSearchText}` : ""
        }`
      )
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [debouncedSearchText]);

  const openAddUserModal = () => {
    setNewUserModalOpen(true);
  };

  const closeAddUserModal = () => {
    setNewUserModalOpen(false);
  };

  const openEditUserModal = (user) => {
    setEditingUser(user);
    setEditUserModalOpen(true);
  };

  const closeEditUserModal = () => {
    setEditUserModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const deleteUser = (userId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <main>
      <SearchBar
        searchText={searchText}
        handleInputChange={handleInputChange}
      />
      <UsersList
        users={users}
        openEditUserModal={openEditUserModal}
        deleteUser={deleteUser}
      />
      <button onClick={openAddUserModal}>Add User</button>

      <Modal
        isOpen={newUserModalOpen}
        closeModal={closeAddUserModal}
        title="Add User">
        <Form
          setUsers={setUsers}
          users={users}
          closeModal={closeAddUserModal}
        />
      </Modal>

      <Modal
        isOpen={editUserModalOpen}
        closeModal={closeEditUserModal}
        title="Edit User">
        <Form
          user={editingUser}
          setUsers={setUsers}
          users={users}
          closeModal={closeEditUserModal}
        />
      </Modal>
    </main>
  );
};

export default ListContainer;
