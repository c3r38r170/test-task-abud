import React from 'react';
import Header from '../components/Header';

const About = () => {
    return (
        <div>
            <Header>About This Blog</Header>
            <div className="max-w-3xl mx-auto p-4 pt-0">
                <div className="p-2 rounded shadow-md bg-white bg-opacity-80">
                    <p className="mb-4">
                        This blog application is built using Next.js and Tailwind CSS. It serves as a proof of concept of a way of showing thoughts, ideas, and articles.
                    </p>
                    <p>
                        The application fetches blog posts from an external API and displays them in a user-friendly format. Feel free to click around!
                    </p>
                    <p>
                        It was made by Santiago Elias Abud, in order to apply for a Frontend Developer position.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;