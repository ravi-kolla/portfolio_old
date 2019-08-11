import Layout from '../components/Layout.js';
import Link from 'next/link';
import '../styles/index.css';

export default () => (
	<Layout>
		<main>
			<div id="contact" className="mb-20 mt-10 pt-4">
				<div className="container">
					<div>
						<div className="container md:pl-20 px-4">
							<h2>Contact Me</h2>
							<p>I'd love to hear from you.</p>
						</div>
						<div className="container md:pl-20 px-4">
							<p>Shoot me a message!</p>
							<div>
								<Link href="mailto:ravi.kolla@outlook.com"> 
									<a>ravi.kolla@outlook.com</a>
								</Link>
								<div>
								<Link href="https://www.ravitejakolla.com/">
									<a>https://www.ravitejakolla.com</a>
								</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</Layout>
)

