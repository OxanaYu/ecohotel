import React from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import { useRooms } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useRooms();
  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r ">
          <CheckIn />
        </div>
        <div className="flex-1 border-r ">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-green"
        >
          Check now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
