// Download geojson file from here: https://data-wi-dnr.opendata.arcgis.com/datasets/wi-dnr::ice-age-trail/explore?location=45.097503%2C-90.074361%2C9.26
// Run this through node
// Upload output file to arcgis:

import { segmentStatus } from "./src/data/progress_data.js";
import { iceAgeData } from "./src/data/ice_age_data.js";
import { mapData } from "./src/data/map_data.js";
import fs from "fs";

var newFeaturesArray = [];
var completedSegmentSet = new Set();

var processData = true;
var updateCompletionData = true;

// Loop through every feature unless feature already exists in set
// Find all instances of current segment
// Loop through each instance and see if any end / beginnin in the same spot
// if they do add to coordiantes array

if (processData) {
    mapData.features.forEach((element) => {
        if (!completedSegmentSet.has(element.properties.SEGMENT_NAME_TEXT)) {
            // Get all of one segment
            var segment = mapData.features.filter(
                (filterElement) =>
                    filterElement.properties.SEGMENT_NAME_TEXT ===
                    element.properties.SEGMENT_NAME_TEXT
            );
    
            let newArray = [];
    
            for (let i = 0; i < segment.length; i++) {
                let obj = segment[i];
                // console.log('OBJ')
                // console.log('-----------------------')
                // console.log(obj);
                let matchFound = false;
                for (let j = 0; j < segment.length; j++) {
                    if (i !== j) {
                        let otherObj = segment[j];
                        // console.log('OTHER OBJ')
                        // console.log('-----------------------')
                        // console.log(otherObj);
                        if (
                            obj.geometry.coordinates[0][0] === otherObj.geometry.coordinates[otherObj.geometry.coordinates.length - 1][0] &&
                            obj.geometry.coordinates[0][1] === otherObj.geometry.coordinates[otherObj.geometry.coordinates.length - 1][1]
                        ) {
                            matchFound = true;
                            let mergedObj = {
                                ...obj
                            };
                            mergedObj.geometry.coordinates = [
                                ...otherObj.geometry.coordinates,
                                ...obj.geometry.coordinates.slice(1),
                            ]
                            segment.splice(j, 1);
                            segment.splice(i, 1, mergedObj);
                            i--;
                            break;
                        }
                        else if (
                            obj.geometry.coordinates[obj.geometry.coordinates.length - 1][0] ===
                                otherObj.geometry.coordinates[0][0] &&
                            obj.geometry.coordinates[obj.geometry.coordinates.length - 1][1] ===
                                otherObj.geometry.coordinates[0][1]
                        ) {
                            matchFound = true;
                            let mergedObj = {
                                ...obj
                            };
                            mergedObj.geometry.coordinates = [
                                ...obj.geometry.coordinates,
                                ...otherObj.geometry.coordinates.slice(1)
                            ]
                            segment.splice(j, 1);
                            segment.splice(i, 1, mergedObj);
                            i--;
                            break;
                        }
                        // if first coords or last coords match up
                        else if (
                            obj.geometry.coordinates[0][0] === otherObj.geometry.coordinates[0][0] && 
                            obj.geometry.coordinates[0][1] === otherObj.geometry.coordinates[0][1] ) {
    
                                matchFound = true;
                                let mergedObj = {
                                    ...obj
                                };
    
                                // L > R
                                // [0] [-10] [-20]
                                // R > L
                                // [0] [10] [0]
    
                                // R > L
                                // [-70, 0] [-90, 0] 
                                // L > R
                                // [-70, 0] [-20, 0] 
    
                                if (obj.geometry.coordinates[obj.geometry.coordinates.length - 1][0] > otherObj.geometry.coordinates[otherObj.geometry.coordinates.length - 1][1]) {
                                    mergedObj.geometry.coordinates = [
                                        ...otherObj.geometry.coordinates.reverse(),
                                        ...obj.geometry.coordinates.slice(1)
                                    ]
                                }
                                else {
                                    mergedObj.geometry.coordinates = [
                                        ...obj.geometry.coordinates.reverse(),
                                        ...otherObj.geometry.coordinates.slice(1)
                                    ]
                                }
    
                                segment.splice(j, 1);
                                segment.splice(i, 1, mergedObj);
                                i--;
                                break;
                        }
                        else if (obj.geometry.coordinates[obj.geometry.coordinates.length - 1][0] == otherObj.geometry.coordinates[otherObj.geometry.coordinates.length - 1][0] &&
                            obj.geometry.coordinates[obj.geometry.coordinates.length - 1][1] == otherObj.geometry.coordinates[otherObj.geometry.coordinates.length - 1][1]
                            ) {
                                matchFound = true;
                                let mergedObj = {
                                    ...obj
                                };
                               
                                
                                var objMaxNumber = obj.geometry.coordinates[0][0];
                                for (let i = 1; i < obj.geometry.coordinates.length; i++) {
                                    if (obj.geometry.coordinates[i][0] > objMaxNumber) {
                                        objMaxNumber = obj.geometry.coordinates[i][0];
                                    }
                                }
    
                                var otherObjMaxNumber = otherObj.geometry.coordinates[0][0];
                                for (let i = 1; i < otherObj.geometry.coordinates.length; i++) {
                                    if (otherObj.geometry.coordinates[i][0] > otherObjMaxNumber) {
                                        otherObjMaxNumber = otherObj.geometry.coordinates[i][0];
                                    }
                                }
    
                               // console.log("objMax:", objMaxNumber);
                                // console.log("otherObjMax:", otherObjMaxNumber)
    
                                 // R > L
                                // [50] [40] [30]
                                // L > R
                                // [10] [20] [30]
    
                                // R > L
                                // [10] [20] [30]
                                // L > R
                                // [50] [40] [30]
    
                                // L > R
                                // [-20] [-10] [0]
                                // R > L
                                // [0] [10] [0]
    
    
                                if (objMaxNumber > otherObjMaxNumber) {
                                    mergedObj.geometry.coordinates = [
                                        ...otherObj.geometry.coordinates.slice(0, -1),
                                        ...obj.geometry.coordinates.reverse(),
                                    ]
                                }
                                else {
                                    mergedObj.geometry.coordinates = [
                                        ...obj.geometry.coordinates.slice(0, -1),
                                        ...otherObj.geometry.coordinates.reverse()     
                                    ]
                                }
                                segment.splice(j, 1);
                                segment.splice(i, 1, mergedObj);
                                i--;
                                break;
                            }
                    }
                }
                if (!matchFound) {
                    newArray.push(obj);
                }
            }
    
    
    
    
            if (element.properties.SEGMENT_NAME_TEXT == "Pine Line") {
                newArray.forEach((item) => {
                    console.log(item.coordinates);
                });
            }
    
            //element.geometry.coordinates = newCoordinates;
            newFeaturesArray.push(...newArray);
    
            completedSegmentSet.add(element.properties.SEGMENT_NAME_TEXT);
        }
    });
    
    mapData.features = newFeaturesArray;
}
console.log(mapData.features.length);
if (updateCompletionData) {
    for (let i = 0; i < mapData.features.length; i++) {
        const filteredSegment = iceAgeData.filter((segment, index) => mapData.features[i].properties['SEGMENT_NAME_TEXT'] == segment.segment);
        if (filteredSegment && filteredSegment[0]) {
            mapData.features[i].properties['DISTANCE'] = filteredSegment[0].iceagetraildistance;
            mapData.features[i].properties['RUGGEDNESS'] = parseInt(filteredSegment[0].ruggedness);
            mapData.features[i].properties['ELEVATION'] = parseInt(filteredSegment[0].elevation);
        }
    
        if (segmentStatus[mapData.features[i].properties['SEGMENT_NAME_TEXT']]?.dateCompleted) {
            mapData.features[i].properties['COMPLETED'] = 'yes';
            mapData.features[i].properties['COMPLETION_DATE'] = segmentStatus[mapData.features[i].properties['SEGMENT_NAME_TEXT']]?.dateCompleted;
            mapData.features[i].properties['COMPLETION_MONTH'] = parseInt(segmentStatus[mapData.features[i].properties['SEGMENT_NAME_TEXT']].dateCompleted.split('/')[0]);
            mapData.features[i].properties['COMPLETION_YEAR'] = parseInt(segmentStatus[mapData.features[i].properties['SEGMENT_NAME_TEXT']].dateCompleted.split('/')[2]);
        } else if (segmentStatus[mapData.features[i].properties['SEGMENT_NAME_TEXT']]?.partial) {
            mapData.features[i].properties['COMPLETED'] = 'partially';
        } else {
            mapData.features[i].properties['COMPLETED'] = 'no';
        }
    }
}


console.log(mapData.features.length)
// const fs = require('fs');

fs.writeFile("data.geojson", JSON.stringify(mapData), (err) => {
    if (err) throw err;
    console.log("Data written to file!");
});

