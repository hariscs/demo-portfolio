import Card from './Card';
import Slider from './Slider';

const Services = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6  py-8'>
				<h2 className='text-4xl font-bold mb-5'>Service Offers</h2>
				<p className='text-gray-500 max-w-sm mb-6'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<div className='grid gap-7 md:grid-cols-2 lg:grid-cols-4'>
					<Card />
					<Card />
					<Card />
					<Card />
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
