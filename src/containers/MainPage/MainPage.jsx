import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { useEffect } from 'react';
import { selectors } from './reducer';


const MainPage = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectors.mainPageData);
    console.log(data);
    useEffect(() => {
        dispatch(actions.getMainPageData.request());        
    }, [dispatch]);
    return (
        <h1>Main Page</h1>
    );
}

export default MainPage;