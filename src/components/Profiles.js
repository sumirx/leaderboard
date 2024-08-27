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
    bio: "Intern @VedaVerse, Computer Science and Engineering Undergraduate @CVRCE",
    testimonial: "",
    profilePicture: "https://i.ibb.co/kG7XNtR/mypicprof.jpg",
    vedaVerse: "https://vedaverse.com/ananya",
    linkedin: "https://www.linkedin.com/in/ananya-pappula-1735b9288/",
    github: "https://github.com/Ananya54321",
    portfolio: "https://ananyapappula.vercel.app/",
  },
  {
    name: "Mani Yadla",
    bio: "Intern @RiveKit, Computer Science and Engineering Undergraduate @CVRCE",
    testimonial: "",
    profilePicture: "https://i.ibb.co/wscS1f6/Profile-Image.jpg",
    vedaVerse: "https://vedaverse.com/mani",
    linkedin: "www.linkedin.com/in/yadla-mani/",
    github: "https://github.com/YadlaMani",
    portfolio: "https://maniyadla.vercel.app/",
  },
  {
    name: "Anannya Hiteshi",
    bio: "Computer Engineering Undergraduate @ZHCET",
    testimonial: "",
    profilePicture: "https://i.ibb.co/YXc8hJs/profilepic.jpg",
    vedaVerse: "https://vedaverse.com/user1",
    linkedin: "https://www.linkedin.com/in/anannya-hiteshi/",
    github: "https://github.com/Anannya410",
    portfolio: "",
  },
  {
    name: "Dhruv S Shah",
    bio: "CVR Engineering College Student",
    testimonial: "",
    profilePicture:
      "https://avatars.githubusercontent.com/u/67406262?v=4",
    vedaVerse: "",
    linkedin: "https://www.linkedin.com/in/dhruv-s-shah-352134203/",
    github: "https://github.com/S-Dhruv",
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