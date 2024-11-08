import "./PetList.css";

const PetList = (props) => {
  // Ask how to go by testing if I want to make sure that props actually doesn't have anything.
  // Basically without having to manipulate the back end.
  // If not then simple way to do that test is manipulate the back end.
  const pets = props.petList.map((pet) => (
    // I know we did talk about using <Link to="some-url.com"></Link> but is using href okay here for example?
    // <a href="#" key={pet._id}>
    // Also ask if there is a way you can do mouse hover event like in css.
    <a
      className="hover"
      key={pet._id}
      onClick={() => props.updateSelected(pet)}
    >
      <li>{pet.name}</li>
    </a>
  ));
  return (
    <div>
      <h2>Pet List</h2>
      {!props.petList.length ? <h3>There is no pets</h3> : <ul>{pets}</ul>}
    </div>
  );
};
export default PetList;
