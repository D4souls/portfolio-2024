import { useEffect } from 'react';
import Loop2 from '../../assets/doodles/Loop2';
import { gsap } from 'gsap';

function HeroSection() {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			'#firstText',
			{ x: -10000, opacity: 0 },
			{ duration: 1, opacity: 1, x: 0, ease: 'power4.out' }
		);

		tl.fromTo(
			'#secondText',
			{ x: 10000, opacity: 0 },
			{ duration: 1, opacity: 1, x: 0, ease: 'power4.out' }
		);

		tl.fromTo(
			'#thirdText',
			{ y: 10000, opacity: 0 },
			{ duration: 1, opacity: 1, y: 0, ease: 'bounce.out' }
		);
	}, []);

	return (
		<section>
			<Loop2 className='absolute bottom-28 right-16' />
			<h1 className='flex flex-col px-4 justify-center'>
				<span
					className='text-[250px] self-start'
					id='firstText'
				>
					Hola
				</span>
				<span
					className='text-[180px] self-end'
					id='secondText'
				>
					Soy{' '}
					<span
						className='font-kalamRegular'
						id='thirdText'
					>
						Sergio
					</span>
					!
				</span>
			</h1>
		</section>
	);
}

export default HeroSection;
