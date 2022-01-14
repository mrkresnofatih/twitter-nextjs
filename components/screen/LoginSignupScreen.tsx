// @flow
import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import styles from '../../styles/screen/loginsignupscreen.module.css';
import {PurpleTextField} from "../input/PurpleTextField";
import {Dictionary} from "../../types/dictionary";
import {GreyButton} from "../button/GreyButton";
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";
import {loginApi} from "../../apis/authApi";

type Props = {};
export const LoginSignupScreen = (props: Props) => {
    const [loginForm, setLoginForm] = useState<loginForm>(initialLoginFormValues);
    const [signUpForm, setSignUpForm] = useState<signUpForm>(initialSignUpFormValues);
    const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

    // loginMode Modifiers
    const toggleLoginMode = () => {
        setIsLoginMode(s => !s);
    }

    // loginForm Modifiers
    const loginOnChangeHandlers: Dictionary<(e: React.ChangeEvent<HTMLInputElement>) => void> = {
        onUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginForm({
                ...loginForm,
                userName: event.target.value
            });
        },
        onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setLoginForm({
                ...loginForm,
                password: event.target.value
            })
        }
    }

    // signupForm Modifiers
    const signupChangeHandlers: Dictionary<(e: React.ChangeEvent<HTMLInputElement>) => void> = {
        onUserNameChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setSignUpForm({
                ...signUpForm,
                userName: event.target.value
            })
        },
        onFullNameChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setSignUpForm({
                ...signUpForm,
                fullName: event.target.value
            })
        },
        onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setSignUpForm({
                ...signUpForm,
                email: event.target.value
            })
        },
        onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            setSignUpForm({
                ...signUpForm,
                password: event.target.value
            })
        }
    }

    // onSubmit LoginForm/SignupForm
    const onSignupSubmit = () => {
        console.log("SIGNUP EXECUTED!");
    };
    const onLoginSubmit = () => {
        loginApi(loginForm.userName, loginForm.password);
    }

    const formComponent: ReactNode = isLoginMode ? (
        <LoginForm
            loginFormData={loginForm}
            onChangeHandlers={loginOnChangeHandlers}
            toggleLoginMode={toggleLoginMode}
            onSubmit={onLoginSubmit}
        />
    ) : (
        <SignUpForm
            signUpFormData={signUpForm}
            onChangeHandlers={signupChangeHandlers}
            toggleLoginMode={toggleLoginMode}
            onSubmit={onSignupSubmit}
        />
    )

    useEffect(() => {
        console.log("change: ", loginForm);
    }, [loginForm])

    useEffect(() => {
        console.log("change: ", signUpForm);
    }, [signUpForm])


    return (
        <div className={styles.loginSignUpScreenContainer}>
            <LoginIllustration/>
            {formComponent}
        </div>
    );
};

const LoginIllustration = () => {
    return (
        <div className={styles.loginSignUpImage}/>
    )
}

interface loginForm {
    userName: string,
    password: string
}

interface signUpForm {
    userName: string,
    fullName: string,
    email: string,
    password: string
}

const initialLoginFormValues: loginForm = {
    userName: "",
    password: ""
}

const initialSignUpFormValues: signUpForm = {
    userName: "",
    fullName: "",
    email: "",
    password: ""
}

interface loginFormProps {
    loginFormData: loginForm,
    toggleLoginMode: () => void,
    onChangeHandlers: Dictionary<(e: React.ChangeEvent<HTMLInputElement>) => void>,
    onSubmit: () => void
}

const LoginForm = (props: loginFormProps) => {
    return (
        <div className={styles.loginSignupForm}>
            <h4 className={styles.loginSignUpTitle}>Login</h4>
            <div className={styles.loginFormSpace}/>
            <PurpleTextField
                label={"username"}
                onChange={props.onChangeHandlers["onUserNameChange"]}
                value={props.loginFormData.userName}
            />
            <div className={styles.loginFormSpace}/>
            <PurpleTextField
                label={"password"}
                onChange={props.onChangeHandlers["onPasswordChange"]}
                value={props.loginFormData.password}
                type={"password"}
            />
            <div className={styles.loginFormSpace}/>
            <p onClick={props.toggleLoginMode} className={styles.loginFormSwitchText}>Don't have an account?</p>
            <div className={styles.loginFormSpace}/>
            <GreyButton
                style={{height: 56}}
                onClick={props.onSubmit}
                label={
                    <div className={styles.loginSignupButtonContent}>
                        <Icon className={styles.loginSignupButtonIcon}
                              iconFileName={IconFileNames.TWITTER_FILLED_WHITE}/>{" LOGIN"}
                    </div>
                }
            />
        </div>
    )
}

interface signUpFormProps {
    signUpFormData: signUpForm,
    toggleLoginMode: () => void,
    onChangeHandlers: Dictionary<(e: React.ChangeEvent<HTMLInputElement>) => void>,
    onSubmit: () => void
}

const SignUpForm = (props: signUpFormProps) => {
    return (
        <div className={styles.loginSignupForm}>
            <h4 className={styles.loginSignUpTitle}>Signup</h4>
            <div className={styles.loginFormSpace}/>
            <PurpleTextField
                label={"username"}
                onChange={props.onChangeHandlers["onUserNameChange"]}
                value={props.signUpFormData.userName}
            />
            <div className={styles.loginFormSpace}/>
            <PurpleTextField
                label={"fullname"}
                onChange={props.onChangeHandlers["onFullNameChange"]}
                value={props.signUpFormData.fullName}
            />
            <div className={styles.loginFormSpace}/>
            <PurpleTextField
                label={"email"}
                onChange={props.onChangeHandlers["onEmailChange"]}
                value={props.signUpFormData.email}
            />
            <div className={styles.loginFormSpace}/>
            <PurpleTextField
                label={"password"}
                onChange={props.onChangeHandlers["onPasswordChange"]}
                value={props.signUpFormData.password}
                type={"password"}
            />
            <div className={styles.loginFormSpace}/>
            <p onClick={props.toggleLoginMode} className={styles.loginFormSwitchText}>Already have an account?</p>
            <div className={styles.loginFormSpace}/>
            <GreyButton
                style={{height: 56}}
                onClick={props.onSubmit}
                label={
                    <div className={styles.loginSignupButtonContent}>
                        <Icon className={styles.loginSignupButtonIcon}
                              iconFileName={IconFileNames.TWITTER_FILLED_WHITE}/>{" SIGNUP"}
                    </div>
                }
            />
        </div>
    )
}