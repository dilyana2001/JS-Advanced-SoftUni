// function solve() {
//     let quizzie = document.querySelectorAll('#quizzie section')
//     let result = document.querySelector('#results .results-inner h1')
//     let resultUl = document.querySelector('#quizzie #results')
//     let answers = document.querySelectorAll('.answer-text')
//     let countRightAnswers = 0
//     let firstAnswer = quizzie[0].querySelector('ul .low-value div p')
//     let secondAnswer = quizzie[1].querySelector('ul .high-value div p')
//     let trirdAnswer = quizzie[2].querySelector('ul .low-value div p')
//     let trirdWrongAnswer = quizzie[2].querySelector('ul .high-value div p')

//     for (let x = 0; x < answers.length; x++) {
//         answers[x].addEventListener('click', clickTheAnswer)

//         function clickTheAnswer(e) {
//             let section = e.target.parentNode.parentNode.parentNode.parentNode
//             section.style.display = 'none'
//             section.nextElementSibling.style.display = 'block'
//             if (trirdAnswer === e.target || trirdWrongAnswer === e.target) {
//                 resultUl.style.display = 'block'
//             }
//             if (firstAnswer === e.target || secondAnswer === e.target || trirdAnswer === e.target) {
//                 countRightAnswers++
//             }
//             if (countRightAnswers === 3) {
//                 result.textContent = `You are recognized as top JavaScript fan!`
//             } else {
//                 result.textContent = `You have ${countRightAnswers} right answers.`
//             }
//         }
//     }
// }