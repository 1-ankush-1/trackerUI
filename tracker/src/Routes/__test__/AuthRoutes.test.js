import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../Store/authStore"
import store from "../../redux/store"
import Login from "../../Pages/AuthPages/Login"
import Forget from "../../Pages/AuthPages/Forget"
import SignUp from "../../Pages/AuthPages/SignUp"

//mocking firebase function
jest.mock("firebase/auth", () => ({
    createUserWithEmailAndPassword: jest.fn(),
    sendEmailVerification: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
    signInWithEmailAndPassword: jest.fn()
}));

jest.mock("../../firebase.setup", () => ({
    auth: { getAuth: jest.fn() }
}));

describe("AuthRoutes Components", () => {
    const authCtx = {
        token: "sometoken",
        isLoggedIn: false,
        onLogin: jest.fn(),
        onLogout: jest.fn(),
        onReset: jest.fn()
    };
    test("renders login page when navigating to auth/login route", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/login']}>
                    <AuthContext.Provider value={authCtx}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </AuthContext.Provider>
                </MemoryRouter>
            </Provider>
        )
        const login = screen.getByText("Login");
        expect(login).toBeInTheDocument();
    })
    test("renders forget page when navigating to auth/forget route", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/forget']}>
                    <AuthContext.Provider value={authCtx}>
                        <Routes>
                            <Route path="/forget" element={<Forget />} />
                        </Routes>
                    </AuthContext.Provider>
                </MemoryRouter>
            </Provider>
        )
        const forget = screen.getByText("Forget");
        expect(forget).toBeInTheDocument();
    })
    test("renders signup page when navigating to auth/signup route", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/signup']}>
                    <AuthContext.Provider value={authCtx}>
                        <Routes>
                            <Route path="/signup" element={<SignUp />} />
                        </Routes>
                    </AuthContext.Provider>
                </MemoryRouter>
            </Provider>
        )
        const signup = screen.getByText("SignUp");
        expect(signup).toBeInTheDocument();
    })
})