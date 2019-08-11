import Layout from '../components/Layout.js';
import Link from 'next/link';
import '../styles/index.css';

export default () => (
	<Layout>
	<main>
		<div id="resume" className="container mt-4 pt-5">
		<div className="md:pl-20 px-4">
			<h2>Resume</h2>
		</div>
		<div className="px-4 pt-4 md:pl-20 lg:pl-10 px-4 md:pr-20 lg:pr-10 mx-auto">
				<div>
					<div className="lg:flex">
						<div className="lg:w-1/4 md:w-full sm:w-full px-2 lg:pl-10 text-center md:text-left">
							<h3>EDUCATION</h3>
						</div>
						<div className="md:flex lg:w-3/4">
							<div className="lg:w-3/4 px-2 lg:pl-2 md:w-3/4 sm:w-full">
								<h4>Master of science in Electrical Engineering</h4>
								<p>Electrical and Computer Engineering (E&amp;C-ENGR)</p>
								<hr className="hidden md:block"/>
							</div>
							<div className="lg:w-1/4 md:w-1/4 sm:w-full px-2">
								<h4>University Of Missouri</h4>
								<p>2015</p>	
								<hr className="md:hidden sm:block"/>
							</div>
						</div>
					</div>
					<div className="lg:flex">
						<div className="lg:w-1/4 sm:hidden lg:block px-2 lg:pl-6">
							<h3 className="hidden">EDUCATION</h3>
						</div>
						<div className="md:flex lg:w-3/4">
							<div className="lg:w-3/4 md:w-3/4 sm:w-full px-2">
								<h4>Bachelors in Electronic and Communication Engineering</h4>
								<p>Concentraion in Robotics & Programming</p>
								<hr className="hidden md:block"/>
							</div>
							<div className="lg:w-1/4 md:w-1/4 sm:w-full px-2">
								<h4>JNTU</h4>
								<p>2013</p>	
								<hr className="md:hidden sm:block"/>
							</div>
						</div>	
					</div>
				</div>  
			</div>	
			<div className="px-4 pt-4 container md:pl-20 lg:pl-10 px-4 md:pr-20 lg:pr-10 mx-auto">
				<div>
					<div className="lg:flex">
						<div className="lg:w-1/4 md:w-full sm:w-full px-2 lg:pl-10 text-center md:text-left">
							<h3>EXPERIENCE</h3>
						</div>
						<div className="md:flex lg:w-3/4">
							<div className="lg:w-3/4 px-2 lg:pl-2 md:w-3/4 sm:w-full">
								<h4>Software Engineer, UI</h4>
								<p>working on creating templates and components for Homepage application using Adobe Experience Manager which includes writing of Java classes, Sightly scripting, JavaScript scripting and jUnit test cases. Also, handles devops process</p>
								<hr className="hidden md:block"/>
							</div>
							<div className="lg:w-1/4 md:w-1/4 sm:w-full px-2">
								<h4>American Express</h4>
								<p>Sep 2015 - Present</p>
								<hr className="md:hidden sm:block"/>
							</div>
						</div>
					</div>
					<div className="lg:flex">
						<div className="lg:w-1/4 sm:hidden lg:block px-2 lg:pl-6">
							<h3 className="hidden">EXPERIENCE</h3>
						</div>
						<div className="md:flex lg:w-3/4">
							<div className="lg:w-3/4 md:w-3/4 sm:w-full px-2">
								<h4>Software Engineer, UI</h4>
								<p>Creation and maintanence of organization user interfaces</p>
								<hr className="hidden md:block"/>
							</div>
							<div className="lg:w-1/4 md:w-1/4 sm:w-full px-2">
								<h4>Inforaise Technologies</h4>
								<p>April 2013- Dec 2013</p>	
								<hr className="md:hidden sm:block"/>
							</div>
						</div>	
					</div>
				</div>
			</div>
			<div className="px-4 pt-4 container md:pl-20 lg:pl-10 px-4 md:pr-20 lg:pr-10 mx-auto">
				<div>
					<div className="lg:flex">
						<div className="lg:w-1/4 md:w-full sm:w-full px-2 lg:pl-10 text-center md:text-left">
							<h3>CERTIFICATIONS</h3>
						</div>
						<div className="md:flex lg:w-3/4">
							<div className="lg:w-3/4 px-2 lg:pl-2 md:w-3/4 sm:w-full">
								<h4>Front-End Web Development with React by The Hong Kong University of Science and Technology on Coursera</h4>
								<Link href='https://www.coursera.org/account/accomplishments/certificate/QQBCFQBRMYPK'>
									<a target="_blank" rel="noopener"><p className="text-primary">Certificate</p></a>
								</Link>	
								<hr className="hidden md:block"/>
							</div>
							<div className="lg:w-1/4 md:w-1/4 sm:w-full px-2">
								<h4>Coursera</h4>
								<p>Mar 2019</p>
								<hr className="md:hidden sm:block"/>
							</div>
						</div>
					</div>
					<div className="lg:flex">
						<div className="lg:w-1/4 sm:hidden lg:block px-2 lg:pl-6">
							<h3 className="hidden">CERTIFICATIONS</h3>
						</div>
						<div className="md:flex lg:w-3/4">
							<div className="lg:w-3/4 md:w-3/4 sm:w-full px-2">
								<h4>Adobe Experience Manager Developer Bootcamp</h4>
								<Link href='../static/AEM-Certificate.png'>
									<a target="_blank"><p className="text-primary">Certificate</p></a>
								</Link>
								<hr className="hidden md:block hr-last"/>
							</div>
							<div className="lg:w-1/4 md:w-1/4 sm:w-full px-2">
								<h4>Adobe</h4>
								<p>Nov 2018</p>	
								<hr className="md:hidden sm:block"/>
							</div>
						</div>	
					</div>
				</div>
			</div>			
		</div>
	</main>
	</Layout>
)