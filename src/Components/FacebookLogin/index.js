import React from 'react';
import FacebookProvider, { Login } from 'react-facebook-sdk';

export default function FacebookLogin({ setAccessToken }) {

    const handleResponse = (data) => {
        console.log(data);
        const { tokenDetail } = data;
        const { accessToken } = tokenDetail;
        console.log(accessToken);
        setAccessToken(accessToken);
    }
     
    const handleError = (error) => {
        this.setState({ error });
    }
     
    return (
        <>
            <FacebookProvider appId="803808404119135">
                <Login
                    scope="email"
                    onResponse={handleResponse}
                    onError={handleError}
                >
                    <span>Login via Facebook</span>
                </Login>
            </FacebookProvider>

            <style jsx>{`
            `}</style>
        </>
    );

}