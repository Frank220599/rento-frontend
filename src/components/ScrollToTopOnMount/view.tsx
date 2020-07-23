import React from 'react';

const ScrollToTopOnMount = (Component: React.FunctionComponent) => {
    return class ScrollToTopOnMount extends React.Component {
        componentDidMount() {
            window.scrollTo(0, 0)
        }

        render() {
            return (
                <Component/>
            );
        }
    }
};

export default ScrollToTopOnMount;
