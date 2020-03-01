interface IImage {
  name: string;
  widthPx: number;
  heightPx: number;
}

interface IResponsiveImage {
  name: string;
  widthPercent: number;
  heightPercent: number;
}

interface IExperience {
  image: IImage;
  employer: string;
  title: string;
  timeline: string;
  description: string | undefined;
  details: string[];
}

interface ILink {
  text: string;
  url: string;
}

interface IProject {
  icon: IImage;
  name: string;
  links: ILink[];
  description: string;
  images: IImage[];
}

interface social {
  link: string;
  icon: string;
}

export const title: string = "Ezra Zigmond";

export const description: string = "I am a software engineer at <a href=\"https://www.palantir.com/\">Palantir Technlogies</a> in California. <br><br> I received a bachelor's degree in Computer Science from Harvard in 2018 where I wrote a <a href=\"https://ezig.github.io/thesis.pdf\">thesis on language-based database security</a> with <a href=\"https://people.seas.harvard.edu/~chong/\">Prof. Stephen Chong</a> and was a Head Teaching Fellow for CS51, <a href=\"http://www.thecrimson.com/article/2017/2/1/ec-10b-largest-course-2017/\">one of the largest courses</a> at Harvard.<br>"

export const imgDir: string = "assets/img/";

export const profilePic: string = "me.gif";

export const socials: social[] = [
  {
    link: "mailto:ezrazigmond@gmail.com",
    icon: "fa fa-envelope fa-3x",
  },
  {
    link: "https://github.com/ezig",
    icon: "fa fa-github fa-3x",
  },
  {
    link: "https://scholar.google.com/citations?user=oPf2XJIAAAAJ",
    icon: "ai ai-google-scholar ai-3x",
  },

  {
    link: "https://www.linkedin.com/in/ezrazigmond",
    icon: "fa fa-linkedin-square fa-3x",
  },
  {
    link: "http://stackoverflow.com/users/3183737/ezig",
    icon: "fa fa-stack-overflow fa-3x",
  },
]

interface IEducation {
  title: string;
  image: string;
  degree: string;
  date: string;
  honors: string[];
  courses: string[];
}

export const skills = {
  proficient: ["C", "Java", "OCaml", "Git", "Basic UNIX"],
  experience: ["Python", "TypeScript/JavaScript", "C++", "Racket", "Objective-C", "HTML/CSS"]
}

export const education = {
  title: "Harvard College",
  image: "harvard.png",
  degree: "A.B. summa cum laude in Computer Science (2018)",
  minor: "Secondary Field in Language and Linguistic Theory",
  honors: [
    "2nd Prize in the undergraduate Student Research Competition at <a href=\"https://programming-conference.org/\">&lt;Programming&gt;</a> (2018)", "Phi Beta Kappa Junior 24 (2017)", "Bok Center Certificate of Distinction in Teaching (2017, 2018)", "Detur Prize (2015)"
  ],
  courses: [
    "Programming Languages", "Advanced Topics in Programming Languages", "Compilers", "Operating Systems", "Systems Security", "Verified Systems", "Data Systems", "Data Structures and Algorithms", "Theory of Computation", "Computer Graphics", "Linear Algebra and Real Analysis", "Intro Probability", "Probabilistic Understanding of Language", "Formal Semantics"
  ]
}

export const teaching: IExperience[] = [
  {
    image: "ocaml.png",
    employer: "CS51: Abstraction and Design",
    title: "Teaching Fellow (S16, S17), Head Teaching Fellow (S18)",
    timeline: undefined,
    description: undefined,
    details: [
      "Designed system for automatically grading correctness of student assignments.",
      "Contributed to problem set development and course planning.",
      "Led code review section for 16 students, graded problem sets.",
      "Held office hours and fielded questions via email and Piazza."
    ],
  },
  {
    image: "cs50.png",
    employer: "CS50: Introduction to Computer Science",
    title: "Teaching Fellow (F15)",
    timeline: undefined,
    description: undefined,
    details: [
      "Led a weekly section for 20 students and graded problem sets.",
      "Held office hours and answered questions via email and the course discussion site.",
      "Advised groups of students working on final projects.",
      "Taught a <a href=\"https://www.youtube.com/watch?v=qla-KaMF-2Q\">publicly available seminar</a> on creating web apps with Flask."
    ],
  }
]

