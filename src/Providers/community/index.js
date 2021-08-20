import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [CardsGroups, setCardsGroups] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const loadCommunity = () => {
    axios
      .get(`https://kabit-api.herokuapp.com/groups/?page=${nextPage}`)
      .then((response) => setCardsGroups(response.data.results))
      .catch((err) => console.log(err));
  };

  const PageNext = () => {
    if (nextPage < 10) {
      setNextPage(nextPage + 1);
    }
  };

  const PagePreview = () => {
    if (nextPage > 1) {
      setNextPage(nextPage - 1);
    }
  };

  useEffect(() => {
    loadCommunity();
  }, [nextPage]);

  return (
    <CommunityContext.Provider
      value={{ CardsGroups, loadCommunity, PageNext, PagePreview }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => useContext(CommunityContext);
