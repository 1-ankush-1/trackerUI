import { useState } from "react";
import Form from "../../UI/Form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import authService from "../../Services/authServices";

const Login = () => {
    const [userInputState, setUserInputState] = useState({
        email: "",
        password: "",
    })

    const handleLoginUserInput = (event) => {
        setUserInputState(prev => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    const handleLoginUserFormSubmit = async (event) => {
        event.preventDefault();
        if (userInputState.email === "" || userInputState.password === "") {
            alert("missing email or password")
            return
        }
        const response = await authService.login({ email: userInputState.email, password: userInputState.password });
        if (response.data) {
            console.log(response.data)
            alert("Login successfull");
        }
    }

    return (
        <div className="flex items-center justify-center">
            <Form onSubmit={handleLoginUserFormSubmit}>
                <div className="text-center">
                    <h2>Login</h2>
                </div>
                <Input
                    label={"Email"}
                    type={"email"}
                    id={"email"}
                    name={"email"}
                    value={userInputState.email}
                    onChange={handleLoginUserInput}
                    required={true}
                />
                <Input
                    label={"Password"}
                    type={"password"}
                    id={"password"}
                    name={"password"}
                    value={userInputState.password}
                    onChange={handleLoginUserInput}
                    required={true}
                />
                <p>forget password?<a href="forget" className="text-blue-700"> forget</a></p>
                <Button type={"submit"} className="cursor-pointer text-center">Submit</Button>
                <p>doesn't have an account? <a href="login" className="text-blue-700">SignUp</a></p>
            </Form>
        </div>
    )
}

export default Login;