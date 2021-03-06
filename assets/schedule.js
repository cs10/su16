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
    lect1: lect('Welcome and Abstraction', 'https://docs.google.com/presentation/d/1CASpAjdiNSUEtH9yccPh2F5hrJiJQsE8B6Ma1n8dDo8/edit?usp=sharing'),
    lab1: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/summer/1-introduction.topic"),
    disc1: disc('Welcome to CS10!'),
    // TODO: add lecture slides
    lect2: lect('Procedures', 'https://docs.google.com/presentation/d/1D-blBjtBw--IeE5wTcHEpjdBolGOz4ESLE0Da7Oh_zU/edit?usp=sharing'),
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
    lect3: lect('Scoping', 'http://docs.google.com/presentation/d/1zuGTzrwfTxN-dd8nS7w4sjnIJdOtc6z3GaBtu2POgiA/edit?usp=sharing'),
    lab2: lab('Build Your Own Blocks', 'berkeley_bjc/summer/2-loops-variables.topic', true),
    // TODO: add lecture slides
    lect4: lect('Lists, Programming Paradigms','https://docs.google.com/presentation/d/1YiHC0LHHhQyvio3AUOVrTtvJiJbSlrmGJRkVi-VuZoM/edit?usp=sharing'),
    disc2: disc('Functions', 'https://drive.google.com/open?id=0Bx0JQN9vUt-3RW9TN195Qy01MFk'),
    hw: hw('HW0', 'Wed 6/22', 'quizzes/2242682')
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
    lect1: lect('Algorithms', 'http://docs.google.com/presentation/d/1SFTgsTWG2hquUH00GXVSJbRnq4rSDsu_aWoUf_NWoLg/edit?usp=sharing'),
    lab1: lab('Functions', 'berkeley_bjc/intro_pair/4-abstraction-testing.topic', true),
    // TODO: add lecture slides
    lect2: lect('Algorithmic Complexity', 'https://docs.google.com/presentation/d/1ccSv4RGGRq-Ly76_O0rf3OPkXkJyVqgggNuThEZZM3o/edit?usp=sharing'),
    disc1: disc('Scoping', 'https://drive.google.com/open?id=0Bx0JQN9vUt-3cERoYUxpRUJUN28'),
    work: lab('Lab: Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    readings2: [
        reading('Binary in History',
                'http://www.nature.com/news/polynesian-people-used-binary-numbers-600-years-ago-1.14380'),
        reading('Binary, Bits, and Bytes (Video)',
                'https://www.youtube.com/watch?v=EXYd9q2Ibn8'),
    ],
    // TODO: add lecture slides
    lect3: lect('Numerical Abstractions and Binary', 'https://docs.google.com/presentation/d/1wmWgz_ER0uz2cuSSHX6SWFQ1wG86GnjY84czHNMghFo/edit?usp=sharing'),
    lab2: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic', true),
    // TODO: add lecture slides
    lect4: lect('Recursion I', 'https://docs.google.com/presentation/d/1K5-AwINrdgLm6mh0FpE7uqVDAHfVbe_7JxNWbcXFuZY/edit?usp=sharing'),
    disc2: disc('All About Lists', 'https://drive.google.com/open?id=0Bx0JQN9vUt-3R3pmQVdweGpXZnc'),
    hw: hw('HW1: Word Guessing', 'Wed 6/29', 'assignments/7645402', hw1Spec)
};
//cs10.week2.lect4.classes = 'noClass';
// cs10.week2.work.title += '<hr><strong>Quest Review (Sect 112)</strong>';

