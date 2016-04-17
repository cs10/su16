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
var hw2Spec = docs('1veTg-81TsMPWdtTlYG8vvJBZa1FQMtLY4dGgftPLz-c');
var hw3Spec = docs('13ifT2Ro5sE0d2dkC72aeg0iHlj8Ofif7BwFO67ojcks');
var mtProjSpec = docs('1Fq4CoXBJDpsJqTsgBhckF7AbLnQpESyCt7ReKqWDXU4');
var exploreSpec = docs('1f8hyJUFV_axg5oiJ9uUgVIWZq0MhwprGaiKvYlwxDUs');
var finalProjSpec = docs('1YQkqiQF6QR94wOmZB7flliU8ga4neN6sitPFDlbh8Yo');

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JUN 20 - 24
cs10.week1 = {
    readings1: 'No Readings',
    // TODO: add lecture slides
    lect1: lect('Welcome and Abstraction'),
    lab1: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/summer/1-introduction.topic"),
    disc1: disc('Welcome to CS10! / The Power of Binary'),
    // TODO: add lecture slides
    lect2: lect('Procedures'),
    work: work('Work Session'),
    readings2: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                docs('1PZJ_LYYWRYu12cTbBKF9IyY4BqEG-BibgisBoQn9BpY')),
        reading('TEDx Berkeley: The Beauty and Joy of Computing',
                'https://www.youtube.com/watch?v=ozRovyDwKEM'),
        reading('Pair Programming Explained',
                'http://www.wikihow.com/Pair-Program'),
        reading('Why Learn Snap?',
                'https://www.youtube.com/watch?v=_Mwc1gc77dc'),
        reading('BtB Chapter 1',
                '{{ site.baseurl }}/resources/readings/btb/chapter1.pdf'),
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
    // TODO: add lecture slides
    lect3: lect('Scoping'),
    lab2: lab('Build Your Own Blocks', 'berkeley_bjc/summer/2-loops-variables.topic', true),
    // TODO: add lecture slides
    lect4: lect('Programming Paradigms'),
    disc2: disc('Functions'),
    hw: hw('HW0', 'Wed 6/22', 'quizzes/1969116')
};

