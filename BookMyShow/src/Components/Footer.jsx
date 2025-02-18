import React from 'react'

function Footer() {
        return (
                <div className='h-[900px] w-full bg-[#333338] mt-10'>
                        <div className='h-[6%] w-[80%] m-auto flex items-center text-white'>
                                <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" className='h-[60%]' />
                                <p className=' me-5'>
                                        <span className='font-bold ps-3'>List Your Show</span>
                                        <span className='ps-3 text-sm'>Got a show, event, activity or a great experience? partner with us & get listed on BookMyShow</span>
                                </p>
                                <button className='bg-[#EC5E71] text-white h-[65%] w-[130px] rounded ms-10'>Contact today!</button>
                        </div>

                        <div className='h-[10%] w-full bg-[#404043] '>
                                <div className='w-[80%] h-full m-auto flex justify-evenly items-center text-white'>
                                        <div className='h-full w-[15%] flex flex-col justify-evenly items-center'>
                                                <i className="ri-user-3-line text-4xl"></i> <span className='text-[10px]'>24/7 CUSTOMER CARE</span></div>
                                        <div className='h-full w-[15%] flex flex-col justify-evenly items-center'>
                                                <i className="ri-ticket-2-line text-4xl"></i>
                                                <span className='text-[10px]'>RESEND BOOKING CONFIRMATION</span>
                                        </div>
                                        <div className='h-full w-[15%] flex flex-col justify-evenly items-center'>
                                                <i class="fa-solid fa-envelope-open-text text-4xl"></i>
                                                <span className='text-[10px]'>SUBSCRIBE TO THE NEWSLE</span>
                                        </div>
                                </div>
                        </div>


                        <div className='h-[60%] w-[80%] m-auto mt-8'>
                                <p className='text-xs uppercase text-[#a5a5a5] pt-8'>Movies Now Showing in Delhi-NCR</p>
                                <span className='text-[11px] text-[#7f7f7f] pt-5 tracking-widest'>Chhaava | Sanam Teri kasam | Loveyapa | Badass Ravi Kumar | Captain America: Brave New World | Sky Force | Deva | The House of Dead Horror | interstellar | wild Roller Coaster</span>

                                <p className='text-xs uppercase text-[#a5a5a5] pt-8'>UPCOMING MOVIES IN DELHI-NCR</p>
                                <span className='text-[11px] text-[#7f7f7f] pt-5 tracking-widest'>Raju James Bond | otha Votu Muthaiya | Baby & Baby | Painkli | Dinasari | Justice | Kismt | Badava | Raja Roja | Fire (2025)</span>

                                <p className='text-xs uppercase text-[#a5a5a5] pt-8'>MOVIES BY GENRE</p>
                                <span className='text-[11px] text-[#7f7f7f] pt-5 tracking-widest'>Drama Movies | Romantic Movies | Comedy Movies | Action Movies | Adventure Movies | Thriller Movies | Animation Movies | Horror Movies | Musical Movies | Mystery Movies</span>

                                <p className='text-xs uppercase text-[#a5a5a5] pt-8'>MOVIES BY LANGUAGE</p>
                                <span className='text-[11px] text-[#7f7f7f] pt-5 tracking-widest'>Movies in Hindi | Movies in  English | Movies in Telugu | Movies in Malayalam | Movies in Tamil | Movies in English 7D | Movies in Sindhi | Movies in Chattisgarhi | Movies in Japanese Khasi</span>

                                <p className='text-xs uppercase text-[#a5a5a5] pt-8'>SPORTS EVENTS IN DELHI-NCR</p>
                                <span className='text-[11px] text-[#7f7f7f] pt-5 tracking-widest'>Running | Cricket | Cycling | Chess | Football | Walking | Badminton | Boxing | Card games | Athletics</span>

                                <p className='text-xs uppercase text-[#a5a5a5] pt-8'>EVENTS IN TOP CITIES</p>
                                <span className='text-[11px] text-[#7f7f7f] pt-5 tracking-widest'>Events in Mumbai | Events in Delhi-NCR | Events in Chenni | Events in Bengaluru | Events in Hyderabad | Events in pune | Events in Ahemedabad | Events in Kolkata | Events in Kochi</span>
                        </div>

                        <div className='flex justify-center  items-center h-[40px] text-[#5D5D5F] w-[80%] m-auto mt-5'><hr className='w-[42%]' /><img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" className='ms-5' /><hr className='w-[42%] ms-5' /></div>


                        <div className='h-[50px] w-[22%] m-auto mt-5 flex justify-evenly align-items-center'>
                                <button className='h-[35px] w-[35px] rounded-full bg-[#5D5D5F] text-[#333338] text-2xl'><i class="fa-brands fa-facebook-f"></i></button>
                                <button className='h-[35px] w-[35px] rounded-full bg-[#5D5D5F] text-[#333338] text-2xl'><i class="fa-brands fa-x-twitter"></i></button>
                                <button className='h-[35px] w-[35px] rounded-full bg-[#5D5D5F] text-[#333338] text-2xl'><i class="fa-brands fa-instagram"></i> </button>
                                <button className='h-[35px] w-[35px] rounded-full bg-[#5D5D5F] text-[#333338] text-2xl'><i class="fa-brands fa-youtube"></i></button>
                                <button className='h-[35px] w-[35px] rounded-full bg-[#5D5D5F] text-[#333338] text-2xl'><i class="fa-brands fa-pinterest"></i></button>
                                <button className='h-[35px] w-[35px] rounded-full bg-[#5D5D5F] text-[#333338] text-2xl'><i class="fa-brands fa-linkedin-in"></i></button>
                        </div>
                </div >
        )
}

export default Footer