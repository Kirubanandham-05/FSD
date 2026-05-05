import './App.css';
import { useState } from 'react';

function App() {

  const [vote, setVote] = useState({
     CandidateA: 0,
    dmk : 0,});

  const Vo = (candidate) => {
    setVote((prevVot) => ({
      ...prevVot,
      [candidate]: prevVot[candidate] + 1,
    }));}
    

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
        <button onClick={() => Vo("dmk")}>Vote</button>
      </div>
    </div>
  );
}

export default App;
