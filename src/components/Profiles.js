import React from "react";
import ProfileCard from "./ProfileCard";

const users = [
  {
    name: "Sumir Vats",
    bio: "Intern @VedaVerse, Computer Engineering Undergraduate @ZHCET",
    testimonial: "",
    profilePicture:
      "https://avatars.githubusercontent.com/u/176947216?s=400&u=5b3859fe6450d5496ce16afa25b9b58843a0bcf0&v=4",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://linkedin.com/in/sumirvats",
    github: "https://github.com/SumirVats2003",
    portfolio: "https://sumirvats.netlify.app",
  },
 
  {
    name: "Dhruv S Shah",
    bio: "CVR Engineering College Student",
    testimonial: "",
    profilePicture:
      "https://avatars.githubusercontent.com/u/67406262?v=4",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://www.linkedin.com/in/ananya-pappula-1735b9288/",
    github: "https://github.com/AnanyaPappula",
    portfolio: "https://sumirvats.netlify.app",
  },
];

const Profiles = () => (
  <div className='profiles'>
    {users.map((user, index) => (
      <ProfileCard key={index} user={user} reverse={index % 2 !== 0} />
    ))}
  </div>
);

export default Profiles;