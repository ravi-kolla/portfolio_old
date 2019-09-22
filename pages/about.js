import Layout from '../components/Layout.js';
import '../styles/index.css';
import Link from 'next/link';

export default () => (
		<div id="about" className="mt-20  pb-2 md:pl-20 px-4">
			<div className="container">
				<h2>About Me</h2>
			</div>
			<div className="container md:flex">
			<div className="container sm:w-full md:w-1/2">
				<div className="container">
				<picture>
				  <source srcSet="../static/RaviTejaKolla.webp" type="image/webp" />
				  <source srcSet="../static/RaviTejaKolla.png" type="image/png" />
				  <img src='../static/RaviTejaKolla.png' alt='Author Image' className='author' />
				</picture>
				</div>
				<div className="container mt-4">
				<p>I have 4 plus years of experience as a software engineer, while I'm a proficient full-stack developer, my expertise is in buiding front-end applications.</p>
				<p>I like building awesome performance driven softwares. I've built websites, browser plugins.</p>
				</div>
			</div>
			<div className="container sm:w-full md:w-1/2">
				<div className="container">
					<h3>What I do</h3>
					<h4>Front-end</h4>
					<p>HTML, CSS, Javascript, ES6, React Js, Next Js</p>
					<h4>Back-end</h4>
					<p>NodeJS, Java, APIs, SQL, Devops</p>
					<h4>CMS</h4>
					<p>AEM, SDL TRIDION, Wordpress, Drupal</p>
					<h4>Cloud</h4>
					<p>AWS, Google, Zeit Now</p>
				</div>
				<div className="container mt-4">
					<h3>SOCIAL PROFILES</h3>
					<div className="flex">
						<div className="pr-4">
							<Link href="https://www.linkedin.com/in/ravitejakolla/">
								<a aria-label="Linkedin" target="_blank" rel="noopener">
									<i className="fab fa-linkedin linkedin fa-2x"></i>
								</a>
							</Link>
						</div>
						<div className="pr-4">
							<Link href="https://github.com/ravi-kolla">
								<a aria-label="Github" target="_blank" rel="noopener">
									<i className="fab fa-github github fa-2x"></i>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
)
