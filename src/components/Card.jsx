import { FaArchive } from 'react-icons/fa';
const Card = () => {
	let iconClasses =
		'inline-block p-7 rounded-full w-22 mx-auto text-4xl bg-blue-400 text-gray-700';

	return (
		<li className='text-center border py-7 px-4 shadow-2xl rounded flex gap-4 flex-col bg-blue-100 max-w-5xl'>
			<div className={iconClasses}>
				<FaArchive />
			</div>
			<h3 className='font-bold text-4xl'>245</h3>
			<p className='font-semibold text-xl text-gray-700'>TOTAL PROJECTS</p>
		</li>
	);
};

export default Card;
