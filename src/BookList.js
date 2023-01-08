import React from 'react';
//import sampleImage from '../logo192.png';
import Image from './admin_login2.jpg'

const BookRow = () => {
  return (
    <>
    <div className="bg-light">
                <h2 className="text-center p-2 mt-3 mb-5" style={{fontFamily:"cursive",textDecoration:"underline"}}>Book List</h2>
            </div>
    <div className="row book">
      <div className="col-md-2">
        <img src={Image} alt="" height="150" />
      </div>
      <div className="col-md-8 book-detail">
        <h4>Blue T-Shirt</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 book-price">
        $19.99
      </div>
    </div>
    </>
  );
}

export default BookRow;