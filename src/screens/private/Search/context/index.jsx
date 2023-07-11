import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setUsers([]);
    setIsSearching(!isSearching);
  };

  const store = {
    users: users,
    setUsers: setUsers,
    isSearching: isSearching,
    setIsSearching: setIsSearching,
    toggleSearch: toggleSearch,
  };

  return <SearchContext.Provider value={store}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
