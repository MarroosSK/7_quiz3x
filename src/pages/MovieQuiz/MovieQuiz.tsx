import  { useState } from 'react'
import { QuizType, ResultData } from '../../types/types'
import { movieQuiz } from '../../helpers/data'
import {Button, ListGroup} from "react-bootstrap"
import Results from '../../components/Results/Results'
import "../Quiz.css"

const MovieQuiz = () => {
    const [movieData] = useState<QuizType>(movieQuiz);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)
    const [result, setResult] = useState<ResultData>({
        quizName: "Movie",
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
      })
    const [showResult, setShowResult] = useState(false)

      const {questions} = movieData
      const {question, choices, correctAnswer } = questions[currentQuestion]

      const handleNextQuestion = (): void  =>{
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
                }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        //ak som na poslednej otazke (else), zobrazi vysledok, inak ukaze novu otazku
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
          } else {
            setCurrentQuestion(0)
            setShowResult(true)
          }
      }

      const onAnswerSelected = (answer: string, index: number) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
          setSelectedAnswer(true)
          console.log('right')
        } else {
          setSelectedAnswer(false)
          console.log('wrong')
        }
      }


  return (
    <>
    {
        !showResult ? (
            <div>
                <h3>{question}</h3>
                <ListGroup variant='flush' className='pb-3'>
                    {
                        choices.map((choice, index)=>(
                            <ListGroup.Item variant='light' onClick={() => onAnswerSelected(choice, index)} key={choice}
                            className={selectedAnswerIndex === index ? 'quiz_question' : ""}>
                            {choice}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <Button variant="outline-dark" className="btn btn-link-light" onClick={handleNextQuestion} disabled={selectedAnswerIndex === null}>{currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}</Button>
            </div>
        ) : (
            <Results result={result} />
        )
    }
    </>
  )
}

export default MovieQuiz