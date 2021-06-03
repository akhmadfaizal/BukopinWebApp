import React from 'react';
import ProductImage from '../assets/homescreen/img/product-image.png';
import { BiBriefcase, BiSmile } from "react-icons/bi";
function Product(){
    return <div className="section-product">
            <ul className="nav nav-pills nav-product" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" id="pills-business-tab" data-toggle="pill" href="#pills-business" role="tab" aria-controls="pills-business" aria-selected="false">
                        <BiBriefcase /> Bisnis
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" id="pills-people-tab" data-toggle="pill" href="#pills-people" role="tab" aria-controls="pills-people" aria-selected="true">
                        <BiSmile /> Perseorangan
                    </a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab"></div>
                <div className="tab pane fade show active" id="pills-people" role="tabpanel" aria-labelledby="pills-people-tab">
                    <div className="container-fluid">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <div className="dark-overlay"></div>
                                <img src={ProductImage} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <div className="dark-overlay"></div>
                                <img src={ProductImage} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <div className="dark-overlay"></div>
                                <img src={ProductImage} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>;
}

export default Product;