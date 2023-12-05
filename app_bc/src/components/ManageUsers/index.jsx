import { useEffect, useState } from "react";
import "./styles.css";
import { Title } from "../Title";
import Edituser from "../EditUser";
import DeleteUser from "../DeleteUser";

function ManageUsers(props) {
  const [users, setUsers] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    //gets all authors
  }, []);
  return (
    <div className="manageUsersWrapper">
      <Title>Manage Users</Title>
      <div className="usersListWrapper">
        <div className="userWrapper">
          <div className="textWrapper">
            <p>asd</p>
            <p>asd@email.com</p>
            <p>data?</p>
          </div>
          <div className="buttonsWrapper">
            <button onClick={() => setEditModal(true)}>edit</button>
            <button onClick={() => setDeleteModal(true)}>delete</button>
          </div>
          {editModal && <Edituser setEditModal={setEditModal} />}
          {deleteModal && <DeleteUser setDeleteModal={setDeleteModal} />}
        </div>
        <div className="userWrapper">
          <div className="textWrapper">
            <p>asd</p>
            <p>asd@email.com</p>
            <p>data?</p>
          </div>
          <div className="buttonsWrapper">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
        <div className="userWrapper">
          <div className="textWrapper">
            <p>asd</p>
            <p>asd@email.com</p>
            <p>data?</p>
          </div>
          <div className="buttonsWrapper">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
