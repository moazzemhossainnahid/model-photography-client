import React from 'react';
import { Slide } from 'react-reveal';

const OurPhilosophy = () => {
    return (
        <div className='w-full mx-auto py-10 p-5'>
            <div className="w-full flex justify-center py-7">
                <Slide left duration={1000}>
                    <img src="https://wiso.foxthemes.me/wp-content/uploads/2018/06/stamp-I.png" alt="img" className="" />
                </Slide>
            </div>
            <div className="">
                <Slide right duration={1500}>
                    <div className="">
                        <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl capitalize md:text-7xl font-bold">OUR PHILOSOPHY</h5>
                    </div>
                </Slide>
                <Slide left duration={2000}>
                    <div className="w-full md:w-2/3 mx-auto pt-7">
                        <p className="w-full">We are fine-art, wedding & portrait film photographers from Oregon, with a special love for natural light,
                            medium format film cameras & redheads with freckles. With over 5 years of experience, numerous workshops and features in top wedding publications, I capture beauty in the most subtle.</p>                    </div>
                </Slide>
                <Slide right duration={2500}>
                    <div className="w-full md:w-2/3 mx-auto pt-7">
                        <div className="h-24 w-1 mx-auto bg-gray-200"></div>
                    </div>
                </Slide>
                <Slide left duration={3000}>
                    <div className="w-full md:w-2/3 mx-auto pt-3">
                        <button className='btn border-0 outline-0 capitalize hover:bg-transparent bg-transparent text-black'>GET IN TOUCH</button>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default OurPhilosophy;