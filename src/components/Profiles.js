import React from "react";
import ProfileCard from "./ProfileCard";

const users = [
  {
    name: "Sumir Vats",
    bio: "Intern @VedaVerse, Computer Engineering Undergraduate @ZHCET",
    testimonial: "VedaVerse helped me a lot to study",
    profilePicture:
      "https://avatars.githubusercontent.com/u/176947216?s=400&u=5b3859fe6450d5496ce16afa25b9b58843a0bcf0&v=4",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://linkedin.com/in/sumirvats",
    github: "https://github.com/SumirVats2003",
    portfolio: "https://sumirvats.netlify.app",
  },
  {
    name: "User 2",
    bio: "Bio for User 2",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user2",
    linkedin: "https://linkedin.com/in/user2",
    github: "https://github.com/user2",
    portfolio: "",
  },
  {
    name: "User 3",
    bio: "Bio for User 1",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://linkedin.com/in/user1",
    github: "https://github.com/user1",
    portfolio: "https://sumirvats.netlify.app",
  },
  {
    name: "User 4",
    bio: "Bio for User 2",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user2",
    linkedin: "https://linkedin.com/in/user2",
    github: "https://github.com/user2",
    portfolio: "",
  },
  {
    name: "User 5",
    bio: "Bio for User 1",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://linkedin.com/in/user1",
    github: "https://github.com/user1",
    portfolio: "https://sumirvats.netlify.app",
  },
  {
    name: "User 6",
    bio: "Bio for User 2",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user2",
    linkedin: "https://linkedin.com/in/user2",
    github: "https://github.com/user2",
    portfolio: "",
  },
  {
    name: "User 7",
    bio: "Bio for User 1",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://linkedin.com/in/user1",
    github: "https://github.com/user1",
    portfolio: "https://sumirvats.netlify.app",
  },
  {
    name: "User 8",
    bio: "Bio for User 2",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user2",
    linkedin: "https://linkedin.com/in/user2",
    github: "https://github.com/user2",
    portfolio: "",
  },
  {
    name: "User 9",
    bio: "Bio for User 1",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://linkedin.com/in/user1",
    github: "https://github.com/user1",
    portfolio: "https://sumirvats.netlify.app",
  },
  {
    name: "User 10",
    bio: "Bio for User 2",
    profilePicture: "assets/logo-black-transparent.png",
    vedaVerse: "https://vedaverse.com/user2",
    linkedin: "https://linkedin.com/in/user2",
    github: "https://github.com/user2",
    portfolio: "",
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
