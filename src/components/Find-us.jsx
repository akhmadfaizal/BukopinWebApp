import React from 'react';
import { BiMap, BiSearch } from "react-icons/bi";
import { FiChevronRight} from "react-icons/fi";
import ImageFindUs1 from '../assets/homescreen/img/find-us-image1.png';
import ImageFindUs2 from '../assets/homescreen/img/find-us-image2.png';
import LogoBukopin from '../assets/homescreen/img/logo-bukopin.png';

function FindUs(){
return <div className="section-find-us">
    <h2 className="section-find-us-header">Temukan Kami</h2>
    <div className="section-find-us-main">
        <div className="row">
            <div className="col-md-8">
                <div className="form-group">
                    <BiSearch className="section-find-us-icon"/>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control section-find-us-input" placeholder="Contoh: Jakarta, Senayan"/>
                        <div className="input-group-append">
                            <button className="btn section-find-us-button">Cari</button>
                        </div>
                    </div>
                </div>
                <h6 className="section-find-us-cabang-title"><BiMap /> Cabang dan ATM Terdekat</h6>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <small>Cabang</small>
                                <h6>ATM SPBU COCO MT. Haryono</h6>
                            </div>
                            <div className="card-footer">
                                <a href=""><h6 className="section-find-us-card-footer-text">Lihat Peta</h6> <FiChevronRight className="float-right"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <small>Cabang</small>
                                <h6>ATM SPBU COCO MT. Haryono</h6>
                            </div>
                            <div className="card-footer">
                                <a href=""><h6 className="section-find-us-card-footer-text">Lihat Peta</h6> <FiChevronRight className="float-right"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <small>Cabang</small>
                                <h6>ATM SPBU COCO MT. Haryono</h6>
                            </div>
                            <div className="card-footer">
                                <a href=""><h6 className="section-find-us-card-footer-text">Lihat Peta</h6> <FiChevronRight className="float-right"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <small>Cabang</small>
                                <h6>ATM SPBU COCO MT. Haryono</h6>
                            </div>
                            <div className="card-footer">
                                <a href=""><h6 className="section-find-us-card-footer-text">Lihat Peta</h6> <FiChevronRight className="float-right"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <img src={ImageFindUs1} className="section-find-us-image1"/>
                <img src={ImageFindUs2} className="section-find-us-image2"/>
            </div>
        </div>
    </div>
    <div className="section-find-us-breadcrumb">
    <div className="row align-items-center">
        <img src={LogoBukopin} className="section-find-us-breadcrumb-img"/>
        <FiChevronRight className="section-find-us-breadcrumb-arrow"/>
        <small className="section-find-us-breadcrumb-text"> Home </small>
    </div>
    </div>
</div>;
}

export default FindUs;