import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>Description of the course: {props.course} </h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p> {props.part1} contains {props.exercises1} exercises. </p>
            <p> {props.part2} contains {props.exercises2} exercises. </p>
            <p> {props.part3} contains {props.exercises3} exercises. </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            Total number of exercises: {props.exercises}
        </div>
    )
}

const App = () => {
    const course = "Stack Half-Full"
    const part1 = "Fundamentals of React"
    const exercises1 = 10
    const part2 = "Using props to pass data"
    const exercises2 = 7
    const part3 = "State of a component"
    const exercises3 = 14

    return (
        <div>
            <Header course = {course} />
            <Content part1 = {part1} part2 = {part2} part3 = {part3}
            exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
            <Total exercises = {exercises1 + exercises2 + exercises3} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));