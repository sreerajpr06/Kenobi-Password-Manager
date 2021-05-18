import React from "react";
import "./alertBoxStyles.css";

function AlertBox({ icon, title, message, onButtonClick }) {
    return (
        <div className="alertbox-wrapper">
            <div className="alertbox">
                {icon === "alert" ? (
                    <div className="fas fa-exclamation-circle alert-icon"></div>
                ) : (
                    <div className="fas fa-info-circle info-icon"></div>
                )}
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
