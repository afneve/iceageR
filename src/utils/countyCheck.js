export const formatCountyName = (county) => {
    county = county.trim().toLowerCase().split(' ').join('');
    county = county.substring(0, county.indexOf('count'));
    county = county.replace('&', '-');
        
    return county;
};

export const removeCounty = (county) => {
    county = county.substring(0, county.toLowerCase().indexOf('count'));
        
    return county;
};

export const matchCounties = (countyA, countyB) => {
    return countyA === countyB;
};

/*
export const dataCollection = (countyA, countyB) => {
    for (var i = 0; i < ice_age_data.length; i++) {
        if (!isNaN(ice_age_data[i].iceagetraildistance)) {
            iceAge.distanceArray.push(parseFloat(ice_age_data[i].iceagetraildistance));
        }
        if (!isNaN(ice_age_data[i].elevation)) {
            iceAge.elevationArray.push(parseFloat(ice_age_data[i].elevation));
        }
        if (!isNaN(ice_age_data[i].ruggedness)) {
            iceAge.ruggednessArray.push(parseFloat(ice_age_data[i].ruggedness));
        }  
    }

    iceAge.getAverage(iceAge.distanceArray, iceAge.distanceObject);
    iceAge.getAverage(iceAge.elevationArray, iceAge.elevationObject);
    iceAge.getAverage(iceAge.ruggednessArray, iceAge.ruggednessObject);
};

export const getAverage = (array, object) => {
    var average = 0;

    for (var i = 0; i < array.length; i++) {
        average += array[i];
    }

    average = (average / array.length).toFixed(2);

    object.average = parseFloat(average);

    array.sort(function (a, b) {
        return a - b;
    });

    object.lowest = array[0];
    object.highest = array[array.length - 1];
    object.shortCutoff = parseFloat(((object.average + object.lowest) / 2).toFixed(2));
    object.midCutoff = parseFloat(((object.average + object.highest) / 2).toFixed(2));
};

export const enableSpeech = () => {
    console.log('enabled');
    var ignore_onend;

    // new instance of speech recognition
    var recognition = new webkitSpeechRecognition();
    // set params
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.start();
    $('#microphone').addClass('active');

    recognition.onresult = function (event) {
        $('#microphone').removeClass('active');
        // delve into words detected results & get the latest
        // total results detected
        console.log(event.results);

        var resultsLength = event.results.length - 1;

        // get length of latest results
        var ArrayLength = event.results[resultsLength].length - 1;

        // get last word detected
        var saidWord = event.results[resultsLength][ArrayLength].transcript;
        saidWord = saidWord.trim().toLowerCase().split(' ').join('');

        // alert(saidWord);

        for (var i = 0; i < ice_age_data.length; i++) {
            var currentSegment = ice_age_data[i].segment.toLowerCase().split(' ').join('');
            if (ice_age_data[i].booksection.toLowerCase().includes(saidWord)) {
                // alert(saidWord);
            }

            if (currentSegment.includes(saidWord)) {
                iceAge.scroll(0);
                $('#segments').click();
                $('#segment-filter a[data-index='' + ice_age_data[i].countyId + '']').click();
                $('select').val(ice_age_data[i].countyId);

                iceAge.scroll($('#segments-view .segment[data-index='' + (i + 1) + '']').position().top - $('nav').height() - 2);
                // alert(saidWord);
            }
        }
    }

    // speech error handling
    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            ignore_onend = true;
        }
        console.log(event);
    }

    recognition.onend = function (event) {
        var ignore_onend = true;

        $('#microphone').removeClass('active');

        if (ignore_onend) {
            // recognition.start();
            return false;
        }
    }
};
*/