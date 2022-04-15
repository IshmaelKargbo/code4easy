const speakers = document.getElementById('speakers');

const tutors = [
  {
    name: 'Ishmael Kargbo',
    position: 'Director of Engineering',
    description:
      'I’ve acquired a wide depth of knowledge and expertise in using my technical skills in programming, computer science, software development, and mobile app development to developing solutions to help organizations increase productivity, and accelerate business performance.',
    image: './assets/images/Ishmael.jpeg',
  },
  {
    name: 'Jonas Schmedtmann',
    position: 'Web Developer, Designer, and Teacher.',
    description:
      "Hi, I'm Jonas! I have been identified as one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction.",
    image: './assets/images/Jonas.jpg',
  },
  {
    name: 'Andrew Mead',
    position: 'A Full-stack Developer & Teacher',
    description:
      "I launched my first Udemy course in 2014 and had a blast teaching and helping others. Since then, I've launched 3 courses with over 110,000 students and over 18,000 5-star reviews.",
    image: './assets/images/Andrew.jpg',
  },
  {
    name: 'Brad Traversy',
    position: 'Full Stack Web Developer & Instructor at Traversy Media',
    description:
      'Brad Traversy has been programming for around 12 years and teaching for almost 5 years. He is the owner of Traversy Media which is a successful web development YouTube channel and specializes in Fullstack web development.',
    image: './assets/images/Brad.jpeg',
  },
  {
    name: 'Maximilian Schwarzmüller',
    position: 'Professional Web Developer and Instructor',
    description:
      'Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages.',
    image: './assets/images/Maximilian.jpeg',
  },
  {
    name: 'Colt Steele',
    position: 'Developer and Bootcamp Instructor',
    description:
      "Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where I've helped hundreds of people become web developers and change their lives.",
    image: './assets/images/Colt.jpg',
  },
];

const buildSpeakers = () => {
  tutors.forEach((e) => {
    const list = document.createElement('li');
    list.innerHTML = `
        <div class="card">
                        <div class="profile">
                            <img src="./assets/images/back.png" alt="back" class="check">
                            <img src="${e.image}" alt="profile" class="avater">
                        </div>
                        <div class="details">
                            <h3>${e.name}</h3>
                            <p class="position">${e.position}</p>
                            <hr />
                            <p class="about">
                                ${e.description}
                            </p>
                        </div>
                    </div>`;

    speakers.appendChild(list);
  });
};

buildSpeakers();