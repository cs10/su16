/* Shortcuts for creating schedule objects
 * Paramters:
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
var hw2Spec = docs('1iJDOxWMBnmE5lOzqmUi_-F-HoSyGuQrzn-COiGQd29Y');
var hw3Spec = docs('1JBK9QEub82fxr0fkbSQJY68kKS0QBSzqe4ufafZ0mqo');
var mtProjSpec = docs('1-uGB5qRYzM0bX5BjDTh527Zo-3GlZMGcLcyKHIViFiA');
var exploreSpec = docs('13OqKNmhbN8PfuGhv5yZYLqvzHKHm08n1dV3n7Prxb5o');
var finalProjSpec = docs('1InDacW4tmqeFfxgDxsSv0ebY8LiBTj_3A03uhY7-vIw');

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JUN 22 - 26
cs10.week1 = {
    readings1: 'No Readings',
    lect1: lect('Welcome and Abstraction'),
    lab1: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_pair/1-introduction.topic"),
    disc1: disc('Welcome to CS10!'),
    lect2: lect('Functions'),
    work: work('Work Session'),
    readings2: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                '{{ site.baseurl }}/resources/readings/BH-Abstraction.txt'),
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
    lect3: lect('Creativity and Abstraction'),
    lab2: lab('Build Your Own Blocks', 'berkeley_bjc/intro_pair/2-loops-variables.topic', true),
    lect4: lect('Creativity'),
    disc2: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw('HW0', 'Wed 6/24', 'quizzes/1969116')
};

// JUN 29 - JUL 3
cs10.week2 = {
    readings1: [
        reading('BtB Chapter 1',
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter1.pdf'),
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
        reading('More readings on video games',
                '{{ site.baseurl }}/resources/readings/video-games/',
                'optional'),
        reading('Animating a Blockbuster',
                'https://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')
        // reading('Kinect\'s Future a Game Controller in Everything',
        //         'https://www.msnbc.msn.com/id/40077373/ns/technology_and_science-games/',
        //         'optional')
    ],
    lect1: lect('Programming Paradigms'), // 'L05 - Programming Paradigms'
    lab1: lab('Conditionals', 'berkeley_bjc/intro_pair/3-conditionals.topic', true),
    // lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    lect2: lect('Algorithms'), // 'L06 - Algorithms I'
    disc1: disc('Functions'),
    work: lab('Lab: Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    readings2: [
        reading('BtB Chapter 2',
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        // TODO: Put this article in bCourses!
        reading('What’s Hot in the Art World? Algorithms',
                'http://www.wsj.com/articles/whats-hot-in-the-art-world-algorithms-1432687554'),
        reading('How Algorithms Shape Our World',
                'https://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
        reading('Program or Be Programmed',
                'https://tedxtalks.ted.com/video/Douglas-Rushkoff-at-TEDxNYED'),
        reading('Program or Be Programmed: A Guide',
                'https://dtc-wsuv.org/hashnextchapter/wp-content/uploads/2013/03/Rushkoff-Study-Guide.pdf',
                'optional')
    ],
    lect3: lect('Algorithmic Complexity'), // 'L07 - Algorithms II'
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic', true),
    lect4: lect('No Lecture'),
    disc2: disc('All About Lists'),
    hw: hw('HW1: Word Guessing', 'Wed 7/1', 'assignments/6365043', hw1Spec)
};
cs10.week2.lect4.classes = 'noClass';

// JUL 6 - JUL 10
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
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter3.pdf',
                'optional')
    ],
    lect1: lect('Recursion I'),
    lab1: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    // lab('Algorithmic Complexity', "berkeley_bjc/areas/algorithm-complexity.topic"),
    lect2: lect('Social Implications I'),
    disc1: disc('Algorithmic Complexity and Quest Review'),
    work: work('Work Session'),
    readings2: 'No Readings<br><br><strong>Quest Review Session</strong><br>Sunday, 7/5 2-4pm<br>306 Soda',
    lect3: lect('Quest In Class', '../exams/quest.html'),
    lect4: lect('Recursion II'),
    lab2: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    disc2: disc('<span style="font-size:150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup></span>'),
    hw: [
        hw('HW2: Snowman', 'Mon 7/6', 'assignments/6365044', hw2Spec),
        hw('Midterm Project<br><strong>Proposals</strong>', 'Mon 7/6', 'assignments/6365091', mtProjSpec),
    ]
};
cs10.week3.lect3.classes = 'exam';

// JUL 13 - JUL 17
cs10.week4 = {
    readings1: [
        reading('BtB Chapter 5 Reading Segment 1',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '{{ site.baseurl }}/resources/readings/btb/BtB5-pt3.pdf'),
        reading('BtB Chapter 6 (27-37)',
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf')
    ],
    lect1: lect('Social Implications II'),
    lab1: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    disc1: disc('Quest Debrief & HW Questions'),
    lect2: lect('Concurrency'),
    work: work('Work Session'),
    readings2: [
        reading('BtB Appendix',
                '{{ site.baseurl }}/resources/readings/btb/Btb_Appendix.pdf'),
        reading('TED: What is the Internet?',
                'https://www.youtube.com/watch?v=XE_FPEFpHt4'),
        reading('Moore\'s Law Keeps Going, Defying Expectations',
                'http://www.scientificamerican.com/article/moore-s-law-keeps-going-defying-expectations/'),
        reading('Free Lunch is Over',
                'https://www.gotw.ca/publications/concurrency-ddj.htm',
                'hard'),
        reading('How Moore\'s Law Works',
                'https://computer.howstuffworks.com/moores-law.htm',
                'optional'),
        reading('What is IBM\'s Watson?',
                bcourses('58003302'),
                'optional'),
        reading('Brian Harvey\'s AI notes',
                '{{ site.baseurl }}/resources/readings/BH-ai.txt',
                'optional'),
        reading('The First Church of Robotics',
                'https://www.nytimes.com/2010/08/09/opinion/09lanier.html',
                'optional'),
        reading('Spending Moore\'s dividend (CACM)',
                bcourses('58003301'),
                'optional')
    ],
    lect3: lect('Internet I'),
    lab2: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    disc2: disc('Concurrency'),
    lect4: lect('Internet II'),
    hw: hw('HW3', 'Mon 7/13', 'assignments/6365045', hw3Spec)
    // [
//         hw('Midterm Project<br><strong>Individual</strong> Milestone', '3/13', 'assignments/6120151'),
//         hw('Midterm Project<br><strong>Group</strong> Milestone', '3/13', 'assignments/6120100')
//     ]
};

// JUL 20 - JUL 24
cs10.week5 = {
    readings1: [
        reading('BtB Chapter 7',
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter7.pdf'),
        // TODO: Replace these with Superfish?
        reading('The Heartbleed Bug',
                'https://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('When Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')
    ],
    lab1: lab('Practice with HOFs and Functions as Data', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    // lab: The Internet
    lect1: lect('Lambda & HOFs'),
    disc1: disc('The Internet'),
    work: work('Work Session'),
    lect2: lect('Data'),
    readings2: [
        reading('BtB Chapter 8',
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter8.pdf')
    ],
    lect3: lect('Social Implications III'),
    lab2: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lect4: lect('Besides Blocks I'),
    disc2: disc('Data & HOFs'),
    hw: [
        hw('Midterm Project', 'Mon 7/20', 'assignments/#', mtProjSpec),
        hw('"Explore" Writing Assignment', 'Fri 7/24', 'discussion_topics/#', exploreSpec),
    ]
};

// JUL 27 - JUL 31
cs10.week6 = {
    readings1: [
        reading('Data Explosion Creates Revolution',
                'https://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
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
    lect3: lect('Besides Blocks I', 'L18 - Besides Blocks I', 'Michael Ball'),
    lab1: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    lect2: lect('Social Implications III'), // 'L19 - Social Implications III'
    readings2: 'No Readings<br><br><strong>Midterm Review Session</strong><br>Sun 3/15 2-5pm<br>2050 VLSB',
    // <br><a href="https://tinyurl.com/midtermsp15" target="_blank">Slides</a> | (<a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jasnowiss10&ProjectName=Midterm%20Review%20Solutions" target="_blank">Solutions</a>)
    lab1: lab('Lab Catch Up Session'),
    disc1: disc('Data and HOFs'),
    hw: hw('"Explore" Peer Comments and Artifact', '4/10', 'discussion_topics/3968074', 'assign.html?//docs.google.com/document/d/13OqKNmhbN8PfuGhv5yZYLqvzHKHm08n1dV3n7Prxb5o/pub')
};
cs10.week6.lect3.classes = 'exam';
// cs10.week6.lect2.title += '<br><br><div class="exam inner"><a href="exams/midterm.20html">Midterm Exam</a><br><br>Thursday 3/19<br>7-9pm; Location: 2050 VLSB</div>';

// AUG 3 - AUG 7
cs10.week7 = {
    readings1: [
        reading('The Great Robot Race (Video)',
                'https://www.youtube.com/watch?v=uoiJeIb0wBA',
                'optional'),
        reading('Halting Problem Poem',
                'https://introcs.cs.princeton.edu/java/76computability/halting-poem.html',
                'optional')
    ],
    lect1: lect('Besides Blocks II', 'L20 - Besides Blocks II'),
    lab1: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    
    lect2: lect('Data', 'L21 - Data'),
    readings2: [
        reading('Why is Quantum Different?',
                'https://www.scientificamerican.com/article.cfm?id=what-makes-a-quantum-comp'),
        reading('Here is why we should be really excited about Quantum Computers',
                'https://www.businessinsider.com/why-be-excited-about-quantum-computers-2015-4'),
        reading('Man-made DNA can now Store Data for Millions of Years',
                'https://gigaom.com/2015/02/17/man-made-dna-can-now-store-data-for-millions-of-years/'),
        reading('DNA Storage',
                'https://radar.oreilly.com/2012/08/dna-storage.html',
                'hard'),
        reading('Quantum Leap',
                'https://money.cnn.com/2006/07/26/magazines/fortune/futureoftech_quantum.fortune/index.htm',
                'optional'),
        reading('BtB: Conclusion',
                'https://www.bitsbook.com/wp-content/uploads/2008/12/chapter9.pdf',
                'optional')
    ],
    lab1: lab('Besides Blocks: Data in Python', 'berkeley_bjc/python/besides-blocks-data.topic'),
    disc1: disc('Practical Privacy Pointers'),
    hw: hw('Final Project Proposal', '4/17', 'quizzes/1869514', finalProjSpec)
};

// AUG 10 - AUG 14
cs10.week8 = {
    readings1: 'No Readings<br>Study for final',
    lect3: lect('Limits of Computing', 'L22 - Limits of Computing'),
    lab1: lab('Project Work Session', '', true),
    lect2: lect('Future of Computing', 'L23 - Future of Computing'),
    lab1: lab('Project Work Session'),
    disc1: disc('CS @ Cal and Beyond'),
    hw: hw('Final Project Milestone', '4/24', 'assignments/6209589', finalProjSpec),
    readings2: 'No Readings<br>Study for Final',
    lect1: lect('Saving the World with Computing', 'L24 - Saving the World with Computing', 'Kathy Yelick'),
    lab1: lab('Project Work Lab', '', true),
    lect2: lect('Summary and Farewell', 'L25 - Farewell'),
    lab1: lab('With-<span class="snap">snap</span> Exam'),
    disc2: disc('Summary and Farewell'),
    hw: hw('Final Project', '5/1', 'assignments/5919088', finalProjSpec)
};
cs10.week8.lab1.classes = 'exam';
cs10.week8.lect2.classes = 'exam';
// Add note after link is made.
cs10.week8.lect2.title += '<br>In-Class Final Question';


// Load the Calendar
$(document).ready(function() {
    cs10.renderTableCalendar();
    updateCalendar();
});
