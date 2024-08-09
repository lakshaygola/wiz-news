import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import WizNewsLogo from "../assets/wiz-news-header-logo.png"
import FormButton from "../components/FormButton";
import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import FormWarning from "../components/FormWarning";


export default function Signin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function handleSignin () {
        const response = await axios({
            url: "http://localhost:3000/api/v1/user/signin",
            method: "post",
            data: {
                username: email,
                password
            }
        });
        if (response.status === 200) {
            const jwtToken = response.data.token;
            if (jwtToken) {
                localStorage.setItem("access-token", jwtToken);
            }
        }
    }

    return (
        <div className="flex justify-center bg-slate-50">    
            <div className="w-1/3 p-10 my-20 rounded-lg bg-red-500 flex flex-col justify-center items-center">
                <img src={WizNewsLogo} alt="Wiz News Logo" 
                    className="logo w-24 h-21 object-fill"/>
                <FormHeader 
                heading="Sign in to your Wiz News account"/>
                <FormInput
                inputPlaceholder="Email address"
                inputType="email"
                onChange={ e =>
                    setEmail(e.target.value)
                }/>
                <FormInput
                inputPlaceholder="Password"
                inputType="password"
                onChange={ e =>
                    setPassword(e.target.value)
                }/>
                <FormWarning 
                warning="Don't have an account ?"
                redirectLink="Sign up"
                toLink="/signup"
                />
                <FormButton 
                buttonText="Sign in"
                onClick={handleSignin}
                />
            </div>
        </div>
    );
}