export const experiences: IExperience[] = [
  {
    image: {
      name: "palantir.png",
      widthPx: 48,
      heightPx: 48,
    },
    employer: "Palantir Technologies, Inc.",
    title: "Software Engineer",
    timeline: "2018 - Present",
    description: undefined,
    details: []
  },
  {
    image: {
      name: "harvard.png",
      widthPx: 48,
      heightPx: 56,
    },
    employer: "Stephen Chong Research Group, Harvard University",
    title: "Undergraduate Researcher",
    timeline: "2016 - 2018",
    description: undefined,
    details: [
      "Worked on <a href=\"http://shill.seas.harvard.edu/\">Shill</a>, a secure shell scripting language.",
      "Designed a capability-based API for accessing SQL databases in Shill."
    ],
  },
  {
    image: {
      name: "palantir.png",
      widthPx: 48,
      heightPx: 48,
    },
    employer: "Palantir Technologies, Inc.",
    title: "Software Engineer Intern",
    timeline: "Summer 2017",
    description: undefined,
    details: [
      "Improved performance of data export between Palantir deployments.",
      "Designed a GUI for specifying data integrations without writing code.",

    ]
  },
  {
    image: {
      name: "google.png",
      widthPx: 48,
      heightPx: 48,
    },
    employer: "Google, Inc.",
    title: "Software Engineering Intern, Gmail Spam Team",
    timeline: "Summer 2016",
    description: undefined,
    details: [
      "Improved spam classification throughput by 20% by batching together inference requests.",
      "Integrated spam deep neural network with automated hyperparameter search infrastructure. Used results to decrease training time by 4x.",
      "Designed and implemented a data-processing pipeline for finding features causing false positives.",
      "Collaborated with industry machine learning experts to design a new objective function for the spam model and experiment with serving the model on " +
        "<a href=\"https://cloudplatform.googleblog.com/2016/05/Google-supercharges-machine-learning-tasks-with-custom-chip.html\">Tensor processing units</a>."
    ]
  },
  {
    image: {
      name: "harvard.png",
      widthPx: 48,
      heightPx: 56,
    },
    employer: "Barbara Grosz Research Group, Harvard University",
    title: "Undergraduate Research Assistant",
    timeline: "2015 - 2016",
    description: "Contributed to the group's research on developing intelligent information sharing algorithms for supporting distributed teamwork.",
    details: [
      "Developed a Google Chrome extension and a Google Docs add-on for supporting collaborative editing of documents.",
      "Built a back-end using Flask to connect the Docs add-on to the group's algorithms and store revision information."
    ]
  },
  {
    image: {
      name: "hyland.jpg",
      widthPx: 100,
      heightPx: 37,
    },
    employer: "Hyland, Creator of OnBase",
    title: "Software Development Intern",
    timeline: "Summer 2015",
    description: "Hyland creates enterprise content management software to help businesses manage documents, information, and everyday tasks. " +
      "I worked on the image upload functionality of OnBase for iPad.",
    details: [
      "Implemented <a href=\"https://en.wikipedia.org/wiki/Canny_edge_detector\">Canny edge detection</a> in Objective-C " +
        "to identify document borders in images.",
      "Used OpenGL ES to allow users to crop, de-skew, and adjust contrast/brightness levels of captured images.",
      "Integrated mobile app with server-side optical character recognition (OCR) engine so mobile users could upload documents for text recognition.",
      "Integrated app with client-side OCR using <a href=\"https://code.google.com/p/tesseract-ocr/\">Tesseract</a> to compare the experience with server-side OCR."
    ]
  },
  {
    image: {
      name: "harvard.png",
      heightPx: 56,
      widthPx: 48,
    },
    employer: "Digital Atlas of Roman and Medieval Civilization (DARMC)",
    title: "Undergraduate Research Assistant",
    timeline: "2015",
    description: "DARMC is a digital humanities project at Harvard that publishes freely available maps and geodatabases created from " +
      "historical data on Roman and medieval civilization. A common task in the project was manually looking up and filling in " +
      "coordinates for large CSV files of historical place names. I improved on an existing effort to automate this process.",
    details: [
      "Designed a relational data model to replace the existing flat caching system and migrated old caches to the new model.",
      "Refactored existing Python scripts to make it easier to integrate more web geocoding services and output formats.",
      "Made configuring and using the command line interface easier for non-technical project members."
    ]
  }
]

