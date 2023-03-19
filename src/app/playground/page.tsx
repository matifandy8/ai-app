import Link from 'next/link'
import './styles/Playground.scss'

export default function Playground() {
    return (
        <div className="playground">
            <h1 className="playground__heading">Choose a feature to improve</h1>
            <div className="features">
                <div className="feature">
                    <h2 className="feature__heading">
                        Personalized Interview Coaching
                    </h2>
                    <p className="feature__desc">
                        Practice answering interview questions and receive
                        personalized feedback to improve your interview skills.
                    </p>
                    <Link
                        className="feature__btn"
                        href="/playground/interview-coaching"
                        replace
                    >
                        Start Interview Coaching
                    </Link>
                </div>
                <div className="feature">
                    <h2 className="feature__heading">Real-time Feedback</h2>
                    <p className="feature__desc">
                        Get instant feedback on your code as you write it and
                        improve your skills in real-time.
                    </p>
                    <Link
                        className="feature__btn not-active"
                        href="/playground/feedback"
                        replace
                    >
                        Get Feedback Now
                    </Link>
                </div>
                <div className="feature">
                    <h2 className="feature__heading">Career Guidance</h2>
                    <p className="feature__desc">
                        Explore different career paths and get personalized
                        guidance on how to achieve your goals.
                    </p>
                    <Link
                        className="feature__btn not-active"
                        href="/playground/career-guidance"
                        replace
                    >
                        Explore Career Paths
                    </Link>
                </div>
                <div className="feature">
                    <h2 className="feature__heading">Learning Resources</h2>
                    <p className="feature__desc">
                        Access a wide range of learning resources to improve
                        your skills and keep up-to-date with the latest
                        technologies.
                    </p>
                    <Link
                        className="feature__btn not-active"
                        href="/playground/learning-resources"
                        replace
                    >
                        Access Learning Resources
                    </Link>
                </div>
            </div>
        </div>
    )
}
