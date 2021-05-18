import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import PasswordWindow from "./PasswordWindow";
import AlertBox from "../Alert Box/AlertBox";

export default function Dashboardbody({ props }) {
    const [email, setEmail] = useState("");
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
        if (
            typeof props.location.state !== "undefined" &&
            typeof props.location.state.email !== "undefined"
        ) {
            axios
                .get("http://localhost:5000/dashboard/all", {
                    params: {
                        username: props.location.state.email,
                    },
                })
                .then((res) => {
                    setPasswords(res.data.details.slice(1));
                    setEmail(props.location.state.email);
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
            axios
                .post("http://localhost:5000/dashboard/delete", {
                    params: {
                        username: props.location.state.email,
                        site: passwords[index].site,
                        usernameSite: passwords[index].login,
                    },
                })
                .then((res) =>
                    axios
                        .post("http://localhost:5000/dashboard/add", {
                            params: {
                                username: props.location.state.email,
                                site: site,
                                usernameSite: login,
                                password: pwd,
                            },
                        })
                        .then((res) => {
                            setPasswords(res.data.details.slice(1));
                        })
                );
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
            .post("http://localhost:5000/dashboard/delete", {
                params: {
                    username: props.location.state.email,
                    site: passwords[index].site,
                    usernameSite: passwords[index].login,
                },
            })
            .then((res) => {
                setPasswords(res.data.details.slice(1));
            });
    }

    const [alertWindowVisible, setAlertWindowVisible] = useState(false);
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
                    title={title}
                    message={message}
                    onButtonClick={showAlert}
                />
            ) : null}
            <div className="dashboard-wrapper">
                <h1 className="heading">
                    {email}
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
                                <div className="password-wrapper">
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
