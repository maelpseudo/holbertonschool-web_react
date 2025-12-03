import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
    return (
        <div className="mt-auto w-full text-center text-sm sm:text-base py-4 border-t border-rose-500">
            <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
    );
}

export default Footer;
