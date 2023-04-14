'use client'

import { fetchQuestionMessage } from '@/app/utils/fetchquestions'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import './styles/Interview.scss'

type Chatlog = {
    id: number
    type: string
    msg: string
}

export default function Interview() {
    const [technology, setTechnology] = useState('')
    const [seniority, setSeniority] = useState('')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('')

    const [chatLog, setChatLog] = useState<Chatlog[]>([])
    const chatLogRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (chatLogRef.current) {
            chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [chatLog])

    const addAnswer = (answer: string) => {
        setChatLog([
            ...chatLog,
            { id: chatLog.length + 1, type: 'user', msg: answer }
        ])
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
        try {
            if (!technology || !seniority) {
                setError('Technology and seniority are required fields')
                return
            }
            const message = await fetchQuestionMessage(technology, seniority)
            setChatLog([
                ...chatLog,
                { id: chatLog.length + 1, type: 'bot', msg: message }
            ])
            setError('')
        } catch (error) {
            console.error(error)
            setError('An error occurred. Please try again later.')
        }
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
            {error && <p className="error-message__text">{error}</p>}
            <div className="interview__playground">
                {chatLog.length === 0 ? (
                    <p>
                        No questions yet. Please select a technology and
                        seniority level and ask for questions.
                    </p>
                ) : (
                    <div>
                        <div className="interview__chat" ref={chatLogRef}>
                            {chatLog?.map(message => (
                                <div
                                    className={
                                        message.type === 'user'
                                            ? 'interview__answer-msg'
                                            : 'interview__question-msg'
                                    }
                                    key={message.id}
                                >
                                    {message.msg}
                                </div>
                            ))}
                        </div>
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
