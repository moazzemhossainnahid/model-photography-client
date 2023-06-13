import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import OurPhilosophy from '../../Components/Home/OurPhilosophy/OurPhilosophy';
import NewFaces from '../../Components/Home/NewFaces/NewFaces';
import MergeFashion from '../../Components/Home/MergeFashion/MergeFashion';
import MeetTeam from '../../Components/Home/MeetTeam/MeetTeam';

const Home = () => {
    return (
        <div className='w-full'> 
            <Banner />
            <OurPhilosophy/>
            <NewFaces/>
            <MergeFashion/>
            <MeetTeam/>
        </div>
    );
};

export default Home;
