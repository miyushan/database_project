import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';

function ContactUspage(){
    return(
        <>
            <div id="contact-us">
                <UpperNavBar />
                <MainNavBar />
                <h2>Contact Us</h2>
                <Footer />
            </div>
        </>
    );
}

export default ContactUspage;