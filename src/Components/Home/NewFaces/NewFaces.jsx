import React from 'react';
import { Slide } from 'react-reveal';
import { NewFacesData } from '../../../Data/NewFacesData';

const NewFaces = () => {
    return (
        <div className='w-full flex flex-col justify-center mx-auto text-center pt-10 pb-5'>
            <Slide right duration={1000}>
                <div className="">
                    <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl capitalize md:text-7xl font-bold">NEW FACES</h5>
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
            <div className="grid grid-cols-2 md:grid-cols-5 py-7">
                {
                    NewFacesData?.map(d => (
                        <div key={d?.id} className="">
                            <div className="relative group overflow-hidden">
                                <img src={d?.img} alt="" className="group relative" />
                                <div className="absolute cursor-pointer translate-y-80 group-hover:translate-y-0 ease-in-out duration-500 w-full h-full top-0 flex flex-col gap-3 justify-center items-center left-0 bg-[#000000a9]">
                                    <h5 style={{ fontFamily: "Rajdhani" }} class="text-2xl capitalize text-white font-bold"><Slide bottom duration={1500}>{d?.title}</Slide></h5>
                                    <Slide bottom duration={2000}>
                                        <h5 className="text-md text-gray-200">{d?.category}</h5>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NewFaces;