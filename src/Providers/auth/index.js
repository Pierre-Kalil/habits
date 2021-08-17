import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";
// import axios from "axios";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token") || "";
  const UserName = localStorage.getItem('UserName') || "";
  const [auth, setAuth] = useState(token);
  const [username, setUsername] = useState(UserName);

  const signIn = (data, history) => {
    api
      .post("https://kabit-api.herokuapp.com/sessions/", data)
      .then((response) => {
        localStorage.clear();
        setUsername(data.username);
        localStorage.setItem('UserName', data.username)
        localStorage.setItem("token", JSON.stringify(response.data.access));
        const decodedToken = jwt_decode(response.data.access);
        setAuth(decodedToken);

        toast.success("Seja bem-vindo(a)!");
        history.push("/dashboard");
      })
      .catch((error) => toast.error("Verifique se seus dados estão corretos"));
  };

  const changeName = (data, user) => {
    axios
      .patch(`https://kabit-api.herokuapp.com/users/${user}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      // .then(()=> toast.success('Usuário atualizado'))
      .then((resp) => {
        console.log(resp);
        setUsername(data.username);
      });
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, signIn, username, changeName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
