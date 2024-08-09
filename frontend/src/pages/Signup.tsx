import FormHeader from "../components/FormHeader";
import FormInput from "../components/FormInput";
import FormWarning from "../components/FormWarning";
import FormButton from "../components/FormButton";
import WizNewsLogo from "../assets/wiz-news-header-logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    async function handleSignUp(){
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username: email,
            firstName,
            lastName,
            password,
            confirmPassword
        });
        if (response.status === 201) {
            navigate("/sigin")
        }
    }



    return (
        <div className="flex justify-center bg-slate-50">    
            <div className="w-1/3 p-10 my-20 rounded-lg bg-red-500 flex flex-col justify-center items-center">
                <img src={WizNewsLogo} alt="Wiz News Logo" 
                    className="logo w-24 h-21 object-fill"/>
                <FormHeader 
                heading="Sign up to your Wiz News account"/>
                <FormInput
                inputPlaceholder="Email address"
                inputType="email"
                onChange={ e =>
                    setEmail(e.target.value)
                }/>
                <FormInput
                inputPlaceholder="Name"
                inputType="text"
                onChange={ e => {
                    const name = e.target.value;
                    let [firstName, lastName] = name.split(" ");
                    lastName = lastName || " ";
                    setFirstName(firstName);
                    setLastName(lastName);
                }
                }/>
                <FormInput
                inputPlaceholder="Password"
                inputType="password"
                onChange={ e =>
                    setPassword(e.target.value)
                }/>
                <FormInput
                inputPlaceholder="Confirm password"
                inputType="password"
                onChange={ e =>
                    setConfirmPassword(e.target.value)
                }/>
                <FormWarning 
                warning="Already have an account ?"
                redirectLink="Sign in"
                toLink="/signin"
                />
                <FormButton 
                buttonText="Sign up"
                onClick={handleSignUp}
                />
            </div>
        </div>
    );
}