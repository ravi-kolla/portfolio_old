import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
	<>
	<Head>
		<title>Ravi Teja Kolla</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="author" content="Ravi Teja Kolla" />
		<meta name="Description" content="Ravi Teja Kolla Portfolio, Front-end developer" />
		<meta name="keywords" content="Ravi Teja Kolla,Ravi Teja Portfolio,Raviteja Portfolio,Kolla,Venkata Ravi Teja Kolla, Ravi random clicks,r_randonclicks,Ravi Teja Kolla Photography" />
		<meta name="google-site-verification" content="UyXO3DXkxKwbW_0Nv95_D2uTrZ8q7YueIv2BGoKFquM" />
		<meta name="msvalidate.01" content="CF297ABC958C453AD2974C80FF42CCD4" />
		<link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
		<link rel="prefetch" as="style" onLoad="this.rel = 'stylesheet'" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
		<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
		<noscript><link rel="styleSheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" media="print" /></noscript>
		<link rel="manifest" href="/static/manifest.json" />
		<meta name="theme-color" content="#317EFB" />
	</Head>  
	<div id="container" className="flex flex-col h-full">
		<Header />
		<div id="body" className="min-h-screen">
		{props.children}
		</div>
		<Footer />
	</div>
	</>  

)

export default Layout