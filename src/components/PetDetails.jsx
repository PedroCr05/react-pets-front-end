const PetDetails = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>{props.selected.name}</li>
        <li>
          Age: {props.selected.age} year{props.selected.age > 1 ? `s` : ``} old.
        </li>
        <li>Breed: {props.selected.breed}</li>
      </ul>
    </div>
  );
};

export default PetDetails;
