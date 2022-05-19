// post with Ajax
async function postWithAjax(elem) {

    var response = await fetch(elem.action, {
        method: elem.method,
        body: new FormData(elem)
    });

    console.log(response);

    var ktvs = await response.json();
    
    console.log(ktvs);

    var aVotes = ktvs.filter(function (ktv) {
        return ktv.times == "0";
    }); 
    var bVotes = ktvs.filter(function (ktv) {
        return ktv.times == "1-2";
    });
    var cVotes = ktvs.filter(function (ktv) {
        return ktv.times == "3-4";
    });
    var dVotes = ktvs.filter(function (ktv) {
        return ktv.times == ">4";
    });
    var eVotes = ktvs.filter(function (ktv) {
        return ktv.musictype == "pop";
    });
    var fVotes = ktvs.filter(function (ktv) {
        return ktv.musictype == "can";
    });
    var gVotes = ktvs.filter(function (ktv) {
        return ktv.musictype == "rock";
    });
    var hVotes = ktvs.filter(function (ktv) {
        return ktv.musictype == "folk";
    });
    var iVotes = ktvs.filter(function (ktv) {
        return ktv.musictype == "rap";
    });
    var jVotes = ktvs.filter(function (ktv) {
        return ktv.musictype == "other";
    });
    var kVotes = ktvs.filter(function (ktv) {
        return ktv.gender == "male";
    });
    var lVotes = ktvs.filter(function (ktv) {
        return ktv.gender == "female";
    });
    
    chart10.data = [
        {
            times: "Never",
            timeselect: aVotes.length || 0
        },
        {
            times: "1-2 times",
            timeselect: bVotes.length || 0
        },
        {
            times: "3-4 times",
            timeselect: cVotes.length || 0
        },
        {
            times: "more than 4 times",
            timeselect: dVotes.length || 0
        }
    ];

    chart20.data = [
        {
            musictype: "Pop song",
            typeselect: eVotes.length || 0
        },
        {
            musictype: "Cantinese Golden Melody",
            typeselect: fVotes.length || 0
        },
        {
            musictype: "Rock",
            typeselect: gVotes.length || 0
        },
        {
            musictype: "Folk",
            typeselect: hVotes.length || 0
        },
        {
            musictype: "Rap",
            typeselect: iVotes.length || 0
        },
        {
            musictype: "Other",
            typeselect: jVotes.length || 0
        }
    ];

    chart30.data = [
        { 
            gender: "Male",
            genderselect: kVotes.length || 0
        },
        { 
            gender: "Female",
            genderselect: lVotes.length || 0
        }
    ];

    chart40.data = [
        { 

        }
    ];
}

async function testAjax() {

    var response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: "foo=bar&lorem=ipsum"
    });

    console.log(response);

    if (response.ok) {
        var json = await response.json();
        alert(json.data);
    } else {
        alert(response.status + " " + response.statusCode);
    }

}

//testAjax();