import React from 'react'
import './styles/Pricing.scss'

interface Plan {
    name: string
    price: number
    features: string[]
}

interface PricingProps {
    plans: Plan[]
}

const Pricing: React.FC<PricingProps> = ({ plans }) => {
    return (
        <div id="pricing" className="pricing-container">
            <h1>Pricing</h1>
            <h2>Choose a plan that's right for you</h2>
            <div className="pricing-container__list">
                {plans.map((plan, index) => (
                    <div key={index} className="pricing-container__card">
                        <div className="pricing-container__card__header">
                            {plan.name}
                        </div>
                        <div className="pricing-container__card__price">
                            ${plan.price}/month
                        </div>
                        <ul className="pricing-container__card__features">
                            {plan.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="pricing-container__card__features__item"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="pricing-container__card__button">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
