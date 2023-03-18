import { Features } from './components/Features'
import { Testimonial } from './components/Testimonial'
import './page.scss'
import testimonialsData from '../../data/testimonials.json'
import { Pricing } from './components/Pricing'
import Link from 'next/link'

const plans = [
    {
        name: 'Basic Plan',
        price: 0,
        features: [
            '1 personalized feedback per week',
            'interviews review',
            'Email support'
        ]
    },
    {
        name: 'Pro Plan',
        price: 9.99,
        features: [
            '3 personalized feedback per week',
            'interviews review',
            'Priority email support'
        ]
    },
    {
        name: 'Premium Plan',
        price: 19.99,
        features: [
            'Unlimited personalized feedback per week',
            'interviews review',
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
                        Welcome to DevCoachAI - Level up your technical
                        interviewing skills. Our platform uses machine learning
                        algorithms to analyze your interview skills and provide
                        feedback on how you can improve.
                    </h1>
                    <p className="home__subtitle">
                        Perfect tool for anyone who wants to take your interview
                        skills to the next level and accelerate your career in
                        tech
                    </p>

                    <Link className="home__btn" href="/playground" replace>
                        Start now for free
                    </Link>
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
