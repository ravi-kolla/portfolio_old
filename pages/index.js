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
					<div className="container text-left mx-auto">
						<h1 className="text-black font-black pt-20">Hello,</h1>
						<h2 className="text-black font-black pt-2">I'm Ravi Teja Kolla</h2>
						<h3 className="text-3xl text-black font-bold">Software Engineer</h3>
					</div>
					<About />
				</div>
			</Layout>
		)
	}
}
