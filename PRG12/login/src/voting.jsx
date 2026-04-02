import './App.css';
import { useState } from 'react';

function App() {
  // Initialize votes as numbers
  const [vote, setVote] = useState({
     CandidateA: 0,
    dmk : 0,});

  const Vo = (candidate) => {
    setVote((prevVot) => ({
      ...prevVot,
      [candidate]: prevVot[candidate] + 1,
    }));}
    const Votha = (candidate) => {
         setVote((prevVot) => ({
      ...prevVot,
      [candidate]: prevVot[candidate] +1,
    }));

  };

  return (
    <div className="container">
      <h1>TN VOTING APPLICATION</h1>
      <div>
        <h2>TVK</h2>
        <p>Votes: {vote.CandidateA}</p>
        <button onClick={() => Vo("CandidateA")}>Vote</button>
      </div>
      <hr></hr>
      <div>
        <h2>dmk</h2>
        <p>Votes: {vote.dmk}</p>
        <button onClick={() => Vo("CandidateA")}>Vote</button>
      </div>
    </div>
  );
}

export default App;
