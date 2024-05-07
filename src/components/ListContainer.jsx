import { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./UsersList";

const ListContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.data;
      setUsers(users);
    };
    getUsers();
  }, []);
  return (
    <main>
      <UsersList users={users} />
    </main>
  );
};

export default ListContainer;
