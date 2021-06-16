import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect} from "react";
import { fetchData } from "../../store/actions/assetActions";
import Table from '../Table'


const Page = () => {
  const user = useSelector((state) => state.auth.userAuth);
  const storeBars = useSelector((state)=>state.asset.bars)
  const dispatch = useDispatch();
  const [bars,setBars] = useState([]);

  useEffect(()=>{
    setBars(storeBars)
    
  },[storeBars])
  

  const FetchBars = () =>{
    dispatch(fetchData())
    
  }
  

  return (
    <div>
      {user
        ? (() => {
            return (
              <>
                <main className="pb-10 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">See the latest</span>{" "}
                      <span className="block text-yellow-400 xl:inline">
                        Market Movements
                      </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Using CCXT - And Binance USDT-Futures API
                    </p>
                    <div>
                      <div>
                        {bars.length>0 && (()=>{
                          
                          return(
                            <>
                              <Table bars={bars}/>
                              <p>Total assets {bars.length}</p>
                            </>                  
                          )
                        })()}
                      </div>
                    </div>
                    <div onClick={FetchBars} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <p
                          
                          
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                        >
                          Fetch
                        </p>
                      </div>
                    </div>
                  </div>
                </main>
              </>
            );
          })()
        : (() => {
            return (<>
              <main className="my-40 pb-10 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">We are very</span>{" "}
                    <span className="block text-yellow-400 xl:inline">
                      Sorry
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    You must be logged in to see this content
                  </p>
                  
                </div>
              </main>
            </>);
          })()}
    </div>
  );
};

export default Page;
