import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const StatisticLine = (props) => {
    return (
        <div>
            {props.text} {props.value}
        </div>
    )
}

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
                <StatisticLine text = "Positive feedback given: " value = {great} />
                <StatisticLine text = "Neutral feedback given: " value = {neutral} />
                <StatisticLine text = "Constructive criticism given: " value = {notGreat} />
                <StatisticLine text = "Total: " value = {great + neutral + notGreat} />
                <StatisticLine text = "Average score: "
                value = {(great - notGreat) / (great + neutral + notGreat)} />
                <StatisticLine text = "Positive feedback (%): "
                value = {(great / (great + neutral + notGreat) ) * 100} />
        </div>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick = {onClick}>
        {text}
    </button>
)

const App = () => {
    const [great, setGreat] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [notGreat, setNotGreat] = useState(0)

    return (
        <div>
            <h1> How did Unicafe do today? </h1>
            <div>
                <Button onClick = {() => setGreat(great + 1)} text = "Great!" />
                <Button onClick = {() => setNeutral(neutral + 1)} text = "Eh, I dunno" />
                <Button onClick = {() => setNotGreat(notGreat + 1)} text = "Not so great" />
            </div>

            <Statistics great = {great} neutral = {neutral} notGreat = {notGreat} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));