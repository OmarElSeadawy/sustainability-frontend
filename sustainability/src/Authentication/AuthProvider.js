// AuthProvider.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://3.126.123.215:5000/api/login',
                headers: {
                    'username': username,
                    'password': password,
                    'Content-Type': 'application/json',
		}
		   
            });

            if (response.status === 200) {
                setIsLoggedIn(true);
                setUser({ username, password });
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('user', JSON.stringify({ username, password })); 
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
                url: 'http://3.126.123.215:5000/api/register',
                headers: {
                    'username': username,
                    'password': password,
                    'Content-Type': 'application/json',
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
        localStorage.removeItem('user'); 
        localStorage.clear();
        navigate('/login'); 
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, register, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
