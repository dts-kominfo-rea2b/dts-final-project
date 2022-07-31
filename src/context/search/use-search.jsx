import { createContext, useState, useContext } from 'react';

const searchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <searchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => useContext(searchContext);
