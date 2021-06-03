import React from 'react';
import IconCS from '../assets/homescreen/img/icon-cs.svg';
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

function LayananNasabah(){
return <div id="accordion" className="btn-slideup-contactus">
        <div className="card"> 
            <div className="card-body">
                <a className="btn btn-link d-block text-left d-flex align-items-center" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img src={IconCS} className="mr-2" /> Hubungi Kami <FaChevronDown className="ml-auto"/>
                </a>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <a className="btn btn-link d-block text-left d-flex align-items-center">
                        <IoCallOutline className="mr-2"/> 
                        021 7988 266
                    </a>
                    <a className="btn btn-link d-block text-left d-flex align-items-center">
                        <AiOutlineWhatsApp className="mr-2"/> 
                        081 2345 6789
                    </a>
                    <a className="btn btn-link d-block text-left d-flex align-items-center my-2">
                        <AiOutlineMail className="mr-2"/> 
                        Kirim Email
                        <FaChevronRight className="ml-auto"/> 
                    </a>

                    <small className="small-title-in-contactus">Layanan Teller</small>
                    <div className="mb-2">
                    <a className="btn btn-link d-block text-left d-flex align-items-center">
                        Tarik Tunai
                        <FaChevronRight className="ml-auto"/> 
                    </a>
                    <a className="btn btn-link d-block text-left d-flex align-items-center">
                        Setor Tunai
                        <FaChevronRight className="ml-auto"/> 
                    </a>
                    <a className="btn btn-link d-block text-left d-flex align-items-center">
                        Pindai Buku
                        <FaChevronRight className="ml-auto"/> 
                    </a>
                    </div>

                    <small className="small-title-in-contactus">Layanan Teller</small>
                    <a className="btn btn-link d-block text-left d-flex align-items-center">
                        Buka Tabungan 
                        <FaChevronRight className="ml-auto"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default LayananNasabah;