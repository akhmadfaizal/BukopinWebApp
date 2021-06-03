import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhone,  FiPrinter} from "react-icons/fi";
import ImageFooter1 from '../assets/homescreen/img/footer-image1.png';
import ImageFooter2 from '../assets/homescreen/img/footer-image2.png';

function Footer(){
return <div className="section-footer">
    <div className="section-footer-one">
        <div className="row">
            <div className="col-sm-6 col-md-4 col-section-footer-one">
                <h6 className="section-footer-one-title">Solusi Keseharian Anda</h6>
                <a>Kartu Kredit</a>
                <a>Kartu Debit</a>
                <a>Bukopin Prioritas</a>
            </div>
            <div className="col-sm-6 col-md-4 col-section-footer-one">
                <h6 className="section-footer-one-title">Solusi untuk Bisnis Anda</h6>
                <a>UKM</a>
                <a>Komersial</a>
            </div>
            <div className="col-sm-6 col-md-4 col-section-footer-one">
            <h6 className="section-footer-one-title">Karir</h6>
                <a>Life at Bukopin</a>
                <a>Jenjang Karir</a>
                <a>Lowongan Pekerjaan</a>
            </div>
            <div className="col-sm-6 col-md-4 col-section-footer-one">
            <h6 className="section-footer-one-title">Solusi Masa Depan Anda</h6>
                <a>Simpanan</a>
                <a>Pinjaman</a>
                <a>Wealth Management</a>
            </div>
            <div className="col-sm-6 col-md-4 col-section-footer-one">
            <h6 className="section-footer-one-title">Layanan Terbaik untuk Anda</h6>
                <a>e-Banking</a>
                <a>ATM</a>
                <a>Safe Deposit Box</a>
                <a>Lainnya</a>
            </div>
            <div className="col-sm-6 col-md-4 col-section-footer-one">
            <h6 className="section-footer-one-title">Inspirasi Terkini</h6>
                <a>Lihat Artikel</a>
                <a>Promo Terbaik Bulan Ini</a>
            </div>
            <div className="col-sm-6 col-md-4 col-section-footer-one">
            <h6 className="section-footer-one-title">Layanan Nasabah</h6>
                <a>Layanan Pengaduan</a>
            </div>
            <div className="col-md-8">
                <img src={ImageFooter1} className="float-right"/>
            </div>
        </div>
    </div>

    <div className="section-footer-two">
        <div className="row">
            <div className="col-md-4">
                <h6 className="section-footer-two-title">Ikuti Kami di:</h6>
                <FaFacebookF className="section-footer-two-icon"/>
                <FaTwitter className="section-footer-two-icon"/>
                <FaInstagram className="section-footer-two-icon"/>
            </div>
            <div className="col-md-4">
                <h6 className="section-footer-two-title">Kantor Pusat</h6>
                <p>Jl. MT. Haryono Kav. 50-51 Jakarta 12770</p>
                <div className="row section-contact-us-row-address-three">
                    <div className="col-6"><FiPhone /> 021 7988 266</div>
                    <div className="col-6"><FiPrinter /> 021 7980 625</div>
                </div>
            </div>
            <div className="col-md-4">
                <p>PT. Bank Bukopin, Tbk adalah pelaku jasa keuangan terdaftar dan diawasi oleh Otoritas Jasa Keuangan</p>
                <img src={ImageFooter2} />
            </div>
        </div>
    </div>

    <div className="section-footer-three">
        <small>Copyright © BANK KB BUKOPIN 2021 All rights reserved.</small>
    </div>
</div>;
}

export default Footer;