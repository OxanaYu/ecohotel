import React from "react";
import ecoPic from "../assets/img/personalAccount/ecopicture.jpeg";

const PersonalPage = () => {
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto pt-40 py-8">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div class="col-span-4 sm:col-span-3">
            <div class="bg-white shadow rounded-lg p-6">
              <div class="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                ></img>
                <h1 class="text-xl font-bold">John Doe</h1>
              </div>
              <hr class="my-6 border-t border-gray-300" />
              <div class="flex flex-col">
                <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Personal details
                </span>
                <ul>
                  <li class="mb-2">Telephone: </li>
                  <li class="mb-2">City:</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-4 sm:col-span-9">
            <div class="bg-white shadow rounded-lg p-6">
              <img src={ecoPic} alt="" />
              <h2 class="text-xl font-bold mb-4">My bookings</h2>

              <div class=" mt-3 mb-6">
                <div class="flex justify-between flex-wrap gap-2 w-full">
                  <span class="text-gray-700 font-bold">Superior room</span>
                  <p>
                    <span class="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p class="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
              <div class="mb-6">
                <div class="flex justify-between flex-wrap gap-2 w-full">
                  <span class="text-gray-700 font-bold">Family room</span>
                  <p>
                    <span class="text-gray-700">2017 - 2019</span>
                  </p>
                </div>
                <p class="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
