import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "./SignUp";

test('if user passes validations, create account button is active', async () => {
    render(<SignUp />);

    expect(await screen.findByRole('button', { name: /create account/i })).toBeEnabled();

    userEvent.type(screen.getByPlaceholderText(/Enter Firstname/i), "firstName");
    userEvent.type(screen.getByPlaceholderText(/Enter LastName/i), "LastName");
    userEvent.type(screen.getByPlaceholderText(/Enter Email/i), "email");
    userEvent.type(screen.getByPlaceholderText(/Enter Password/i), "password");

    expect(await screen.findByRole('button', { name: /create account/i })).toBeEnabled();
});