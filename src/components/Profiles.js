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
    name: "Ananya Pappula",
    bio: "CVR Engineering College Student",
    testimonial: "",
    profilePicture:
      "https://media.licdn.com/dms/image/D5603AQGpVgbOdnQW7Q/profile-displayphoto-shrink_400_400/0/1701854059151?e=1728518400&v=beta&t=sYJyZ0PtKUtJx_ErmXKsjxeP50G_IVR5ZouWzMkMf_w",
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

export default Profiles;
