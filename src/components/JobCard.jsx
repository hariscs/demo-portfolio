const JobCard = () => {
	return (
		<li className='flex flex-col items-start border rounded p-7 bg-blue-100'>
			<h3 className='font-bold text-lg'>Senior Creative Design</h3>
			<span className='text-gray-500 -mt-2'>Mansoura FCIS,Egypt</span>
			<div className='bg-white border border-blue-400 rounded-full py-2 px-4 mt-4 font-bold'>
				Jul'15 to Present
			</div>
			<p className='text-gray-500 mt-6'>
				AIt has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged.
			</p>
		</li>
	);
};

export default JobCard;
