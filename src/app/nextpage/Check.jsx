import React from "react";
 
const Check = () => {
    return (
        <div className="">
            <h2>Billing details</h2>
            <div className="flex ">
                <div className="">
                    <h3>First Name</h3> 
                    <input type="text" />
                </div>
                <div className="">
                    <h3>Last Name</h3>
                    <input type="text" />
                </div>
            </div>
            <div className="" > 
                <h3>COMPANY    NAME      -- (OPTIONAL)</h3>
                <input type="text" />
                <h3 className="flex gap-2" > COUNTRY / REGION  <p>*</p> Pakistan</h3>
            </div>
            <div className="">
                <h3 className="flex">STREET ADRESS <p>*</p> </h3>
                <input type="text" className="w-4/5" placeholder="Housr number and street name" />
                <input type="text " className="w-4/5" placeholder="Apartment , suite , unit , etc (optional)" />
            </div>
        </div>
    );
};


export default Check