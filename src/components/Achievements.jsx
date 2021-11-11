import Card from './Card';

const Achievements = () => {
	return (
		<section className='bg-blue-100 py-5'>
			<div className='container lg:px-20 mx-auto px-6 '>
				<ul className=' grid items-center justify-center gap-8 py-10 md:grid-cols-2 lg:grid-cols-4 '>
					<Card />
					<Card />
					<Card />
					<Card />
				</ul>
			</div>
		</section>
	);
};

export default Achievements;
