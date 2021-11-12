const Skills = () => {
	return (
		<section>
			<div className='container lg:px-20 mx-auto px-6 lg:flex lg:justify-between lg:items-center gap-14 py-8 font-headings'>
				<div>
					<h2 className='text-4xl font-bold mb-5'>I Got The Skills</h2>
					<p className='text-gray-500 max-w-sm  font-body'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
						quasi mollitia rem quisquam atque pariatur, a ut, amet illum
						quibusdam facere vitae delectus reiciendis fugit tempora esse sint
						deserunt dolorum.
					</p>
				</div>
				<div className='mt-10'>
					<ul>
						<li>
							<h4 className='font-bold  text-lg'>HTML5</h4>
							<input type='range' value='85' className='w-full' />
						</li>
						<li>
							<h4 className='font-bold  text-lg'>CSS3</h4>
							<input type='range' value='75' className='w-full' />
						</li>
						<li>
							<h4 className='font-bold  text-lg'>J-Query</h4>
							<input type='range' value='90' className='w-full' />
						</li>
						<li>
							<h4 className='font-bold  text-lg'>Bootstrap</h4>
							<input type='range' value='60' className='w-full' />
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
