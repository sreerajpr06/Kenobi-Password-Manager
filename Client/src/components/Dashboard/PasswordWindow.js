import { React, useState } from "react";

export default function PasswordWindow(props) {
    const [site, setSite] = useState(props.values.site);
    const [email, setEmail] = useState(props.values.email);
    const [pwd, setPwd] = useState(props.values.password);

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
                    value={site}
                />
            </div>
            <div className="password-window-item">
                Login
                <input
                    type="text"
                    placeholder="example@domain.com"
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div className="password-window-item">
                Password
                <input
                    type="password"
                    placeholder="**************"
                    onChange={handlePwdChange}
                    value={pwd}
                />
            </div>
            <div className="password-window-buttons">
                <div
                    className="password-window-button"
                    onClick={(e) => {
                        props.onAdd(site, email, pwd, props.values.index);
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
