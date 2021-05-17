import { React, useState } from "react";

export default function PasswordWindow(props) {
    const [site, setSite] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    function handleSiteChange(e) {
        setSite(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePwdChange(e) {
        setPwd(e.target.value);
    }

    return (
        <div className="password-window-box">
            <h1 className="password-window-box-heading">
                Enter Password Details
            </h1>
            <div className="password-window-item">
                Site
                <input
                    type="text"
                    placeholder="https://www.linkedin.com/"
                    onChange={handleSiteChange}
                />
            </div>
            <div className="password-window-item">
                Login
                <input
                    type="text"
                    placeholder="example@domain.com"
                    onChange={handleEmailChange}
                />
            </div>
            <div className="password-window-item">
                Password
                <input
                    type="password"
                    placeholder="**************"
                    onChange={handlePwdChange}
                />
            </div>
            <div className="password-window-buttons">
                <div
                    className="password-window-button"
                    onClick={(e) => {
                        props.onAdd(site, email, pwd);
                    }}
                >
                    SAVE
                </div>
                <div
                    className="password-window-button"
                    onClick={props.onCancel}
                >
                    CANCEL
                </div>
            </div>
        </div>
    );
}
