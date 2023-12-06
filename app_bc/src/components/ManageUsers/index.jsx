"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { Title } from "../Title";
import EditUser from "../EditUser";
import DeleteUser from "../DeleteUser";
import axios from "axios";
import { Button } from "../Button";
import EnableUser from "../EnableUser";

function ManageUsers(props) {
  const [users, setUsers] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [enableModal, setEnableModal] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get(
        "http://localhost:3001/author/get-all-authors"
      );
      // console.log(res.data);
      setUsers(res.data.autores);
    }
    try {
      getUsers();
    } catch (err) {
      alert(err);
    }
  }, [editModal, deleteModal, enableModal]);
  return (
    <div className="manageUsersWrapper">
      <Title>Editar Usuários</Title>
      <div className="usersListWrapper">
        {users.length !== 0 &&
          users.map((user) => {
            return (
              <div className="userWrapper" key={user._id}>
                <div className="textWrapper">
                  <p>
                    <span className="spanText">Nome:</span> {user.authorName}
                  </p>
                  <p>
                    <span className="spanText">Usuário:</span> {user.authorUser}
                  </p>
                  <p>
                    <span className="spanText">Email:</span> {user.authorEmail}
                  </p>
                  <p>
                    <span className="spanText">Status:</span>{" "}
                    {user.authorStatus ? "Ativo" : "Inativo"}
                  </p>
                </div>
                <div className="buttonsWrapper">
                  <Button primary onClick={() => setEditModal(user._id)}>
                    Editar
                  </Button>
                  <Button onClick={() => setEnableModal(user._id)}>
                    Ativar
                  </Button>
                  <Button onClick={() => setDeleteModal(user._id)}>
                    Remover
                  </Button>
                </div>
                {editModal === user._id && (
                  <EditUser setEditModal={setEditModal} user={user} />
                )}
                {deleteModal === user._id && (
                  <DeleteUser setDeleteModal={setDeleteModal} user={user} />
                )}
                {enableModal === user._id && (
                  <EnableUser setEnableModal={setEnableModal} user={user} />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ManageUsers;
