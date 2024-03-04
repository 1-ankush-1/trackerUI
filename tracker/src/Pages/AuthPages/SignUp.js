import { useState } from "react";
import Form from "../../UI/Form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import authService from "../../Services/authServices";

const SignUp = () => {
    const [userInputState, setUserInputState] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState(false);

    const handleSignUpUserInput = (event) => {
        setError(false);
        setUserInputState(prev => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    const handleSignUpUserFormSubmit = async (event) => {
        event.preventDefault();
        if (userInputState.email === "" || userInputState.password === "") {
            alert("missing email or password")
            return
        }
        if (userInputState.password !== userInputState.confirmPassword) {
            setError(true);
            return
        }
        const response = await authService.signUp({ email: userInputState.email, password: userInputState.password });
        if (response.data) {
            console.log(response.data)
            alert("signup successfull");
        }
    }

    return (
        <div className="flex items-center justify-center">
            <Form onSubmit={handleSignUpUserFormSubmit}>
                <div className="text-center">
                    <h2>SignUp</h2>
                </div>
                <Input
                    label={"Email"}
                    type={"email"}
                    id={"email"}
                    name={"email"}
                    value={userInputState.email}
                    onChange={handleSignUpUserInput}
                    required={true}
                />
                <Input
                    label={"Password"}
                    type={"password"}
                    id={"password"}
                    name={"password"}
                    value={userInputState.password}
                    onChange={handleSignUpUserInput}
                    required={true}
                />
                <Input
                    label={"ConfirmPassword"}
                    type={"password"}
                    id={"confirmPassword"}
                    name={"confirmPassword"}
                    value={userInputState.confirmPassword}
                    onChange={handleSignUpUserInput}
                    required={true}
                />
                {error && <p className="text-red-700">confirm password is not same</p>}
                <Button type={"submit"} className="cursor-pointer text-center">Submit</Button>
                <p>have an account <a href="login" className="text-blue-700"> Login</a></p>
            </Form>
        </div>
    )
}

export default SignUp;