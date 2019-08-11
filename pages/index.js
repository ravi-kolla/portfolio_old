import React,{Component} from 'react';
import Layout from '../components/Layout.js';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import '../styles/index.css';
import About from './about';



export default class Home extends Component {
	constructor (props) {
		super(props)
	}
	
	componentDidMount = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
				.then(registered => console.log('SW registered'))
                .catch(err => console.error("Service worker registration failed", err))
        } else {
            console.log("Service worker not supported");
        }
    }

	render () {
		return(
			<Layout>
				<div className="index-bg md:min-h-screen justify-center">
					<div className="container mt-16 pt-10 md:pt-20 text-center mx-auto">
						<h1 className="text-black font-black pt-20">Hello, I'm Ravi Teja Kolla</h1>
						<h3 className="text-3xl text-black font-bold">Front-end Developer</h3>
					</div>
					<div className="container mt-20 md:pt-10 text-center mx-auto">
						<div className="mouse-icon-div">
							<Link href='/#about'>
								<a aria-label="Click to know more about me" title="About me">
									<div className="mouse-icon">
										<div className="wheel"></div>
									</div>
								</a>
							</Link>	
						</div>
					</div>
					
				</div>
				<About />
			</Layout>
		)
	}
}  
