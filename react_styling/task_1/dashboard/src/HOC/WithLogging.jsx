import React from 'react';

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const WithLogging = (WrappedComponent) => {
    const componentName = getDisplayName(WrappedComponent);

    return class WithLogging extends React.Component {
        static displayName = `WithLogging(${componentName})`;

        componentDidMount() {
            console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default WithLogging;
