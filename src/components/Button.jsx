const Button = (props) => {
	return (
		<button className='bg-red-500 text-white font-bold px-8 py-2 rounded-full md:px-10 md:py-3 lg:px-12 lg:py-3'>
			{props.children}
		</button>
	);
};

export default Button;
