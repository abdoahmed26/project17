import "./header.css";

export default function Header(){
    return (
        <div className="bacground" id="head">
            <div className="container h-100">
                <div className="d-flex align-items-center justify-content-center justify-content-sm-start h-100">
                    <div className="mytext text-center">
                        <h1 className="text-white size mb-1">Katie Reed</h1>
                        <p className="text-white fs-4 mb-4">Web Developer & Designer</p>
                        <div>
                            <a href="#/" className="py-2 pt-1 px-4 border text-white text-decoration-none">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}