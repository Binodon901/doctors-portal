import React from 'react';
import Chair from '../../images/chair.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1 ">
                <h1 className='text-color'>Your new smile starts here</h1>
                <h5 className='text-color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad harum rem blanditiis possimus necessitatibus inventore doloremque voluptatum consequatur repellat nam assumenda corrupti quisquam impedit aliquid, reiciendis illo molestias in minima!</h5>
                
                <button type="button" className="btn btn-primary col-md-3 offset-md-3">Appointme</button>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;