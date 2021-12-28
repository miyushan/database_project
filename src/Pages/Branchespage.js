// import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';

function Branchespage(){
    return(
        <>
            <div id="branches">
                {/* <UpperNavBar /> */}
                <MainNavBar />
                <h2 style={{height: '600px'}}>Branches</h2>
                <Footer />
            </div>
        </>
    );
}

export default Branchespage;