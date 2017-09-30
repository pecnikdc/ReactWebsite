'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, Icon, Popover, Button } from 'antd';
import SEO from 'app/components/SEO';


const Features = (props) => {

	const APPLICATION_FEATURES = [
		{ status: true, title: 'SDK Demos', description: 'Examples of against the Lisk SDK', },
		{ status: true, title: 'Node Install', description: 'Walkthroughs on installing the Lisk Node', },
		{ status: true, title: 'OffLine wallet storage', description: 'Most secure way to store your wallet', },
		{ status: true, title: 'Many More', description: 'Stay Tuned', }
		
	];


	return (
		<DefaultLayout>

			<Heading
				title="Some of features that are planned"
				subtitle="Let us know if you have anything you want to see!"
			/>
	

			<Row type="flex" className="component--features">
				{ APPLICATION_FEATURES.map( (feature,index) => {
					return (
						<Col key={index} xs={24} sm={12} md={8} className="feature-container">
						<div className="feature">
							<div className="title">
								<div className="status">{<Icon type="check-circle-o" />}</div>
									<Popover content={ feature.title } trigger="hover">
										{feature.title } 
									</Popover>
							</div>

							<div className="description">
								<Popover content={ feature.description } trigger="hover">
									{feature.description}
								</Popover>
							</div>
						</div>
						</Col>
					);
				}) }
			</Row>

			<SEO url="features" />

		</DefaultLayout>
	);

}

export default Features;

