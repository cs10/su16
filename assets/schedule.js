/* Shortcuts for creating schedule objects
 * Parameters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[slides folder]', '[video URL]', '[Guest Name]')
 * lab1:     (title, 'topic file path', [boolean -- Reading Quiz?], 'video link')
 * disc1:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    work     = lab, // shortcut for work sessions.
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject;

function docs(id) {
    return 'assign.html?//docs.google.com/document/d/' + id + '/pub';
}
// CONSTANTS:
var hw1Spec = docs('1ybuatsrUMCI-tHHRPwxUpGoZoGxk_SEiGEArocQtIlI');
var hw2Spec = docs('1NrZaFKMIeN7Jvfpwe8Auv6Cc-OhcOIZzZX83IN2azPA');
var hw3Spec = docs('1z-DZD3ya3Uxp9WkkmqF838Giq_VEjtdmXNI0dVzU5sg');
var mtProjSpec = docs('1VzhTWptGJpLE56gzYYG1lw9h2tW66yHNxkO7-yXVjzU');
var exploreSpec = docs('1fGQzqdBFdorBoSEfFs7MCDS6sfAi8412gjx3E6EcSlo');
var finalProjSpec = docs('1ZMQqAvwzFSdGHcc9x8uoE3aL_XjR3Gy4i2cS1rHibIc');

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JUN 20 - 24
cs10.week1 = {
    readings1: 'No Readings',
    lect1: lect('Welcome and Abstraction', 'L01 - Abstraction'),
    lab1: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/summer/1-introduction.topic"),
    disc1: disc('Welcome to CS10! / The Power of Binary'),
    lect2: lect('Procedures', 'L02 - Functions'),
    work: work('Work Session'),
    readings2: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                docs('1PZJ_LYYWRYu12cTbBKF9IyY4BqEG-BibgisBoQn9BpY')),
        reading('TEDx Berkeley: The Beauty and Joy of Computing',
                'https://www.youtube.com/watch?v=ozRovyDwKEM'),
        reading('Why Software is Eating the World',
                bcourses('58003308')),
        reading('All I Really Need to Know about Pair Programming I Learned In Kindergarten',
                'https://collaboration.csc.ncsu.edu/laurie/Papers/Kindergarten.PDF'),
        reading('Learning to Code!',
                'https://www.youtube.com/watch?v=dU1xS07N-FA',
                'optional'),
        reading('Is Abstraction the Key to Computing?',
                bcourses('58003307'),
                'optional'),
        reading('Scratch: Programming for All',
                bcourses('58003306'),
                'optional')
    ],
    lect3: lect('Programming Paradigms', 'L03 - Abstraction II'),
    lab2: lab('Build Your Own Blocks', 'berkeley_bjc/summer/2-loops-variables.topic', true),
    lect4: lect('Algorithms', 'L04 - 3D Graphics'),
    disc2: disc('Functions'),
    hw: hw('HW0', 'Wed 6/22', 'quizzes/1969116')
};

// JUN 27 - JUL 1
cs10.week2 = {
    readings1: [
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf'),
        reading('Designing Games with a Purpose (GWAP)',
                bcourses('58003305')),
        // reading('Justices Split on Violent Games',
        //         bcourses('53994720')),
        // reading('Video Games Lecture',
        //         'https://coursesharing.org/courses/6/lectures/11'),
        // reading('(Slides)',
        //         '{{ site.baseurl }}/resources/readings/graphics'),
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        // reading('More readings on video games',
        //         '{{ site.baseurl }}/resources/readings/video-games/',
        //         'optional'),
        reading('Animating a Blockbuster',
                'https://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')
    ],
    lect1: lect('Algorithmic Complexity', 'L05 - Programming Paradigms'),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lect2: lect('Testing, HW3', 'L06 - Algorithms I'),
    disc1: disc('Scoping'),
    work: lab('Lab: Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    readings2: [
        reading('BtB Chapter 2',
                '{{ site.baseurl }}/resources/readings/btb/chapter2.pdf'),
        // TODO: Put this article in bCourses!
        reading('What’s Hot in the Art World? Algorithms',
                bcourses('58327126')),
        reading('How Algorithms Shape Our World',
                'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
        reading('Program or Be Programmed',
                'http://tedxtalks.ted.com/video/Douglas-Rushkoff-at-TEDxNYED'),
        reading('Program or Be Programmed: A Guide',
                'https://dtc-wsuv.org/hashnextchapter/wp-content/uploads/2013/03/Rushkoff-Study-Guide.pdf',
                'optional'),
        reading('Demystifying the Algorithm: who Designs Your Life?',
                'https://www.bof.nl/2015/06/26/demystifying-the-algorithm-who-designs-your-life/',
                'optional')
    ],
    lect3: lect('Recursion I', 'L07 - Algorithmic Complexity'),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic', true),
    lect4: lect('Recursion II', 'L10 - Recursion II'),
    disc2: disc('All About Lists'),
    hw: hw('HW1: Word Guessing', 'Wed 6/29', 'assignments/6365043', hw1Spec)
};
//cs10.week2.lect4.classes = 'noClass';
// cs10.week2.work.title += '<hr><strong>Quest Review (Sect 112)</strong>';

// JUL 4 - JUL 8
cs10.week3 = {
    readings1: [
        reading('BtB Chapter 4 Reading Segment 1',
                '{{ site.baseurl }}/resources/readings/btb/BtB4-pt1.pdf'),
        reading('BtB Chapter 4 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB4-pt2.pdf'),
        // TODO: This is paywalled....
        reading('Living in a Digital World',
                'https://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                '{{ site.baseurl }}/resources/readings/btb/chapter3.pdf',
                'optional')
    ],
    lect1: lect('No Lecture'),
    lab1: lab('Algorithms & Algorithmic Complexity', 'berkeley_bjc/summer/6-algorithms-and-complexity.topic', true),
    lect2: lect('Social Implications', 'L09 - Social Implications I'),
    disc1: disc('Algorithmic Complexity'),
    work: lab('Work Session'),
    readings2: 'ADD READINGS',
    lect3: lect('Concurrency', 'L12 - Concurrency'),
    lect4: lect('Internet', 'L13 - Internet I'),
    lab2: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic'),
    disc2: disc('<span style="font-size:150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup></span>'),
    hw: hw('HW2: Encryptify', 'Wed 7/6', 'assignments/6365044', hw2Spec)
};
cs10.week3.lect1.classes = 'noClass';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';

// JUL 11 - JUL 15
cs10.week4 = {
    readings1: [
        reading('BtB Chapter 5 Reading Segment 1',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt3.pdf'),
        reading('BtB Chapter 6 (27-37)',
                '{{ site.baseurl }}/resources/readings/btb/chapter6.pdf')
    ],
    lect1: lect('Data', "L11 - Social Implications II"),
    lab1: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    disc1: disc('HW3 Prep'),
    lect2: lect('AI', 'L12 - Concurrency'),
    work: work('Work Session'),
    readings2: [
        reading('BtB Appendix',
                '{{ site.baseurl }}/resources/readings/btb/Btb_Appendix.pdf'),
        reading('TED: What is the Internet?',
                'https://www.youtube.com/watch?v=XE_FPEFpHt4'),
        reading('Moore\'s Law Keeps Going, Defying Expectations',
                'http://www.scientificamerican.com/article/moore-s-law-keeps-going-defying-expectations/'),
        reading('Free Lunch is Over',
                'http://www.gotw.ca/publications/concurrency-ddj.htm',
                'hard'),
        reading('How Moore\'s Law Works',
                'https://computer.howstuffworks.com/moores-law.htm',
                'optional'),
        reading('What is IBM\'s Watson?',
                bcourses('58003302'),
                'optional'),
        reading('Brian Harvey\'s AI notes',
                 docs('11-5SLIRkQpx2_Px4aOZgDdoDcUj9EA5goPKl-Hcioe4'),
                 'optional'),
        reading('The First Church of Robotics',
                'https://www.nytimes.com/2010/08/09/opinion/09lanier.html',
                'optional'),
        reading('Spending Moore\'s dividend (CACM)',
                bcourses('58003301'),
                'optional')
    ],
    lect3: lect('HCI, Front-End Development', 'L13 - Internet I'),
    lab2: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    disc2: disc('Concurrency / Recursive Reporters'),
    lect4: lect('Cryptography/Security', 'L14 - Internet II'),
    hw: [
        hw('HW3 2048', 'Thurs 7/16', [
            { title: "GROUP Submission",
              url: 'assignments/6365045' },
            { title: "INDIVIDUAL Submission",
              url: 'assignments/6442903' }
        ], hw3Spec),
        hw('Midterm Project<br><strong>Proposals</strong>', 'Wed 7/13', 'assignments/6365091', mtProjSpec)
    ]

    // [
//         hw('Midterm Project<br><strong>Individual</strong> Milestone', '3/13', 'assignments/6120151'),
//         hw('Midterm Project<br><strong>Group</strong> Milestone', '3/13', 'assignments/6120100')
//     ]
};

// JUL 18 - JUL 22
cs10.week5 = {
    readings1: [
        reading('BtB Chapter 7',
                '{{ site.baseurl }}/resources/readings/btb/chapter7.pdf'),
        // TODO: Replace these with Superfish?
        reading('The Heartbleed Bug',
                'https://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('When Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')
    ],
    lab1: lab('The Internet / Testing', 'berkeley_bjc/summer/10-internet-and-tic-tac-toe.topic', true),
    // lab: The Internet
    lect1: lect('Lambda and HOFs', 'L15 - Social Implications III'),
    disc1: disc('The Internet'),
    work: work('Work Session'),
    lect2: lect('Python 1', 'L16 - Data'),
    readings2: 'No Readings<br><br><strong>Midterm Review Session</strong><br>Sunday 7/17 | 10 - 1 PM<br>306 Soda',
    // <br><a href="https://tinyurl.com/midtermsp15" target="_blank">Slides</a> | (<a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jasnowiss10&ProjectName=Midterm%20Review%20Solutions" target="_blank">Solutions</a>)
    lect3: lect('Python 2', 'L16 - Data'),
    lab2: lab('With-Snap<em>!</em> Online Exam'),
    lect4: lect('No Lecture<br>'),
    disc2: disc('Privacy'),
    // TODO: Push back until after MT?
    hw: [
        hw('Midterm Project<br><strong>Milestone</strong>', 'Tues 7/19', 'assignments/6365093'),
        hw('Midterm Project', 'Sun 7/24', 'assignments/6365047', mtProjSpec)
    ]
};
cs10.week5.lect4.classes = 'exam';
cs10.week5.lect4.title += '<br><a href="exams/midterm.html">Midterm Exam</a><br><br>Thu 7/22<br>5 - 7 PM<br>3106 Etcheverry';
cs10.week5.lab2.classes = 'exam';

// JUL 25 - JUL 29
cs10.week6 = {
    readings1: [
        reading('Data Explosion Creates Revolution',
                'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        reading('Data Mining',
                'https://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        reading('IBM\'s Watson supercomputer to speed up cancer care',
                'http://www.bbc.com/news/technology-32607688'),
        reading('Data Pitfalls',
                'https://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls',
                'optional'),
        // TODO: bCourses
        reading('Computing as Social Science',
                'https://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                'optional')
    ],
    disc1: disc('Data and HOFs'),
    lab1: lab('Lambdas and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lect1: lect('Git', 'L18 - Python I'),
    work: work('Find Final Groups and Get Early Feedback'),
    lect2: lect('Future of Computing', 'L19 - Limits of Computing'),
    readings2: [
        reading('BtB Chapter 8',
                '{{ site.baseurl }}/resources/readings/btb/chapter8.pdf')
    ],
    lab2: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    disc2: disc('Python'),
    lect3: lect('Industry Panel', 'L20 - Python II'),
    lect4: lect('Summary and Farewell', 'L21 - Future of Computing'),
    hw: [
        hw('Explore Post', 'Fri 7/29', '', exploreSpec),
        hw('Final Project Proposal', 'Fri 7/29', '', finalProjSpec)
    ]
};

// AUG 1 - AUG 5
cs10.week7 = {
    readings1: [
        reading('How the Raspberry PI Sparked a Maker Revolution',
                'http://www.popsci.com/how-raspberry-pi-sparked-maker-revolution'),
	reading('TED: Interactive experiences with perceptual computing(Video)',
                'https://www.youtube.com/watch?v=wrSE8TcYlHU',
                'optional'),
        reading('The Great Robot Race (Video)',
                'https://www.youtube.com/watch?v=uoiJeIb0wBA',
                'optional'),
        reading('Halting Problem Poem',
                'https://introcs.cs.princeton.edu/java/76computability/halting-poem.html',
                'optional')
    ],
    lect1: lect('<strong>TODO</strong><br>Intel', 'L22 - Perceptual Computing'),
    lab1: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    disc1: disc('CS @ Cal and Beyond'),
    lect2: lect('<strong>TODO</strong><br>Vertigo Software'),
    work: work('Work Session'),
    readings2: [
        reading('Why is Quantum Different?',
                'https://www.scientificamerican.com/article.cfm?id=what-makes-a-quantum-comp'),
        reading('Here is why we should be really excited about Quantum Computers',
                'https://www.businessinsider.com/why-be-excited-about-quantum-computers-2015-4'),
        reading('Man-made DNA can now Store Data for Millions of Years',
                'https://gigaom.com/2015/02/17/man-made-dna-can-now-store-data-for-millions-of-years/'),
        reading('DNA Storage',
                'http://radar.oreilly.com/2012/08/dna-storage.html',
                'hard'),
        reading('Quantum Leap',
                'http://money.cnn.com/2006/07/26/magazines/fortune/futureoftech_quantum.fortune/index.htm',
                'optional'),
        reading('BtB: Conclusion',
                '{{ site.baseurl }}/resources/readings/btb/chapter9.pdf',
                'optional')
    ],
    lab2: lab('Besides Blocks: Text Processing in Python / Git', '#', true),
    disc2: disc('Summary and Farewell'),
    lect3: lect('<strong>TODO</strong>'),
    lect4: lect('TODO', 'L25 - Farewell'),
    hw: [
        hw('Explore Peer Comments', 'Mon 8/1', '', exploreSpec),
        hw('Final Project Milestone', 'Fri 8/5', '', finalProjSpec)
    ]
};

// AUG 8 - AUG 12
cs10.week8 = {
    readings1: 'No Readings<br>Study for the Final',
    lab1: lab('With-Snap<em>!</em> Online Exam'),
    disc1: disc('No Discussion'),
    lect1: lect('No Lecture'),
    lect2: lect('No Lecture'),
    work: work('No Lab'),
    readings2: 'No Readings<br>Study for the Final',
    lab2: lab('No Lab'),
    disc2: disc('No Discussion'),
    lect3: lect('No Lecture<br><strong>Final Exam (Evening) 6-9pm</strong>'),
    lect4: lect('No Lecture'),
    hw: hw('Final Project', 'Fri 8/12', '', finalProjSpec)
};
cs10.week8.lab1.classes = 'exam';
cs10.week8.lect3.classes = 'exam';
// Add deets about final time.
cs10.week8.lect3.title += '';

// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar();
});
