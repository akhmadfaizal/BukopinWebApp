import React from 'react';
import { FaChevronDown, FaSearch, FaLock } from "react-icons/fa";
import { FiMenu} from "react-icons/fi";
import LogoBukopin from '../assets/homescreen/img/logo-bukopin.png';

function Navbar(){
 return <nav className="navbar navbar-expand-md fixed-top navbar-custom">
    <div className="container-fluid">
        <a className="navbar-brand">
            <img src={LogoBukopin} alt="bukopin logo"/>
        </a>
        <ul className="navbar-nav nav-change-language">
            <a href="#" className="nav-change-language-active">ID</a> <span className="nav-change-language-seperator"></span> <a href="#" className="">EN</a>
        </ul>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <FiMenu/>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="#" className="nav-link">Syariah</a>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Solusi Untuk Anda <FaChevronDown className="icon-custom-size"/></a>
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Link 1</a>
                    <a href="#" className="dropdown-item">Link 2</a>
                    <a href="#" className="dropdown-item">Link 3</a>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Tentang Kami <FaChevronDown className="icon-custom-size"/></a>
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Hubungan Investor</a>
                    <a href="#" className="dropdown-item">Informasi Terbaru</a>
                </div>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Inspirasi Terkini</a>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Karir <FaChevronDown className="icon-custom-size"/></a>
                <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">Link 1</a>
                    <a href="#" className="dropdown-item">Link 2</a>
                    <a href="#" className="dropdown-item">Link 3</a>
                </div>
            </li>
            <li className="nav-item nav-item-search">
                <a href="#" className="nav-link">
                    <FaSearch className="icon-custom-size" />
                </a>
            </li>
            <li className="nav-item nav-item-login">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><FaLock className="icon-custom-size"/> Masuk <FaChevronDown className="icon-custom-size"/></a>
            </li>
        </ul>
        </div>

    </div>
 </nav>;
}

export default Navbar;