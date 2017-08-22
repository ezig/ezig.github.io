"use strict";
exports.__esModule = true;
exports.title = "Ezra Zigmond";
exports.description = "Senior at Harvard studying Computer Science. " +
    "I'm writing a thesis with <a href=\"https://people.seas.harvard.edu/~chong/\">Prof. Stephen Chong</a> " +
    "on a capability-based interface for controlling access to SQL databases. " +
    "I am also a Head Teaching Fellow for CS51, <a href=\"http://www.thecrimson.com/article/2017/2/1/ec-10b-largest-course-2017/\"> " +
    "one of the largest courses</a> at Harvard.";
exports.imgDir = "assets/img/";
exports.profilePic = "me.gif";
exports.socials = [
    {
        link: "mailto:ezrazigmond@gmail.com",
        icon: "fa-envelope"
    },
    {
        link: "https://github.com/ezig",
        icon: "fa-github"
    },
    {
        link: "http://stackoverflow.com/users/3183737/ezig",
        icon: "fa-stack-overflow"
    },
    {
        link: "https://www.linkedin.com/in/ezrazigmond",
        icon: "fa-linkedin-square"
    },
];
exports.skills = {
    proficient: ["C", "Java", "OCaml", "Git", "Basic UNIX"],
    experience: ["Python", "TypeScript/JavaScript", "C++", "Racket", "Objective-C", "HTML/CSS"]
};
exports.education = {
    title: "Harvard College",
    image: "harvard.png",
    degree: "A.B. in Computer Science, Secondary Field in Linguistic Theory",
    date: "Expected 2018",
    honors: [
        "Phi Beta Kappa Junior 24", "Detur Prize", "John Harvard Scholar (2015, 2016)"
    ],
    courses: [
        "Abstraction and Design", "Data Structures and Algorithms", "Programming Languages",
        "Systems Programming", "Operating Systems", "Data Systems", "Systems Security",
        "Verified Systems", "Theory of Computation", "Linear Algebra and Real Analysis",
        "Intro to Probability",
    ]
};
exports.teaching = [
    {
        image: "ocaml.png",
        employer: "CS51: Abstraction and Design",
        title: "Teaching Fellow",
        timeline: "2016 - Present (Head Teaching Fellow, 2017)",
        description: "I have been a teaching fellow for two years and currently serve as the head teaching fellow.",
        details: [
            "Designed system for automatically grading correctness of assignments.",
            "Contributed to problem set development and course planning.",
            "Led code review section for 16 students, graded problem sets.",
            "Held office hours and fielded questions via email and Piazza."
        ]
    },
    {
        image: "cs50.png",
        employer: "CS50: Introduction to Computer Science",
        title: "Teaching Fellow",
        timeline: "Fall 2015",
        description: undefined,
        details: [
            "Led a weekly section for 20 students and grade problem sets.",
            "Held office hours and fielded questions via email and the course discussion site.",
            "Advised groups of students working on final projects.",
        ]
    }
];
exports.experiences = [
    {
        image: {
            name: "harvard.png",
            widthPx: 48,
            heightPx: 56
        },
        employer: "Stephen Chong Research Group, Harvard University",
        title: "Undergraduate Researcher",
        timeline: "2016 - Present",
        description: undefined,
        details: [
            "Worked on <a href=\"http://shill.seas.harvard.edu/\">Shill</a>, a secure shell scripting language.",
            "Designed a capability-based API for accessing SQL databases in Shill."
        ]
    },
    {
        image: {
            name: "palantir.png",
            widthPx: 48,
            heightPx: 48
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
            heightPx: 48
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
            heightPx: 56
        },
        employer: "Barbara Grosz Research Group, Harvard University",
        title: "Undergraduate Researcher",
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
            heightPx: 37
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
            "Integrated client-side OCR with <a href=\"https://code.google.com/p/tesseract-ocr/\">Tesseract</a> to compare the experience with server-side OCR."
        ]
    },
    {
        image: {
            name: "harvard.png",
            heightPx: 56,
            widthPx: 48
        },
        employer: "Digital Atlas of Roman and Medieval Civilization (DARMC)",
        title: "Undergraduate Research Assistant",
        timeline: "2015",
        description: "DARMC is a digital humanities project at Harvard that pubishes freely available maps and geodatabases created from " +
            "historical data on Roman and medieval civilization. A common task in the project was manually looking up and filling in " +
            "coordinates for large CSV files of historical place names. I improved on an existing effort to automate this process.",
        details: [
            "Designed a relational data model to replace the existing flat caching system and migrated old caches to the new model.",
            "Refactored existing Python scripts to make it easier to integrate more web geocoding services and output formats.",
            "Made configuring and using the command line interface easier for non-technical project members."
        ]
    }
];
exports.projects = [
    {
        icon: {
            name: "coq.jpg",
            heightPx: 64,
            widthPx: 64
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
            "meaningful security guarantees, even in the face of lowlevel attackers. We also model a translation scheme from an enclave-agnostic calculus " +
            "to an enclave-aware calculus and show that the scheme ensures that enclaves are correctly placed, so that a translation of a well-typed program " +
            "in the enclave-agnostic calculus results in a well-typed program in the enclave-aware calculus.",
        images: []
    },
    {
        icon: {
            name: "spy.png",
            heightPx: 64,
            widthPx: 64
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
            "<p>To prevent automated systems from accessing certain webpages pages, website developers often add techniques to verify that a user is a human. " +
            "These techniques generally involve tasks that are relatively easy for humans but difficult for automated systems. " +
            "One of the most popular such methods is CAPTCHA. However, these tasks can still be difficult or unpleasant to complete for humans. " +
            "In general, they can reduce the quality of user experience, which may make a user frustrated when interacting with a system, particularly for those with disabilities.</p>" +
            "<p>To address these issues, we explore a replacement for CAPTCHA that uses a mobile client’s motion data to determine whether the client is an automated system. " +
            "We also explore the privacy implications of websites clandestinely collecting accelerometer data.</p>",
        images: [
            {
                name: "captcha.png",
                widthPx: 300,
                heightPx: 208
            }
        ]
    },
    {
        icon: {
            name: "amplifyicon.png",
            heightPx: 64,
            widthPx: 64
        },
        name: "Amplify",
        links: [
            {
                text: "Download",
                url: "https://github.com/ezig/amplify/releases/tag/v1.0"
            },
            {
                text: "GitHub",
                url: "https://github.com/ezig/amplify"
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
                widthPx: 380
            }
        ]
    },
    {
        icon: {
            name: "bblogo.jpg",
            heightPx: 64,
            widthPx: 64
        },
        name: "Budget Butler",
        links: [
            {
                text: "GitHub",
                url: "https://github.com/ezig/cs50-final"
            }
        ],
        description: "<p>A polite app to streamline your budget management experience. Available free on the app store. " +
            "Budget Butler is designed to simplify keeping track of receipts and spending by making it easy " +
            "to add new receipts as you get them and to view past spending in table or chart form.</p>" +
            "<p>Adding a picture of a new receipt automatically fills in the total amount using optical character " +
            "recognition (OCR) powered by <a href=\"https://code.google.com/p/tesseract-ocr/\">Tesseract</a>. Receipt pictures " +
            "and information are then saved using Core Data. Budget Butler will even autocomplete payee names and expense categories " +
            "based on previous saved purchases. In addition to the table-style log, the summary view generates a pie chart using " +
            "<a href=\"https://github.com/core-plot/core-plot\">Core Plot</a> to break down spending by category.</p>",
        images: [
            {
                name: "bb1.png",
                heightPx: 334,
                widthPx: 180
            },
            {
                name: "bb2.png",
                widthPx: 180,
                heightPx: 334
            }
        ]
    },
    {
        icon: {
            name: "clojure.png",
            widthPx: 64,
            heightPx: 64
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
        description: "<p>A sliding tile puzzles solver written in Clojure as a final project for CS51: Abstraction and Design. " +
            "The goal of the project was to compare the effectiveness of a standard A* strategy with a genetic algorithm. " +
            "After running tests on both square and non-square puzzles, we found our A* implementation about 30 times faster " +
            "than the genetic algorithm. We also compared the effectiveness of different heuristic functions for maximizing the " +
            " speed of both algorithms, as well as for increasing the accuracy of the genetic algorithm. " +
            " Ultimately, we concluded that a genetic algorithm was not well suited for a problem of this sort which involves planning and where partial solutions are not useful.</p>",
        images: [
            {
                name: "scrambledcow.jpg",
                heightPx: 141,
                widthPx: 175
            },
            {
                name: "solvedcow.png",
                heightPx: 141,
                widthPx: 175
            }
        ]
    },
    {
        icon: {
            name: "shield.jpg",
            heightPx: 60,
            widthPx: 60
        },
        name: "Strategy Game Movement",
        links: [
            {
                text: "Live Demo",
                url: "https://ezig.github.io/strategy-game"
            },
            {
                text: "GitHub",
                url: "https://github.com/ezig/strategy-game"
            }
        ],
        description: "<p>An experiment with path-finding similar modeled on the way that movement works in turn-based strategy games " +
            "like Fire Emblem and Advance Wars. Determines valid movement range based on a character's movement range " +
            "and finds paths to tiles using a modified depth-limited breadth-first search that finds the shortest path to each tile. " +
            "Built using <a href=\"http://phaser.io/\">Phaser.js</a> to draw grid and animate movement.</p>" +
            "<p>To try out the demo, click on and move the pink or the green friendly sprites to a valid (blue-highlighted) " +
            "tile in movement range. Once you've moved both friendly sprites, the red enemy will make a move. " +
            "The red-highlighteds squares indicate spaces within the sprite's \"attack\" range but outside of its move range.</p>",
        images: [
            {
                name: "strategy.png",
                heightPx: 260,
                widthPx: 320
            }
        ]
    },
    {
        icon: {
            name: "tile.png",
            widthPx: 64,
            heightPx: 64
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
            "<li>Adventure: hand-made levels of varying shape (shown on the right)</li>" +
            "</ul></p>",
        images: [
            {
                name: "flip.png",
                widthPx: 275,
                heightPx: 275
            }
        ]
    }
];
