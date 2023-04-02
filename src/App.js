import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import ShowList from './ShowList';
import Summary from './Summary';
import MovieForm from './Form';

const GetData = () => {
    const [showData, setShowData] = useState([]);
    const showList = async () => {
        try {
            let options = {
                method: 'get',
                url: 'https://api.tvmaze.com/search/shows?q=all'
            }
            let result = await axios(options);
            //console.log(result.data);
            if (result.data.length > 0) {
                setShowData(result.data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        showList();
    }, []);

    return { showData }
}

const Shows = () => {
    const { showData } = GetData();
    return <>
        <ShowList showData={showData} />
    </>
}

const ShowSummary = () => {
    const { showData } = GetData();
    return <>
        <Summary showData={showData} />
    </>
}

const Form = () => {
    const { showData } = GetData();
    return <>
        <MovieForm showData={showData} />
    </>
}


export { Shows, ShowSummary, Form };