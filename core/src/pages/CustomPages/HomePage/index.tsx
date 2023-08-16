import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
        {/* Navbar */}
        <nav className='w-[100%] h-28 px-32 bg-neutral-800' >
            <div className='h-full flex flex-row justify-between'>
                {/* LOGO */}
                <div className='h-full flex items-center justify-center'>
                    <img className='' alt='Symptom360 Logo' src='/images/BlueNavLogo.svg' />
                </div>

                {/* NAV ITEMS */}
                <div className='h-full flex items-center justify-center'>
                    <ul className='flex flex-row'>
                        <a className='hover:text-gray-500 m-6 font-bold text-2xl' href="#">Home</a>
                        <a className='hover:text-gray-500 m-6 font-bold text-2xl' href="#">About Us</a>
                        <a className='hover:text-gray-500 m-6 font-bold text-2xl' href="#">Pricing</a>
                        <a className='hover:text-gray-500 m-6 font-bold text-2xl' href="#">Contact Us</a>
                    </ul>
                    <div className='h-full flex items-center justify-center ml-8'>
                        <a className='w-48 h-16 rounded-full flex justify-center items-center bg-blue-500' href=''><span className='text-center font-bold text-2xl'>Login</span></a>
                    </div>
                </div>                    
            </div>
        </nav>

        {/* Splashscreen/Hero */}
        <div className='w-[100%] h-[700px] px-32'>
            <div className='h-full flex items-center justify-center'>
                <div className='w-[80%] h-[400px]'>
                    <div className='h-full flex justify-between'>
                        <div className='flex justify-center items-center w-full h-full '>
                            <div>
                                <div className=''>
                                    <span className="text-white text-5xl font-medium">Specific </span>
                                    <span className="text-sky-500 text-5xl font-bold ">needs</span>
                                    <br />
                                    <span className="text-white text-5xl font-medium ">require specific</span>
                                    <br />
                                    <span className="text-sky-500 text-5xl font-bold ">solutions</span>
                                </div>
                                <div>
                                <a className='w-48 h-14 my-6 rounded-full flex justify-center items-center bg-blue-500' href=''><span className='text-center font-bold text-2xl'>See Pricing</span></a>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex justify-center items-center w-full h-full'>
                            <div className="w-[420px] h-[420px] bg-stone-700 rounded-full shadow flex justify-center items-center">
                                <img className='' alt='Bison Graphic' src='/images/Bison.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Blue Waves */}
        <div>

        </div>

        {/* Info Section */}
        <div>

        </div>

        {/* Footer */}
        <footer>

        </footer>



    </div>
    // <div className="w-[100%] h-[2862px] relative bg-neutral-800 border">
    //     <div className="w-[1000px] h-[1007px] left-[220px] top-[1687px] absolute">
    //         <div className="w-[908px] h-[329px] left-0 top-[678px] absolute">
    //             <div className="w-[500px] h-[329px] left-0 top-0 absolute">
    //                 <div className="w-[500px] h-[250px] left-0 top-[79px] absolute text-white text-3xl font-normal leading-loose">We are proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</div>
    //                 <div className="left-0 top-0 absolute text-white text-[50px] font-bold leading-[53px]">How it works.</div>
    //             </div>
    //             <img className="w-[346px] h-[259.50px] left-[908px] top-[12px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/346x259" />
    //         </div>
    //         <div className="w-[924px] h-[329px] left-[76px] top-[339px] absolute">
    //             <div className="w-[500px] h-[329px] left-[424px] top-0 absolute">
    //                 <div className="w-[500px] h-[250px] left-0 top-[79px] absolute text-white text-3xl font-normal leading-loose">We are proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</div>
    //                 <div className="left-0 top-0 absolute text-white text-[50px] font-bold leading-[53px]">Where are we</div>
    //             </div>
    //             <img className="w-[275px] h-[206px] left-0 top-[16px] absolute" src="https://via.placeholder.com/275x206" />
    //         </div>
    //         <div className="w-[862px] h-[329px] left-0 top-0 absolute">
    //             <div className="w-[500px] h-[329px] left-0 top-0 absolute">
    //                 <div className="w-[500px] h-[250px] left-0 top-[79px] absolute text-white text-3xl font-normal leading-loose">We are proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</div>
    //                 <div className="left-0 top-0 absolute text-white text-[50px] font-bold leading-[53px]">Why Us?</div>
    //             </div>
    //             <img className="w-[275px] h-[206.25px] left-[862px] top-[30px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/275x206" />
    //         </div>
    //     </div>
    //     <div className="w-[980.06px] h-[420.12px] left-[230px] top-[217px] absolute">
    //         <div className="w-[420.06px] h-[420.12px] left-[560px] top-0 absolute">
    //             <img className="w-[420.06px] h-[420.12px] left-0 top-0 absolute" src="https://via.placeholder.com/420x420" />
    //             <img className="w-[301px] h-[226px] left-[361px] top-[97px] absolute origin-top-left rotate-180" src="https://via.placeholder.com/301x226" />
    //         </div>
    //         <div className="w-[258px] h-[62px] left-0 top-[304px] absolute">
    //             <div className="w-[258px] h-[62px] left-0 top-0 absolute bg-sky-500 rounded-[100px]"></div>
    //             <div className="left-[68px] top-[12px] absolute text-white text-[35px] font-bold leading-[37.10px]">Pricing</div>
    //         </div>
    //         <div className="w-[469px] left-0 top-[80px] absolute"><span className="text-white text-6xl font-medium leading-[63.60px]">Specific </span><span className="text-sky-500 text-6xl font-bold leading-[63.60px]">needs</span><span className="text-white text-6xl font-medium leading-[63.60px]"> require specific </span><span className="text-sky-500 text-6xl font-bold leading-[63.60px]">solutions</span><span className="text-sky-600 text-6xl font-medium leading-[63.60px]"> </span></div>
    //     </div>
    //     <div className="w-[1440px] h-[1377px] left-0 top-[471px] absolute">
    //         <div className="w-[1440px] h-[1377px] left-0 top-0 absolute">
    //             <div className="w-[1440px] h-[540px] left-[1440px] top-[1377px] absolute origin-top-left -rotate-180 flex-col justify-start items-start inline-flex"></div>
    //             <div className="w-[1440px] h-[297px] left-0 top-[540px] absolute bg-blue-400"></div>
    //             <div className="w-[1440px] h-[540px] left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
    //         </div>
    //         <div className="w-[1000px] h-[297px] left-[220px] top-[557px] absolute">
    //             <div className="w-[1000px] h-[181px] left-0 top-[116px] absolute text-center text-white text-4xl font-normal leading-[38.16px]">We are proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</div>
    //             <div className="w-[299px] h-1 left-[350px] top-[94px] absolute bg-white"></div>
    //             <div className="w-[823px] left-[89px] top-0 absolute text-center text-white text-[70px] font-bold leading-[74.20px]">Were here for you.</div>
    //         </div>
    //     </div>
    //     <div className="w-[1440px] h-[120px] left-0 top-0 absolute">
    //         <div className="w-[1440px] h-[120px] left-0 top-0 absolute bg-neutral-900"></div>
    //         <div className="w-40 h-[50px] left-[1220px] top-[35px] absolute">
    //             <div className="w-40 h-[50px] left-0 top-0 absolute bg-sky-500 rounded-[50px]"></div>
    //             <div className="w-[84px] left-[38px] top-[13px] absolute text-center text-white text-xl font-bold">Log in</div>
    //         </div>
    //         <div className="w-[444px] h-6 left-[736px] top-[45px] absolute">
    //             <div className="left-[227px] top-0 absolute text-white text-xl font-semibold">Contact Us</div>
    //             <div className="left-0 top-0 absolute text-white text-xl font-semibold">Home</div>
    //             <div className="left-[376px] top-0 absolute text-white text-xl font-semibold">Pricing</div>
    //             <div className="left-[97px] top-0 absolute text-white text-xl font-semibold">About Us</div>
    //         </div>
    //         <div className="w-[264px] h-[84px] left-[40px] top-[18px] absolute">
    //             <div className="w-[229px] h-[84px] left-0 top-0 absolute">
    //                 <div className="w-[229px] h-[57.69px] left-0 top-0 absolute text-white text-[40px] font-bold">Symptom</div>
    //                 <div className="w-[57px] h-[46.55px] left-[124px] top-[37.45px] absolute text-blue-400 text-[34px] font-bold">360</div>
    //             </div>
    //             <div className="w-[83px] h-[84px] left-[181px] top-0 absolute"></div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default HomePage;
