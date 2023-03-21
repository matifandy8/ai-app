'use client'

import { ChangeEventHandler, useState } from 'react'
import './styles/Interview.scss'

export default function Interview() {
    const [technology, setTechnology] = useState('')
    const [seniority, setSeniority] = useState('')
    const [questions, setQuestions] = useState([])

    const handleTechnologyChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setTechnology(e.target.value)
    }

    const handleSeniorityChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setSeniority(e.target.value)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        // Here you would fetch the questions from your API, based on the selected technology and seniority
        // You can use the `technology` and `seniority` state variables to construct the API endpoint
        // Once you receive the questions, update the `questions` state variable with the new value
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
                <button type="submit">Ask questions</button>
            </form>
            <div>
                {questions.length === 0 ? (
                    <p>
                        No questions yet. Please select a technology and
                        seniority level and ask for questions.
                    </p>
                ) : (
                    <ul>
                        {/* Here you would map over the questions and create a list item for each one */}
                    </ul>
                )}
            </div>
        </div>
    )
}
