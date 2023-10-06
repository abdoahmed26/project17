import "./header.css";

export default function About(){
    return (
        <div className="py-5" id="about">
            <div className="container">
                <div className="row">
                    <div className="title col-lg-4 text-center text-sm-start">
                        <h1 className="size mb-3">About me</h1>
                    </div>
                    <div className="col-lg-8 text-center text-sm-start">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Tempora voluptatem delectus dignissimos ea sequi! Aliquam autem accusamus minus,
                            illum voluptatibus iure accusantium corrupti ipsam,
                            ullam assumenda aspernatur repellendus deleniti molestias.
                        </p>
                        <div>
                            <a href="#/" className="py-2 pt-1 px-4 border text-white text-decoration-none bg-secondary">
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}