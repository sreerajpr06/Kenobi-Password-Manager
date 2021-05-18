import React from "react";
import "./alertBoxStyles.css";

function AlertBox({ title, message, onButtonClick }) {
    return (
        <div className="alertbox-wrapper">
            <div className="alertbox">
                <div className="fas fa-exclamation-circle alertbox-icon"></div>
                <div className="alertbox-title">{title}</div>
                <div className="alertbox-message">{message}</div>
                <div
                    className="alertbox-button"
                    onClick={(e) => onButtonClick("", "")}
                >
                    OK
                </div>
            </div>
        </div>
    );
}

export default AlertBox;
