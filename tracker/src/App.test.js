import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

//mocking firebase function
jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
    getFirestore: jest.fn(),
}));

test('render App Component', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
});
