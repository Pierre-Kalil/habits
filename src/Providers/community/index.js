import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [CardsGroups, setCardsGroups] = useState([]);

  const loadCommunity = () => {
    axios
      .get("https://kabit-api.herokuapp.com/groups/")
      .then((response) => setCardsGroups(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadCommunity();
  }, []);

  return (
    <CommunityContext.Provider value={{ CardsGroups, loadCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => useContext(CommunityContext);
