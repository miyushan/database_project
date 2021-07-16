import MainNavBar from '../Parts/MainNavBar';
import UpperNavBar from '../Parts/UpperNavBar';
import SearchBar from '../Parts/SearchBar';
import MainCover from '../Parts/MainCover';
import Benificts from '../Parts/Benificts';
import PopularItems from '../Parts/PopularItems';
import OurProducts from '../Parts/OurProducts';
import AboutUs from '../Parts/AboutUs';

function Homepage(){
    return(
        <>
            <UpperNavBar />
            <MainNavBar />
            <SearchBar />
            <MainCover />
            <Benificts />
            <PopularItems />
            <OurProducts />
            <AboutUs />
        </>
    );
}

export default Homepage;