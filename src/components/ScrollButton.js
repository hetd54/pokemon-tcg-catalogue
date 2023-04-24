// credit: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/#

import React, {useState} from 'react';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className="fixed bottom-20 right-6">
    <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
     <div className="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-red-600"
      >  </div>
      <p>Back to Top</p>
    </button>
    
    </div>
  );
}
  
export default ScrollButton;