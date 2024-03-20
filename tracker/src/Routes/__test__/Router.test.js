import { screen, render } from "@testing-library/react";
import { AuthContext } from "../../Store/authStore";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "../UserRoutes";
import { Provider } from "react-redux";
import store from "../../redux/store";


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

describe("Route Components", () => {

    test("renders UserRoutes when user is logged in", () => {
        const authCtx = {
            token: "sometoken",
            isLoggedIn: true,
            onLogin: jest.fn(),
            onLogout: jest.fn(),
            onReset: jest.fn()
        };

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <AuthContext.Provider value={authCtx}>
                            <Routes>
                                <Route
                                    path="/*"
                                    element={authCtx.isLoggedIn ? <UserRoutes /> : <Navigate to="/auth/login" replace />}
                                />
                            </Routes>
                    </AuthContext.Provider>
                </MemoryRouter>
            </Provider>
        )
        const home = screen.getByText("Home");
        expect(home).toBeInTheDocument();
    })

    test("renders login page when user is not logged in", () => {
        const authCtx = {
            token: "",
            isLoggedIn: false,
            onLogin: jest.fn(),
            onLogout: jest.fn(),
            onReset: jest.fn()
        };

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <AuthContext.Provider value={authCtx}>
                        <Routes>
                            <Route
                                path="/*"
                                element={authCtx.isLoggedIn ? <UserRoutes /> : <Navigate to="/auth/login" replace />}
                            />
                        </Routes>
                    </AuthContext.Provider>
                </MemoryRouter>
            </Provider>
        )
        const home = screen.queryByText("Home");
        expect(home).not.toBeInTheDocument();
    })
})