import './PreLoader.css'
export function PreLoader() {
    return (

        <div className="container">
            {/* <div className="cube">
                <div className="sides">
                    <div className="top"></div>
                    <div className="right"></div>
                    <div className="bottom"></div>
                    <div className="left"></div>
                    <div className="front"></div>
                    <div className="back"></div>

                </div>
                <h2 className='title'>Loading...</h2>
            </div> */}
            <span className="loader"></span>
            <span className="loader_type_line"></span>
        </div>
    )
}