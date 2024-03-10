// AuthProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedLoginState = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(savedLoginState === 'true');
    }, []);

    const login = async (username, password) => {
        console.log("Logging in AuthProvider.js");
        try {
            console.log(`Logging in with username: ${username} and password: ${password}`);
            const response = await axios({
                method: 'post',
                url: 'http://ec2-3-79-60-215.eu-central-1.compute.amazonaws.com/api/login',
                headers: {
                    'username': username,
                    'password': password
                }
            });
    

            if (response.status === 200) {
                setIsLoggedIn(true);
                setUser(username);
                localStorage.setItem('isLoggedIn', 'true');
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error('Login failed'));
            }
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
    };

    const register = async (username, password) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://ec2-3-79-60-215.eu-central-1.compute.amazonaws.com/api/register',
                headers: {
                    'username': username,
                    'password': password
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, register, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;