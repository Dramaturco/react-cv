import React from "react";

export default function Hobbies({ hobbies }) {

  return (
    <div>
      {hobbies.map((hobby) => (
        <span className="hobby" key={hobby.name}>{hobby.emoji}</span>
      ))}
    </div>
  );
}
