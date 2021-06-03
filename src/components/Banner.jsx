import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiBriefcase, BiCreditCardFront, BiCreditCardAlt, BiSmile } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { RiCoinLine } from "react-icons/ri";

import ImageBanner from '../assets/homescreen/img/img-slider1.png';
import ImageBannerMessage1 from '../assets/homescreen/img/banner-image-message1.png';
import ImageBannerMessage2 from '../assets/homescreen/img/banner-image-message2.png';
import ImageBannerBuilding from '../assets/homescreen/img/banner-image-building.png';
import ImageBannerDailySolution3 from '../assets/homescreen/img/banner-image-daily-solution-3.png';
import ImageAppWokee from '../assets/homescreen/img/image-app-wokee.png';
import GooglePlayBadge from '../assets/homescreen/img/google-badge.svg';
import AppStoreBadge from '../assets/homescreen/img/apple-badge.svg';


function Banner(){
    return <div className="section-banner">
        <div className="row">
            <div className="col-8">
                <a className="carousel-control carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <FaChevronLeft className="carousel-control-arrow"/>
                </a>
                <a className="carousel-control carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <FaChevronRight className="carousel-control-arrow"/>
                </a>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={ImageBanner} className="" alt="..."/>
                            <div className="dark-overlay"></div>
                            <div className="carousel-caption">
                                <h3>Suka Minum Kopi, Sekarang Punya Bisnis Kafe Sendiri</h3>
                                <p>Siapa yang tidak kenal dengan kopi meruapkan minuman nikmat dengan aroma memikat yang semakin hari semakin banyak varian rasa yang muncul. Menikmati...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ImageBanner} className="" alt="..."/>
                            <div className="dark-overlay"></div>
                            <div className="carousel-caption">
                                <h3>Suka Minum Kopi, Sekarang Punya Bisnis Kafe Sendiri</h3>
                                <p>Siapa yang tidak kenal dengan kopi meruapkan minuman nikmat dengan aroma memikat yang semakin hari semakin banyak varian rasa yang muncul. Menikmati...</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ImageBanner} className="" alt="..."/>
                            <div className="dark-overlay"></div>
                            <div className="carousel-caption">
                                <h3>Suka Minum Kopi, Sekarang Punya Bisnis Kafe Sendiri</h3>
                                <p>Siapa yang tidak kenal dengan kopi meruapkan minuman nikmat dengan aroma memikat yang semakin hari semakin banyak varian rasa yang muncul. Menikmati...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="banner-find-solution-message">
                    <p className="banner-find-solution-message-paragraph">Temukan Solusi Tepat Berbagai Macam Kebutuhan Anda di Sini</p>
                    <img src={ImageBannerMessage1} className="banner-find-solution-message-image1" />
                    <img src={ImageBannerMessage2} className="banner-find-solution-message-image2" />
                </div>
                <div className="banner-your-bisnis-solution">
                    <h6 className="banner-your-bisnis-solution-title"><BiBriefcase /> Solusi Bisnis Anda</h6>
                    <div className="row">
                        <div className="col-4">
                            <div className="banner-your-bisnis-solution-item">
                                <BiBriefcase className="banner-your-bisnis-solution-icon" />
                                <h6>UMKM</h6>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="banner-your-bisnis-solution-item">
                                <RiCoinLine className="banner-your-bisnis-solution-icon" />
                                <h6>Komersial</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-your-daily-solution">
                    <h6 className="banner-your-daily-solution-title"><BiSmile /> Solusi Keseharian Anda</h6>
                    <div className="row">
                        <div className="col-4">
                            <div className="banner-your-daily-solution-item">
                                <BiCreditCardFront className="banner-your-daily-solution-icon" />
                                <h6>UMKM</h6>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="banner-your-daily-solution-item">
                                <BiCreditCardAlt className="banner-your-daily-solution-icon" />
                                <h6>Komersial</h6>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="banner-your-daily-solution-item">
                                <BiBriefcase className="banner-your-daily-solution-icon" />
                                <h6>Bukopoin Prioritas</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-other-solution">
                    <h6 className="banner-other-solution-title"><CgMenuGridO /> Solusi Lainnya</h6>
                    <div className="banner-other-solution-arrow">
                        <FaChevronLeft className="banner-other-solution-arrow-item"/>
                        <FaChevronRight className="banner-other-solution-arrow-item"/>
                    </div>
                    <div className="banner-other-solution-card" style={{backgroundImage: `url('${ImageBannerBuilding}')`, backgroundSize:"cover", backgroundPosition: "center"}}>
                        <div className="row ">
                            <div className="col-3">
                                <img src={ImageBannerDailySolution3} className="banner-other-solution-img" />
                            </div>
                            <div className="col-9 banner-other-solution-card-text">
                                <h6>Solusi Masa Depan Anda</h6>
                                <small>Lorem ipsum dolor sit Amet</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-app-wokee">
                    <img src={ImageAppWokee} className="banner-app-wokee-logo"/>
                    <h5 className="banner-app-wokee-title">Wokee+</h5>
                    <p className="banner-app-wokee-text">Temukan cara menabung dan bertransaksi dengan Wokee.</p>
                    <div className="row">
                    <a href="https://play.google.com/store/apps/details?id=com.flutter.wokee_platform&hl=en&gl=US">
                        <img src={GooglePlayBadge} className="banner-app-wokee-img"/>
                    </a>
                        <img src={AppStoreBadge}  className="banner-app-wokee-img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Banner;