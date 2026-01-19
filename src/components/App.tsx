import { useState } from "react";
import css from '../assets/App.module.css';
import Cafelnfo from "./Cafelnfo";
import type { Votes } from "../types/votes";
import VoteOptification from "./VoteOptification"


const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};


function App() {
  const [votes] = useState<Votes>(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  return (
    <div className={css.app}>
      <Cafelnfo />
      <VoteOptification />
    </div>
  );
}

export default App;
