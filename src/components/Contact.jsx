import Button from './Button';

const Contact = () => {
	return (
		<section className='bg-red-500 text-white'>
			<div className='container lg:px-20 mx-auto px-6  py-8 flex flex-col items-center justify-center text-center'>
				<h2 className='text-4xl font-bold mb-5'>Contact Me</h2>
				<p className=' max-w-sm mb-6'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. some for as low
					as $.17 each.
				</p>

				<div className='flex flex-col md:flex-row gap-2 justify-between mb-8'>
					<span>+22 12345 678 9012</span>
					<span>information@example.com</span>
					<span>KarimEzZat.me</span>
				</div>
				<Button>Hire Me</Button>
			</div>
		</section>
	);
};

export default Contact;
