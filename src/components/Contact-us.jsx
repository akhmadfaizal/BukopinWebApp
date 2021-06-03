import React from 'react';
import { FiPhone,  FiPrinter, FiChevronRight} from "react-icons/fi";
function ContactUs(){
return <div className="section-contact-us">
        <div className="row">
            <div className="col-md-5">
                <h2 className="section-contact-us-header">Hubungi Kami</h2>
                <h6 className="section-contact-us-address-one">Gedung Bank Bukopin</h6>
                <h6 className="section-contact-us-address-two">Jl. MT. Haryono Kav. 50-51, Jakarta, 12770</h6>
                <div className="row section-contact-us-row-address-three">
                    <div className="col-6"><FiPhone /> 021 7988 266</div>
                    <div className="col-6"><FiPrinter /> 021 7980 625</div>
                </div>
                <button className="btn btn-section-contact-address">Selengkapnya</button>
            </div>
            <div className="col-md-7 col-section-contact-us-two">
                <h2 className="section-contact-us-header">Kenali Kami</h2>
                <div className="row">
                    <div className="col-6 mb-4">
                        <a href="">
                            <h6>Profil Bank KB Bukopin <FiChevronRight className="float-right"/></h6>
                        </a>
                    </div>
                    <div className="col-6 mb-4">
                        <a href="">
                            <h6>Manajemen Perusahaan <FiChevronRight className="float-right"/></h6>
                        </a>
                    </div>
                    <div className="col-6 mb-4">
                        <a href="">
                            <h6>Hubungan Investor<FiChevronRight className="float-right"/></h6>
                        </a>
                    </div>
                    <div className="col-6 mb-4">
                        <a href="">
                            <h6>Tanggung Jawab Sosial <FiChevronRight className="float-right"/></h6>
                        </a>
                    </div>
                    <div className="col-6 mb-4">
                        <a href="">
                            <h6>Tata Kelola Perusahaan <FiChevronRight className="float-right"/></h6>
                        </a>
                    </div>
                    <div className="col-6 mb-4">
                        <a href="">
                            <h6>Info Terbaru <FiChevronRight className="float-right"/></h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
</div>;
}

export default ContactUs;