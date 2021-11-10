import aboutImg from '../assets/about-img.png';
import Button from './Button';

const About = () => {
	return (
		<section className='py-8 my-8'>
			<div className='container lg:px-20 mx-auto px-6 lg:flex lg:justify-between lg:items-center gap-14'>
				{/* img col */}
				<div className='mt-6'>
					<img src={aboutImg} alt='me' className='hidden lg:block ' />
				</div>

				{/* info col */}
				<div className='flex-shrink max-w-lg lg:max-w-sm'>
					<h2 className='font-bold text-4xl my-8 lg:text-5xl lg:mb-20'>
						About Myself
					</h2>
					<p className='mb-4 text-gray-500 '>
						I’m a Front End Developer. I have a Passion for Creating Clean,
						Beautiful, Interactive, Minimalistic, Responsive and User Friendly
						UI, Developed by Modular, Scalable and Functional Code. When, while
						the lovely valley teems with vapour around me
					</p>
					<p className='text-gray-500 mb-10'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>

					<div className='flex gap-2 align-center'>
						<Button>Hire Me</Button>
						<Button>Resume</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
