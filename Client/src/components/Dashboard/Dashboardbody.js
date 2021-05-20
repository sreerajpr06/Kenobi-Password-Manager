import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import PasswordWindow from "./PasswordWindow";
import AlertBox from "../Alert Box/AlertBox";
import { encrypt, decrypt, convertMsgToArray } from "../../libs/aes";

export default function Dashboardbody({ props }) {
    const [id, setID] = useState(0);
    const [sessionParameters, setSessionParameters] = useState({
        email: "",
        subKeys: [],
    });
    const [pwdWindowClass, setPwdWindowClass] = useState(false);
    const [showPasswordIndex, setShowPasswordIndex] = useState(-1);
    const [passwordWindowPackage, setPasswordWindowPackage] = useState({
        site: "",
        email: "",
        password: "",
        index: -1,
    });
    const [passwords, setPasswords] = useState([]);

    useEffect(async () => {
        var sessionEmail = window.sessionStorage.getItem("email");
        var sessionPassword = window.sessionStorage.getItem("subKeys");
        if (sessionEmail !== null && sessionPassword !== null) {
            axios
                .get("https://api.kenobi.sidhantunnithan.com/dashboard/all", {
                    params: {
                        username: sessionEmail,
                    },
                })
                .then((res) => {
                    var passwds = [...res.data.details.slice(1)].map(
                        (detail) => {
                            return {
                                _id: detail._id,
                                site: detail.site,
                                username: detail.username,
                                password: decrypt(
                                    [...JSON.parse(sessionPassword)],
                                    convertMsgToArray(detail.password)
                                ),
                            };
                        }
                    );
                    setPasswords(passwds);
                    setSessionParameters({
                        email: sessionEmail,
                        subKeys: JSON.parse(sessionPassword),
                    });
                    setID(res.data._id);
                    window.sessionStorage.clear();
                });
        } else {
            props.history.push("/login");
        }
    }, []);

    function onShowPasswordWindow(pwdShow) {
        setPwdWindowClass(pwdShow);
    }

    function onAdd(site, login, pwd, index) {
        if (site !== "" && login !== "" && pwd !== "") {
            if (index < 0) {
                axios
                    .post(
                        "https://api.kenobi.sidhantunnithan.com/dashboard/add",
                        {
                            params: {
                                username: sessionParameters.email,
                                site: site,
                                usernameSite: login,
                                password: encrypt(
                                    [...sessionParameters.subKeys],
                                    convertMsgToArray(
                                        " ".repeat(16) + pwd
                                    ).slice(-16)
                                ),
                            },
                        }
                    )
                    .then((res) => {
                        setPasswords([
                            ...passwords,
                            {
                                _id: res.data.details[
                                    res.data.details.length - 1
                                ]._id,
                                site: site,
                                username: login,
                                password: pwd,
                            },
                        ]);
                    });
            } else {
                var tempwd = pwd;
                axios
                    .post(
                        "https://api.kenobi.sidhantunnithan.com/dashboard/edit",
                        {
                            params: {
                                id: id,
                                detailsId: passwords[index]._id,
                                site: site,
                                username: login,
                                password: encrypt(
                                    [...sessionParameters.subKeys],
                                    convertMsgToArray(
                                        " ".repeat(16) + pwd
                                    ).slice(-16)
                                ),
                            },
                        }
                    )
                    .then((res) => {
                        setPasswords([
                            ...passwords.slice(0, index),
                            {
                                ...passwords[index],
                                _id: passwords[index]._id,
                                site: site,
                                username: login,
                                password: tempwd,
                            },
                        ]);
                    });
            }
            setPwdWindowClass(false);
        } else {
            setPasswordWindowPackage({
                site: site,
                email: login,
                password: pwd,
                index: index,
            });
            showAlert("Empty Fields", "Fields cannot be empty");
        }
    }

    function onDelete(index) {
        axios
            .post("https://api.kenobi.sidhantunnithan.com/dashboard/delete", {
                params: {
                    username: sessionParameters.email,
                    site: passwords[index].site,
                    usernameSite: passwords[index].login,
                },
            })
            .then((res) => {
                setPasswords(res.data.details.slice(1));
            });
    }

    const [alertWindowVisible, setAlertWindowVisible] = useState(false);
    const [alertWindowIcon, setAlertWindowIcon] = useState("alert");
    const [title, setTitle] = useState("Test Title");
    const [message, setMessage] = useState(
        "test message to check message lol ol olol"
    );
    function showAlert(title, message) {
        setTitle(title);
        setMessage(message);
        onShowPasswordWindow(title === "" ? true : false);
        setAlertWindowVisible(!alertWindowVisible);
    }

    return (
        <>
            {pwdWindowClass ? (
                <div className={"password-window-wrapper"}>
                    <PasswordWindow
                        onCancel={onShowPasswordWindow}
                        onAdd={onAdd}
                        values={passwordWindowPackage}
                    />
                </div>
            ) : null}
            {alertWindowVisible ? (
                <AlertBox
                    icon={alertWindowIcon}
                    title={title}
                    message={message}
                    onButtonClick={showAlert}
                />
            ) : null}
            <div className="dashboard-wrapper">
                <h1 className="heading">
                    {sessionParameters.email}
                    <div
                        className="button-add"
                        onClick={(e) => {
                            setPasswordWindowPackage({
                                site: "",
                                email: "",
                                password: "",
                                index: -1,
                            });
                            onShowPasswordWindow(true);
                        }}
                    >
                        <span className="element-plus">+</span>ADD
                    </div>
                </h1>
                <div className="content-wrapper">
                    <div className="heading-wrapper">
                        <div className="heading-item">Name</div>
                        <div className="heading-item">Login</div>
                        <div className="heading-item">Password</div>
                        <div className="heading-item"></div>
                    </div>
                    <div className="password-body-wrapper">
                        {passwords.map((password, index) => {
                            return (
                                <div key={index} className="password-wrapper">
                                    <div className="password-item">
                                        {password.site}
                                    </div>
                                    <div className="password-item">
                                        {password.username}
                                    </div>
                                    <div className="password-item">
                                        {showPasswordIndex !== index
                                            ? "*".repeat(
                                                  password.password.length
                                              )
                                            : password.password}
                                    </div>
                                    <div className="password-item password-options">
                                        <div
                                            className="far fa-eye"
                                            onClick={(e) => {
                                                showPasswordIndex === index
                                                    ? setShowPasswordIndex(-1)
                                                    : setShowPasswordIndex(
                                                          index
                                                      );
                                            }}
                                        ></div>
                                        <div
                                            className="far fa-edit"
                                            onClick={(e) => {
                                                setPasswordWindowPackage({
                                                    site: password.site,
                                                    email: password.username,
                                                    password: password.password,
                                                    index: index,
                                                });
                                                onShowPasswordWindow(true);
                                            }}
                                        ></div>
                                        <div
                                            className="far fa-trash-alt"
                                            onClick={(e) => {
                                                onDelete(index);
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
