'use strict';

import React from 'react';
import DefaultLayout from 'app/layouts/Default';
import { Heading } from 'app/components/UI';
import { Row, Col, message } from 'antd';
import SEO from 'app/components/SEO';


const ContactUs = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault();
		message.info('Message sending functionality is not yet implemented.');
	}


	return (
		<DefaultLayout>

			<Heading
				title="Have any suggestions or content you'd like to see on the site?"
				subtitle="Coming Soon.. Doesn't work yet"
			/>

			<Col span={14} offset={5}>
			<div className="component__form">
			<form onSubmit={ handleSubmit }>

				<div className="input">
					<label htmlFor="name">Full Name</label>
					<input type="text" id="name" placeholder="John Doe" autoFocus={true} />
				</div>
				<div className="input">
					<label htmlFor="email">Email Address</label>
					<input type="text" id="email" placeholder="john.doe@gmail.com" />
				</div>
				<div className="input">
					<label htmlFor="message">Your Message</label>
					<textarea type="text" id="message" placeholder="Please enter your message here..."></textarea>
				</div>

				<button type="submit" className="button">Send Message</button>

			</form>
			</div>
			</Col>

			<SEO url="contact-us" />

		</DefaultLayout>
	);

}

export default ContactUs;
