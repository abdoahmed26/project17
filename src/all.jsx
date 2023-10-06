import BasicExample from "./navbar";
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Port from "./portfolio";
import Contact from "./contact";

export default function Home(){
    return (
        <>
            <BasicExample />
            <Header />
            <About />
            <Skills />
            <Port />
            <Contact />
        </>
    );
}