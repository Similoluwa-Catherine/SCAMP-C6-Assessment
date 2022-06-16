// import { Carousel } from 'react-responsive-carousel';
import sneakers1 from './images/image-product-1.jpg';
import thumbnail1 from './images/image-product-1-thumbnail.jpg';
import thumbnail2 from './images/image-product-2-thumbnail.jpg';
import thumbnail3 from './images/image-product-3-thumbnail.jpg';
import thumbnail4 from './images/image-product-4-thumbnail.jpg';
import { ReactComponent as Cart } from './images/icon-cart.svg';
import minusIcon from './images/icon-minus.svg';
import plusIcon from './images/icon-plus.svg';
import previousIcon from './images/icon-previous.svg'
import nextIcon from './images/icon-next.svg'


const ProductSection = () => {

    return (
        <div className="ProductSection container p-lg-4">
            <div className="row">
                <div className="image-section col">
                    <div>
                        <div className="carousel">
                            <button className="previousIcon">
                                <img src={previousIcon} alt="previous" className="previousIcon-img"/>
                            </button>
                            <button className="nextIcon">
                                <img src={nextIcon} alt="next" className="nextIcon-img"/>
                            </button>
                        </div>
                        <img src={sneakers1} alt="sneakers" className="large-image"/>
                    </div>
                    <div className="thumbnails mt-4 d-none d-lg-block">
                        <a href="/#" className="thumbnail"><img src={thumbnail1} alt="thumbnail" /></a>
                        <a href="/#" className="thumbnail"><img src={thumbnail2} alt="thumbnail" /></a>
                        <a href="/#" className="thumbnail"><img src={thumbnail3} alt="thumbnail" /></a>
                        <a href="/#" className="thumbnail"><img src={thumbnail4} alt="thumbnail" /></a>
                    </div>
                </div>

                <div className="description col">
                    <h5>SNEAKER COMPANY</h5>
                    <h2>Fall Limited Edition Sneakers</h2>
                    <p className="description-text">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. </p>
                    <div className="price">
                        <p className="discount">$125.00 <span>50%</span></p>
                        <p className="original-price text-decoration-line-through">$250.00</p>
                    </div>
                    <div>
                        <div className="d-lg-flex">
                            <div className="order-quantity">
                                <button className="border-0 bg-transparent">
                                    <img src={minusIcon} alt="cart" className="minus"/>
                                </button>
                                <div className="ms-lg-3 mt-1">
                                    <small className="fw-bold">0</small>
                                </div>
                                <button className="border-0 bg-transparent ms-lg-3">
                                    <img src={plusIcon} alt="cart" className="plus"/>
                                </button>
                            </div>
                            <div>
                                <button className="add-btn ms-lg-3">
                                    {/* <img src={cart} style={{fill:"#FFFFFF"}} alt="cart" className="cart" /> */}
                                    <Cart className="cart" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>  
    );
}

export default ProductSection;