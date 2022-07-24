import React, { useState, useEffect } from 'react';

export default function SelectPost({ accessToken }) {

    useEffect(() => {
        getPosts(accessToken);
    }, []);

    useEffect(() => {
        getPosts(accessToken);
    }, [accessToken]);

    const getPosts = (accessToken) => {
        if(!accessToken) {
            console.error('Invalid accessToken: ', accessToken);
            return;
        }

        
    }

    return(
        <>
            <section className='Posts'>

            </section>
        </>
    );

}