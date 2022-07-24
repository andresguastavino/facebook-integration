import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function SelectFacebookPage({ accessToken, setSelectedPage }) {

    const [pages, setPages] = useState([]);
    
    useEffect(() => {
        getPages(accessToken);
    }, []);
    
    useEffect(() => {
        getPages(accessToken);
    }, [accessToken]);

    const endpoint = 'https://graph.facebook.com/v14.0/me/accounts?access_token={accessToken}';

    const getPages = (accessToken) => {
        if(!accessToken) {
            console.error('Invalid accessToken: ', accessToken);
            return;
        }

        axios.get(endpoint.replace('{accessToken}', accessToken))
            .then(res => {
                const { data } = res;
                const pages = data.map(pageData => ({
                    name: pageData.name,
                    id: pageData.id
                }));
                setPages(pages);
            })
            .catch(err => console.error(err));
    }

    return(
        <>
            <section className='SelectFacebookPage'>

                <header className='Header'>
                    <h1>Select which Facebook page you want to use</h1>
                </header>

                <main className='Body'>
                    {
                        pages.map(page => {
                            <article className='Page'>
                                <div className='PageName' onClick={ setSelectedPage(page) } >
                                    { page.name }
                                </div>
                            </article>
                        })
                    }
                </main>

            </section>
        </>
    );

}