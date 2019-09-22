import React, {Component} from 'react';
import { withRouter } from 'next/router'
import Layout from '../components/Layout';

function ImgCard({src,caption}) {
	return(
		<img className="w-full px-2 py-2 mt-2" src={src} alt={caption} />
	)
}
const ImgGroup = (props) => {
	const Imgroup = props.images.map((image)=> {
		return(
			<div key={image.id} className="rounded overflow-hidden shadow-lg md:w-1/2 lg:w-1/3">
				<ImgCard src={image.src} caption={image.name} />
			</div>
		);
	});
	return(
	<div className="container flex flex-wrap mt-20 mb-10">
		{Imgroup}
	</div>
	);
}
class Album extends Component {
	constructor(props){
		super(props);
		this.state={images:[
			{
			 "src": "../static/wtc.jpg",
			 "name": "One World Trade Center",
			 "id": 1
		 	},{
				"src": "../static/liberty.jpg",
				"name": "Statue of liberty",
				"id": 2
			},{
			 "src": "../static/bull.jpg",
			 "name": "Bull",
			 "id": 3
		 	},{
				"src": "../static/horseshoe.jpg",
				"name": "Horse shoe",
				"id": 4
			},{
			 "src": "../static/nature3.jpg",
			 "name": "Nature",
			 "id": 5
		 	},{
				"src": "../static/flowers1.jpg",
				"name": "Nature",
				"id": 6
			},{
				"src": "../static/beach.jpg",
				"name": "Nature",
				"id": 7
			},{
				"src": "../static/satue1.jpg",
				"name": "Statue",
				"id": 8
			},{
				"src": "../static/nature1.jpg",
				"name": "Nature tower",
				"id": 9
			},{
				"src": "../static/bird1.jpg",
				"name": "Peapock",
				"id": 10
			},{
				"src": "../static/nature2.jpg",
				"name": "Irish Hunger Memorial",
				"id": 11
			},{
				"src": "../static/arch1.jpg",
				"name": "Red Cude Newyork",
				"id": 12
			},{
				"src": "../static/decoration1.jpg",
				"name": "Interior decoration",
				"id": 13
			}
		]}
	}

	render(){
		return(
			<Layout>
				<main>
					<ImgGroup images={this.state.images} />
				</main>
			</Layout>
		);
	}
}

export default Album;