// JUL 4 - JUL 8
cs10.week3 = {
    readings1: 'No Readings',
    lect1: lect('No Lecture'),
    lab1: lab('No Lab - Please attend lab on Tu/Th to make up'),
    // TODO: add lecture slides
    lect2: lect('Social Implications', 'https://docs.google.com/presentation/d/147eSV_T3_01IDdzPy0CYM1l66ETqZhKTRCOI1C-5448/edit?usp=sharing'),
    disc1: disc('The Power of Binary <br /> <br /> <b>No Monday Discussion</b> <br /> <b>Carlos Makeup Section</b> <br /> Tue. 11-12pm, 320 Soda', 'https://drive.google.com/folderview?id=0B36f0C9RFkarVlhHQmNMTm9xWFU&usp=sharing'),
    work: lab('Algorithms & Algorithmic Complexity <br /> <b> Makeup due to no Monday Lab </b>', 'berkeley_bjc/summer/6-algorithms-and-complexity.topic'),
    readings2: [
        reading('Addicted to Apps',
                'http://www.nytimes.com/2013/08/25/sunday-review/addicted-to-apps.html'),
        reading('LastPass Hack Explained',
                'http://www.macworld.com/article/2936663/lastpass-was-hacked-heres-what-you-have-to-do.html'),
        reading('iPhones & FBI Going Dark',
                'https://www.lawfareblog.com/iphones-fbi-and-going-dark'),
        reading('ISIS + WhatsApp',
                'http://www.nytimes.com/2015/11/22/opinion/stopping-whatsapp-wont-stop-terrorists.html'),
        reading('The Design of Everyday Things (Chapter 1 Summary)',
                'http://yangsu.github.io/blog/2012/10/14/chapter-1-the-psychopathology-of-everyday-things/'),
        reading('What Is Front-End Development?',
                'https://css-tricks.com/front-end-development-is-development/',
                'optional')
    ],
    // TODO: add lecture slides
    lect3: lect('Recursion II', 'https://docs.google.com/presentation/d/1CeFGiEIEhd66lRoG5CtF9V_CBmop-w5jehZzOo1eh30/edit?usp=sharing'),
    // TODO: add lecture slides
    lect4: lect('Design','https://docs.google.com/presentation/d/1FNFwxwpzZM2pva7kC482fdC4JXuoI1Trg0OdUfKETaE/edit?usp=sharing'),
    lab2: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    disc2: disc('Algorithmic Complexity', 'https://drive.google.com/open?id=0Bx0JQN9vUt-3NHJOQnBNTWg3Znc'),
    hw: hw('HW2: Encryptify', 'Wed 7/6', 'assignments/7645403', hw2Spec)
};
cs10.week3.lect1.classes = 'noClass';
// cs10.week3.work.title += '<hr><strong>Finch Robots Lab (Sect 111)</strong>';

