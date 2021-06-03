import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import GooglePlayBadge from '../assets/homescreen/img/google-badge.svg';
import AppStoreBadge from '../assets/homescreen/img/apple-badge.svg';

function ProductDigital(){
return <div className="section-product-digital">
    <div className="row">
        <div className="col-md-6">
            <img src="https://source.unsplash.com/random/700x300/?phone" className="d-block img-fluid section-product-digital-img"/>
        </div>
        <div className="col-md-6 col-text-section-product-digital">
            <h6 className="section-product-digital-header">Produk Digital Kami</h6>
            <div className="section-product-digital-arrow">
                <FaChevronLeft className="section-product-digital-arrow-item"/>
                <FaChevronRight className="section-product-digital-arrow-item"/>
            </div>
            <div className="section-product-digital-app-wokee-group">
                <h5>Wokee+</h5>
                <p>Temukan cara baru menabung dan bertransaksi dengan Wokee. Aplikasi Wokee ini bantu Anda mengatur keuangan sebebas mungkin dengan smartphone Anda.</p>
                <div className="row section-product-digital-app-wokee-row">
                    <a href="https://play.google.com/store/apps/details?id=com.flutter.wokee_platform&hl=en&gl=US">
                        <img src={GooglePlayBadge} className="section-product-digital-app-wokee-img"/>
                    </a>
                        <img src={AppStoreBadge}  className="section-product-digital-app-wokee-img"/>
                    </div>
                </div>
            </div>
    </div>
</div>;
}

export default ProductDigital;