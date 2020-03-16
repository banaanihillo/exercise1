import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [anecdote, setAnecdote] = useState(10);
    const [votes, setVote] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const generateRandom = () => {
        return Math.floor(Math.random() * Math.floor(anecdotes.length-1));
    }

    const handleVote = () => {
        setVote(votes => {
            const points = [...votes];
            points[anecdote] = points[anecdote] + 1;
            return points;
        });
    };

    return (
        <div>
            <p> {anecdotes[anecdote]} </p>
            <p> Votes given to the above anecdote: {votes[anecdote]} </p>
            <p>
                <button onClick = {() => handleVote()}>
                    Vote for this anecdote
                </button>
                <button onClick = {() => setAnecdote(generateRandom)}>
                    Fetch another anecdote 
                </button>
            </p>
            {console.log(votes)}
        </div>
    )
}

const anecdotes = [
    "Keep it simple, stupid.",
    "\"Real\" programmers can write assembly code in any language.",
    "Before software can be reusable it first has to be usable.",
    "You cannot teach beginners top-down programming, because they don't know which end is up.",
    "Why do we never have time to do it right, but always have time to do it over?",
    "Inside every large program, there is a small program trying to get out.",
    "Better train people and risk they leave - than do nothing and risk they stay.",
    "The perfect project plan is possible if one first documents a list of all the unknowns.",
    "When debugging, novices insert corrective code; experts remove defective code.",
    "Make everything as simple as possible, but not simpler.",
    "This is not really an anecdote, but you may still vote for it if you wish."
]

ReactDOM.render(<App anecdotes = {anecdotes} />, document.getElementById('root'));