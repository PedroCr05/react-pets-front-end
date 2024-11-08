import { useState, useEffect } from "react";
import * as petService from "./services/petService";

const App = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index();

        if (pets.error) {
          throw new Error(pets.error);
        }
        setPetList(pets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  return <h1>Hello World</h1>;
};

export default App;
