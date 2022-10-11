import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl text-white font-semibold mb-5'>    What is the purpose of react router? </h1>
                <p className=' text-white font-semibold mb-5'>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.

                    Setting up the React Application: Create a React application using create-react-app and lets call it geeks.
                </p>
        </div>
        <div>
            <h1 className='text-2xl text-white font-semibold mb-5'>
                How does Context API Work
            </h1>
            <p className=' text-white font-semibold mb-5 text-left p-2'>
            There are four steps to using react context <br />
            1. Create context using the create context method <br />
            2. Take Your created context and worp the context provider around your component tree <br />
            3. put any value you like on your context provider using the value prop. <br />
            4. Read that value within any component by using useContext.

            
            </p>
        </div>
        <div>
            <h1 className='text-2xl text-white font-semibold mb-5'> UseRef Hook </h1>
            <p className=' text-white font-semibold mb-5 text-left p-2'>
            useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
            However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
            </p>
        </div>
        </div>
    );
};

export default Blog;