import ccxt from 'ccxt';

const exchange = new ccxt.binance()

const assets_aux = ['BTC/USDT', 'ETH/USDT', 'BCH/USDT', 'XRP/USDT', 'EOS/USDT', 'LTC/USDT', 'TRX/USDT', 'ETC/USDT', 'YFI/USDT', 'BAL/USDT', 'CRV/USDT', 'TRB/USDT', 'YFII/USDT', 'RUNE/USDT', 'SUSHI/USDT', 'SRM/USDT', 'BZRX/USDT', 'EGLD/USDT', 'SOL/USDT', 'ICX/USDT', 'STORJ/USDT', 'BLZ/USDT', 'UNI/USDT', 'AVAX/USDT', 'FTM/USDT', 'HNT/USDT', 'ENJ/USDT', 'FLM/USDT', 'TOMO/USDT']


export const getBars = async () =>{
    let dataToShow = [];
    for (let asset of assets_aux){        
        
        let bars = await exchange.fetchOHLCV(asset,'1m', 0, 61).then((res)=>{            
            return res
        }).catch((err)=>{
            console.log(err)
        })
        
        dataToShow.push({
            asset,
            bars
        })

        
    }
    return dataToShow;

}