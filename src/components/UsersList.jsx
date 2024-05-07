const UsersList = ({ users, editUser, deleteUser }) => {
  const handleEdit = (user) => {
    editUser(user);
  };

  const handleDelete = (user) => {
    deleteUser(user.id);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Website</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.website}</td>
            <td className="button-actions">
              <button onClick={handleEdit}>Update</button>
            </td>
            <td className="button-actions">
              <button onClick={handleDelete}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
