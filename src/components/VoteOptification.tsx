import css from "../assets/VoteOptions.module.css";
import type { VoteType } from "../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptification({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVote("good")}>Good</button>
      <button className={css.button} onClick={() => onVote("neutral")}>Neutral</button>
      <button className={css.button} onClick={() => onVote("bad")}>Bad</button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>
      )}
    </div>
  );
}

export default VoteOptification;
