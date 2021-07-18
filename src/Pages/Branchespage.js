import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';

function Branchespage(){
    return(
        <>
            <div id="branches">
                <UpperNavBar />
                <MainNavBar />
                <h2>Branches</h2>
                <Footer />
            </div>
        </>
    );
}

export default Branchespage;