import './page.scss'

export default function Home() {
    return (
        <main className="home">
            <section className="home__container">
                <h1 className="home__title">
                    Welcome to DevCoachAI - the AI-owered coding coach that's
                    always ready to help you improve your coding skills!
                </h1>
                <p className="home__subtitle">
                    Perfect tool for anyone who wants to take their coding to
                    the next level.
                </p>
                <button className="home__btn">Start now for free</button>
            </section>
        </main>
    )
}
