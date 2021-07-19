import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Style.css"

function AddQuiz() {

    const [error, setError] = React.useState("");

    const [input, setInput] = useState({
        question: "",
        checkbox1: Boolean,
        answer1: "",
        checkbox2: Boolean,
        answer2: "",
        checkbox3: Boolean,
        answer3: ""

    })

    const inputChange = (e) => {
        const { name, value } = e.target;

        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const submit = async (e) => {
        e.preventDefault()
        try {
            const sendData = await axios.post('/quiz', {
                question: input.question,
                checkbox1: input.checkbox1,
                answer1: input.answer1,
                checkbox2: input.checkbox2,
                answer2: input.answer2,
                checkbox3: input.checkbox3,
                answer3: input.answer3
            })
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div>

            <p>{error}</p>
            <form className="container containerM">

                <textarea onChange={inputChange} name="question" value={input.question} className="question" ></textarea><br />

                <label>Type the answers below and check the checkbox for correct answers </label>  <br />
                <input onChange={inputChange} type="checkbox" name="checkbox1" value={input.checkbox1} />
                <input onChange={inputChange} type="text" name="answer1" value={input.answer1} /> <br />

                <input onChange={inputChange} type="checkbox" name="checkbox2" value={input.checkbox2} />
                <input onChange={inputChange} type="text" name="answer2" value={input.answer2} /> <br />


                <input onChange={inputChange} type="checkbox" name="checkbox3" value={input.checkbox3} />
                <input onChange={inputChange} type="text" name="answer3" value={input.answer3} /> <br />

                <button onClick={submit}>send</button>

            </form>
        </div>
    )
}

export default AddQuiz

