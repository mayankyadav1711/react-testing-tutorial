import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test("Can receive new user and show it on list", async () => {
  render(<App />);
  
  // Find input fields and button
  const nameInput = screen.getByPlaceholderText(/Enter your name/i);
  const emailInput = screen.getByPlaceholderText(/Enter your email/i);
  const addButton = screen.getByRole('button', { name: /Add User/i });

  // Type user information and click Add button
  userEvent.type(nameInput, 'mayank');
  userEvent.type(emailInput, 'myk@gmail.com');
  userEvent.click(addButton);

  // Wait for table to update with new user
  await waitFor(() => {
    const nameCell = screen.getByText(/mayank/i);
    const emailCell = screen.getByText(/myk@gmail.com/i);

    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
  });
});
