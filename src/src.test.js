import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import App from './components/App/App.js'
import {createStore} from 'redux'
import rootReducer from "./store/reducers/rootReducer";
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'

describe('Root', () => {
    

    test('should render the App', () => {
        const AppWrapper = () => {
            const store = createStore(rootReducer);
            
            return (
                <Provider store={store}> // Set context
                    <BrowserRouter>
                        <App/> // Now App has access to context
                    </BrowserRouter>
                </Provider>
            )
        }
        
        
        const component = render(<AppWrapper/>)
        expect(component).not.toBeNull();
        
    })    
});