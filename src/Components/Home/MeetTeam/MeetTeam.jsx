import React from 'react';
import { Slide } from 'react-reveal';

const MeetTeam = () => {
    return (
        <div className='w-full flex flex-col justify-center mx-auto text-center pt-10 pb-5'>
            <Slide right duration={1000}>
                <div className="">
                    <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl capitalize md:text-7xl font-bold">MEET THE TEAM</h5>
                </div>
            </Slide>
            <Slide bottom duration={1500}>
                <div className="">
                    <img src="https://i.ibb.co/Jc3QgXH/Screenshot2.png" alt="" className="w-52 mx-auto" />
                </div>
            </Slide>
            <Slide left duration={2000}>
                <div className="w-full md:w-2/3 mx-auto pt-7">
                    <p className="w-full">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                </div>
            </Slide>
        </div>
    );
};

export default MeetTeam;