// JUN 27 - JUL 1
cs10.week2 = {
    readings1: [
        reading('The Story of Alan Turing &amp; His Machine',
                'https://youtu.be/CQhrMmbiaM0'),
        reading('What is an Algorithm? (book excerpts)',
                'https://bcourses.berkeley.edu/courses/1408649/files/folder/Readings?preview=60735934'),
        reading('10 Algorithms that Dominated the World',
                'https://medium.com/@_marcos_otero/the-real-10-algorithms-that-dominate-our-world-e95fa9f16c04#.danbwberp'),
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
    // TODO: add lecture slides
    lect1: lect('Algorithms'),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    // TODO: add lecture slides
    lect2: lect('Algorithmic Complexity'),
    disc1: disc('Scoping'),
    work: lab('Lab: Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    readings2: [
        reading('Test Driven Development',
                'https://www.codeenigma.com/community/blog/introduction-test-driven-development')
    ],
    // TODO: add lecture slides
    lect3: lect('Testing, HW3'),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic', true),
    // TODO: add lecture slides
    lect4: lect('Recursion I'),
    disc2: disc('All About Lists'),
    hw: hw('HW1: Word Guessing', 'Wed 6/29', 'assignments/6365043', hw1Spec)
};
//cs10.week2.lect4.classes = 'noClass';
// cs10.week2.work.title += '<hr><strong>Quest Review (Sect 112)</strong>';

// JUL 4 - JUL 8
cs10.week3 = {
    readings1: 'No Readings',
    lect1: lect('No Lecture'),
    lab1: lab('No Lab - Please attend lab on Tu/Th to make up'),
    // TODO: add lecture slides
    lect2: lect('Recursion II'),
    disc1: disc('Algorithmic Complexity'),
    work: lab('Algorithms & Algorithmic Complexity', 'berkeley_bjc/summer/6-algorithms-and-complexity.topic'),
    readings2: [
        reading('Addicted to Apps', 
                'http://www.nytimes.com/2013/08/25/sunday-review/addicted-to-apps.html'),
        reading('LastPass Hack Explained',
                'http://www.macworld.com/article/2936663/lastpass-was-hacked-heres-what-you-have-to-do.html'),
        reading('iPhones & FBI Going Dark',
                'https://www.lawfareblog.com/iphones-fbi-and-going-dark'),
        reading('ISIS + WhatsApp',
                'http://www.nytimes.com/2015/11/22/opinion/stopping-whatsapp-wont-stop-terrorists.html'),
        reading('What Is Front-End Development?',
                'https://css-tricks.com/front-end-development-is-development/')
    ],
    // TODO: add lecture slides
    lect3: lect('Social Implications'),
    // TODO: add lecture slides
    lect4: lect('Design / Front-End Development'),
    lab2: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    disc2: disc('<span style="font-size:150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup></span>'),
    hw: hw('HW2: Encryptify', 'Wed 7/6', 'assignments/6365044', hw2Spec)
};
cs10.week3.lect1.classes = 'noClass';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';

// JUL 11 - JUL 15
cs10.week4 = {
    readings1: [
        reading('IBM\'s Watson supercomputer to speed up cancer care',
                'http://www.bbc.com/news/technology-32607688'),
        reading('AlphaGo and Game AI',
                'http://www.wired.com/2016/03/third-straight-win-googles-ai-claims-victory-historic-match-go-champ/'),
        reading('AI @ Berkeley',
                'http://www.bloomberg.com/features/2015-preschool-for-robots/')
    ],
    // TODO: add lecture slides
    lect1: lect('Social Implications II'),
    lab1: lab('Testing', 'berkeley_bjc/2048-testing/2048.topic', true),
    disc1: disc('HW3 Prep'),
    // TODO: add lecture slides
    lect2: lect('Social Implications II'),
    work: work('Work Session'),
    readings2: [
        reading('TED: What is the Internet?',
                'https://www.youtube.com/watch?v=XE_FPEFpHt4'),
        reading('Moore\'s Law Keeps Going, Defying Expectations',
                'http://www.scientificamerican.com/article/moore-s-law-keeps-going-defying-expectations/'),
        reading('Data Mining Explained',
                'http://www.anderson.ucla.edu/faculty/jason.frand/teacher/technologies/palace/datamining.htm'),
        reading('Dining Philosphers with Ron Swanson',
                'http://adit.io/posts/2013-05-11-The-Dining-Philosophers-Problem-With-Ron-Swanson.html')        
    ],
    // TODO: add lecture slides
    lect3: lect('Concurrency'),
    lab2: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    disc2: disc('The Internet'),
    // TODO: add lecture slides
    lect4: lect('Internet'),
    hw: [
        hw('Midterm Project<br><strong>Proposals</strong>', 'Wed 7/13', 'assignments/6365091', mtProjSpec),
        hw('HW3 2048', 'Fri 7/15', [
            { title: "GROUP Submission",
              url: 'assignments/6365045' },
            { title: "INDIVIDUAL Submission",
              url: 'assignments/6442903' }
        ], hw3Spec)
    ]

    // [
//         hw('Midterm Project<br><strong>Individual</strong> Milestone', '3/13', 'assignments/6120151'),
//         hw('Midterm Project<br><strong>Group</strong> Milestone', '3/13', 'assignments/6120100')
//     ]
};

// JUL 18 - JUL 22
cs10.week5 = {
    readings1: [
        reading('BtB Chapter 5 Reading Segment 1',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt3.pdf'),
        reading('Thunderstrike 2 Worm Explained',
                'http://www.wired.com/2015/08/researchers-create-first-firmware-worm-attacks-macs/'),
        reading('Why Use Python?',
                'http://blog.trinket.io/why-python/%20http://cacm.acm.org/blogs/blog-cacm/176450-python-is-now-the-most-popular-introductory-teaching-language-at-top-us-universities/fulltext')
    ],
    lab1: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    // TODO: add lecture slides
    lect1: lect('Cryptography/Security'),
    disc1: disc('Concurrency / Recursive Reporters'),
    work: lab('The Internet', 'berkeley_bjc/summer/10-internet-and-tic-tac-toe.topic'),
    // TODO: add lecture slides
    lect2: lect('Lambda and HOFs'),
    readings2: 'No Readings<br><br><strong>Midterm Review Session</strong><br>Sunday, 7/17<br>10 AM - 1 PM<br>306 Soda',
    // <br><a href="https://tinyurl.com/midtermsp15" target="_blank">Slides</a> | (<a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jasnowiss10&ProjectName=Midterm%20Review%20Solutions" target="_blank">Solutions</a>)
    // TODO: add lecture slides
    lect3: lect('Python 1'),
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
cs10.week5.lect4.title += '<br><a href="exams/midterm.html">Midterm Exam</a><br><br>Thu 7/21<br>5 - 7 PM<br>0101 Moffitt';
cs10.week5.lab2.classes = 'exam';

// JUL 25 - JUL 29
cs10.week6 = {
    readings1: [
        reading('John DeNero NLP Video (Part 1)',
                'https://youtu.be/63kincM38po?list=PL6BsET-8jgYXFYO_3931xDuyBtNNR0z7X'),
        reading('John DeNero NLP Video (Part 2)',
                'https://youtu.be/U0aH_shhCeM?list=PL6BsET-8jgYXFYO_3931xDuyBtNNR0z7X'),            
        reading('What is Git?',
                'http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1'),
        reading('Simple Guide to Git',
                'http://rogerdudler.github.io/git-guide/', 'optional')
    ],
    disc1: disc('Data and HOFs'),
    lab1: lab('Lambdas and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    // TODO: add lecture slides
    lect1: lect('Python 2'),
    work: work('Find Final Groups and Get Early Feedback'),
    // TODO: add lecture slides
    lect2: lect('Git / Agile'),
    readings2: [
        reading('How the Raspberry PI Sparked a Maker Revolution',
                'http://www.popsci.com/how-raspberry-pi-sparked-maker-revolution'),
        reading('Why We Should be Really Excited About Quantum Computers',
                'https://www.businessinsider.com/why-be-excited-about-quantum-computers-2015-4'),
        reading('Man-made DNA Can Now Store Data for Millions of Years',
                'https://gigaom.com/2015/02/17/man-made-dna-can-now-store-data-for-millions-of-years/')
    ],
    lab2: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    disc2: disc('Python'),
    // TODO: add lecture slides
    lect3: lect('Graph Theory'),
    // TODO: add lecture slides
    lect4: lect('Future of Computing'),
    hw: [
        hw('Explore Post', 'Fri 7/29', '', exploreSpec),
        hw('Final Project Proposal', 'Fri 7/29', '', finalProjSpec)
    ]
};

// AUG 1 - AUG 5
cs10.week7 = {
    readings1: [
        reading('Last Question',
                'http://multivax.com/last_question.html',
                'optional')
    ],
    lect1: lect('Guest Lecture'),
    lab1: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    disc1: disc('CS @ Cal and Beyond'),
    lect2: lect('Guest Lecture'),
    work: work('Work Session'),
    readings2: 'No Readings',
    lab2: lab('Besides Blocks: Text Processing in Python / Git', '#', true),
    disc2: disc('Summary and Farewell'),
    lect3: lect('Industry Panel'),
    // TODO: add lecture slides
    lect4: lect('Summary and Farewell'),
    hw: [
        hw('Explore Peer Comments', 'Mon 8/1', '', exploreSpec),
        hw('Final Project Milestone', 'Fri 8/5', '', finalProjSpec)
    ]
};

// AUG 8 - AUG 12
cs10.week8 = {
    readings1: 'No Readings<br><br><strong>Final Review Session</strong><br>Sunday, 8/7<br>10 AM - 1 PM<br>306 Soda',
    lab1: lab('With-Snap<em>!</em> Online Exam'),
    disc1: disc('No Discussion'),
    lect1: lect('No Lecture'),
    lect2: lect('No Lecture<br><br><strong>Final Exam (Evening)<br><br>Tue 8/9<br>6-9pm<br>0101 Moffitt</strong>'),
    work: work('No Lab'),
    readings2: 'No Readings<br>Study for the Final',
    lab2: lab('No Lab'),
    disc2: disc('No Discussion'),
    lect3: lect('No Lecture'),
    lect4: lect('No Lecture'),
    hw: hw('Final Project', 'Fri 8/12', '', finalProjSpec)
};
cs10.week8.lab1.classes = 'exam';
cs10.week8.lect2.classes = 'exam';
// Add deets about final time.
// cs10.week8.lect3.title += '';

// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar();
});
