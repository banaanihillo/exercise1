import React from 'react';
import ReactDOM from 'react-dom';

const Part = (props) => {
    return (
        <div>
            <p> {props.name} contains {props.exercises} exercises. </p>
        </div>
    )    
}

const Header = (props) => {
    return (
        <div>
            <h1> Description of the course: {props.course} </h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name = {props.name1} exercises = {props.exercises1} />
            <Part name = {props.name2} exercises = {props.exercises2} />
            <Part name = {props.name3} exercises = {props.exercises3} />
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
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    }
    const part2 = {
        name: "Using props to pass data",
        exercises: 7
    }
    const part3 = {
        name: "State of a component",
        exercises: 14
    }

    return (
        <div>
            <Header course = {course} />
            <Content name1 = {part1.name} name2 = {part2.name} name3 = {part3.name}
            exercises1 = {part1.exercises}
            exercises2 = {part2.exercises}
            exercises3 = {part3.exercises} />
            <Total exercises = {part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));