import React from 'react';
import { Slide } from 'react-reveal';

const WeMergeFashion = () => {
    return (
        <div className='w-full py-7'>
            <div className="w-full flex flex-col md:flex-row gap-5 justify-between items-center px-5 md:px-10">
                <div className="w-full md:w-3/6">
                    <div class="space-y-5 py-5 md:w-5/6 text-left text-black">
                        <Slide right duration={1000}>
                            <div className="">
                                <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl md:text-7xl font-bold">The New Faces</h5>
                            </div>
                        </Slide>
                        <Slide right duration={1500}>
                            <div className="">
                                <img src="https://estelle.qodeinteractive.com/wp-content/uploads/2019/05/h6-separator-img.png" alt="" className="" />                            </div>
                        </Slide>
                        <Slide right duration={2000}>
                            <p className='font-semibold italic text-xl tracking-wider'>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius.</p>
                        </Slide>
                        <Slide right duration={2500}>
                            <p className='font-thin capitalize text-md tracking-wider'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis raesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fug.</p>
                        </Slide>
                        <Slide right duration={3000}>
                            <div className="">
                                <img src="https://estelle.qodeinteractive.com/wp-content/uploads/2019/04/h2-img-8.png" alt="" className="" />                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="w-full md:w-3/6">
                    <Slide bottom duration={1000}>
                        <div className="">
                            <img src="https://estelle.qodeinteractive.com/wp-content/uploads/2019/04/h2-img-7.jpg" alt="" className="" />
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default WeMergeFashion;