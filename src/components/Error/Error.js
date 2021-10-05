import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import error from '../../images/error.png'

const Error = () => {
    return (
        <div>
            {/* Calling Menubar */}
           <MenuBar></MenuBar>
           {/* Error 404 area */}
           <div className='text-center'>
               <img src={error} className="img-fluid" alt="" />
           </div>
           {/* Calling Footer */}
           <Footer></Footer>
        </div>
    );
};

export default Error;