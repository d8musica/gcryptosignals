import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Login from '../Login/index'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Dashboard from '../Dashboard'
import Assets from '../Assets/index'
import Market from '../Market'
import AssetDetails from '../AssetDetails'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";

describe('App component', () => {
    test('should render the component Footer', () => {
        const component = render(<Footer/>)
        component.getByText("© 2021 @d8musica - Proyect for Globant's React.js Bootcamp.")
    });
       
});