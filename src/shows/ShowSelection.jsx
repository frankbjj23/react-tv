import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
const ShowSelection = ({ shows, setSelectedShow }) => {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
};
export default ShowSelection;
