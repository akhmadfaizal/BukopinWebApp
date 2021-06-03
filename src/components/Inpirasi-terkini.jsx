import React from 'react';

function Template(){
return <div className="section-inpirasi-terkini">
    <h2 className="section-inpirasi-terkini-header">Inpriasi Terkini</h2>
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body card-body-inspirasi-terkini">
                    <img src="https://source.unsplash.com/random/700x500/?office" className="d-block img-fluid"/>
                    <div className="dark-overlay"></div>
                    <div className="card-body-inspirasi-terkini-text">
                        <h6>Berkat Bunga Rendah, Belanja di Luar Negeri Nggak Jadi Masalah </h6>
                        <p>Dapatkan bunga rendah dan cashback saat...</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className="card">
                <div className="card-body card-body-inspirasi-terkini">
                    <img src="https://source.unsplash.com/random/700x500/?building" className="d-block img-fluid"/>
                    <div className="dark-overlay"></div>
                    <div className="card-body-inspirasi-terkini-text">
                        <h6>Berkat Bunga Rendah, Belanja di Luar Negeri Nggak Jadi Masalah </h6>
                        <p>Dapatkan bunga rendah dan cashback saat...</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="col-md-4">
        <div className="card">
                <div className="card-body card-body-inspirasi-terkini">
                    <img src="https://source.unsplash.com/random/700x500/?coffee" className="d-block img-fluid"/>
                    <div className="dark-overlay"></div>
                    <div className="card-body-inspirasi-terkini-text">
                        <h6>Berkat Bunga Rendah, Belanja di Luar Negeri Nggak Jadi Masalah </h6>
                        <p>Dapatkan bunga rendah dan cashback saat...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button className="btn btn-section-inpirasi-terkini">Selengkapnya</button>
</div>;
}

export default Template;