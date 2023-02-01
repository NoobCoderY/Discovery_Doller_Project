import React from 'react';
import './footer.css'
import { FiShoppingCart } from "react-icons/fi";


const Footer = () => {
  return <footer className='footer'>
         <div className='footer-links'>
                <div className='footer_name'>
                    <div className='footer_brand'>E-commerce</div>
                </div>
                <div className='about'>
                    <h2>ABOUT</h2>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Folkart Stories</li>
                    <li>Press</li>
                    <li>Wholesale</li>
                    <li>Corporate Information</li>
                </div>
                <div className='help'>
                    <h2>HELP</h2>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Return</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </div>
                <div className='policy'>
                    <h2>POLICY</h2>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                    <li>EPR Compliance</li>
                </div>
                <div className='social'>
                    <h2>SOCIAL</h2>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </div>
         </div>
         <div className='copyrights'>
             <div style={{display:'flex',alignItems:'center',gap:'8px'}}><FiShoppingCart/><div className='logo'>ECOMMERCE</div></div>
             <div>© 2007-2022 Ecommerce.com</div>
         </div>
  </footer>;
};

export default Footer;
