import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({great, neutral, notGreat }) => {
    if ((great + neutral + notGreat) === 0) {
        return (
            <div>
                <p> No feedback has been given yet. </p>
                <p> You may give feedback by clicking on the corresponding buttons.</p>
            </div>
        )
    }

    return (
        <div>
            <h1> Summary of feedback </h1>
            <div>
                <p> Positive feedback given: {great} </p>
                <p> Neutral feedback given: {neutral} </p>
                <p> Constructive criticism given: {notGreat}</p>
                <p> Amount of feedback given: {great + neutral + notGreat}</p>
                <p> Average score: {(great - notGreat) / (great + neutral + notGreat)}</p>
                <p> Positive: {(great / (great + neutral + notGreat) ) * 100} % </p>
            </div>
        </div>
    )
}

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

            <Statistics great = {great} neutral = {neutral} notGreat = {notGreat} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));