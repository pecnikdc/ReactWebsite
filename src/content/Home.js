'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Carousel } from 'antd';
import SEO from 'app/components/SEO';


const Home = (props) => {

	return (
		<DefaultLayout>

			<Heading
				title="Coming Soon..."
				subitle="LiskPlatform"
			/>

			<Col span={24} className="component--slider">
			<Carousel autoplay autoplaySpeed={5000}>
				<div>
					<div className="image">
						<center><img src="/images/slider/1.png"/></center>
					</div>
					<div className="title" style={{ textAlign: 'center' }}>Coming Soon!!!!</div>
				</div>
				<div>
					<div className="title" style={{ textAlign: 'center' }}>LiskPlatform...</div>
				</div>
			</Carousel>
			</Col>

			<SEO url="home" />

		</DefaultLayout>
	);

}

export default Home;