export const research: IProject[] = [
  {
    icon: {
      name: "shilldblogo.png",
      heightPx: 99,
      widthPx: 78,
    },
    name: "Fine-Grained, Language-Based Access Control for Database-Backed Applications",
    links: [
      {
        text: "Thesis",
        url: "https://ezig.github.io/thesis.pdf"
      },
      {
        text: "Extended Abstract",
        url: "https://ezig.github.io/abstract.pdf"
      },
      {
        text: "GitHub",
        url: "https://github.com/ezig/shilldb"
      }
    ],
    description: "<p>Database-backed applications often run queries with more authority than necessary. Since programs can access more data than they legitimately need, flaws in security checks at the application level can enable malicious or buggy code to view or modify data in violation of intended access control policies. Although database management systems provide tools for controlling access to data, these tools are not well-suited for modern web applications which often have many users and consist of many different software components. First, databases are unaware of application users, and creating a new database user for each application user is impractical for applications with many users. Second, different components of the same application require different levels of database access, which would require creating different database users for different software components. Thus, it is difficult to properly limit the authority an application has when executing queries.</p><p>I propose ShillDB, a language for writing secure, database-backed applications. ShillDB enables reasoning about database access at the language level through capabilities, which limit what database tables a program can access, and contracts, which limit what operations a program can perform on those tables. ShillDB contracts are expressed as part of function interfaces, making it easy to specify different access control policies for different components of an application. These contracts act as executable security documentation for consumers of ShillDB programs and are enforced by the language runtime. Further, ShillDB provides database access control guarantees independent of the security mechanisms of the underlying database management system.</p>",
    images: [
      {
        name: "shilldboverview.png",
        widthPx: 408,
        heightPx: 150,
      }
    ]
  },
  {
  
    icon: {
      name: "reaper.png",
      heightPx: 95,
      widthPx: 90,
    },
    name: "Reaper: Synthesizing SQL Data Modification Queries from Input-Output Examples",
    links: [
      {
        text: "Read the Paper",
        url: "https://ezig.github.io/reaper.pdf"
      },
      {
        text: "GitHub",
        url: "https://github.com/ezig/reaper"
      }
    ],
    description: "<p>A final project for Advanced Topics in Programming Languages at Harvard.</p>" +
    "<p>Users of relational databases often have trouble constructing SQL queries to perform their desired tasks. However, users are often able to provide input-output examples that provide a partial specification for their desired outcome. Accordingly, prior work has developed programming-by-example systems to help users craft database SELECT queries. A natural and useful extension of this technique is to automatically synthesize queries that modify data (that is, UPDATE and DELETE queries), as even users who are proficient in writing SELECT queries may struggle to write these modification queries.</p>" + 
    "<p>In this paper, we present the first system for synthesizing SQL data modification queries from input-output examples. Our key insight is that it is possible to solve SQL data modification query synthesis problems by issuing multiple, independent calls to an existing SELECT synthesizer, which we can treat as a black box. This results in a simple synthesis algorithm that will benefit from future advances in SELECT synthesis technology. We have implemented our algorithm in a new tool called REAPER which can solve a variety of interesting update problems in a few seconds.</p>",
    images: [

    ]
  },
  {

    icon: {
      name: "coq.jpg",
      heightPx: 64,
      widthPx: 64,
    },
    name: "Verifying Security of Enclave-Aware Calculi",
    links: [
      {
        text: "Read the Paper",
        url: "https://ezig.github.io/BTZ.pdf"
      },
      {
        text: "GitHub",
        url: "https://github.com/aaronbembenek/verified-auto-enclave"
      }
    ],
    description: "<p>A final project for Projects and Close Readings in Software Systems: Verified Systems at Harvard.</p>" +
    "Techniques from language-based security, such as security type systems, often provide protection against high-level adversaries " +
    "but cannot guarantee security against low-level attackers, such as those that can inject code or inspect memory.</p>" +
    "<p>We model in <a href=\"https://coq.inria.fr/\">Coq</a> a security-typed calculus that includes an abstract model of Intel SGX-like enclaves, and show that the calculus provides " +
    "meaningful security guarantees, even in the face of low-level attackers. We also model a translation scheme from an enclave-agnostic calculus " +
    "to an enclave-aware calculus and show that the scheme ensures that enclaves are correctly placed, so that a translation of a well-typed program " +
    "in the enclave-agnostic calculus results in a well-typed program in the enclave-aware calculus.",
    images: [

    ]
  },
  {
    icon: {
      name: "spy.png",
      heightPx: 64,
      widthPx: 64,
    },
    name: "Accelerating Good (and Evil): Using Accelerometer Data to Catch Spam (and Spy on People)",
    links: [
      {
        text: "Read the Paper",
        url: "https://ezig.github.io/acceleratinggood.pdf"
      },
      {
        text: "GitHub",
        url: "https://github.com/ankitvgupta/reCAPTCHA-mobile"
      }
    ],
    description: "<p>A final project for System Security at Harvard.</p>" + 
    "<p>To prevent automated systems from accessing certain webpages, website developers often wish to verify that a user is a human. " +
    "This generally involves asking a user to perform tasks that are relatively easy for humans but difficult for automated systems. " +
    "One of the most popular such methods is CAPTCHA. However, these tasks can still be difficult or unpleasant to complete for humans. " +
    "In general, they can reduce the quality of user experience, which may make a user frustrated when interacting with a system, particularly for those with disabilities.</p>" +
    "<p>To address these issues, we explore a replacement for CAPTCHA that uses a mobile client’s accelerometer data to determine whether the client is an automated system. " +
    "We also examine the privacy implications of websites clandestinely collecting accelerometer data.</p>",
    images: [
      {
        name: "captcha.png",
        widthPx: 300,
        heightPx: 208,
      }
    ]
  }
]

