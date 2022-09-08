import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
           <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary btn-wide font-bold text-white text-xl">
            {children}
          </button> 
        </div>
    );
};

export default PrimaryButton;