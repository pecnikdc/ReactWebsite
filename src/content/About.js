'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading, URL } from 'app/components/UI';
import { Row, Col } from 'antd';
import SEO from 'app/components/SEO';


const About = (props) => {

	return (
		<DefaultLayout>

			<Heading
				title="Coming Soon Lisk Platform"
				subtitle="Source for all thing Lisk.."
			/>

			<Col span={14} offset={5} style={{ marginTop: 40 }}>
				<p>For Donations: 17332733417264422668L/></p>
			</Col>

			<SEO url="about" />

		</DefaultLayout>
	);

}

export default About;
