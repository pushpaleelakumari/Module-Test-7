import React from 'react'
import './Footer.css'


// FOOTER ACCIOJOB AND MEDIA IMAGES COMPONENT


function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="media">
                        <div className="Hedding">
                            <h3>Acciojob</h3>
                        </div>
                        <div className="medias">
                            <div>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 11.5704C23 5.1801 17.8515 0 11.5014 0C5.14848 0.00143732 0 5.1801 0 11.5719C0 17.3456 4.2056 22.1319 9.70191 23V14.9151H6.78415V11.5719H9.70479V9.02062C9.70479 6.12155 11.4224 4.52037 14.0484 4.52037C15.3075 4.52037 16.6226 4.74603 16.6226 4.74603V7.59193H15.1724C13.7451 7.59193 13.2995 8.4845 13.2995 9.40008V11.5704H16.4875L15.9787 14.9136H13.2981V22.9986C18.7944 22.1304 23 17.3441 23 11.5704Z" fill="#23A6F0" />
                                </svg>
                            </div>
                            <div>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                    <path d="M11 0C8.01488 0 7.6395 0.01375 6.46663 0.066C5.29375 0.121 4.49487 0.30525 3.795 0.5775C3.06088 0.853626 2.39593 1.28676 1.84663 1.84663C1.2871 2.39621 0.854023 3.06108 0.5775 3.795C0.30525 4.4935 0.119625 5.29375 0.066 6.4625C0.01375 7.63812 0 8.01213 0 11.0014C0 13.9879 0.01375 14.3619 0.066 15.5347C0.121 16.7063 0.30525 17.5051 0.5775 18.205C0.859375 18.9282 1.23475 19.5415 1.84663 20.1534C2.45713 20.7652 3.07037 21.142 3.79363 21.4225C4.49487 21.6947 5.29238 21.8804 6.46388 21.934C7.63813 21.9862 8.01213 22 11 22C13.9879 22 14.3605 21.9862 15.5347 21.934C16.7049 21.879 17.5065 21.6947 18.2064 21.4225C18.94 21.1462 19.6045 20.7131 20.1534 20.1534C20.7652 19.5415 21.1406 18.9282 21.4225 18.205C21.6934 17.5051 21.879 16.7063 21.934 15.5347C21.9862 14.3619 22 13.9879 22 11C22 8.01213 21.9862 7.63813 21.934 6.46388C21.879 5.29375 21.6934 4.4935 21.4225 3.795C21.146 3.06106 20.7129 2.39618 20.1534 1.84663C19.6042 1.28655 18.9392 0.853387 18.205 0.5775C17.5037 0.30525 16.7035 0.119625 15.5334 0.066C14.3591 0.01375 13.9865 0 10.9973 0H11.0014H11ZM10.0141 1.98275H11.0014C13.9384 1.98275 14.2863 1.99238 15.4454 2.046C16.5179 2.09413 17.1009 2.27425 17.4886 2.42412C18.0015 2.6235 18.3686 2.86275 18.7536 3.24775C19.1386 3.63275 19.3765 3.9985 19.5759 4.51275C19.7271 4.89913 19.9059 5.48213 19.954 6.55463C20.0076 7.71375 20.0186 8.06163 20.0186 10.9973C20.0186 13.9329 20.0076 14.2821 19.954 15.4412C19.9059 16.5138 19.7257 17.0954 19.5759 17.4831C19.3995 17.9607 19.118 18.3926 18.7522 18.7467C18.3672 19.1318 18.0015 19.3696 17.4873 19.569C17.1023 19.7203 16.5192 19.899 15.4454 19.9485C14.2863 20.0007 13.9384 20.0131 11.0014 20.0131C8.06438 20.0131 7.71513 20.0007 6.556 19.9485C5.4835 19.899 4.90188 19.7203 4.51412 19.569C4.03631 19.3929 3.60405 19.1119 3.24913 18.7467C2.88303 18.392 2.60112 17.9598 2.42412 17.4818C2.27425 17.0954 2.09413 16.5124 2.046 15.4399C1.99375 14.2808 1.98275 13.9329 1.98275 10.9945C1.98275 8.0575 1.99375 7.711 2.046 6.55187C2.0955 5.47937 2.27425 4.89638 2.4255 4.50863C2.62488 3.99575 2.86412 3.62862 3.24913 3.24362C3.63412 2.85862 3.99988 2.62075 4.51412 2.42138C4.90188 2.27013 5.4835 2.09138 6.556 2.04188C7.57075 1.99513 7.964 1.98138 10.0141 1.98V1.98275ZM16.8726 3.80875C16.6993 3.80875 16.5276 3.84289 16.3675 3.90923C16.2073 3.97557 16.0618 4.0728 15.9392 4.19537C15.8167 4.31794 15.7194 4.46346 15.6531 4.62361C15.5868 4.78376 15.5526 4.95541 15.5526 5.12875C15.5526 5.30209 15.5868 5.47374 15.6531 5.63389C15.7194 5.79404 15.8167 5.93956 15.9392 6.06213C16.0618 6.1847 16.2073 6.28193 16.3675 6.34827C16.5276 6.41461 16.6993 6.44875 16.8726 6.44875C17.2227 6.44875 17.5585 6.30968 17.806 6.06213C18.0536 5.81458 18.1926 5.47884 18.1926 5.12875C18.1926 4.77866 18.0536 4.44292 17.806 4.19537C17.5585 3.94782 17.2227 3.80875 16.8726 3.80875ZM11.0014 5.3515C10.2521 5.33981 9.50798 5.47729 8.81234 5.75594C8.11671 6.0346 7.48346 6.44885 6.94946 6.97458C6.41546 7.50032 5.99138 8.12703 5.70191 8.81823C5.41244 9.50944 5.26336 10.2513 5.26336 11.0007C5.26336 11.7501 5.41244 12.4919 5.70191 13.1831C5.99138 13.8743 6.41546 14.5011 6.94946 15.0268C7.48346 15.5525 8.11671 15.9668 8.81234 16.2454C9.50798 16.5241 10.2521 16.6616 11.0014 16.6499C12.4844 16.6267 13.8988 16.0214 14.9393 14.9645C15.9799 13.9076 16.5631 12.4839 16.5631 11.0007C16.5631 9.51751 15.9799 8.09382 14.9393 7.03691C13.8988 5.97999 12.4844 5.37464 11.0014 5.3515ZM11.0014 7.33288C11.974 7.33288 12.9067 7.71923 13.5944 8.40695C14.2821 9.09467 14.6685 10.0274 14.6685 11C14.6685 11.9726 14.2821 12.9053 13.5944 13.593C12.9067 14.2808 11.974 14.6671 11.0014 14.6671C10.0288 14.6671 9.09605 14.2808 8.40833 13.593C7.72061 12.9053 7.33425 11.9726 7.33425 11C7.33425 10.0274 7.72061 9.09467 8.40833 8.40695C9.09605 7.71923 10.0288 7.33288 11.0014 7.33288Z" fill="#23A6F0" />
                                </svg>
                            </div>
                            <div>
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='SVG'>
                                    <path d="M6.91075 18C15.213 18 19.7546 11.0731 19.7546 5.07669C19.7546 4.88285 19.7546 4.68625 19.7464 4.49241C20.6306 3.84789 21.3937 3.04993 22 2.13592C21.1741 2.50262 20.2988 2.7443 19.4026 2.85312C20.3466 2.28495 21.0536 1.391 21.3923 0.337403C20.5054 0.86647 19.5346 1.23787 18.5226 1.43534C17.8423 0.705724 16.9419 0.222372 15.9611 0.0601592C14.9803 -0.102054 13.9737 0.0659244 13.0973 0.538075C12.2209 1.01023 11.5236 1.7602 11.1134 2.67182C10.7031 3.58345 10.6029 4.60585 10.8281 5.58066C9.03339 5.49005 7.27762 5.02057 5.67468 4.20269C4.07175 3.3848 2.65744 2.23678 1.5235 0.833069C0.947843 1.83421 0.772164 3.01843 1.03214 4.14526C1.29211 5.27209 1.96825 6.25705 2.92325 6.90013C2.20762 6.87565 1.50772 6.68215 0.88 6.33524V6.39754C0.881234 7.44631 1.24205 8.46247 1.90145 9.27429C2.56086 10.0861 3.4784 10.6438 4.499 10.853C4.11161 10.9605 3.71144 11.014 3.30963 11.0122C3.02635 11.0131 2.74365 10.9867 2.46537 10.9333C2.75383 11.8361 3.3155 12.6254 4.07171 13.1908C4.82793 13.7561 5.74081 14.0691 6.6825 14.0859C5.08276 15.3511 3.10668 16.0373 1.0725 16.034C0.714066 16.0355 0.355882 16.0147 0 15.9716C2.06458 17.297 4.46228 18.0008 6.91075 18Z" fill="#23A6F0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer