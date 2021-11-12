const JobCard = (props) => {
	return (
		<li className='flex flex-col items-start rounded p-7 bg-pale  hover:bg-primary transition-all'>
			<h3 className='font-bold text-lg text-heading'>{props.post}</h3>
			<span className='text-body -mt-1'>{props.location}</span>
			<div className='bg-white border border-primary rounded-full py-2 px-4 mt-4 font-semibold text-heading'>
				{props.date}
			</div>
			<p className='text-body  mt-6 font-body'>{props.subtitle}</p>
		</li>
	);
};

export default JobCard;
