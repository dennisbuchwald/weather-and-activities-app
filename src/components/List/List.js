import "./list.css";
import { useState, useEffect } from "react";

export const List = ({ activities }) => {
  useEffect(() => {});

  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  );
};
