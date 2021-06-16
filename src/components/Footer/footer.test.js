import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Page from './page'
import Footer from './index.js'

describe('Footer component', () => {
    test('should render the Page', () => {
        const component = render(<Page/>)
        component.getByText("© 2021 @d8musica - Proyect for Globant's React.js Bootcamp.")
    });

    test('should render the Index', () => {
        const component = render(<Footer/>)
        component.getByText("© 2021 @d8musica - Proyect for Globant's React.js Bootcamp.")
    })    
});