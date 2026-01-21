import project1 from "../assets/projects/EscapeTheCave.png";
import project2 from "../assets/projects/Calendar.png";
import project3 from "../assets/projects/MathWordle.png";
import project4 from "../assets/projects/Bridgit.png";
import project5 from "../assets/projects/FifteenGame.png";
import website from "../assets/projects/personal-website.png";
import chv from "../assets/projects/webdev.jpg";
import vital from "../assets/projects/vital.jpg";
import metasearcher from "../assets/projects/internship.png";
import weather from "../assets/projects/database.png";
import forge from "../assets/projects/forge.png";

export const HERO_CONTENT = `Hi! My name is Alexandria, but you can call me Alex. I am a fourth year computer 
science major with a concentration in software. Throughout the years I have taken classes in and learned multiple coding languages including Java, Python, HTML, and CSS.`;
export const HERO_CONTENT2 = `I love many forms of coding and I knew I wanted to do something computer 
science related in college when I would look forward to finishing my coding 
homework in high school and working on random coding projects outside of class.`;
export const HERO_CONTENT3 = `Some of my hobbies include playing golf, video games, and watching hockey. I 
have also recently gotten into crochetting which I have been working hard to learn and get better at.`;

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
    description: `I went through referee training to get my USA hockey refereeing license, then I picked out games every weekend from a list of them. I communicated with the coaches and the players
    to make sure everyone was having fun and safely learning the rules of ice hockey. I typically refereed the 10 and under games meaning the kids do not know the rules very well at that 
    point, so it was my job to help guide them and make sure they were not doing anything dangerous.`,
  },
];

export const PROJECTS = [
  {
    title: "Personal Website",
    image: website,
    description:
      `I created a personal website using Vite and GitHub that is currently
      still being developed. I wanted to showcase everything I have learned by putting my
      skills to use in creating this website completely from scratch. I expanded on different
      projects I have worked on and included parts about me so people can get to know me. I
      plan on adding features to make the website more interactive and exciting to use.`
  },
  {
    title: "Document Metasearcher Prototype",
    image: metasearcher,
    description:
      `With a team of interns, I helped develop a full-stack
      application that allows users to type in a relevant term or phrase into a search bar and
      get documents returned from all software applications used by the company. The
      prototype uses AnythingLLM to make an API call to all available software applications
      and give the JSON file of all relevant documents. The code then takes those JSON files
      and puts them in human readable format including the link, title, and description of the
      document.`
  },
  {
    title: "Vital Workshop",
    image: vital,
    description:
      `In the club First Byte, my team and I collaborated with another
      Northeastern club called Vital. Vital was running a Hackathon and wanted us to host a
      workshop to give a general overview on how to develop a website. We hosted a two-day
      workshop starting on the first day with the basics of teaching HTML and TailwindCSS
      and on the second day started going into Vite, React, and Supabase. Both days had
      slideshows to present and a demonstration of what the code would look like as a
      website.`
  },
  {
    title: "Camp Harbor View Workshops",
    image: chv,
    description:
      `In the CS curricula team for First Byte, the team 
      collaborates with Camp Harbor View, that hosts after school and weekend programs for
      Boston public school kids. We created and practiced the presentation and hosted a
      workshop to teach basic coding concepts using Microbits. We presented and did
      demonstrations with the kids in the form of coding games with the Microbits. We also
      ran a Web Development workshop that we prepared and presented. The presentation included
      a live demo where they could follow along on their own laptop and create a website
      tailored to their resume.`
  },
  {
    title: "Forge Website",
    image: forge,
    description:
      `In the club Forge, I applied and was accepted to the website team. The
      club only had a Notion page as the website, so we were tasked with starting the
      creation and basic structure of the website. We used GitHub to collaborate and were
      assigned separate tasks to work on throughout three months.`
  },
  {
    title: "Weather Patterns Database",
    image: weather,
    description:
      `I worked in a group in my CS5200 Database and Design
      class, to come up with a database that used different hurricanes, atmospheric, oceanwave, and land-surface quantities datasets. We parsed through the data and created
      tables to hold said data. We created trigger functions based off different characteristics
      of the data, and we created a custom function to find the city based off the given
      coordinates. We created multiple queries to test our data and make sure the tables were
      properly populated.`
  },
  {
    title: "Escape the Cave",
    image: project1,
    description:
      `I created and designed a 3D game in Unity with a partner as a final group project for my game design class. The game was fully coded using C#. The only requirements for the game were we had to use the concepts
      we learned in class but other than that we were able to create whatever we wanted. We decided to we both love playing fantasy free roam games so that is what we wanted to go
      with. We decided on a free roam puzzle based game. The story line was the player was camping with their friends and they got sent to get firewood, however they ended up getting
      lost in the woods and falling into a cave. That is where the official game starts where the player is in the cave and can do some exploring. There are collectibles and also enemies 
      so the player has to progress through multiple rooms which consistent of rooms like a Colosseum, underwater rooms, and other exploring rooms. There are multiple ways to actually
      escape the cave and the player gets to decide which one they want to choose. There is also potential to find a large treasure at the end of the game.`,
  },
  {
    title: "Calendar",
    image: project2,
    description:
      `Designed a working calendar GUI with a partner for my OOD course as our final project. This calendar was completely done in Java. The code created the GUI and drew the calendar on.
      The events on the calendar were represented by colored blocks which you could click on to see the details of the event. Some of the features included switching the
      users to show the events for that specific user, adding an event, removing an event, and loading a calendar in for a user. There were different screen components where you
      could add and edit the information for an event.`,
  },
  {
    title: "Math Wordle",
    image: project3,
    description:
      `For my final project in my computing fundamentals class I created a Math Wordle game completely in Python. The idea of the game was the same as regular Wordle. A math
      equation was randomly generated and the user had a certain number of guesses to determine what the equation was. If there was nothing in the generated equation, the character
      would be red. If the character is in the equation but not in the right spot then it is yellow. If the character is in the right spot and in the equation it turns green. The entire game
      happens in the terminal.`,
  },
  {
    title: "Bridgit",
    image: project4,
    description:
      `A partner and I created the bridgit game for fundamentals of computer science 2. The game was fully created in Java. The game consisted of a grid where dark pink represented one player
      and light pink represented the other player. The white squares are the parts that can be filled in. The players turns will swap after they click on a white square. The goal of the game
      is to get a path from one side to the other of your color. The other player can block your path and once a square is a color of pink, it cannot be changed by the other player.`,
  },
  {
    title: "Fifteen Game",
    image: project5,
    description:
      `A partner and I created the fifteen game for fundamentals of computer science 2 course. The game was fully created in Java. The game has tiles numbered 1-15 with one empty space.
      You can use the arrow keys to swap around the empty space and try to get all the tiles numbered left to right 1-15 and the game ends and the user has one.`,
  },
];

export const CONTACT = {
  phoneNo: "(617) 980-4560",
  email: "alexw_19@icloud.com",
  location: "Boston, MA",
};
