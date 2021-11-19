import React, {useEffect} from 'react';
import {
  isAndroid,
  isIOS
} from "react-device-detect";

function App() {

  useEffect(() => {
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?";
    }else if(isIOS) {
      window.location.href =
        "https://apps.apple.com/gb/app/swapshop-barter-marketplace/id1586341653";
    } else{
      window.location.href =
        "https://swapshop.app";
    }
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
