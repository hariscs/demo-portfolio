import Logo from './Logo';

const Footer = () => {
	return (
		<footer>
			<div className='container lg:px-20 mx-auto px-6  py-8 flex flex-col items-center justify-center text-center gap-4'>
				<Logo />

				<h3 className='font-bold text-xl'>Follow Me</h3>

				<ul className='flex gap-6'>
					<li>Icon</li>
					<li>Icon</li>
					<li>Icon</li>
					<li>Icon</li>
				</ul>

				<p>
					Copyright ©All rights reserved | KARMEN is built with
					<span className='text-red-500'> React</span> &
					<span className='text-red-500'> Tailwind</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
