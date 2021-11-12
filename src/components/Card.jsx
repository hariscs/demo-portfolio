const Card = (props) => {
	let iconClasses =
		'inline-block p-7 rounded-full w-22 mx-auto text-4xl bg-primary text-heading';

	return (
		<li className='text-center  py-7 px-4 shadow-2xl rounded flex gap-4 flex-col bg-pale max-w-5xl '>
			<div className={iconClasses}>{props.icon}</div>
			<h3 className='font-headings text-heading font-bold text-xl'>
				{props.title}
			</h3>
			<p className=' text-heading font-headings'>{props.subtitle}</p>
		</li>
	);
};

export default Card;
