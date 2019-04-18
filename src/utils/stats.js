export const formatCountyName = (county) => {
    county = county.trim().toLowerCase().split(" ").join("");
    county = county.substring(0, county.indexOf('count'));
    county = county.replace('&', '-');
        
    return county;
};

export const matchCounties = (countyA, countyB) => {
    return countyA === countyB;
};
