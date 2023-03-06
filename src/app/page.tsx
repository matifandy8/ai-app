import { Features } from './components/Features'
import { Testimonial } from './components/Testimonial'
import './page.scss'
import testimonialsData from '../../data/testimonials.json'
import { Pricing } from './components/Pricing'

const plans = [
    {
        name: 'Basic Plan',
        price: 0,
        features: [
            '1 personalized feedback per week',
            'Code review',
            'Email support'
        ]
    },
    {
        name: 'Pro Plan',
        price: 9.99,
        features: [
            '3 personalized feedback per week',
            'Code review',
            'Priority email support'
        ]
    },
    {
        name: 'Premium Plan',
        price: 19.99,
        features: [
            'Unlimited personalized feedback per week',
            'Code review',
            'Priority email and phone support'
        ]
    }
]

export default function Home() {
    return (
        <>
            <main className="home">
                <section className="home__container">
                    <h1 className="home__title">
                        Welcome to DevCoachAI - the AI-owered coding coach
                        that's always ready to help you improve your coding
                        skills!
                    </h1>
                    <p className="home__subtitle">
                        Perfect tool for anyone who wants to take their coding
                        to the next level.
                    </p>
                    <button className="home__btn">Start now for free</button>
                </section>
            </main>
            <Features />
            <section className="home__testimonials">
                <h1>Testimonial</h1>
                <h2>What our users are saying</h2>
                <div id="testimonials" className="home__testimonialList">
                    {testimonialsData.testimonials.map(testimonial => (
                        <Testimonial
                            key={testimonial.id}
                            quote={testimonial.quote}
                            author={testimonial.author.name}
                            title={testimonial.author.title}
                            image={testimonial.author.image}
                        />
                    ))}
                </div>
            </section>
            <Pricing plans={plans} />
        </>
    )
}
