import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const StatisticLine = ({great, neutral, notGreat}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Description </th>
                        <th> Amount </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Positive feedback</td>
                        <td> {great} </td>
                    </tr>
                    <tr>
                        <td> Neutral feedback </td>
                        <td> {neutral} </td>
                    </tr>
                    <tr>
                        <td> Constructive criticism </td>
                        <td> {notGreat} </td>
                    </tr>
                    <tr>
                        <td> Feedback total </td>
                        <td> {great + neutral + notGreat} </td>
                    </tr>
                    <tr>
                        <td> Average feedback score</td>
                        <td> {(great - notGreat ) / (great + neutral + notGreat )} </td>
                    </tr>
                    <tr>
                        <td> Percentage of positive feedback </td>
                        <td> {(great / (great + neutral + notGreat)) * 100} % </td>
                    </tr>
                </tbody>
            </table>
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
            <StatisticLine great = {great} neutral = {neutral} notGreat = {notGreat} />
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