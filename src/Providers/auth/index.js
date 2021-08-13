import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-hot-toast";
// import axios from "axios";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@Tresemme:token") || "";

  const [auth, setAuth] = useState(token);

  const signIn = (data, history) => {
    api
    .post('https://kabit-api.herokuapp.com/sessions/', data)
      .then((response) => {
        localStorage.setItem("@Tresemme:token", response.data.access);
        const decodedToken = jwt_decode(response.data.access);
        setAuth(decodedToken);

        toast.success("Seja bem-vindo(a)!");
        history.push("/dashboard");
      })
      .catch((error) => 
        toast.error("Verifique se seus dados estão corretos"),
      );
  };


  return (
    <AuthContext.Provider value={{ auth, setAuth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
