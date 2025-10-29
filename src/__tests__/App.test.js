import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text 'Hi, I\'m ____'", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole('heading', {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
});

test('displays an image of myself with descriptive alt text', () => {
    render(<App />);

    const image = screen.getByAltText(/branice/i);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
});

test("displays a second-level heading with the text 'About me' and a short biography", () => {
    render(<App />);

    const aboutHeading = screen.getByRole('heading', {
        name: /about me/i,
        level: 2,
    });

    expect(aboutHeading).toBeInTheDocument();

    const bioParagraph = screen.getByText(/developer|designer|creator|passionate/i);
    expect(bioParagraph).toBeInTheDocument();
});

test('display links to my Github and Linkedin profiles', () =>{
    render(<App />);

    const githubLink = screen.getByRole('link', {name: /github/i});
    const linkedinLink = screen.getByRole('link', {name: /linkedin/i});

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
    expect(linkedinLink).toHaveAttribute('href',expect.stringContaining('linkedin.com'));
});