import {useEffect, useRef, useState} from "react";
import ProductList from "./components/ProductList";
import apiClient, {CanceledError} from "./services/api-client";
import userService, {User} from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const {users, error, isLoading, setUsers, setError} = useUsers();
  const deleteUser = (u: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id != u.id));

    userService.delete(u.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = {...user, name: user.name + " !"};
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {id: 15, name: "Fereno"};
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({data: savedUser}) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div className="m-3">
        <button onClick={addUser} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul className="list-group">
        {users.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between"
          >
            {u.name}
            {"  "}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(u)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(u)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
