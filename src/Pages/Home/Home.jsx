import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import OurPhilosophy from '../../Components/Home/OurPhilosophy/OurPhilosophy';
import NewFaces from '../../Components/Home/NewFaces/NewFaces';
import MergeFashion from '../../Components/Home/MergeFashion/MergeFashion';
import MeetTeam from '../../Components/Home/MeetTeam/MeetTeam';
import OurProgress from '../../Components/Home/OurProgress/OurProgress';
import WeMergeFashion from '../../Components/Home/WeMergeFashion/WeMergeFashion';

const Home = () => {
    return (
        <div className='w-full'> 
            <Banner />
            <OurPhilosophy/>
            <NewFaces/>
            <MergeFashion/>
            <MeetTeam/>
            <OurProgress/>
            <WeMergeFashion/>
        </div>
    );
};

export default Home;
