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
        console.log(chatLog)
        try {
            const message = await fetchQuestionMessage(technology, seniority)
            setChatLog([
                ...chatLog,
                { id: chatLog.length + 1, type: 'bot', msg: message }
            ])
        } catch (error) {
            console.error(error)
        }
        // setChatLog([
        //     ...chatLog,
        //     { id: chatLog.length + 1, type: 'bot', msg: 'hi i am the AI' }
        // ])
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
