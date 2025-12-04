import { tvShows } from "./shows/data";
import ShowDetails from "./shows/ShowDetails";
import ShowSelection from "./shows/ShowSelection";
import { useState } from "react";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [shows] = useState(tvShows);
  return (
    <>
      <header>
        <ShowSelection shows={shows} setSelectedShow={setSelectedShow} />
        <p>React TV</p>
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
