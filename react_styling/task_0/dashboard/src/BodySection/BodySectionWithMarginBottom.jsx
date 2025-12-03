import BodySection from './BodySection';
import './BodySectionWithMarginBottom.scss';

export default function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}


