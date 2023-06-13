import React from 'react';
import {  useLoaderData } from 'react-router-dom';

const Countries = () => {
    const Countries = useLoaderData();

    return (
        <div>
            <h2>All Coutries : {Countries.length}</h2>
            <ul>
                {
                    Countries.map(country => <li>{country.name.common}</li>)
                }
            </ul>
           
        </div>
    );
};

export default Countries;