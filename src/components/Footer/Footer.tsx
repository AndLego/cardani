import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <img src="https://i.postimg.cc/ZKBtrCSP/cardanni-logo.png" alt="cardanni logo" />
                </li>
                <li>+57 666 666 666</li>
                <li>contact.bread@gmail.com</li>
                <li>calle falsa 123, Colombia</li>
            </ul>
            <ul>
                <li>
                    <h3>Siguenos</h3>
                </li>
                <li><BsInstagram /></li>
                <li><BsFacebook /></li>
                <li><BsYoutube /></li>
            </ul>
        </footer>
    );
}

export default Footer;