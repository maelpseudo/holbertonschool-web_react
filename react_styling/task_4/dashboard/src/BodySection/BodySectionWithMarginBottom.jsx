import BodySection from './BodySection';

export default function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className="bodySectionWithMargin mb-6">
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}
