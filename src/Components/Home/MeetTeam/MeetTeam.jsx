import React from 'react';
import { Slide } from 'react-reveal';
import { FaBars, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { TeamsData } from '../../../Data/TeamsData';

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
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-7 p-3 pt-7">
                {
                    TeamsData?.map(d => (
                        <div key={d?.id} className="">
                            <Slide bottom duration={2000}>
                                <img src={d?.imageURL} alt="" className="w-full" />
                            </Slide>
                                <h5 style={{ fontFamily: "Rajdhani" }} class="text-2xl capitalize md:text-3xl font-bold"><Slide bottom duration={1500}>{d?.name}</Slide></h5> 
                                <h5 style={{ fontFamily: "Rajdhani" }} class="text-md font-semibold"><Slide bottom duration={2000}>{d?.title}</Slide></h5>
                            <Slide bottom duration={2500}>
                                <div className="w-full flex gap-5 pt-3 justify-center items-center">
                                    <FaFacebook className='text-md' />
                                    <FaYoutube className='text-md' />
                                    <FaTwitter className='text-md' />
                                    <FaLinkedin className='text-md' />
                                </div>
                            </Slide>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MeetTeam;