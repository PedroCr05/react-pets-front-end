import { useState } from "react";

const PetForm = (props) => {
  const [formData, setFormData] = useState({
    name: ``,
    age: ``,
    breed: ``,
  });

  // The e (event, evt, et, & etc) refers to the property that we are using this for.
  // In this case it would be the change of the text box
  const handleChange = (event) => {
    // So this below is how we transfer the data of the user into our code.
    // Target.name basically selects the tag.
    // Then the value is what the user inputted into the box
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          // type="text" isn't necessary since this is the default option already but it's still nice to have it just in case.
          type="text"
          id="name"
          name="name"
          value={formData.name}
          // This below is what allows the user to type into the text box
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={formData.age}
          // This below is what allows the user to type into the text box
          onChange={handleChange}
          required
        />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={formData.breed}
          // This below is what allows the user to type into the text box
          onChange={handleChange}
          required
        />
      </form>
    </>
  );
};

export default PetForm;
