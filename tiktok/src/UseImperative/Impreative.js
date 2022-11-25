import { useRef } from "react";
import Video from "./Video";

function Impreative() {

    const VideoRef = useRef()

    const handlePlay =() => {
        VideoRef.current.play()
    }

    const handleStop =() => {
        VideoRef.current.pause()
    }
    return (
        <div>
            <Video ref={VideoRef}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Impreative;