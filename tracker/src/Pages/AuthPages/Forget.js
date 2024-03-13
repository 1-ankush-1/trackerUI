import { useContext, useState } from "react";
import Form from "../../UI/Form";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { AuthContext } from "../../Store/authStore";
import { Link } from "react-router-dom";

const Forget = () => {
    const authCtx = useContext(AuthContext);
    const [email, setEmail] = useState("");

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handleForgetUserFormSubmit = async (event) => {
        event.preventDefault();
        if (email === "") {
            alert("missing email")
            return
        }
        await authCtx.onReset(email);
    }

    return (
        <div className="flex items-center justify-center">
            <Form onSubmit={handleForgetUserFormSubmit}>
                <div className="text-center">
                    <h2>Forget</h2>
                </div>
                <Input
                    label={"Email"}
                    type={"email"}
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={handleEmailInput}
                    required={true}
                />
                <p>know password?<Link to="../login" className="text-blue-700"> login</Link></p>
                <Button type={"submit"} className="cursor-pointer text-center">Submit</Button>
            </Form>
        </div>
    )
}

export default Forget;