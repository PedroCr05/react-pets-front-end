import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetDetails from "./components/PetDetails";
import PetForm from "./components/PetForm";
import PetList from "./components/PetList";

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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemovePet = async (id) => {
    try {
      const adoptPet = await petService.deletePet(id);
      if (adoptPet.error) {
        throw new Error(adoptPet.error);
      }

      // Confused on the .filter(method) How would I filter it out?
      // Maybe like calling a new argument with pet then searching for the name? or id?
      setPetList(petList.filter((pet) => pet._id !== adoptPet._id));
      // Above here is the code snippet. Was confused but also why use filter? What is the difference between map and filter?
      // Aren't both the same thing?

      // .map() = List elements from the array

      // .filter() = Having a condition or just removing elements within the array
      setIsFormOpen(false);
      setSelected(null);
    } catch (error) {
      console.log(error);
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
        <PetDetails
          selected={selected}
          handleFormView={handleFormView}
          handleRemovePet={handleRemovePet}
        />
      )}
    </>
  );
};

export default App;
