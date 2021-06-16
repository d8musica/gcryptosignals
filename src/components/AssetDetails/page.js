import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Page = ({ id }) => {
  const assets = useSelector((state) => state.asset.assets);

  const asset = assets[id - 1];

  console.log(asset.length)

  return (
    <div className="flex justify-center">
      {asset.length>0
        ? (() => {
            return (
              <>
                <div className="justify-center">
                  <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
                    <div className="flex justify-center md:justify-end -mt-16">
                      <img
                        className="w-20 h-20 object-contain rounded-full border-2 border-black-500"
                        src={asset.image}
                        alt=""
                      ></img>
                    </div>
                    <div>
                      <h2 className="text-yellow-400 text-3xl font-extrabold">
                        {asset.title}
                      </h2>
                      <h3 className="text-yellow-400 text-3xl font-extrabold">
                        {asset.symbol}
                      </h3>
                      <p className="mt-2 text-black">{asset.content}</p>
                    </div>
                    <div className="flex justify-end mt-4">
                      <Link
                        to="/asset-info"
                        className="text-xl font-semibold text-black-500"
                      >
                        Go back
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })()
        : (() => {
            return (
              <div className="my-48 mt-40 ">
                <p className="text-center text-gray-500  sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0">
                  No asset found
                </p>
                <div className="flex justify-end mt-4">
                  <Link
                    to="/asset-info"
                    className="text-xl font-semibold text-black-500 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                  >
                    Go back
                  </Link>
                </div>
              </div>
            );
          })()}
    </div>
  );
};

export default Page;
