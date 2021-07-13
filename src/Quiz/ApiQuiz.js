// export const addQuiz = (******, ******,******,******,) => {   
//     return new Promise((resolve, reject) => {
//         const sendData = {
//             question,
//             ******,
//             ******,
//             *******,
//             *******
//         }

//         fetch('/addquiz', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"     
//             },
//             body: JSON.stringify(sendData)
//         })

//         .then(response => {    
//             if(response.status === 200) {
//                 response.json().then(data => {
//                     resolve(data)
//                 }).catch(error => {
//                     reject(error)
//                 })
//             } else {
//                 reject(new Error("error number " +response.status))
//             }

//         }).catch(error => {         
//             reject(error)
//         }) 
//     })
// }