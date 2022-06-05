import './Video.css'
export function Video({ src, type }) {
    return (
        <>
            <video className={`video video_type_${type}`} autoPlay muted loop id="myVideo">

                <source src={src} type="video/mp4" />

            </video>

        </>
    )

}