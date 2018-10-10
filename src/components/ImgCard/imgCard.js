import React from "react";
import "./imgCard.css";

const imgCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectDoctor(props.doctor)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.doctor} src={props.image} />
            </a>
        </div>
    </div>
);

export default imgCard;