// Instructors

var ianB = {
    name: 'Instructor Ian Birnam',
    img: 'Sp14/IanBirnam.jpg',
    imgSrc: '../Su16/IanBirnam.jpg',
    imgCrazy: '../small/IanBirnamCrazy.jpg',
    // web: 'http://michaelballphoto.com',
    // bio: 'MichaelBall.txt',
    email: 'email coming!'
};

var alexM = {
    name: 'Instructor Alex McKinney',
    img: 'Sp14/AlexMcKinney.jpg',
    imgSrc: 'AlexMcKinney.jpg',
    // web: 'http://michaelballphoto.com',
    // bio: 'MichaelBall.txt',
    email: 'email coming!'
};

// TAs
var laraM = {
    name: 'Head TA Lara McConnaughey',
    img: 'Su15/LaraMcConnaughey.jpg',
    imgSrc: '../Su16/LaraMcConnaughey.jpg',
    imgCrazy: '../small/LaraMcConnaugheyCrazy.jpg',
    email: 'lara@cs10.org'
};

var carlosF = {
    name: 'TA Carlos Flores',
    web: 'http://carlos.codes',
    img: 'NPY3D.jpg',
    imgSrc: '../Su16/CarlosFlores.jpg', 
};

var elizabethS = {
    name: 'TA Elizabeth Steger',
    img: 'NPY3D.jpg',
    imgSrc: '../Su16/LizzySteger.jpg',
};

// var LaurenMock = {
//     name: 'Head TA Lauren Mock',
//     img: 'Sp14/LaurenMock.jpg',
//     imgSrc: '../su16/lauren cute.png',
//     web: 'https://linkedin.com/in/laurenmock',
//     email: 'lauren@cs10.org' };

// var AranyU = {
//     name: 'TA Arany Uthayakumar',
//     img: 'Sp14/AranyUthayakumar.jpg',
//     imgSrc: '../su16/arany cute.png',
//     // bio: 'AranyBio.txt',
//     email: 'arany@cs10.org' };

// var erikD = {
//     name: 'TA Erik Dahlquist',
//     img: 'Sp15/ErikDahlquist.jpg',
//     imgSrc: '../su16/erik cute.png',
//     email: 'erik@cs10.org' };

// var PeterS = {
//     name: '(Sort of) TA Peter Sujan',
//     img: 'Fa12/PeterSujan.jpg',
//     imgSrc: '../su16/peter cute.png',
//     web: 'https://ocf.berkeley.edu/~psujan',
//     // bio: 'PeterBio.txt',
//     email: 'peter@cs10.org' };

// // Readers
var christianN = {
    name: 'Reader Chirstian Nicoloso',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};

var jobelV = {
    name: 'Reader Jobel Vecino',
    img: 'NPY3D.jpg',
    imgSrc: '../Su16/JobelVecino.jpg', 
};

var meghnaD = {
    name: 'Reader Meghna Dasgupta',
    img: 'NPY3D.jpg',
    imgSrc: '../Su16/MeghnaDasgupta.jpg',
};

var patrickO = {
    name: 'Reader Patrick O\'Halloran',
    img: 'NPY3D.jpg',
    imgSrc: 'NPY3D.jpg',
};



/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

var inst = [ ianB, alexM ];
var tas = [laraM, carlosF, elizabethS]//[ LaurenMock, AranyU, erikD, PeterS ];

var readers = [christianN, jobelV, meghnaD, patrickO]//[ jobelV, katherinem, laram ];

// If you need to add a new SECTION add it to this object.
// Follow the same format.
var all = {
    readers: readers,
    tas: tas,
    inst: inst
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

// Build a basic object for a person from the current semester.
function baseObj(name, baseDir) {
    var src = name.replace(/ /g , '');
    var baseDir = baseDir || 'Sp14/';
    return { name: name,
             img: baseDir + src + '.jpg',
             imgSrc: src + '.jpg' };
}

function buildPerson(data, width) {
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.

    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data);
    }
    var imgPathBase = '{{ site.baseurl }}/resources/images/small/';
    var imgPath = imgPathBase + data.imgSrc;

    // Date Hacks for fun!
    if (Date().substr(4, 6) == 'Apr 01') {
        imgPath = 'https://www.cs.berkeley.edu/~ddgarcia/i/DanGarciaUCBFaculty2004Eyebrow_320.jpg';
    }

    // Create a div with this person's data, setting a class for width
    // Col-md- is based on standard bootstrap classes, md-20 is my own addition.
    var cls = 'col-md-' + (width === 5 ? '20' : Math.floor(12/width));
    elm = '<div class="'+ cls + '">';
    if (data.img) {
        elm += '<a href="{{ site.baseurl }}/resources/images/' + data.img + '">';
    }

    elm += '<img class="staff" align="center" ';
    elm += 'alt=" Staff Photo: ' + data.name + '" title="' + data.name + '" src="';
    elm += imgPath + '"';
    if (data.imgCrazy) {
        var crazyPath = imgPath.replace('.jpg', 'Crazy.jpg');
        elm += ' onmouseenter="crazyImage(this, ' + " '" + crazyPath + "'" + ')"';
        elm += ' onmouseleave="normalImage(this,' + " '" + imgPath + "'" + ')"';
    }
    elm += '/>';
    if (data.img) {
        elm += '</a>';
    }
    elm += '<br><strong>';
    if (data.web) {
        elm += '<a href="' + data.web + '" target="_blank">' + data.name + '</a>';
    } else {
        elm += data.name;
    }
    elm += '</strong> ';
    if (data.bio) {
        elm += '(<a href="{{ site.baseurl }}/bios/' + data.bio + '">bio</a>)';
    }
    if (data.email) {
        elm += '<br><a href="mailto:' + data.email +
        '?subject=[CS10] SUBJECT"><code>' + data.email + '</code></a>';
    }
    if (data.office) {
        elm +=  '<br>' + data.office;
    }
    elm += '</div>';
    return elm;
}

function buildGroup(group, w) {
    // Create image elements for all photos in the group (HTML ID)
    // with a WIDTH of w photos per row.
    var ppl = all[group];
    var doc = document.getElementById(group);
    var content = '';
    for (var i = 0; i < ppl.length; i += w) {
        content += '<div class="row staffimgrow">';
        for (var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i;
             }
            content += buildPerson(ppl[j], w);
        }
        content += '</div>';
        content += '<div class="clearfix"></div>';
    }
    doc.innerHTML += content;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

function crazyImage(image, crazyPath) {
    image.src = crazyPath;
}
function normalImage(image, normalPath) {
    image.src = normalPath;
}

/* more code to run on page load */
// Parameters: a section (HTML 'id') and num of images per row.
buildGroup('inst', 5);
buildGroup('tas', 4);
buildGroup('readers', 3);
