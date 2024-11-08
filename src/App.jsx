import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList";
import PetDetails from "./components/PetDetails";

const App = () => {
  const [petList, setPetList] = useState([]);
  // Why use null? It did say object. Or am I getting confused?
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index();

        if (pets.error) {
          throw new Error(pets.error);
        }
        // To test the ternary works just slap an empty array brackets.
        setPetList(pets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  const updateSelected = (pet) => {
    setSelected(pet);
  };

  return (
    <>
      <h1>My favorite pets! :D</h1>
      <PetList petList={petList} updateSelected={updateSelected} />
      <PetDetails selected={selected} />
    </>
  );
};

export default App;
