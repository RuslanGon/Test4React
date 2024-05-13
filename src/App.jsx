import { useEffect, useState } from "react";
import "./App.css";
import MailBoxUser from "./componetns/MailBox/MailBoxUser";
import MeetExspressUser from "./componetns/MailBox/meestExpress.json";
import { nanoid } from "nanoid";
import MailBoxForm from "./componetns/MailBoxForm/MailBoxForm";

function App() {
  const [filter, setFilter] = useState('')
  const [users, setUsers] = useState(() => {
    const stringUser = localStorage.getItem('users')
    if(!stringUser) return MeetExspressUser
    const parseUser = JSON.parse(stringUser)
    return parseUser
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])


  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    // setUsers([...users, finalUser])
    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeletUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

const onChangeUser = (event) => {
  setFilter(event.target.value)
}

const filteredUsers = users.filter((user) =>
  user.userName.toLowerCase().includes(filter.toLowerCase())|| 
  user.userEmail.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />
      <div>
        <h3>Search by name or email</h3>
        <input type="text" value={filter} placeholder="Search" onChange={onChangeUser}/>
      </div>
      <br />
      <MailBoxUser
        boxUsers={filteredUsers}
        boxTitle="Meest Express"
        onDeletUser={onDeletUser}
      />
    </div>
  );
}

export default App;
