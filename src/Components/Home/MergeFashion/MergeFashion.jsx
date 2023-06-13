import React from 'react';
import { Slide } from 'react-reveal';

const MergeFashion = () => {
    return (
        <div className=' w-full'>
            <div className="bg-[url('https://estelle.qodeinteractive.com/wp-content/uploads/2019/06/h2-parallax-1.jpg')] bg-cover bg-center w-full h-[80vh]">
                <div className="w-full h-full flex justify-between items-center gap-3 px-5 py-10">
                    <div className="w-full md:w-3/6 text-left">
                        <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl capitalize text-white font-bold"><Slide bottom duration={1000}>WE MERGE FASHION</Slide></h5>
                        <Slide bottom duration={1750}>
                            <div className="pt-5">
                                <img src="https://i.ibb.co/93jNxzF/Screenshot-7.png" alt="" className="" />
                            </div>
                        </Slide>
                        <div className="space-y-5 pt-7">
                            <Slide bottom duration={2000}>
                                <p className="font-semibold text-white">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.</p>
                            </Slide>
                            <Slide bottom duration={2500}>
                                <p className="font-semibold tracking-widest text-white">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis raesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
                            </Slide>
                            <Slide left duration={3000}>
                                <div className="w-full md:w-2/3 pt-3">
                                    <button className='btn border-0 outline-0 capitalize hover:bg-transparent bg-transparent text-white gap-2'><p className="w-20 h-[2px] bg-white"></p> READ MORE</button>
                                </div>
                            </Slide>
                        </div>
                    </div>
                    <div className="w-full md:w-3/6 hidden md:flex mx-auto justify-center gap-7">
                        <img src="https://estelle.qodeinteractive.com/wp-content/uploads/2019/04/h2-img-4.jpg" alt="" className="w-72" />
                        <img src="https://estelle.qodeinteractive.com/wp-content/uploads/2019/04/h2-img-5.jpg" alt="" className="w-72" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MergeFashion;