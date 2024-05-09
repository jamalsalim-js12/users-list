// UserForm.js
import { useState, useEffect } from "react";

const Form = ({ user, closeModal, setUsers, users }) => {
  const initialUser = user || {
    name: "",
    email: "",
    username: "",
    website: "",
  };

  const [formData, setFormData] = useState(initialUser);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const updatedUsers = users.map((u) =>
        u.id === formData.id ? formData : u
      );
      setUsers(updatedUsers);
    } else {
      setUsers((prevUsers) => [...prevUsers, formData]);
    }

    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
      />

      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleInputChange}
        placeholder="Website"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
