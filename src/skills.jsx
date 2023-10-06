import "./skills.css";

export default function Skills(){
    return (
        <div className="py-5 bg-dark bg-gradient" id="skill">
            <div className="container">
                <div className="mytit text-white text-center">
                    <h1>Skills</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, atque.
                        Fugit assumenda enim fugiat dolores delectus quos eligendi accusamus
                        perferendis esse quibusdam placeat illum recusandae magnam possimus error, voluptatum quam!
                    </p>
                </div>
                <div className="row mt-5 d-flex align-items-center">
                    <div className="col-lg-6 mb-3">
                        <div className="box d-flex justify-content-center">
                            <ul className="text-white list-unstyled fs-5">
                                <li className="text-center border-bottom border-bottom-white py-2">MY FOCUS</li>
                                <li className="pt-2">UI/UX Design</li>
                                <li className="pt-2">Responsive Design</li>
                                <li className="pt-2">Web Design</li>
                                <li className="pt-2">Mobile App Design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne">
                                <div className="p-1 px-3 text-center">HTML</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne">
                                <div className="p-1 px-3 text-center">CSS</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne two">
                                <div className="p-1 px-3 text-center">JavaScript</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne two">
                                <div className="p-1 px-3 text-center">React</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne">
                                <div className="p-1 px-3 text-center">Photoshop</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne two">
                                <div className="p-1 text-center">Adobe XD</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white mb-2">
                            <div className="childOne three">
                                <div className="p-1 text-center">Node.js</div>
                            </div>
                        </div>
                        <div className="box bg-white w-100 text-white">
                            <div className="childOne four">
                                <div className="p-1 text-center">WordPress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}