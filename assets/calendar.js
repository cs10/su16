    var cs10 = cs10 || {};

// Sunday at the start of the semester
cs10.startDate = '{{ site.startDate }}';
cs10.endDate   = '{{ site.endDate }}';

cs10.bCoursesID = '{{ site.bCourses }}';

cs10.gradingScheme = {
    'A+': 485,
    'A' : 470,
    'A-': 450,
    'B+': 445,
    'B' : 420,
    'B-': 400,
    'C+': 385,
    'C' : 370,
    'C-': 350,
    'D' : 300,
    'F' : 299
};


bcourses = function(id) {
    var base = 'https://bcourses.berkeley.edu/courses/';
    var reading = '/files/folder/Readings?preview='
    return base + cs10.bCoursesID + reading + id;
}
// ==================================================
// ==========     OBJECT CREATION          ==========
// ==================================================
// Return the week of the course in range [1, 17] else -1
function getWeekOfDate(date) {
    var now = new Date();
    var from = date;
    if (typeof from === 'string') {
        from = new Date(date);
    }

    var dist = from - now;

    if (dist < 0) {
        return -1;
    }

    var weeks = Math.floor(dist / (MS_DAY * 7));

    return weeks <= 17 ? weeks : -1;
}


cs10.newLabObject = function(title, url, rq, video) {
    var baseURL = '{{ site.labsurl }}/llab/html/empty-topic-page.html?topic=';
    var urlEnd  = '&novideo&noreading&noassingment&course={{ site.labsCourse }}';
    var lab = { type: 'Lab' };
    lab.title = title;

    // Global Counter for lecture
    cs10.rqCounter = cs10.rqCounter || 0;
    cs10.labCounter = cs10.labCounter || 0;

    if (!title) {
        lab.title = 'No Lab';
    }

    if (url) {
        cs10.labCounter += 1;
        lab.title = cs10.labCounter + ': ' + lab.title;
        lab.url = baseURL + url + urlEnd;
    }

    if (rq) {
        cs10.rqCounter += 1;
        rq = cs10.rqCounter;
    }

    if (title.indexOf('Project Work') !== -1) {
        lab.classes = 'project';
    }

    if (title.indexOf('No Lab') !== -1 || title.indexOf('No Class') !== -1) {
        lab.classes = 'noClass';
    }

    lab.RQ = rq;

    lab.video = video;
    return lab;
};

cs10.newReadingsObject = function(title, url, classes) {
    var reading = {
        type: 'Reading',
        title: title,
        url: url
    };

    if (!classes) {
        classes = 'required'; // Default option
    }

    reading.classes = 'reading ' + classes;

    return reading;
};

cs10.newLectureObject = function(title, path, guest) {
    var lect = { type: 'Lecture' };

    lect.title = title;
    if (!title) {
        lect.title = 'No Lecture';
        return lect;
    }

    if (title.indexOf('No Lecture') !== -1 || title.indexOf('No Class') !== -1) {
        lect.classes = 'noClass';
    }
    if (path) {
        lect.url = path;
    }

    lect.guest = guest;
    return lect;
};

cs10.newDiscussionObject = function(title, files) {
    var disc = { type: 'Discussion' };

    disc.title = title;
    if (!title) {
        disc.title = 'No Discussion';
    }

    if (title.indexOf('No Discussion') !== -1 || title.indexOf('No Class') !== -1) {
        disc.classes = 'noClass';
    }

    // Global Counter for discussions
    cs10.discussionCounter = cs10.discussionCounter || 0;
    cs10.discussionCounter += 1;

    if (files) {
        var count = cs10.discussionCounter;
        disc.url = 'discussion/' + (count < 10 ? '0' : '') + count + '/';
    }

    return disc;
};

cs10.newHomeworkObject = function(title, due, submission, spec) {
    var obj = {
        type: 'Homework',
        urls: []
    };

    // TODO: Consider refactoring this....
    if (!title) {
        obj.title = 'No Homework!<br />But you might want to check next week\'s';
        return obj;
    }

    obj.title = title;

    if (due) {
        obj.classes = 'due';
        obj.due = due;
    }

    if (spec) {
        obj.urls.push({
            title: "Spec",
            url: spec
        });
    }

    if (submission) {
        // Allow multiple submissions per assignment
        // but keep shorthand for a common single URL
        if (submission.constructor !== Array) {
            submission = [ {
                title: "Submit",
                url: submission
            } ];
        }

        submission.forEach(function(subm) {
            obj.urls.push({
                title: subm.title || "LINK -- FIXME",
                url: 'https://bcourses.berkeley.edu/courses/' + cs10.bCoursesID +
              '/' + subm
            });
        });
    }

    return obj;
};

// ==================================================
// ==========     RENDERING CODE           ==========
// ==================================================
// REQUIRES MOMENTJS
cs10.getWeekStartDate = function(week) {
    var start = moment(cs10.startDate);

    return start.add((week - 1) * 7 + 1, 'd');
}

cs10.renderTableCalendar = function() {
    var result = $('.cal-container');
    // TODO: weeks config
    for (var i = 1; i < 9; i += 1) {
        var color;
        if (i % 2 == 0) {
            color = 'light';
        } else {
            color = 'dark';
        }
        var first = $('.weekFirst').clone().removeClass('weekFirst');
        var data = cs10['week' + i];
        var row = cs10.renderTableFirst(i, data, color);
        first.append(row);
        result.append(first);
        var second = $('.weekSecond').clone().removeClass('weekSecond');
        second.append(cs10.renderTableSecond(i, data, color));
        result.append(second);
    }
};

