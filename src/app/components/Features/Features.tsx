import React from 'react'
import './styles/Features.scss'
import Image from 'next/image'

const Features: React.FC = () => {
    return (
        <div id="features" className="features">
            <h1>Features</h1>
            <h2>
                DevCoachAI offers a wide range of features to help you improve
                your interviewing skills. Our AI-powered coaching platform is
                designed to help you identify areas where you can improve and
                provide you with the tools you need to make progress.
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
                    Receive personalized coaching from experienced developers
                    and interviewers who will help you identify your strengths
                    and weaknesses and provide guidance on how to improve.
                </li>
                <li>
                    <Image
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/256/external-analysis-digital-marketing-flatart-icons-outline-flatarticons-1.png"
                        alt="Real-time feedback"
                        width={100}
                        height={100}
                    />
                    <p>
                        <strong>Real-time feedback:</strong>
                    </p>
                    Get instant feedback on your performance during mock
                    interviews, with detailed reports that highlight areas for
                    improvement.
                </li>
                <li>
                    <Image
                        src="https://img.icons8.com/dotty/256/google-code.png"
                        alt="Career guidance"
                        width={100}
                        height={100}
                    />
                    <p>
                        <strong>Career guidance:</strong>
                    </p>
                    Get career guidance and advice from experienced
                    professionals, including tips on how to prepare for job
                    interviews, how to negotiate job offers, and how to navigate
                    your career as a developer.
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
                    Access a range of learning resources, including tutorials,
                    code samples, and online courses, to help you continue to
                    develop your technical skills and stay up-to-date with the
                    latest trends and technologies.
                </li>
            </ul>
        </div>
    )
}

export default Features
