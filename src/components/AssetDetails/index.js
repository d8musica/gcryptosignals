import React from 'react';
import Page from './page';


const AssetDetails = (props) => {
    
    const id = props.match.params.id;
    return (
        <Page id={id} />
    );
};

export default AssetDetails;