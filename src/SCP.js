import React from 'react';

const SCP =({scp})=>
{
    return(
        <div>
            <h3>SCP List</h3>
            {
                scp.map(
                    (scp)=>(
                            <div className="row">
                            <div className="col p-3 m-2 rounded border dropshadow ">
                            <h2>Item: {scp.item}</h2>
                            <h3>Class: {scp.class}</h3>
                            <img src={scp.image}/>
                            <h3>Description:</h3>
                            <p>{scp.description}</p>
                            <h4>Containment:</h4>
                            <p>{scp.containment}</p>
                            </div>
                            </div> 
                    )
                )
                
            }
        </div>
    )
};

export default SCP;
