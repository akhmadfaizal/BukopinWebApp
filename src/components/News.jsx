import React from 'react';
import { BsNewspaper, BsCreditCard } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

function News(){
return <div className="section-news">
    <div className="row">
        <div className="col-md-4 col-siaran-pers">
            <h6 className="siaran-news-title-header"><BsNewspaper /> Siaran Pers dan Pengumuman</h6>
            <div className="siaran-pers-dan-announcment">
                <small>20 April 2021</small>
                <h6 className="siaran-pers-dan-announcment-title">Wujudkan Bisnis Kopi Impian Bersama Teman</h6>
                <p>Wujudkan Bisnis Kopi Impian Bersama Teman..</p>
            </div>
            <div className="siaran-pers-dan-announcment">
                <small>20 April 2021</small>
                <h6>Wujudkan Bisnis Kopi Impian Bersama Teman</h6>
                <p>Wujudkan Bisnis Kopi Impian Bersama Teman..</p>
            </div>
            <div className="siaran-pers-dan-announcment">
                <small>20 April 2021</small>
                <h6>Wujudkan Bisnis Kopi Impian Bersama Teman</h6>
                <p>Wujudkan Bisnis Kopi Impian Bersama Teman..</p>
            </div>
            <a href="#" className="float-right col-siaran-pers-link">Selengkapnya</a>
        </div>
        <div className="col-md-8">
            <h6 className="siaran-news-title-header"><BsNewspaper /> Info Terbaru</h6>
            <div className="row">
                <div className="col-md-6">
                <div className="card">
                <div className="card-body card-body-kurs-kalkulator">
                    <div className="d-flex siaran-news-title">
                        <button className="btn btn-refresh-kurs"> <FiRefreshCw /> </button>
                        <h4 className="kurs-title">KURS</h4>
                    </div>

                    <ul className="nav nav-pills nav-fill nav-kurs-kalkulator" id="pills-tab" role="tablist">
                        <li className="nav-item d-block" role="presentation">
                            <a className="nav-link active" id="pills-kurs-tab" data-toggle="pill" href="#pills-kurs" role="tab" aria-controls="pills-home" aria-selected="true">Kurs</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="pills-kalkulator-tab" data-toggle="pill" href="#pills-kalkulator" role="tab" aria-controls="pills-kalkulator" aria-selected="false">Kalkulator</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-kurs" role="tabpanel" aria-labelledby="pills-kurs-tab">
                            <table className="table table-kurs">
                                <thead>
                                    <tr>
                                        <th>Mata Uang</th>
                                        <th>Jual</th>
                                        <th>Beli</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" height="20px" width="20px" style={{borderRadius:"50%"}}/> SGD</td>
                                        <td>10.450</td>
                                        <td>10.400</td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" height="20px" width="20px" style={{borderRadius:"50%"}}/> SGD</td>
                                        <td>10.450</td>
                                        <td>10.400</td>
                                    </tr>
                                    <tr>
                                        <td> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png" height="20px" width="20px" style={{borderRadius:"50%"}}/> SGD</td>
                                        <td>10.450</td>
                                        <td>10.400</td>
                                    </tr>
                                </tbody>
                            </table>
                            <small className="d-inline">25 Nov 2019</small><a href="#" className="float-right">Selengkapnya</a>
                        </div>
                    <div className="tab-pane fade" id="pills-kalkulator" role="tabpanel" aria-labelledby="pills-kalkulator-tab"></div>   
                    </div>

                </div>
            </div>
                </div>
                <div className="col-md-6">
                <div className="card card-body-sbdk">
                <div className="card-body">
                    <div className="d-flex siaran-news-title">
                        <button className="btn btn-refresh-kurs"> <BsCreditCard /> </button>
                        <h4 className="kurs-title">SBDK</h4>
                    </div>
                    <h6>Suku Bunga Dasar Kredit</h6>
                    <table className="table table-sbdk">
                        <tr>
                            <th>Kredit Korporasi</th>
                            <th>Kredit Ritel</th>
                            <th>Kredit Mikro</th>
                        </tr>
                        <tr>
                            <td>8,33%</td>
                            <td>10,50%</td>
                            <td>13,00%</td>
                        </tr>

                        <tr>
                            <th style={{padding:"0.5rem"}}>Kredit Korporasi</th>
                        </tr>
                        <tr>
                            <th>KPR</th>
                            <th>Non-KPR</th>
                        </tr>
                        <tr>
                            <td>8,33%</td>
                            <td>10,50%</td>
                            <td>13,00%</td>
                        </tr>
                    </table>
                    <small className="d-inline">25 Nov 2019</small><a href="#" className="float-right">Selengkapnya</a>
                </div>
            </div>
                </div>
            </div>
            
            
        </div>
    </div>
</div>;
}

export default News;