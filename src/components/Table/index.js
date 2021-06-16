import React from "react";
import Page from "./page";

const Table = ({ bars }) => {
  console.log(bars)
  return (
    <div className="flex justify-around pt-20">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-40 ...">Symbol</th>
            <th className="w-40 ...">%1h</th>
            <th className="w-40 ...">%30min</th>
            <th className="w-40 ...">%15min</th>
            <th className="w-40 ...">%5min</th>
          </tr>
        </thead>
        {bars.map((bar,i=0) => {
          return <Page bar={bar} key={i++}/>;
        })}
      </table>
    </div>
  );
};

export default Table;
