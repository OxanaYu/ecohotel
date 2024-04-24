import React, { createContext, useContext, useEffect, useState } from "react";
import { roomData } from "../data";
export const roomContext = createContext();
export const useRooms = () => useContext(roomContext);

const RoomContext = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 children");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 1000);
  };

  const values = {
    rooms,
    adults,
    setAdults,
    kids,
    setKids,
    handleClick,
    loading,
  };

  // console.log(Number(adults[0]));
  // console.log(Number(kids[0]));
  console.log(total);

  return <roomContext.Provider value={values}>{children}</roomContext.Provider>;
};

export default RoomContext;
