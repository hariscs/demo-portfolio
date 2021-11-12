import Button from './Button';
import Logo from './Logo';

import bannerImg from '../assets/banner-img.png';

const Header = () => {
	return (
		<header className='mb-12 font-body'>
			<div className='container lg:px-20 mx-auto px-6'>
				<nav className='flex justify-between py-6  bg-white'>
					<Logo />
					<span className='text-3xl'>☰</span>
				</nav>

				{/* Hero Section */}
				<div className='lg:flex lg:items-start justify-between mt-5'>
					{/* info col */}
					<div className='flex flex-col  items-start mt-5 flex-shrink-0 lg:mt-8'>
						<div className=' rounded bg-primary text-white font-semibold p-4 '>
							It's me
						</div>

						<h1 className='font-headings text-5xl my-6 font-bold lg:text-6xl text-heading'>
							Kareem EzZat
						</h1>
						<p className='  text-2xl text-body max-w-sm mt-2 mb-12 lg:text-3xl'>
							Senior Creative <span className='text-secondary'>Designer</span>{' '}
							and Content <span className='text-primary'>Developer</span>
						</p>

						<Button>Download Cv</Button>
					</div>

					{/* img col */}
					<div className='flex-shrink'>
						<img src={bannerImg} alt='me' className='hidden lg:block w-96' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
