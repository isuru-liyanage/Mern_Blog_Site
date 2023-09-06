import React from "react";
import './footer.css'

function Home_footer(props) {
    const { name, updateCounter } = props;

    return (
        <div className="layout-main">
            <div className="Miiddle-layout">
                {/* Call the updateCounter function with appropriate values */}
                <button onClick={() => updateCounter(-1)}>-</button>
                <h3 className="counter">{name}</h3>
                <button onClick={() => updateCounter(1)}>+</button>
            </div>
        </div>
    );
}

export default Home_footer;
