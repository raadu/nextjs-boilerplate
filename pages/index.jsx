import { SampleComponentOne, SampleComponentTwo } from "@components/index.js";

const Home = () => {
    return (
        <>
            <div>
                Home Component. This is parent component that exists in home
                directory (/). Add other components here
            </div>
            <SampleComponentOne />
            <SampleComponentTwo />
        </>
    );
};

export default Home;
