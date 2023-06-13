import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import OurPhilosophy from '../../Components/Home/OurPhilosophy/OurPhilosophy';
import NewFaces from '../../Components/Home/NewFaces/NewFaces';
import MergeFashion from '../../Components/Home/MergeFashion/MergeFashion';

const Home = () => {
    return (
        <div className='w-full'> 
            <Banner />
            <OurPhilosophy/>
            <NewFaces/>
            <MergeFashion/>
        </div>
    );
};

export default Home;
