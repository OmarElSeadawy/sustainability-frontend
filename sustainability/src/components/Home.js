import { Carousel } from "./Carousel";
import { About } from "./About";
import { Article } from "./Article";
import { Contact } from "./Contact";

export const Home = () => {
    return (
        <>
            <Carousel />
            <About />
            <Article />
            <Contact />
        </>
    );
}