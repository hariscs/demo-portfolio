import Logo from './Logo';

const Footer = () => {
	return (
		<footer>
			<div className='container lg:px-20 mx-auto px-6  py-8 flex flex-col items-center justify-center text-center gap-4 font-body'>
				<Logo />

				<h3 className='font-headings font-bold text-xl text-heading'>
					Follow Me
				</h3>

				<ul className='flex gap-6'>
					<li>Icon</li>
					<li>Icon</li>
					<li>Icon</li>
					<li>Icon</li>
				</ul>

				<p className='text-body'>
					Copyright ©All rights reserved | KARMEN is built with
					<span className='text-secondary'> React</span> &
					<span className='text-secondary'> Tailwind</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
