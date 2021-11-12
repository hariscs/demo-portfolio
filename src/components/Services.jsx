import Card from './Card';
import Slider from './Slider';

const Services = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6  py-8'>
				<h2 className='text-4xl font-bold mb-5 font-headings text-heading'>
					Service Offers
				</h2>
				<p className='font-body text-body max-w-sm mb-6'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<div className='grid gap-7 md:grid-cols-2 lg:grid-cols-4'>
					<Card
						title='Web Design'
						subtitle='If you’re looking blank casvsettes on the web, you may confuse.'
					/>
					<Card
						title='App Development'
						subtitle='If you’re looking blank casvsettes on the web, you may confuse. '
					/>
					<Card
						title='Web Development'
						subtitle='If you’re looking blank casvsettes on the web, you may confuse. '
					/>
					<Card
						title='Web Development'
						subtitle='If you’re looking blank casvsettes on the web, you may confuse. '
					/>
				</div>
				<div>
					<ul>
						<Slider />
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Services;
