import video from './video/video.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react';


function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <video
            ref={videoRef}
            src={video}
            width={300}
        />
    )
}

export default forwardRef(Video);