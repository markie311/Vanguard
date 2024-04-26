import React from 'react';

import { Col } from 'react-bootstrap';

import ReactPlayer from 'react-player/youtube'

import '../../styles/videoplayer/videoplayer.scss';

export default function VideoPlayer(props) {  
 if ( props.url === '') {
   return (
     <Col  id='videoplayer'>
       <h5 id='videoplayer-novideoheaderindication'>No video</h5>
     </Col>
   )
 } else {
  return (
    <Col xs={Number(props.xs)}
         md={Number(props.md)}
         lg={Number(props.lg)}
         id='videoplayer'>
     <ReactPlayer url={props.url}
                  height='100%'
                  width='100%'/>
     </Col>
  )
 }
}
