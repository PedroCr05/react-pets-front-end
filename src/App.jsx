import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList";
import PetDetails from "./components/PetDetails";
import PetForm from "./components/PetForm";

const App = () => {
  const [petList, setPetList] = useState([]);
  // Why use null? It did say object. Or am I getting confused?
  const [selected, setSelected] = useState(null);
  // The form is basically to now instantly show up when the user loads the page.
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleFormView = (pet) => {
    if (!pet.name) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddPet = async (formData) => {
    try {
      const newPet = await petService.create(formData);
      setPetList([newPet, ...petList]);
      setIsFormOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  // I'm not sure what I'm doing sadly... Brain mush ;-;

  const handleUpdatePet = async (formData, id) => {
    try {
      const updatePet = await petService.update(formData, id);
      if (updatePet.error) {
        throw new Error(updatePet.error);
      }

      setPetList((prevState) =>
        prevState.map((pet) => (pet._id === id ? updatePet : pet))
      );

      setIsFormOpen(false);
      setSelected(updatePet);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>My favorite pets! :D</h1>
      <PetList
        petList={petList}
        updateSelected={updateSelected}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm
          selected={selected}
          handleAddPet={handleAddPet}
          handleUpdatePet={handleUpdatePet}
        />
      ) : (
        <PetDetails selected={selected} handleFormView={handleFormView} />
      )}
    </>
  );
};

export default App;
