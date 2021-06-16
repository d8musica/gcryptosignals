import React from 'react';

import { Link } from 'react-router-dom';


const Page = ({asset}) => {
    
    const linkRoute = `details/${asset.id}`
    return (
        <><Link to={linkRoute}>
          
        <main className="flex justify-center pb-10 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center py-4 px-8 bg-gray-100 shadow-lg rounded-lg max-w-md">
              <h5 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block ml:inline">{asset.title}</span>{' '}
                <span className="block text-yellow-400 ml:inline">{asset.symbol}</span>
              </h5>                           
            </div>            
          </main>
          </Link>
        </>
    );
};

export default Page;