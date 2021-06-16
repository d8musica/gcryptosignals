const initState = {
  assets: [
    {
      id: "1",
      title: "Binance Coin",
      content:
        "From the ICO, Binance issued its own token called the Binance Coin, with BNB as the symbol. BNB runs natively on the Ethereum blockchain and follows the ERC20 token standard.The token was established with a total supply of 200 million. As per our whitepaper, Binance plans to use 20% of our profits each Quarter to buyback and burn BNB, until 50% of the total BNB supply (100 million) is burned.",
      symbol: "BNB",
      image:"https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=010",
    },
    {
      id: "2",
      title: "Bitcoin",
      content:
        "Bitcoin is the world's first cryptocurrency, a form of electronic cash. It is the first decentralized digital currency: the system works without a central bank or single administrator.",
      symbol: "BTC",
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=010",
    },
    {
      id: "3",
      title: "Ethereum",
      content:
        "Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality. It supports a modified version of Nakamoto consensus via transaction-based state transitions.",
      symbol: "ETH",
      image:"https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=010",
    },
    {
        id: "4",
        title: "Dogecoin",
        content:
          "Dogecoin is a cryptocurrency that started as a joke in 2013. It is a satirical homage to bitcoin, designed to serve no real purpose other than generating a few laughs. It is named after an internet meme centered around the image of a Shiba Inu dog with bad spelling habits—thus “doge” instead of “dog.”",
        symbol: "DOGE",
        image:"https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=010",
      },
  ],
  bars: [],
};

const assetReset = (state = initState, action) => {
  switch (action.type){
    case 'FETCH_SUCCESS':
      return {
        ...state,
        bars: action.bars
      };
    case 'FETCH_ERROR':
      return {...state};
    default:
      return {...state}
  }
};

export default assetReset;
