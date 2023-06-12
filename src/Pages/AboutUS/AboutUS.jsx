import React from 'react';
import AboutMission from '../../Components/AboutUS/AboutMission/AboutMission';
import MissionVision from '../../Components/AboutUS/MissionVision/MissionVision';
import ReadyToTalk from '../../Components/AboutUS/ReadyToTalk/ReadyToTalk';
import FAQ from '../../Components/AboutUS/FAQ/FAQ';

const AboutUS = () => {
    return (
        <div className='container w-full'>
            <AboutMission />
            <MissionVision />
            <ReadyToTalk /> 
            <FAQ />
        </div>
    );
};

export default AboutUS;