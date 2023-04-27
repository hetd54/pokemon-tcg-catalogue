import List from "../components/List";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

const Catalogue = () => {
    let setID = localStorage.getItem("collection");
    
    return (
        <div>
        <List id={setID}/>
            <ScrollButton/>
        <Footer />
        </div>
    )
  };
  
  export default Catalogue;