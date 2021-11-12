const Button = (props) => {
	return (
		<button className='bg-secondary text-white font-bold px-8 py-2 border-secondary border rounded-full md:px-10 md:py-3 lg:px-12 lg:py-3 hover:bg-white hover:text-secondary transition-all '>
			{props.children}
		</button>
	);
};

export default Button;
