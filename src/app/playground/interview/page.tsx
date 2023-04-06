'use client'

import { fetchQuestionMessage } from '@/app/utils/fetchquestions'
import { ChangeEventHandler, useState } from 'react'
import './styles/Interview.scss'

type Answer = {
    id: number
    answer: string
}

export default function Interview() {
    const [technology, setTechnology] = useState('')
    const [seniority, setSeniority] = useState('')
    const [questions, setQuestions] = useState('')
    const [answer, setAnswer] = useState('')
    const [answers, setAnswers] = useState<Answer[]>([])

    const addAnswer = (answer: string) => {
        setAnswers([...answers, { id: answers.length + 1, answer }])
    }

    const handleTechnologyChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setTechnology(e.target.value)
    }

    const handleSeniorityChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setSeniority(e.target.value)
    }
    const handleAnswerChange: ChangeEventHandler<HTMLInputElement> = e => {
        setAnswer(e.target.value)
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        // try {
        //     const message = await fetchQuestionMessage(technology, seniority);
        //     setCurrentQuestion(message);
        //   } catch (error) {
        //     console.error(error);
        //     // Display error message to user
        //   }
        // const message = await fetchQuestionMessage(technology, seniority);
        // setQuestions(message);
        setQuestions('hi, this is a test question is not fetching any data?')
    }
    function handleClick() {
        if (!answer) return
        addAnswer(answer)
        setAnswer('')
    }
    return (
        <div className="interview">
            <h1 className="interview__title">Receive Personalized Interview</h1>
            <form className="interview__form" onSubmit={handleSubmit}>
                <label>
                    Technology:
                    <select
                        className="interview__select"
                        value={technology}
                        onChange={handleTechnologyChange}
                    >
                        <option value="">-- Select technology --</option>
                        <option value="javascript">Javascript</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue.js</option>
                    </select>
                </label>
                <label>
                    Seniority:
                    <select
                        className="interview__select"
                        value={seniority}
                        onChange={handleSeniorityChange}
                    >
                        <option value="">-- Select seniority --</option>
                        <option value="trainee">Trainee</option>
                        <option value="junior">Junior</option>
                        <option value="mid-senior">Mid-Senior</option>
                        <option value="senior">Senior</option>
                    </select>
                </label>
                <button type="submit">Ask me</button>
            </form>
            <div className="interview__playground">
                {questions.length === 0 ? (
                    <p>
                        No questions yet. Please select a technology and
                        seniority level and ask for questions.
                    </p>
                ) : (
                    <div className="interview__chat">
                        <div className="interview__question-msg">
                            {questions}
                        </div>
                        {answers?.map(answer => (
                            <div
                                className="interview__answer-msg"
                                key={answer.id}
                            >
                                {answer.answer}
                            </div>
                        ))}
                        <div className="interview__answer">
                            <input
                                type="text"
                                placeholder="Enter your answer..."
                                value={answer}
                                onChange={handleAnswerChange}
                            />
                            <button onClick={handleClick}>Send</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
