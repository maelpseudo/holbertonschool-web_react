import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
    return (
        <div className="App-footer absolute bottom-0 min-w-screen text-base border-t-2 border-[var(--main-color)] text-center italic">
            <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
    );
}

export default Footer;
