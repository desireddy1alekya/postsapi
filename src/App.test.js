import { render, screen } from '@testing-library/react';
import App from './App';
test('postsapi crud operations text', () => {
  render(<App />);
  const linkElement = screen.getByText(/POSTSAPI CRUD OPERATIONS/i);
  expect(linkElement).toBeInTheDocument();
});
