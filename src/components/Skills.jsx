const Skills = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6 lg:flex lg:justify-between lg:items-center gap-14 py-8'>
				<div>
					<h2 className='text-4xl font-bold mb-5'>I Got The Skills</h2>
					<p className='text-gray-500 max-w-sm font-semibold'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
						quasi mollitia rem quisquam atque pariatur, a ut, amet illum
						quibusdam facere vitae delectus reiciendis fugit tempora esse sint
						deserunt dolorum.
					</p>
				</div>
				<div className='mt-10'>
					<ul>
						<li>
							<h4>HTML5</h4>
							<div>progress bar 85%</div>
						</li>
						<li>
							<h4>CSS3</h4>
							<div>progress bar 75%</div>
						</li>
						<li>
							<h4>J-Query</h4>
							<div>progress bar 90%</div>
						</li>
						<li>
							<h4>Bootstrap</h4>
							<div>progress bar 60%</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
