import React from 'react';
import './styles/Hero.scss';
export interface HeroProps {}

const Hero : React.FC<HeroProps> = () => {
	return <div className='hero'>Hero</div >;
};

export default Hero;
