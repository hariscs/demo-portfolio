import JobCard from './JobCard';

const Jobs = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6  py-8 font-headings'>
				<h2 className=' text-heading text-4xl font-bold mb-5'>Job History</h2>
				<p className='font-body  max-w-sm text-body'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<div>
					<ul className='mt-6 grid gap-8 xl:grid-cols-2'>
						<JobCard
							post='Senior Creative Design'
							location='Mansoura FCIS,Egypt'
							date="Jul '5 to Present"
							subtitle='AIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
						/>
						<JobCard
							post='Front End Designer'
							location='Mansoura FCIS,Egypt'
							date="Jul '5 to Present"
							subtitle='AIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
						/>
						<JobCard
							post='Back End Developer'
							location='Mansoura FCIS,Egypt'
							date="Jul '5 to Present"
							subtitle='AIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
						/>
						<JobCard
							post='UI/UX Designer'
							location='Mansoura FCIS,Egypt'
							date="Jul '5 to Present"
							subtitle='AIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
						/>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Jobs;
