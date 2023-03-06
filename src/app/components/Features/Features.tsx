import React from 'react'
import './styles/Features.scss'
import Image from 'next/image'

const Features: React.FC = () => {
    return (
        <div id="features" className="features">
            <h1>Features</h1>
            <h2>
                DevCoachAI offers a wide range of features to help you improve
                your coding skills. Our AI-powered coaching platform is designed
                to help you identify areas where you can improve and provide you
                with the tools you need to make progress.
            </h2>
            <ul>
                <li>
                    <Image
                        src="https://img.icons8.com/external-icongeek26-outline-icongeek26/256/external-feedback-uxui-icongeek26-outline-icongeek26-4.png"
                        alt="Personalized Feedback"
                        width={100}
                        height={100}
                    />
                    <p>
                        <strong>Personalized Feedback:</strong>
                    </p>
                    Get personalized feedback on your code with specific
                    suggestions on how to optimize it, along with explanations
                    of why certain changes are recommended.
                </li>
                <li>
                    <Image
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/256/external-analysis-digital-marketing-flatart-icons-outline-flatarticons-1.png"
                        alt="Real-time Code Analysis"
                        width={100}
                        height={100}
                    />
                    <p>
                        <strong>Real-time Code Analysis:</strong>
                    </p>
                    Catch mistakes early with real-time code analysis that flags
                    potential issues as you write code.
                </li>
                <li>
                    <Image
                        src="https://img.icons8.com/dotty/256/google-code.png"
                        alt="Code Review"
                        width={100}
                        height={100}
                    />
                    <p>
                        <strong>Code Review:</strong>
                    </p>
                    Receive feedback from experienced developers through our
                    code review services, helping you learn best practices and
                    identify areas where you need to improve.
                </li>
                <li>
                    <Image
                        src="https://img.icons8.com/external-justicon-lineal-justicon/256/external-learning-back-to-school-justicon-lineal-justicon.png"
                        alt="Learning Resources"
                        width={100}
                        height={100}
                    />
                    <p>
                        <strong>Learning Resources:</strong>
                    </p>
                    Access a wide range of learning resources, including online
                    courses, tutorials, and code samples, to help you learn new
                    skills and reinforce concepts you've already learned.
                </li>
            </ul>
        </div>
    )
}

export default Features
