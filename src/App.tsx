import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import type { Iplayer } from "./Type/PlayerType";
import Players from "./components/Players/Players";



const PlayersPromise = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data/players.json");
  const data = await res.json();
  return data;
};

function App() {
  console.log(PlayersPromise);

  return (
    <>
      <Suspense>
        <Navbar coin={5000} />
        <Banner />
        <Players PlayersPromise = {PlayersPromise} />
      </Suspense>
    </>
  );
}

export default App;
