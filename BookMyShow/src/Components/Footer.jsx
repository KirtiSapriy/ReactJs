import React from 'react';

function Footer() {
  return (
    <div className="bg-[#333338] mt-10 text-white w-full">
      {/* Top Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-wrap items-center py-4 gap-4 justify-between">
        <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" className="h-10" />
        <div className="flex-1 text-sm px-4 min-w-[250px]">
          <p className="font-bold">List Your Show</p>
          <p>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
        </div>
        <button className="bg-[#EC5E71] px-4 py-2 rounded">Contact Today!</button>
      </div>
      {/* Support Section */}
      <div className="bg-[#404043] py-3">
        <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-3 text-center text-xs gap-4">
          {[
            { icon: "ri-user-3-line", text: "24/7 CUSTOMER CARE" },
            { icon: "ri-ticket-2-line", text: "RESEND BOOKING CONFIRMATION" },
            { icon: "fa-solid fa-envelope-open-text", text: "SUBSCRIBE TO NEWSLETTER" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <i className={`${item.icon} text-2xl`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Categories Section */}
      <div className="w-[90%] lg:w-[80%] mx-auto mt-6 text-[#a5a5a5] text-xs">
        {[
          { title: "Movies Now Showing in Delhi-NCR", items: ["Chhaava", "Sanam Teri Kasam", "Interstellar", "Wild Roller Coaster"] },
          { title: "Upcoming Movies", items: ["Raju James Bond", "Justice", "Fire (2025)"] },
          { title: "Movies by Genre", items: ["Drama", "Romantic", "Thriller", "Horror"] },
          { title: "Movies by Language", items: ["Hindi", "English", "Telugu", "Tamil"] },
          { title: "Sports Events", items: ["Running", "Cricket", "Football", "Badminton"] },
        ].map((section, index) => (
          <div key={index} className="mb-4">
            <p className="uppercase font-bold text-sm">{section.title}</p>
            <p className="text-[#7f7f7f] text-xs">{section.items.join(" | ")}</p>
          </div>
        ))}
      </div>
      {/* Logo & Social Media */}
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col items-center mt-5">
        <div className="flex items-center w-full">
          <hr className="flex-grow" />
          <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" className="mx-4" />
          <hr className="flex-grow" />
        </div>
        <div className="flex gap-3 mt-4 flex-wrap justify-center">
          {[
            "facebook-f", "x-twitter", "instagram", "youtube", "pinterest", "linkedin-in",
          ].map((icon, index) => (
            <button key={index} className="h-8 w-8 flex items-center justify-center rounded-full bg-[#5D5D5F]">
              <i className={`fa-brands fa-${icon} text-[#333338] text-lg`}></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;