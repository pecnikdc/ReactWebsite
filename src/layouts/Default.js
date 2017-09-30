'use strict';

import React from 'react';
import Header from 'app/components/Header';


const DefaultLayout = (props) => {

    return (
        <div className="website--layout">

           	<Header />

            <div className="page-content">
            <div className="container">
            	{ props.children }
            </div>
            </div>

             <Footer />

        </div>
    );

}

import Footer from 'app/components/Footer';

export default DefaultLayout;
