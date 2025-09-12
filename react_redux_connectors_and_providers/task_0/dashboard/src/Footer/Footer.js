import React,{useContext} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../../../../task_2/dashboard/src/App/AppContext';

function Footer() {
    const [user,logIn] = useContext(AppContext)
    return (
        <footer className={css(styles.footer)}>
            <em><p>{`© Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p></em>
            {user.isLoggedIn && (
                <p>Contact us</p>
        )}
        </footer>
    );
}


const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderTop: '4px solid #e0003c',
        marginTop: '400px',
      
    }
});

export default Footer;