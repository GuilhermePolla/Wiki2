import { useEffect, useState } from "react";
import "./styles.css";
import { Title } from "../Title";

function ManageUsers(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //gets all authors
  }, []);
  return (
    <div className="manageUsersWrapper">
      <Title>Manage Users</Title>
    </div>
  );
}

export default ManageUsers;
