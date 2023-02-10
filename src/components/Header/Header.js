import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    return (
            <div className={css.maine}>
                <div><NavLink to={''}>home</NavLink></div>
                <div><NavLink  to={'users'}>users</NavLink ></div>
                <div><NavLink  to={'posts'}>posts</NavLink ></div>
                <div><NavLink  to={'about'}>about</NavLink ></div>
            </div>
            

    );
};

export {Header};