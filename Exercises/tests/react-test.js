function greeting() {
    return {
        greet: 'Hello World',
        question1: 'How are you?',
        question2: "How's your day going?",
        question3: "What's your name?",
    }
}

class App extends React.Component {
    render() {
        return (
            <section className="test">
                <h1>{greeting().greet}</h1>
                <Questions />
                <Questions />
                <Questions />
                <Questions />
            </section>
        )
    }
}

let num1 = 0
let num2 = 0

function getNum() {
    return num1 += 1
}
function getOtherNum() {
    return num2+=1
}

console.log(getNum)

class Questions extends React.Component {
    render() {
        return (
            <section className="test">
                <h2 id={'q' + getOtherNum()}>Question {getNum()}</h2>
                <p>{greeting().question1}</p>
                <p>{greeting().question2}</p>
                <p>{greeting().question3}</p>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)