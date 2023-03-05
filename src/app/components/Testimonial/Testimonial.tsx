import React from 'react'
import './styles/Testimonial.scss'

interface TestimonialProps {
    quote: string
    author: string
    title?: string
    image?: string
}

const Testimonial: React.FC<TestimonialProps> = ({
    quote,
    author,
    title,
    image
}) => {
    return (
        <div className="testimonial">
            <div className="author">
                {image && <img src={image} alt={`${author} headshot`} />}
                <div className="details">
                    <div className="name">{author}</div>
                    {title && <div className="title">{title}</div>}
                </div>
            </div>
            <div className="quote">{quote}</div>
        </div>
    )
}

export default Testimonial
