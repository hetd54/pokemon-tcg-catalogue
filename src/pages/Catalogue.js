import { useLocation } from 'react-router-dom';
import List from "../components/List";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

const Catalogue = () => {
    let location = useLocation();
    console.log(location.state.id);
    
    return (
        <div>
        <List id={location.state.id}/>
            <ScrollButton/>
        <Footer />
        </div>
    )
  };
  
  export default Catalogue;