import React, {useState} from 'react';
import PageViewer from './PageViewer';
import LandingScreen from './LandingScreen';
import pdfHigh from '../resources/zine_hq.pdf';
import pdfLow from '../resources/zine_lq.pdf';
function PdfHandler() {
    const [quality, setQuality] = useState('');
    if (quality === '') {
    return(
        <div>
        <LandingScreen />  
        <div className={"pdf-selector"}>
            
            <span>
                <button onClick={() => setQuality('high')}>View High Quality</button>
                <button onClick={() => setQuality('low')}>View Low Quality</button>
            </span>
            <span>
                <button><a href={pdfHigh}>Download High Quality</a></button>
                <button><a href={pdfLow}>Download Low Quality</a></button>
            </span>
        </div>
        </div>
    );}
    else if (quality === 'high'){
        return(<div className={"pdf-view"}><PageViewer pdf={pdfHigh} /><footer><button onClick={() => setQuality('')}>Home</button></footer></div>);
    }
    else if (quality === 'low'){
        return(<div className={"pdf-view"}><PageViewer pdf={pdfLow} /><footer><button onClick={() => setQuality('')}>Home</button></footer></div>);
    }
    else {
        return(<p>Error loading pdf.</p>);
    }
}
export default PdfHandler;