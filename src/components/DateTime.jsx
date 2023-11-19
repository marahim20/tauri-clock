import React, { useState, useEffect } from "react";

export default function DateTime() {
  var [date, setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const hours1 = date.getHours();
  const hours = (date.getHours() % 12).toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours1 >= 12 ? "pm" : "am";
  return (
    <>
      <p className="text-lg font-serif font-bold w-fit h-fit p-2 px-4 rounded-xl text-gray-300">
        {hours} : {minutes} {ampm}
      </p>
    </>
  );
}
