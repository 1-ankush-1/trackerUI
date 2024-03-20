import { useState } from "react";
import Form from "../../UI/Form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth";

const Login = () => {
    const dispatch = useDispatch();
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
        dispatch(loginUser({ email: userInputState.email, password: userInputState.password }))
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
                <p>forget password?<Link to="../forget" className="text-blue-700"> forget</Link></p>
                <Button type={"submit"} className="cursor-pointer text-center">Submit</Button>
                <p>doesn't have an account? <Link to="../signup" className="text-blue-700"> SignUp</Link></p>
            </Form>
        </div>
    )
}

export default Login;