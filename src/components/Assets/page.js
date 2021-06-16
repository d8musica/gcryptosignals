import React from 'react';
import SingleAsset from '../SingleAsset'
import { useSelector } from "react-redux";

const Page = () => {
    
    
    const assets = useSelector((state) => state.asset.assets);
    

    return (
        <>
        <main className="pb-10 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Asset</span>{' '}
                <span className="block text-yellow-400 xl:inline">Information</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Click on the Crypto asset to see a brief description
              </p>
              <div>
                  {assets && assets.map(asset => {

                      return (
                          <SingleAsset asset={asset} key ={asset.id}/>
                      )                      
                  })}
              </div>
              
              
            </div>
          </main>
        </>
    );
};

export default Page;