// This renders a single week in the large semester calendar.
// M-W
cs10.renderTableFirst = function (week, data, color) {
    var result = $('<tr>').addClass('cal' + ' ' + color);
    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)
    result.append($('<td>').html(week))                      // Week Number
          .append($('<td>').html(cs10.getDateString(week)))  // Dates
          .append(cs10.renderTableReading(data.readings1))   // Readings
          .append(cs10.renderTableLab(data.lab1))            // 1st Lab
          .append(cs10.renderTableDiscussion(data.disc1))    // 1st discussion
          .append(cs10.renderTableLecture(data.lect1))       // Mon Lecture
          .append(cs10.renderTableLecture(data.lect2))       // Tues Lecture
          .append(cs10.renderTableLab(data.work))            // Work Session

    return result;
};

// W-F
cs10.renderTableSecond = function (week, data, color) {
    var result = $('<tr>').addClass('cal' + ' ' + color);
    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)
    result.append($('<td>').html(week))                      // Week Number
          .append($('<td>').html(cs10.getDateString(week)))  // Dates
          .append(cs10.renderTableReading(data.readings2))   // Readings
          .append(cs10.renderTableLab(data.lab2))            // 2nd Lab
          .append(cs10.renderTableDiscussion(data.disc2))    // 2nd Disc
          .append(cs10.renderTableLecture(data.lect3))       // Wed Lecture
          .append(cs10.renderTableLecture(data.lect4))       // Thus Lecture
          .append(cs10.renderTableHW(data.hw));              // Assignments

    return result;
};


cs10.getDateString = function(week) {
    var start = cs10.getWeekStartDate(week);
    var end   = moment(start).add(4, 'd');
    return (start.month() + 1) + '-' + start.date() + ' to ' +
            (end.month() + 1) + '-' + end.date();
};

cs10.renderTableReading = function(readings) {
    var result = $('<td>');
    if (!readings) {
        result.append('No Reading');
    } else if (typeof readings === 'string') {
        result.append(readings);
    } else {
        for (var i = 0; i < readings.length; i += 1) {
            var rd = readings[i];
            var a = $('<a>').html(rd.title).attr(
                {'class': rd.classes, 'href': rd.url, 'target': '_blank'} );
            result.append(a);
            result.append('<br>');
        }
    }
    return result;
};

cs10.renderTableLecture = function(lect) {
    var result = $('<td>');
    if (!lect) {
        result.append('No Lecture');
        result.attr({'class': 'noClass'});
    } else if (typeof lect === 'string') {
        result.append(lect);
    } else {
        if (lect.guest) {
            result.append($('<strong>').html('Guest Lecturer: ' + lect.guest));
            result.append($('<br>'));
        }
        var title = lect.title;
        if (lect.url) {
            title = $('<a>').attr({'href': lect.url}).html(lect.title);
        }
        result.append(title);
        result.append('<br>');
        result.attr({ 'class' : lect.classes });
    }
    return result;
};

cs10.renderTableLab = function(lab) {
    var result = $('<td>');
    if (!lab) {
        result.append('No Lab');
        result.attr({'class': 'noClass'});
    } else if (typeof lab === 'string') {
        result.append(lab);
    } else {
        var tag = lab.url ? '<a>' : '<span>';
        var title = $(tag).html(lab.title).attr({
            'href': lab.url, 'target': '_blank'});
        result.append(title);
        result.append('<br>');
        if (lab.RQ) {
            result.append($('<br>'));
            result.append($('<strong>').html('Reading Quiz ' + lab.RQ +' (in lab)'));
        }
        result.attr({ 'class' : lab.classes });
        if (lab.video) {
            result.append($('<br>'));
            result.append($('<a>').html('(Video Review)').attr({
                'href' : lab.video, 'target' : '_blank' }));
        }
    }
    return result;
};

cs10.renderTableDiscussion = function(disc) {
    var result = $('<td>');
    if (!disc) {
        result.append('No Discussion');
        result.attr({'class': 'noClass'});
    } else if (typeof disc === 'string') {
        result.append(disc);
    } else {
        result.append(disc.title);
        result.append('<br>');
        result.attr({ 'class' : disc.classes });
        if (disc.url) {
            var url = $('<a>').html('Resources').attr({'href' : disc.url});
            result.append($('<br>'));
            result.append($('<strong>').html('(' + url[0].outerHTML + ')'));
        }
    }
    return result;
};

cs10.renderTableHW = function(hw) {
    var result = $('<td>');
    if (!hw) {
        hw = [cs10.newHomeworkObject('No Homework')];
    } else if (typeof hw === 'string') {
        hw = [cs10.newHomeworkObject(hw)];
    } else if (!(hw instanceof Array)) { // HW is a list.
        hw = [ hw ];
    }

    for (var i = 0; i < hw.length; i += 1) {
        var assn = hw[i];
            result.append(assn.title);
            result.append('<br>');
            result.attr({ 'class' : assn.classes });

        var j = 0, links = assn.urls.length, item;
        for (; j < links; j += 1) {
            item = assn.urls[j];
            result.append($('<a>').html(item.title).attr({
                href: item.url,
                target: '_blank'
            }));

            if (j + 1 < links) {
                result.append(' | ');
            }
        }

        if (assn.url) {
            result.append($('<a>').html('Submit').attr({
                'href' : assn.url, }));
        }
        if (assn.due) {
            result.append('<br>');
            result.append($('<i>').html('due ' + assn.due + ' at 11:59pm'));
        }
        if (i + 1 < hw.length) {
            result.append('<hr>');
        }
    }

    return result;
};