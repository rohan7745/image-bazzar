import React,{useState} from "react";
import ImageSearch from "./Components/ImageSearch";
import ImageGallery from "./Components/ImageGallery";

const App = () => {
    const [imageList, setImageList] = useState([]);
    return(
        <div>
            <h1>ImageBazzar</h1>
            <ImageSearch  setImageList={setImageList}/>
            <ImageGallery imageList={imageList}/>
        </div>
    )
}

export default App;