import { Component } from 'react';

class BodySection extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className="my-6 w-4/5 mx-auto">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                {children}
            </div>
        );
    }
}

export default BodySection;
