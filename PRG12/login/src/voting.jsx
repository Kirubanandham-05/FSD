import './App.css';
import { useState } from 'react';

function App()  {
  
   const [vote,setVote] = useState({
        CandidateA : 0,
        CandidateB : 0.
    });
    const Vot = (Candidate) => {
        setVote({
            ...vote,
            [Candidate] : vote[Candidate] + 1
        });
    }

    return ( 
        <>

        <div>

            <h2>TVK</h2>
            <p>votes : {vote.CandidateA}</p>
            <button onClick={() => Vot("CandidateA")}>Vote</button>
            
        </div>

        <hr />



        <div>
            <h2>TVK india </h2>
            <p>votes : {vote.CandidateB}</p>
            <button onClick={() => Vot("CandidateB")}>VOTEEEEEE</button>
            </div>
            </>
    )
}

export default App;
