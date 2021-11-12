import Card from './Card';

const Achievements = () => {
	return (
		<section className='bg-pale py-5'>
			<div className='container lg:px-20 mx-auto px-6 '>
				<ul className=' grid items-center  gap-8 py-10 md:grid-cols-2 lg:grid-cols-4 '>
					<Card title='245' subtitle='TOTAL PROJECTS' />
					<Card title='535' subtitle='TROPHY WON' />
					<Card title='288' subtitle='EXPERIENCE STAFF' />
					<Card title='750' subtitle='HAPPY CLIENTS' />
				</ul>
			</div>
		</section>
	);
};

export default Achievements;