export const projects: IProject[] = [
  {
    icon: {
      name: "amplifyicon.png",
      heightPx: 64,
      widthPx: 64,
    },
    name: "Amplify",
    links: [
      {
        text: "Download",
        url: "https://github.com/ezig/amplify/releases/tag/v1.0"
      },
      {
        text: "GitHub",
        url: "https://github.com/ezig/amplify",
      }
    ],
    description: "<p>Amplify is a convenient menu bar app to simplify the way you use Spotify. Amplify makes it easy to check the current track, " +
    "adjust Spotify volume, and control playback without interrupting what you're working on. " +
    "Amplify has been downloaded more than 75,000 times, peaking at the #4 free music app and the #53 free app overall on the Mac App Store.</p>" +
    "<p>Amplify is written in Objective-C and uses the <a href=\"https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ScriptingBridgeConcepts/Introduction/Introduction.html\">" +
    " Scripting Bridge Framework</a> to send Apple Script commands to the Spotify client, and the <a href=\"https://developer.apple.com/library/prerelease/mac/documentation/Cocoa/Reference/Foundation/Classes/NSDistributedNotificationCenter_Class/index.html\">" +
    " Distributed Notification Center</a> to detect when the Spotify track changes. ",
    images: [
      {
        name: "amplify.png",
        heightPx: 193,
        widthPx: 380,
      }
    ], 
  },
  {
    icon: {
      name: "bblogo.jpg",
      heightPx: 64,
      widthPx: 64,
    },
    name: "Budget Butler",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/ezig/cs50-final"
      }
    ],
    description: "<p>A polite app to streamline your budget management experience. " +
      "Budget Butler is designed to simplify keeping track of receipts and spending by making it easy " +
      "to add new receipts as you get them and to view past spending in table or chart form.</p>" +
      "<p>Adding a picture of a new receipt automatically fills in the total amount using optical character " +
      "recognition (OCR) powered by <a href=\"https://code.google.com/p/tesseract-ocr/\">Tesseract</a>. Receipt pictures " + 
      "and information are then saved using Core Data. Budget Butler will even autocomplete payee names and expense categories " +
      "based on previous saved purchases. In addition to the table-style log, the summary view generates charts using " +
      "<a href=\"https://github.com/core-plot/core-plot\">Core Plot</a> to break down spending by category.</p>",
      images: [
        {
          name: "bb1.png",
          heightPx: 334,
          widthPx: 180,
        },
        {
          name: "bb2.png",
          widthPx: 180,
          heightPx: 334,
        }
      ]
  },
  {
    icon: {
      name: "clojure.png",
      widthPx: 64,
      heightPx: 64,
    },
    name: "NPuzzles",
    links: [
      {
        text: "GitHub",
        url: "https://github.com/ezig/npuzzles"
      },
      {
        text: "Writeup of Results",
        url: "https://ezig.github.io/npuzzles.pdf"
      }
    ],
    description: "<p>A sliding tile puzzle solver written in Clojure as a final project for CS51: Abstraction and Design. " + 
      "The goal of the project was to compare the effectiveness of a standard A* strategy with a genetic algorithm. " +
      "After running tests on both square and non-square puzzles, we found our A* implementation about 30 times faster " +
      "than the genetic algorithm. We also compared the effectiveness of different heuristic functions for maximizing the " +
      " speed of both algorithms, as well as for increasing the accuracy of the genetic algorithm. " +
      " Ultimately, we concluded that a genetic algorithm was not well suited for a problem of this sort which involves planning and where partial solutions are not useful.</p>",
    images: [
      {
        name: "scrambledcow.jpg",
        heightPx: 141,
        widthPx: 175,
      },
      {
        name: "solvedcow.png",
        heightPx: 141,
        widthPx: 175,
      }
    ]
  },
  {
    icon: {
      name: "shield.jpg",
      heightPx: 60,
      widthPx: 60,
    },
    name: "Strategy Game Movement",
    links: [
      {
        text: "Live Demo",
        url: "https://ezig.github.io/strategy-game",
      },
      {
        text: "GitHub",
        url: "https://github.com/ezig/strategy-game",
      }
    ],
    description: "<p>A prototype based on the style of movement found in turn-based strategy games " +
      "like Fire Emblem and Advance Wars. Determines valid movement ranges and paths based on a character's movement range " +
      "and finds paths to tiles using a modified depth-limited breadth-first search. " +
      "Built using <a href=\"http://phaser.io/\">Phaser.js</a> to draw grid and animate movement.</p>" +
      "<p>To try out the demo, click on and move the pink or the green friendly sprites to a valid (blue-highlighted) " +
      "tile in movement range. Once you've moved both friendly sprites, the red enemy will make a move. " +
      "Spaces marked with x's indicate difficult terrain that costs double to cross. The red-highlighted squares indicate spaces within the sprite's \"attack\" range but outside of its move range.</p>",
    images: [
      {
        name: "strategy.png",
        heightPx: 260,
        widthPx: 320,
      }
    ]
  },
  {
    icon: {
      name: "tile.png",
      widthPx: 64,
      heightPx: 64,
    },
    name: "Flip",
    links: [
      {
        text: "Play Game",
        url: "https://ezig.github.io/flip"
      },
      {
        text: "GitHub",
        url: "https://github.com/ezig/flip"
      }
    ],
    description: "<p>A game about tiles. Flip is based on a simple goal (turn all of the red tiles white) and a simple mechanic " +
    "(flipping over a tile also flips the adjacent tiles). Built using <a href=\"http://phaser.io/\">Phaser.js</a>.</p>" + 
    "<p>There are currently two different modes:" +
    "<ul>" +
        "<li>Classic: randomly generate square levels from 3x3 up to 5x5</li>" +
        "<li>Adventure: handmade levels of varying shape (shown on the right)</li>" +
    "</ul></p>",
    images: [
      {
        name: "flip.png",
        widthPx: 275,
        heightPx: 275,
      }
    ]
  }
]
