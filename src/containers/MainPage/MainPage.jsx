import React from 'react'
import { useDispatch } from 'react-redux';
import * as actions from './actions';
import { useEffect } from 'react';


const MainPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getMainPageData.request());        
    }, [dispatch]);
    return (
        <h1>Main Page</h1>
    );
}

export default MainPage;