import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Page from './page'
import AssetDetails from './index.js'
import {createStore} from 'redux'
import rootReducer from "../../store/reducers/rootReducer";
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'

describe('AssetDetails component', () => {
    test('should render the Page when there is asset', () => {

        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useSelector: jest.fn().mockReturnValueOnce([{
      id: "1",
      title: "Binance Coin",
      content:
        "From the ICO, Binance issued its own token called the Binance Coin, with BNB as the symbol. BNB runs natively on the Ethereum blockchain and follows the ERC20 token standard.The token was established with a total supply of 200 million. As per our whitepaper, Binance plans to use 20% of our profits each Quarter to buyback and burn BNB, until 50% of the total BNB supply (100 million) is burned.",
      symbol: "BNB",
      image:"https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=010",
    }])
        }))

        const AppWrapper = () => {
            const store = createStore(rootReducer);
            const id = 2;
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <Page id = {id}/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
    });

    test('should render the Page when there is no asset', () => {

        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useSelector: jest.fn().mockReturnValueOnce(null)}));

        const AppWrapper = () => {
            const store = createStore(rootReducer);
            const id = 1;
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <Page id = {id}/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
    });

    test('should render the Index', () => {
        const AppWrapper = () => {
            const store = createStore(rootReducer);
            const id = 1;
            const match = {params:{id: "1"}}
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <AssetDetails match = {match}/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
        
    })    
});