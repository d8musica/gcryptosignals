import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Page from './page'
import Table from './index.js'
import {createStore} from 'redux'
import rootReducer from "../../store/reducers/rootReducer";
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'

describe('Table component', () => {
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
            const bar = {
                bars: [
                    Array(61).fill([1,2,3,4,5,6])
                ]
            }
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <Page bar={bar}/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
        
    })    
});