// JUL 11 - JUL 15
cs10.week4 = {
    readings1: [
        reading('Test Driven Development',
                'https://www.codeenigma.com/community/blog/introduction-test-driven-development'),
        reading('The Geopolitics of Cyberspace After Snowden',
                'http://www.currenthistory.com/Deibert_CurrentHistory.pdf', 'hard'),
        reading('U.S. and China\'s Cyberwar',
                'https://techcrunch.com/2015/09/21/is-the-u-s-and-chinas-cyberwar-reaching-a-detente-or-a-flashpoint/'),
        reading('NSA Files: Decoded',
                'http://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded#section/1',
                'optional'),
        reading('Khan Academy: Information Theory',
                'https://www.youtube.com/watch?v=p0ASFxKS9sg&list=PLbg3ZX2pWlgKDVFNwn9B63UhYJVIerzHL&index=1',
                'optional')
    ],
    // TODO: add lecture slides
    lect1: lect('Testing', 'https://docs.google.com/presentation/d/1Fdk8yVd7JtVaxXHuD44UphZ9jA2gzo3FSft6H0Ajfvo/edit?usp=sharing'),
    lab1: lab('Testing', 'berkeley_bjc/2048-testing/2048.topic', true),
    disc1: disc('HW3 Prep / Recursion', 'https://drive.google.com/folderview?id=0Bx0JQN9vUt-3XzVnRXU1N0VQRFk&usp=sharing'),
    // TODO: add lecture slides
    lect2: lect('<strong>Guest Lecture:<br>Jobel Vecino<br></strong>The Geopolitics of Computing', 'https://drive.google.com/open?id=0B7Ddh7M7cw-0MDgyVHBJUWx6SHM'),
    work: work('Tic-Tac-Toe, Boards', 'berkeley_bjc/lists/tic-tac-toe.topic', false, false),
    readings2: [
        reading('TED: What is the Internet?',
                'https://www.youtube.com/watch?v=XE_FPEFpHt4'),
        reading('Moore\'s Law Keeps Going, Defying Expectations',
                'http://www.scientificamerican.com/article/moore-s-law-keeps-going-defying-expectations/'),
        reading('Dining Philosphers with Ron Swanson',
                'http://adit.io/posts/2013-05-11-The-Dining-Philosophers-Problem-With-Ron-Swanson.html')
    ],
    // TODO: add lecture slides
    lect3: lect('Internet', 'https://docs.google.com/presentation/d/1-_wfE_TgQXuBPYajivkWTpnbHhuR1ZNZ7elyOKiqOEw/edit?usp=sharing'),
    lab2: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    disc2: disc('Recursive Reporters', 'https://drive.google.com/folderview?id=0B36f0C9RFkarMWhORUtLdVVMRHM&usp=sharing'),
    // TODO: add lecture slides
    lect4: lect('Concurrency','https://docs.google.com/presentation/d/1Ip8kglMN7VEJZ4V9DYZm6ka62eFOCtdvvq4i527w7fY/edit?usp=sharing'),
    hw: [
        hw('Midterm Project<br><strong>Proposals</strong>', 'Wed 7/13', 'assignments/7645408', mtProjSpec),
        hw('HW3 2048', 'Fri 7/15', [
            { title: "GROUP Submission",
              url: 'assignments/7645404' },
            { title: "INDIVIDUAL Submission",
              url: 'assignments/7645405' }
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
                'http://blog.trinket.io/why-python/')
    ],
    lab1: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic', true),
    // TODO: add lecture slides
    lect1: lect('Cryptography & Security', 'https://docs.google.com/presentation/d/1mp5k6_mXelvnFHYDMK9IcCqpp_hPLBI5xPCdcc7J9cg/edit?usp=sharing'),
    disc1: disc('The Internet', 'https://drive.google.com/folderview?id=0B36f0C9RFkarNUNwWXFHUGtraFk&usp=sharing'),
    work: lab('The Internet', 'berkeley_bjc/summer/10-internet-and-tic-tac-toe.topic'),
    // TODO: add lecture slides
    lect2: lect('Procedures as Data', 'https://docs.google.com/presentation/d/1dQZ9pLElv8EeG2ACOS-GYwdFePdNuoX0qW88sI2SnV8/edit?usp=sharing'),
    readings2: 'No Readings<br><br><strong><a href="https://docs.google.com/presentation/d/1bhw_VcYnmIly4O3u2pt778VJ70wHSyKhEn2lVqw2lxk/edit?usp=sharing"> Midterm Review Session </a></strong><br>Sunday, 7/17<br>10 AM - 1 PM<br>310 Soda',
    // <br><a href="https://tinyurl.com/midtermsp15" target="_blank">Slides</a> | (<a href="https://snap.berkeley.edu/snapsource/snap.html#present:Username=jasnowiss10&ProjectName=Midterm%20Review%20Solutions" target="_blank">Solutions</a>)
    // TODO: add lecture slides
    lect3: lect('Python I', 'https://docs.google.com/presentation/d/1w9z35Nh0sV73KODjO2DDULFNVMOC7n--n_qokIEiZWQ/edit?usp=sharing'),
    lab2: lab('With-Snap<em>!</em> Online Exam'),
    lect4: lect('No Lecture<br>'),
    disc2: disc('Concurrency / Mutability', 'https://drive.google.com/folderview?id=0B36f0C9RFkarbnhPdnVMWDFzR0k&usp=sharing'),
    // TODO: Push back until after MT?
    hw: [
        hw('Midterm Project<br><strong>Milestone</strong>', 'Tues 7/19', 'assignments/7645407'),
        hw('Midterm Project', 'Sun 7/24', 'assignments/7645406', mtProjSpec)
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
                'https://youtu.be/U0aH_shhCeM?list=PL6BsET-8jgYXFYO_3931xDuyBtNNR0z7X')
    ],
    disc1: disc('Social Implications', 'https://drive.google.com/folderview?id=0B36f0C9RFkarcmRjNHhCR09mRnM&usp=sharing'),
    lab1: lab('Lambdas and HOFs', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    // TODO: add lecture slides
    lect1: lect('Python II', 'https://docs.google.com/presentation/d/1zH4G5PvK7E3WazwyzHUPeXXO1CGHzLKGaehwZHIsFvQ/edit?usp=sharing'),
    work: work('Find Final Groups and Get Early Feedback'),
    // TODO: add lecture slides
    lect2: lect('<strong>Guest Lecture:<br/>Jon McKinsey (Coursera)</strong><br/>Hackers and the Dark Web'),
    readings2: [
       reading('What is Git?',
                'http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1'),
        reading('Simple Guide to Git',
                'http://rogerdudler.github.io/git-guide/', 'optional'),
    ],
    lab2: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic', true),
    disc2: disc('Data and HOFs', 'https://drive.google.com/folderview?id=0B36f0C9RFkarV3AyWG5Dci1TMVU&usp=sharing'),
    // TODO: add lecture slides
    lect3: lect('<strong>Guest Lecture:<br>Joseph Cawthorne (Microsoft)</strong><br>Arduino'),
    // TODO: add lecture slides
    lect4: lect('Git / Agile', 'https://docs.google.com/presentation/d/1RPKFIM6QWgBzP0BQbVNN2Z4tV1d7ybJn-ZD0q86J-Lo/edit?usp=sharing'),
    hw: [
        hw('Explore Post', 'Fri 7/29', '', exploreSpec),
        hw('Final Project Proposal', 'Wed 7/27', '', finalProjSpec)
    ]
};

// AUG 1 - AUG 5
cs10.week7 = {
    readings1: [
        reading('How the Raspberry PI Sparked a Maker Revolution',
                'http://www.popsci.com/how-raspberry-pi-sparked-maker-revolution'),
        reading('Why We Should be Really Excited About Quantum Computers',
                'https://www.businessinsider.com/why-be-excited-about-quantum-computers-2015-4'),
        reading('Man-made DNA Can Now Store Data for Millions of Years',
                'https://gigaom.com/2015/02/17/man-made-dna-can-now-store-data-for-millions-of-years/')
    ],
    lect1: lect('OOP & Graph Theory', 'https://docs.google.com/presentation/d/1ve1v6Hpi5Vs9F4h739DH8FhzvuoQwzsJ5YTOcdAG1hA/edit?usp=sharing'),
    lab1: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic'),
    disc1: disc('Python', 'https://drive.google.com/folderview?id=0B36f0C9RFkarTUVnQmZZNFBfVkE&usp=sharing'),
    lect2: lect('Future of Computing', 'https://docs.google.com/presentation/d/1_bNnz055sT6ncZRZRT_u9fcMOssmR3W5PUxTb_WO4_4/edit?usp=sharing'),
    work: work('Work Session'),
    readings2: [
        reading('Last Question',
                'http://multivax.com/last_question.html',
                'optional')
    ],
    lab2: lab('Besides Blocks: Text Processing in Python / Git', 'berkeley_bjc/python/besides-blocks-text-processing.topic'),
    disc2: disc('CS @ Cal and Beyond / Summary and Farewell'),
    lect3: lect('Industry/Alumni Panel'),
    // TODO: add lecture slides
    lect4: lect('Summary and Farewell', 'https://docs.google.com/a/berkeley.edu/presentation/d/1M9HcV0GbZV-gmJn9pzgcCdStRp0IYjqGXYwkWniVVm0/edit?usp=sharing'),
    hw: [
        hw('Explore Peer Comments', 'Mon 8/1', '', exploreSpec),
        hw('Final Project Milestone', 'Fri 8/5', '', finalProjSpec)
    ]
};

// AUG 8 - AUG 12
cs10.week8 = {
    readings1: 'No Readings<br><br><strong><a href="https://drive.google.com/open?id=13q4RSHM8T3pZ57OhedRkwZ20PYall7l9XWzZS_KsshY"> Final Review Session </a></strong><br>Sunday, 8/7<br>10 AM - 1 PM<br>306 Soda',
    lab1: lab('With-Snap<em>!</em> Online Exam'),
    disc1: disc('No Discussion'),
    lect1: lect('No Lecture'),
    lect2: lect('No Lecture<br><br><strong>Final Exam (Evening)<br><br>Tue 8/9<br>6-9pm<br>306 Soda</strong>'),
    work: work('No Lab'),
    readings2: 'No Readings<br>Study for the Final',
    lab2: lab('No Lab'),
    disc2: disc('No Discussion'),
    lect3: lect('No Lecture'),
    lect4: lect('No Lecture'),
    hw: hw('Final Project', 'Thu 8/11', '', finalProjSpec)
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
