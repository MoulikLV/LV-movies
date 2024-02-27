import ReactHlsPlayer from "@panelist/react-hls-player"
import './Banner.css'
import { useRef, useState } from "react"
import Icon from '@mdi/react';
import { mdiVolumeHigh,  mdiVolumeOff} from '@mdi/js';

function Banner() {

  const [isMuted,setisMuted]=useState(true)
  const videoRef=useRef(null)
    const handleMute=()=>{
    const video=videoRef.current;
    if(video){
      video.muted=!video.muted
      setisMuted(!isMuted)
    }
    
   
  }
  return (
    <div className="video-banner">
   <ReactHlsPlayer  className="video"  src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" width="100%" height="60%"
    controls={false} autoPlay muted={isMuted} playerRef={videoRef} />
    <div className="mute-btn" onClick={handleMute}>
      {isMuted?   <Icon path={mdiVolumeOff} size={1}  /> : <Icon path={mdiVolumeHigh} size={1} /> }

    </div>
    </div>

  
  )
}

export default Banner
