import './Video.css'
export function Video({ src }) {
    return (
        <>
            <video className='video' autoPlay muted loop id="myVideo">

                <source src={src} type="video/mp4" />

            </video>

        </>
    )

}