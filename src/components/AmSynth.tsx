import * as Tone from "tone";
import "./AmSynth.css";

const AmSynth = () => {
  const synth = new Tone.AMSynth().toDestination();

  const playAMSynth = () => {
    synth.triggerAttackRelease("C4", "4n");
  };
  return (
    <div className="AmSynth">
      <button className="AmSynth-btn" onClick={playAMSynth}>
        AMSynth
      </button>
    </div>
  );
};

export default AmSynth;
