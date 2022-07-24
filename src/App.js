import React from 'react';
import FacebookLogin from './Components/FacebookLogin';

export default function App() {
  
    return (
        <>
            <div className="App">
                <FacebookLogin />
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
  
};
