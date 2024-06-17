import React, {
    useState
 } from 'react';

import { Row, 
   Col } from 'react-bootstrap';

import '../../styles/vanguardproduction/vanguardproduction.scss';

import VideoPlayer from '../videoplayer/videoplayer-component.js';

export default function VanguardProduction() {
 
 const [url, urlcb] = useState("");

 return (
  <Col id="vanguardproduction">
   <Col id="vanguardproduction-ingredientscontainer">
     <p className="vanguardproduction-mainheaderindication">Vanguard production</p>
     <p className="vanguardproduction-headerindication">01. Sugar's from sugar cane's, <button className="vanguardproduction-headerindication-seevideobutton"
        onClick={()=> {
            const _videocontainer = document.querySelector("#vanguardproduction-videocontainer");
            urlcb((url)=> url = "https://www.youtube.com/watch?v=jCKt02NGjfM");
            _videocontainer.style.display = "block";
        }}>see video</button></p>
     <p className="vanguardproduction-headerindication">02. Vinegar from Water and 2 other main ingredients, <button className="vanguardproduction-headerindication-seevideobutton"
        onClick={()=> {
         const _videocontainer = document.querySelector("#vanguardproduction-videocontainer");
          urlcb((url)=> url = "https://www.youtube.com/watch?v=Aj5ayNGW0BY");
         _videocontainer.style.display = "block";
        }}>see video</button></p>
     <p className="vanguardproduction-headerindication">03. Soysauce from Soybean's, <button className="vanguardproduction-headerindication-seevideobutton"
        onClick={()=> {
            const _videocontainer = document.querySelector("#vanguardproduction-videocontainer");
            urlcb((url)=> url = "https://www.youtube.com/watch?v=UC_n0CqJR3g");
            _videocontainer.style.display = "block";
        }}>see video</button></p>
     <p className="vanguardproduction-headerindication">04. Salt from Seashore's, <button className="vanguardproduction-headerindication-seevideobutton"
          onClick={()=> {
            const _videocontainer = document.querySelector("#vanguardproduction-videocontainer");
            urlcb((url)=> url = "https://www.youtube.com/watch?v=KNGC44RlMqc");
            _videocontainer.style.display = "block";
        }}>see video</button></p>
   </Col>
   <Col id="vanguardproduction-videocontainer">
      <Col id="vanguardproduction-videocontainer-videocontainer">
       <VideoPlayer url={url}/>
      </Col>
      <Col id="vanguardproduction-videocontainer-closebuttoncontainer">
        <button id="vanguardproduction-videocontainer-closebutton"
                 onClick={()=> {
                    const _videocontainer = document.querySelector("#vanguardproduction-videocontainer");
                    _videocontainer.style.display = "none";
                }}>close</button>
      </Col>
   </Col>
  </Col>
 )
}