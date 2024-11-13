const PetDetails = (props) => {
  if (!props.selected)
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );

  return (
    <div>
      <ul>
        <li>{props.selected.name}</li>
        <li>
          Age: {props.selected.age} year{props.selected.age > 1 ? `s` : ``} old.
        </li>
        <li>Breed: {props.selected.breed}</li>
      </ul>
      <button onClick={() => props.handleFormView(props.selected)}>Edit</button>
      <button onClick={() => props.handleRemovePet(props.handleRemovePet._id)}>
        Remove
      </button>
    </div>
  );
};

export default PetDetails;
