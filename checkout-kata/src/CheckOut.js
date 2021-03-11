
import './CheckOut.css';
import ProductData from './ProductArray';



function CheckOut() {
  return (

    <div className="checkout">
      {ProductData.map(Product => (
        <div className="item">
            <div className="name">
              {Product.name}
            </div> 
            {Product.special? 
            <div className="special">
            {Product.special}<span className="strikethrough">{Product.price}</span>
            </div> : <div className="price">
            {Product.price}
            </div>  }
            <div className="quantity">
            <input type="number" id="quantity" name="quantity"
       min="0" max="10"/>
            </div>
            <div className="addtobasket"><button onClick={""} ></button></div>
        </div>
      ))}
    </div>
  );
}

export default CheckOut;
