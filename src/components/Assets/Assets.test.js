import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Page from './page'
import Assets from './index.js'
import {createStore} from 'redux'
import rootReducer from "../../store/reducers/rootReducer";
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'

describe('Asset component', () => {
    test('should render the Page', () => {

        jest.mock("react-redux", () => ({
            ...jest.requireActual("react-redux"),
            useSelector: jest.fn()
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


    test('should render the Index', () => {
        const AppWrapper = () => {
            const store = createStore(rootReducer);
            
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <Assets/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
        
    })    
});