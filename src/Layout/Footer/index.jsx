import React from 'react';

const Footer = () =>{
    return(
        <>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
            <span className="grey-text text-lighten-4 right" >Movies</span>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer;