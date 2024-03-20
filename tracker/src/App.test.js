import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//mocking firebase function
jest.mock("firebase/auth", () => ({
    getAuth: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
    getFirestore: jest.fn(),
}));

test('render App Component', () => {
    render(
        <App />
    );
});
