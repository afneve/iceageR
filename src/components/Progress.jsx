import React, { Component } from 'react';

import { iceAgeData } from '../data/ice_age_data';

import UserProgress from './UserProgress';

class Progress extends Component {

    displayUserProgress = () => {
        /*
        var progressHTML = '',
            countyHTML = '',
            segmentHTML = '',
            layoutHTML = '',
            yearlyHTML = '',
            userCompleteMiles = 0,
            userPartialMiles = 0,
            userCompleteSegments = 0,
            countyComplete = false,
            monthTotals = {},
            yearTotals = {},
            yearTotalsProps = [],
            users = progress_data.users;
    
        //LOOP THROUGH USERS
        for (var i = 0; i < users.length; i++) {
            userCompleteMiles = 0;
            userPartialMiles = 0;
            userCompleteSegments = 0;
            countyComplete = false;
    
            //LOOP THROUGH COUNTIES
            for (var a = 0; a < county_data.length; a++) {
                segmentHTML = '';
                var countyDistance = 0,
                    countyCompletedDistance = 0,
                    countySegmentMatch = [],
                    segmentComplete = false;
                    countyComplete = false;
    
                var segmentsInCounty = ice_age_data.filter(function (curVal) {
                    return curVal.countyId == county_data[a].countyId;
                });
    
                //Push any completed segments to new array
                for (var q = 0; q < segmentsInCounty.length; q++) {
                    
                    for (var c = 0; c < users[i].completedSegments.length; c++) {
                        var date, year, month, distance;
    
                        if (segmentsInCounty[q].segment_id == users[i].completedSegments[c].segmentId) {
                            countySegmentMatch.push(segmentsInCounty[q]);
    
                            distance = parseFloat(segmentsInCounty[q].iceagetraildistance).toFixed(2);
                            distance = parseFloat(distance);                            
    
                            date = users[i].completedSegments[c].extraInfo;
    
                            if (date){
                                if (date.includes('/')) {
                                    date = date.split('/');
                                } else if (date.includes('-')) {
                                    date = date.split('-');
                                }
    
                                if (date[0].length === 4) {
                                    year = date[0];
                                    month = parseInt(date[1]);
                                } else {
                                    year = date[2];
                                    month = parseInt(date[0]);
                                }
    
                                
                                if(monthTotals.hasOwnProperty(month)){
                                    monthTotals[month] += distance;
                                } else {
                                    monthTotals[month] = distance;
                                }
                               
                                if(yearTotals.hasOwnProperty(year)){
                                    yearTotals[year] += distance;
                                } else{
                                    yearTotals[year] = distance;
                                }
    
                                yearTotalsProps = Object.keys(yearTotals).reverse();
                            }
    
                        }
                    }
                }
    
                if (segmentsInCounty.length === countySegmentMatch.length) {
                    countyComplete = true;
                }
    
                // LOOP THROUGH SEGMENTS
                for (var b = 0; b < segmentsInCounty.length; b++) {
                    var segmentCompleteHTML = '',
                        segmentPartialHTML = '';
                        segmentComplete = false;
    
                    // KEEP TRACK OF MILES IN COUNTY
                    countyDistance += parseFloat(segmentsInCounty[b].iceagetraildistance);
    
                    // LOOP THROUGH USERS COMPLETED SEGMENTS TO SEE IF THEY COMPLETED CURRENT SEGMENT
                    for (var c = 0; c < users[i].completedSegments.length; c++) {
                        if (users[i].completedSegments[c].segmentId == segmentsInCounty[b].segment_id) {
    
                            userCompleteMiles += parseFloat(segmentsInCounty[b].iceagetraildistance);
                            countyCompletedDistance += parseFloat(segmentsInCounty[b].iceagetraildistance);
    
                            segmentCompleteHTML += '<span class="completion-data"> (' + users[i].completedSegments[c].extraInfo + ')</span>';
    
                            userCompleteSegments++;
                            segmentComplete = true;
    
                            break;
                        }
                    }
                    for (var d = 0; d < users[i].partialSegments.length; d++) {
                        if (users[i].partialSegments[d].segmentId == segmentsInCounty[b].segment_id) {
                            userPartialMiles += parseFloat(segmentsInCounty[b].iceagetraildistance);
                            segmentPartialHTML += '<div class="segment-notes">' + users[i].partialSegments[d].extraInfo + '</div>'
                            break;
                        }
                    }
    
                    segmentHTML += '<div class="segment">';
                    if(segmentComplete) {
                        segmentHTML += '<div class="segment-name complete"><i class="fas fa-check-circle"></i>' + segmentsInCounty[b].segment + segmentCompleteHTML + '</div>';
                    }
                    else {
                        segmentHTML += '<div class="segment-name">' + segmentsInCounty[b].segment + segmentCompleteHTML + '</div>';
                    }
                    
                    segmentHTML += segmentPartialHTML;
    
                    if(segmentsInCounty[b].gallery) {
                        segmentHTML += '<div class="gallery" style="margin-left:20px"><a target="_blank" href="' + segmentsInCounty[b].gallery + '">View images</a></div>';
                    }
                    segmentHTML += '</div>';
                }
    
                countyHTML += '<div class="county" data-complete="' + countyComplete + '">';
                countyHTML += '<h3>' + county_data[a].countyName + '</h3>';
                countyHTML += '<div class="progressBarContainer">';
                countyHTML += '<div class="progressBar" style="width:' + parseFloat(countyCompletedDistance) / countyDistance * 100 + '%"></div>';
                countyHTML += '</div>';
                countyHTML += '<div class=segments>';
                countyHTML += segmentHTML;
                countyHTML += '<div class="more-info" data-index="' + county_data[a].countyId + '">View county details <i class="fas fa-arrow-alt-circle-right"></i></div>'
                countyHTML += '</div>';
                countyHTML += '</div>'; //END County HTML
    
            } //END COUNTY LOOP
    
            progressHTML += '<h2 class="user-miles-remaining">' + parseFloat((iceAge.totalTrailDistance - userCompleteMiles).toFixed(2)) + ' miles to go</h2>';
    
            progressHTML += '<div>' + parseFloat(userCompleteMiles.toFixed(2)) + ' of ' + iceAge.totalTrailDistance + ' miles completed</div>';
            progressHTML += '<div>' + (iceAge.totalSegments - users[i].completedSegments.length) + ' segments remaining</div>';
            progressHTML += '<div>' + parseFloat(userPartialMiles.toFixed(2)) + ' miles of partially completed segments</div>';
    
            layoutHTML += '<div class="user-container">';
            layoutHTML += '<div class="progress-info container">' + progressHTML + '</div>';
            layoutHTML += '<div class="counties container">' + countyHTML + '</div>';
            layoutHTML += '</div>';
    
            layoutHTML += '<div class="stats">';
            layoutHTML += '<div class="miles miles-by-year">';
            layoutHTML += '<h3>Miles per year</h3>';
    
            yearTotalsProps.forEach(function(key){
                if (yearTotals.hasOwnProperty(key)) {
                    layoutHTML += '<div class="year">';
                    layoutHTML += '<h4>' + key + '</h4>';
                    layoutHTML += '<p>' + yearTotals[key].toFixed(1) + '</p>';
                    layoutHTML += '</div>';
                }
            });

    
            layoutHTML += '</div>';
    
            layoutHTML += '<div class="miles miles-by-month">';
            layoutHTML += '<h3>Miles per month</h3>';
    
            for(let i = 0; i < iceAge.months.length; i++){
                layoutHTML += '<div class="month">';
                layoutHTML += '<h4>' + iceAge.months[i] + '</h4>';
                if (monthTotals.hasOwnProperty(i + 1)){ 
                    layoutHTML += '<p>' + monthTotals[i+1].toFixed(1) + '</p>'; 
                } else {
                    layoutHTML += '<p>0</p>'; 
                }
                layoutHTML += '</div>';
            }
            /*
            for (var key in monthTotals) {
                if (monthTotals.hasOwnProperty(key)) {
                    layoutHTML += '<div class="month">';
                    layoutHTML += '<h4>' + iceAge.months[key - 1] + '</h4>';
                    layoutHTML += '<p>' + monthTotals[key].toFixed(1) + '</p>';
                    layoutHTML += '</div>';
                }
            }
            
            layoutHTML += '</div>';
            layoutHTML += '</div>';
        } //END USER LOOP
    
        $('#progress-view').html(layoutHTML);
    
        console.timeEnd('DisplayUserProg');
        console.timeEnd("APP");
        */
        return <div>test</div>
    };

    render() {
        return (
            <UserProgress />
        );
    }
}

export default Progress;