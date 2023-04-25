import { useLocation } from 'react-router-dom';

const Catalogue = () => {
    let location = useLocation();
    console.log(location);
    
    return <h1>Catalogue</h1>;
  };
  
  export default Catalogue;