import React from "react";

const Page = ({bar}) => {
  
    let OHLCV = bar.bars;
    let percent1h = ((OHLCV[60][1] - OHLCV[0][1])/OHLCV[60][1])*100;
    let percent30min = ((OHLCV[60][1] - OHLCV[30][1])/OHLCV[60][1])*100;
    let percent15min =((OHLCV[60][1] - OHLCV[45][1])/OHLCV[60][1])*100;
    let percent5min = ((OHLCV[60][1] - OHLCV[55][1])/OHLCV[60][1])*100;
    
  return (  
        <tbody>
          <tr>
            <td className="text-left">{bar.asset}</td>
            <td className="text-left">{percent1h}</td>
            <td className="text-left">{percent30min}</td>
            <td className="text-left">{percent15min}</td>
            <td className="text-left">{percent5min}</td>
          </tr>          
        </tbody>
      
    
  );
};

export default Page;
