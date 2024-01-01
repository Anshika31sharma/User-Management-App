import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const usersById = useSelector((state) => state.users.usersById);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userList = Object.values(usersById);

  return (
    <div className="App">
      <div className="menu">
        {/* Hamburger menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        {/* Menu items */}
        {isMenuOpen && (
          <div className="menu-items">
            {/* Add user input fields and button */}
            <input
              type="text"
              placeholder="Email..."
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Username..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(
                  addUser({
                    id: userList[userList.length - 1].id + 1,
                    name,
                    username,
                  })
                );
              }}
            >
              Add User
            </button>
          </div>
        )}
      </div>

      <div className="displayUsers">
        {userList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(event) => {
                setNewUsername(event.target.value);
              }}
            />
            <button
              onClick={() => {
                dispatch(
                  updateUsername({ id: user.id, username: newUsername })
                );
              }}
            >
              Update Username
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
