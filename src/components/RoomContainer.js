import React from "react";
import RoomsFilter from "./RoomFilter.js";
import RoomList from "./RoomList.js";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {
      (value) => {
        const {}
        return (
          <div>
            Hello from RoomsContainer
            <RoomsFilter />
            <RoomList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
