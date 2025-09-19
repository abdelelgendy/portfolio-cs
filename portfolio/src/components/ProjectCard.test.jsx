import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

test('renders ProjectCard component', () => {
	render(<ProjectCard />);
	const linkElement = screen.getByText(/project title/i);
	expect(linkElement).toBeInTheDocument();
});