import React, { useState } from 'react';
import FacebookLogin from './Components/FacebookLogin';
import SelectFacebookPage from './Components/SelectFacebookPage';

export default function App() {
  
    const [accessToken, setAccessToken] = useState('');
    const [selectedPage, setSelectedPage] = useState({});

    return (
        <>
            <div className="App">
                <FacebookLogin 
                    setAccessToken={setAccessToken}
                />

                {
                    accessToken && <SelectFacebookPage 
                        accessToken={accessToken}
                        setSelectedPage={setSelectedPage}
                    />
                }

            </div>

            <style jsx>{`
                .App {
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
  
}
