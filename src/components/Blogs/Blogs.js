import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='p-5'>
                <h1 className='text-2xl font-semibold mb-3 mt-5'>What is context API?</h1>
                <p className='mb-5 mt-3'>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

                </p>
            </div>
            <div className='p-5'>
                <h1 className='text-2xl font-semibold mb-3 mt-5'>What is semantic tag?</h1>
                <p className='mb-5 mt-3'>
                    Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.

                    For example, header, footer, article are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.
                    Semantic tags also help search engines to parse the webpage correctly and find accurate information. Thus, helping search engines to correctly index the page.
                </p>
            </div>
            <div className='p-5'>
                <h1 className='text-2xl font-semibold mb-3 mt-5'>What is the difference between inline-block and inline-block elements?</h1>
                <p className='mb-5 mt-3'>Inline-Block: Displays an element as an inline-level block container. We can set height and width values. <br />
                    Block Elements: A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary. Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides.
                </p>
            </div>
        </div>
    );
};

export default Blogs;