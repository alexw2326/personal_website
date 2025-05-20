import project1 from "../assets/projects/EscapeTheCave.png";
import project2 from "../assets/projects/Calendar.png";
import project3 from "../assets/projects/MathWordle.png";
import project4 from "../assets/projects/FifteenGame.png";

export const HERO_CONTENT = `Hi! My name is Alexandria, but you can call me Alex. I am a fourth year computer 
science major with a concentration in software. Throughout the years I have taken 
classes in and learned multiple coding languages including Java, Python, HTML,
and CSS. \n
I love many forms of coding and I knew I wanted to do something computer 
science related in college when I would look forward to finishing my coding 
homework in high school and working on random coding projects outside of class. \n
Some of my hobbies include playing golf, video games, and watching hockey. I 
have also recently gotten into crochetting which I have been working hard to learn 
and get better at.`;

export const EDUCATION = [
  {
    name: "Northeastern University",
    type: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    dates: "September 2022-PRESENT",
    degree: "Candidate for a Bachelor's of Science in Computer Science",
    honors: "GPA: 3.7/4.0, Dean's Scholarship, Dean's List",
    activities: "First Byte (Vice President), NU Mars Rover, Forge, Intramural Ice Hockey, Intramural Broomball",
  },
  {
    name: "Ursuline Academy",
    type: "High-school",
    location: "Dedham, MA",
    dates: "September 2016-June 2022",
    degree: "High-school diploma",
    honors: "GPA: 3.9/4.0, Award of Excellence (Golf), Coach's Award (Golf), Catholic Conference All-Star",
    activities: "Varsity Golf Team (Captain), Varsity Ice Hockey, Robotics Team (Captain), National Honors Society, Francis Ouimet Scholar, " +
    "Greater Boston Food Bank, Father Bill's, My Brother's Keeper, White Oaks Cottages",
  },
];

export const EXPERIENCES = [
  {
    year: "July 2024 - December 2024",
    role: "Help Desk Intern",
    company: "Analysis Group",
    description: `I worked with the Help Desk systems engineers and fellow interns to help users with their hardware problems. The main projects included configuring and deploying laptops
    for the new hires, replacing older computers and deploying them for current employees, and organizing the supplies area of the Help Desk room so everything is easily accessible 
    and easy to access for future new workers and interns.`,
  },
  {
    year: "September 2023 - April 2024",
    role: "Teachers Assistant for Calculus II",
    company: "Northeastern University",
    description: `I worked with a Professor of Calculus II at Northeastern to grade quizzes and tests of the students spread across three classes. Every week, I would go to pick up the
    papers and spend time throughout my week grading those papers based off of the grading rubric I was given. I would log my hours for the week and when I was finished grading 
    I would return the papers back to the professor's mailbox. If there were any issues the students would go to the professor first and if there were any questions after the student would
    contact me.`,
  },
  {
    year: "June 2020 - August 2022",
    role: "Golf Coach",
    company: "Milton Hoosic Club",
    description: `I worked multiple years at a summer camp as a golf coach. At the camp the ages of the kids ranged from 3-14. There were separate age ranges of groups and I had to 
    change the exercises the kids were doing depending on the age range of that group. The camp involved learning to communicate with the kids and their parents and seeing what
    exercises they had fun doing while still learning the fundamentals of golf.`,
  },
  {
    year: "October 2021 - December 2022",
    role: "Ice Hockey Referee",
    company: "USA Hockey",
    description: `Refereed about 3-4 games every weekend, and helped the children learn the rules of the game. Helped develop their skills while making sure the children expanded their love of the game.`,
  },
];

export const PROJECTS = [
  {
    title: "Escape the Cave",
    image: project1,
    description:
      "Designed a 3D game in Unity with a partner. Created a storyline with characters and enemies. Coded the entire game in C#.",
  },
  {
    title: "Calendar",
    image: project2,
    description:
      "Created a calendar app with partner in Java. Designed a GUI that had lines for a calendar and different colored blocks to represent events. Developed code to create, edit, and delete events.",
  },
  {
    title: "Math Wordle",
    image: project3,
    description:
      "Created a working Math Wordle game in Python where an equation is randomly generated and the user has to guess the variables in the equation.",
  },
  {
    title: "Fifteen Game",
    image: project4,
    description:
      "Collaborated with a partner to create a game of 15 tiles in which the player has to order the tiles from 1-15 to win.",
  },
];

export const CONTACT = {
  phoneNo: "(617) 980-4560",
  email: "alexw_19@icloud.com",
  location: "Boston, MA",
};
