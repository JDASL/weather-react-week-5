import React from "react";

export default function FormatDate(props) {
  const today = new Date();
  let date = today.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[today.getMonth()];

  let year = today.getFullYear();
  return (
    <div>
      {date} {month} {year}
    </div>
  );
}
