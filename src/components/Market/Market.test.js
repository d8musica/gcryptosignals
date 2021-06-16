import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Page from './page'
import Market from './index.js'
import {createStore} from 'redux'
import rootReducer from "../../store/reducers/rootReducer";
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'

describe('Market component', () => {
    test('should render the Page', () => {

        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useDispatch: jest.fn()
        }))

        jest.mock("react", () => ({
            ...jest.requireActual("react"),
            useState: jest.fn()
        }))

        const mockHandleChange = jest.fn()
        const mockHandleSubmit = jest.fn()

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


    test('should render the Index', () => {
        const AppWrapper = () => {
            const store = createStore(rootReducer);
            
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <Market/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
        
    })    
});