import MainNavBar from '../Parts/MainNavBar';
import UpperNavBar from '../Parts/UpperNavBar';
import SearchBar from '../Parts/SearchBar';
import MainCover from '../Parts/MainCover';
import Benificts from '../Parts/Benificts';
import PopularItems from '../Parts/PopularItems';
import OurProducts from '../Parts/OurProducts';
import AboutUs from '../Parts/AboutUs';
import GoUp from '../Parts/GoUp';
import Footer from '../Parts/Footer';

function Homepage(){
    return(
        <>
            <div id="home">
                <UpperNavBar />
                <MainNavBar />
                <SearchBar />
                <MainCover />
                <Benificts />
                <PopularItems />
                <OurProducts />
                <AboutUs />
                {/* <GoUp /> */}
                <Footer />
                
                
            </div>
        </>
    );
}

export default Homepage;