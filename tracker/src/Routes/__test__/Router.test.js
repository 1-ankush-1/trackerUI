import { screen, render } from "@testing-library/react";
import { AuthContext } from "../../Store/authStore";
import { MemoryRouter, Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "../UserRoutes";
import { Provider } from "react-redux";
import store from "../../redux/store";
import React from "react";


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
        const isAuthenticated = true;

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route
                            path="/*"
                            element={isAuthenticated ? <UserRoutes /> : <Navigate to="/auth/login" replace />}
                        />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )
        const home = screen.getByText("Home");
        expect(home).toBeInTheDocument();
    })

    test("renders login page when user is not logged in", () => {
        const isAuthenticated = false;

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route
                            path="/*"
                            element={isAuthenticated ? <UserRoutes /> : <Navigate to="/auth/login" replace />}
                        />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )
        const home = screen.queryByText("Home");
        expect(home).not.toBeInTheDocument();
    })
})