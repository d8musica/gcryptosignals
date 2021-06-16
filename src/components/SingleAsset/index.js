import React from 'react';
//import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import Page from './page';


const SingleAsset = ({asset}) => {
    return (
        <Page asset={asset}/>
    );
};

export default SingleAsset;