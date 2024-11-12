import { useState } from "react";

const PetForm = (props) => {
  const initState = {
    name: ``,
    age: ``,
    breed: ``,
  };

  const [formData, setFormData] = useState(
    props.selected ? props.selected : initState
  );

  // The e (event, evt, et, & etc) refers to the property that we are using this for.
  // In this case it would be the change of the text box
  const handleChange = (event) => {
    // So this below is how we transfer the data of the user into our code.
    // Target.name basically selects the tag.
    // Then the value is what the user inputted into the box
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    props.handleAddPet(formData);
    // setFormData({ name: ``, age: ``, breed: `` });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
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
        {/* Buttons by default are considered as type="submit". Don't need to have it but maybe might be nice to have! */}
        <button type="submit">
          {props.selected ? `Update Pet` : `Add New Pet`}
        </button>
      </form>
    </>
  );
};

export default PetForm;
