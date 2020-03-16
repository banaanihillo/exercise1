import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    const [great, setGreat] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [notGreat, setNotGreat] = useState(0)

    return (
        <div>
            <h1> How did Unicafe do today? </h1>
            <div>
                <button onClick = {() => setGreat(great + 1)}>
                    Great!
                </button>
                <button onClick = {() => setNeutral(neutral + 1)}>
                    Eh, I dunno
                </button>
                <button onClick = {() => setNotGreat(notGreat + 1)}>
                    Not so great
                </button>
            </div>

            <div>
                <h1> Summary of feedback </h1>
                <div>
                    <p> Positive feedback given: {great} </p>
                    <p> Neutral feedback given: {neutral} </p>
                    <p> Constructive criticism given: {notGreat}</p>
                </div>
            </div>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));