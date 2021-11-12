import JobCard from './JobCard';

const Jobs = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6  py-8'>
				<h2 className='text-4xl font-bold mb-5'>Latest Works</h2>
				<p className='text-gray-500 max-w-sm '>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<div>
					<ul className='mt-6 grid gap-8 xl:grid-cols-2'>
						<JobCard />
						<JobCard />
						<JobCard />
						<JobCard />
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Jobs;
