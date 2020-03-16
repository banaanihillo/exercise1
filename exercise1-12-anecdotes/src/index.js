import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [anecdote, setAnecdote] = useState(10)

    const generateRandom = () => {
        return Math.floor(Math.random() * Math.floor(10));
    }

    return (
        <div>
            <p> {(anecdote !== 10) ? props.anecdotes[anecdote] : "Click here for advice"} </p>
            <p> <button onClick = {() => setAnecdote(generateRandom)}>
                Fetch a random anecdote 
            </button> </p>
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
    "Make everything as simple as possible, but not simpler."
]

ReactDOM.render(<App anecdotes = {anecdotes} />, document.getElementById('root'));