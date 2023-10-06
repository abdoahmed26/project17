import "./skills.css";
export default function Port(){
    return (
        <div className="py-5" id="port">
            <div className="container">
                <div className="tit">
                    <h1>Portfolio</h1>
                </div>
                <div className="row mt-4 text-white text-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="box back wid d-flex align-items-center justify-content-center shadow">
                            <p className="fs-4 border-bottom border-bottom-white pb-2">WEB DESIGN</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="box bg-dark bg-gradient wid d-flex align-items-center justify-content-center shadow">
                            <p className="fs-4  border-bottom border-bottom-white pb-2">MOBILE DESIGN</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="box back wid d-flex align-items-center justify-content-center shadow">
                            <p className="fs-4 border-bottom border-bottom-white pb-2">LOGO DESIGN</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="box bg-dark bg-gradient wid d-flex align-items-center justify-content-center shadow">
                            <p className="fs-4">WEB APPLICATION <br/> DEVELOPMENT</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="box back wid d-flex align-items-center justify-content-center shadow">
                            <p className="fs-4">MOBILE APPLICATION <br/> DEVELOPMENT</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="box bg-dark bg-gradient wid d-flex align-items-center justify-content-center shadow">
                            <p className="fs-4">PWA <br/> DEVELOPMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}