import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import Home from '../../Pages/HomePages/Home';
import Profile from '../../Pages/Profile/Profile';
import { UserContext } from '../../Store/userStore';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import ExpensePage from '../../Pages/ExpensePage/ExpensePage';

//mocking firebase function
jest.mock("firebase/auth", () => ({
    createUserWithEmailAndPassword: jest.fn(),
    sendEmailVerification: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
    signInWithEmailAndPassword: jest.fn()
}));

jest.mock("../../firebase.setup", () => ({
    auth: { getAuth: jest.fn() },
    db: jest.fn()
}));

jest.mock("firebase/firestore", () => ({
    collection: jest.fn(), onSnapshot: jest.fn()
}));

describe("UserRoutes Components", () => {
    const userCtx = { user: {}, onUpdate: jest.fn() }

    test('renders user routes without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <UserContext.Provider value={userCtx}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<main><Home /></main>} />
                            <Route path="/profile" element={<main><Profile /></main>} />
                            <Route path="/expense" element={<main>< ExpensePage /></main>} />
                        </Routes>
                    </UserContext.Provider>
                </MemoryRouter>
            </Provider>
        );
    });

    test('renders Home component when navigating to / route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <UserContext.Provider value={userCtx}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<main><Home /></main>} />
                        </Routes>
                    </UserContext.Provider>
                </MemoryRouter>
            </Provider>
        );
        const home = screen.getByText("Home");
        expect(home).toBeInTheDocument();
    });

    test('renders Profile component when navigating to /profile route', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/profile']}>
                    <UserContext.Provider value={userCtx}>
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </UserContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getByText('Contact Detail')).toBeInTheDocument();
    })

    test('renders Expense component when navigating to /expense route', () => {
        const mockUseEffect = jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());

        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/expense']}>
                    <UserContext.Provider value={userCtx}>
                        <Routes>
                            <Route path="/expense" element={<ExpensePage />} />
                        </Routes>
                    </UserContext.Provider>
                </MemoryRouter>
            </Provider>
        );

        const amounts = screen.getAllByText('Amount');
        expect(amounts.length).toBeGreaterThan(1);      //multiple amount on expense page

        mockUseEffect.mockRestore();
    })
})