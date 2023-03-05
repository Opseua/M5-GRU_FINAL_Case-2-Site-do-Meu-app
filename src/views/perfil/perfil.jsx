import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = ({ userId }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://m5-gru-crud-api.cyclic.app/usuarios/${userId}`);
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError("Ocorreu um erro ao carregar os dados do usuário.");
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const rootClass = `Profile Profile--${userId}`;

  return (
    <div className={rootClass}>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <h2>Nome: {user.usuario_nome}</h2>
          <p>Gênero: {user.usuario_genero}</p>
          <p>Data de nascimento: {formatDate(user.usuario_nascimento)}</p>
          <p>Email: {user.usuario_email}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
