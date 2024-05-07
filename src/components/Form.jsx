// UserForm.js
import { useState } from "react";

const UserForm = ({ user, closeModal }) => {
  const initialUser = user || {
    name: "",
    email: "",
    username: "",
  };

  const [formData, setFormData] = useState(initialUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission, e.g., sending data to the server
    closeModal(); // Close the modal after submission
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
