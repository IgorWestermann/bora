import { createContext, useEffect, useRef, useState } from "react";

const mockUsers = [
  {
    name: "Deidara",
    photo: require("../../../../../assets/fotos-perfil/deidara.png"),
  },
  {
    name: "Gaara",
    photo: require("../../../../../assets/fotos-perfil/gaara.jpeg"),
  },
  {
    name: "Hinata",
    photo: require("../../../../../assets/fotos-perfil/hinata.jpeg"),
  },
  {
    name: "Ino",
    photo: require("../../../../../assets/fotos-perfil/ino.jpeg"),
  },
  {
    name: "Rock Lee",
    photo: require("../../../../../assets/fotos-perfil/rocklee.jpg"),
  },
  {
    name: "Sasuke",
    photo: require("../../../../../assets/fotos-perfil/sasuke.jpeg"),
  },
  {
    name: "Shikamaru",
    photo: require("../../../../../assets/fotos-perfil/shikamaru.jpg"),
  },
  {
    name: "Itachi",
    photo: require("../../../../../assets/fotos-perfil/itachi.jpg"),
  },
  {
    name: "Pain",
    photo: require("../../../../../assets/fotos-perfil/pain.jpeg"),
  },
  {
    name: "Naruto",
    photo: require("../../../../../assets/fotos-perfil/naruto.jpg"),
  },
];

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const counter = useRef(0);

  const [isSearching, setIsSearching] = useState(false);
  const [fullParty , setFullParty] = useState(false)
  const lock = useRef(true);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setUsers([]);
    setFullParty(false)
    counter.current = 0;
    lock.current = !lock.current;
  };

  const resetSearch = () =>{
    setIsSearching(false)
    setFullParty(false)
    setUsers([])
    counter.current = 0
    lock.current = true
  }


  const arrayRandomElement = (array) => {
    console.log("array ", array);
    let random = Math.floor(Math.random() * array.length + 1);
    console.log("random ", random);
    if (random >= array.length) random = array.length - 1;
    const element = array[random];
    array.splice(random, 1);
    console.log("element ", element);
    return element;
  };

  const fetchUser = (usersArr) => {
    console.log("fetching user");
    return new Promise((resolve, reject) => {
      const resolveFetch = (usersArr) => {
        console.log("resolve fetch ");
        resolve(arrayRandomElement(usersArr));
      };
      const duration = Math.floor(Math.random() * 20000);
      setTimeout(resolveFetch, duration, usersArr);
    });
  };

  const getRandomUsers = async (availableUsers) => {
    const newUser = await fetchUser(availableUsers);  
    if (!lock.current) {
      counter.current = counter.current + 1;
      setUsers((prev) => [...prev, newUser]);
    } else {
      resetSearch()
      return;
    }

    if (counter.current < 3) {
      getRandomUsers(availableUsers);
    } else {
      lock.current = true;
      setIsSearching(false);
      setFullParty(true)
    }
  };

  useEffect(() => {
    if (isSearching) {
      let availableUsers = [...mockUsers];
      getRandomUsers(availableUsers);
    }
  }, [isSearching]);

  const store = {
    users: users,
    setUsers: setUsers,
    isSearching: isSearching,
    setIsSearching: setIsSearching,
    fullParty: fullParty,
    toggleSearch: toggleSearch,
    resetSearch: resetSearch,
  };

  return (
    <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
