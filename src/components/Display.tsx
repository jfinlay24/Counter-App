import React from "react";

interface DisplayProps {
    numbers: number;
}

const Display: React.FC<DisplayProps> = ({numbers}) => {
    return (
        <div> 
            <h2 className="output-box">
                <div>
                    {numbers}
                </div>
            </h2>
        </div>
    )
};

export default Display;