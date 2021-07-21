// import React, { useState, useEffect } from 'react'
// import { getQuiz } from './QuizApi'

// function Quiz() {
//     const [quiz, setQuiz] = useState("")

//     useEffect(() => {
//         const loadQuizData = async () => {
//             const data = await getQuiz('_id')
//             console.log(data)
//             setQuiz(data)
//         }
//         loadQuizData()
//     }, [])

//     console.log(quiz && quiz.question)
//     // {quiz.map(() => {

//     // })}
// return(
//     <div>
//         <div >
//             <div>
//                 <h1>{quiz && quiz.question}</h1>
//             </div>

//             {/* <div>
//                 <input type="checkbox" name="checkbox" {...(data.checkbox ? "checked" : "")} />
//                 <h3>{ }</h3>

//                 </div> */}

//             <div className="button">
//                 <button>Next</button>
//                 <button>Back</button>
//             </div>

//         </div>
//     </div>
//     )

// }

// export default Quiz
