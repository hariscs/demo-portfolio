const Work = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6 lg:flex lg:justify-between lg:items-center gap-14 py-8 font-body'>
				<h2 className='text-4xl font-bold font-headings mb-5'>Latest Works</h2>
				<p className='text-gray-500 max-w-sm '>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
				<ul>
					<li>
						<a href='/'>All Categories</a>
					</li>
					<li>
						<a href='/'>Branding</a>
					</li>
					<li>
						<a href='/'>Creative Work</a>
					</li>
					<li>
						<a href='/'>Web Design</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Work;
