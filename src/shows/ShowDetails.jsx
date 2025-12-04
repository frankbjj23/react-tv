import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
const ShowDetails = ({ show }) => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  if (!show) {
    return <h2>Select A Show</h2>;
  }

  return (
    <div className="show-details">
      <EpisodeDetails episode={selectedEpisode}></EpisodeDetails>
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
    </div>
  );
};
export default ShowDetails;
