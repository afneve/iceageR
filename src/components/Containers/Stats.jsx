import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import { iceAgeData } from "../../data/ice_age_data";
import { segmentStatus } from "../../data/progress_data";

const Stats = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let monthTotals = {};
    let yearTotals = {};
    let monthData = [];
    let yearData = [];

    let date, year, month, distance;

    const {
        topTenMiles,
        mostSegmentsInOneDay,
        mostElevationInOneDay,
        mostRuggednessInOneDay,
        averageMilesPerDay,
    } = processSegmentData(segmentStatus, iceAgeData);

    //Push any completed segments to new array
    for (let i = 0; i < iceAgeData.length; i++) {
        if (segmentStatus[iceAgeData[i].segment].dateCompleted) {
            distance = parseFloat(iceAgeData[i].iceagetraildistance).toFixed(2);
            distance = parseFloat(distance);

            date = segmentStatus[iceAgeData[i].segment].dateCompleted;
            date = date.includes("/")
                ? date.split("/")
                : date.includes("-")
                ? date.split("-")
                : date;

            if (date[0].length === 4) {
                year = date[0];
                month = parseInt(date[1]);
            } else {
                year = date[2];
                month = parseInt(date[0]);
            }

            if (monthTotals.hasOwnProperty(month)) {
                monthTotals[month] += distance;
            } else {
                monthTotals[month] = distance;
            }

            if (yearTotals.hasOwnProperty(year)) {
                yearTotals[year] += distance;
            } else {
                yearTotals[year] = distance;
            }
        }
    }

    for (let month = 1; month <= 12; month++) {
        if (!monthTotals[month]) {
            monthTotals[month] = 0;
        }
    }

    // Create a new Date object
    const currentDate = new Date();

    // Get the current year from the Date object
    const currentYear = currentDate.getFullYear();
    for (let year = 2016; year <= currentYear; year++) {
        if (!yearTotals[year]) {
            yearTotals[year] = 0;
        }
    }

    for (const property in yearTotals) {
        yearData.push({
            name: property,
            miles: parseFloat(yearTotals[property].toFixed(1)),
            unit: "miles",
        });
    }

    for (const property in monthTotals) {
        monthData.push({
            name: months[property - 1].substring(0, 3),
            miles: parseFloat(monthTotals[property].toFixed(1)),
            unit: "miles",
        });
    }

    return (
        <div className="Stats">
            <h2>Stats</h2>
            <p>
                Note: Miles are only recorded once a segment has been completed.
                For example, if segment X was started in Jan 2020, but wasn't
                completed until Mar 2022 the miles count toward Mar 2022.
            </p>
            <div className="miles">
                <h3>Miles per year</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width="100%"
                        height={300}
                        data={yearData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                            formatter={(value, name, props) => {
                                return [
                                    `${value} miles`,
                                    `${props.payload.name}`,
                                ];
                            }}
                        />
                        <Legend />
                        <Bar dataKey="miles" fill="#0C78C5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="miles">
                <h3>Miles per month</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width="100%"
                        height={300}
                        data={monthData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                            formatter={(value, name, props) => {
                                return [
                                    `${value} miles`,
                                    `${props.payload.name}`,
                                ];
                            }}
                        />
                        <Legend />
                        <Bar dataKey="miles" fill="#0C78C5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="miles">
                <h3>Extra stats</h3>
                <p>{`Top ${topTenMiles.length} days with the most milage:`}</p>
                <ul>
                    {topTenMiles.map((segment, index) => (
                        <li key={index}>{`${segment.miles.toFixed(1)} (${
                            segment.date
                        })`}</li>
                    ))}
                </ul>
                <p>{`Average of miles completed per day: ${averageMilesPerDay.toFixed(
                    1
                )}`}</p>
                <p>{`Most segments completed in one day: ${mostSegmentsInOneDay.segments} (${mostSegmentsInOneDay.date})`}</p>
                <p>{`Most elevation in one day: ${mostElevationInOneDay.elevation} (${mostElevationInOneDay.date})`}</p>
                <p>{`Most ruggedness in one day: ${mostRuggednessInOneDay.ruggedness} (${mostRuggednessInOneDay.date})`}</p>
            </div>
        </div>
    );
};

export default Stats;

function processSegmentData(segmentStatus, iceAgeData) {
    const dailyData = {};

    // Build a map for quick lookup of iceAgeData by segment name
    const iceAgeMap = iceAgeData.reduce((map, segment) => {
        map[segment.segment] = segment;
        return map;
    }, {});

    // Iterate over segmentStatus to group data by dateCompleted
    Object.entries(segmentStatus).forEach(([segment, status]) => {
        const { dateCompleted } = status;
        const segmentData = iceAgeMap[segment];

        if (!segmentData || !dateCompleted) return;

        // Initialize the day if not already present
        if (!dailyData[dateCompleted]) {
            dailyData[dateCompleted] = {
                totalMiles: 0,
                totalElevation: 0,
                totalRuggedness: 0,
                segmentsCompleted: 0,
            };
        }

        // Update the daily stats, using iceagetraildistance for miles
        dailyData[dateCompleted].totalMiles += parseFloat(
            segmentData.iceagetraildistance
        );
        dailyData[dateCompleted].totalElevation += parseFloat(
            segmentData.elevation
        );
        dailyData[dateCompleted].totalRuggedness += parseFloat(
            segmentData.ruggedness
        );
        dailyData[dateCompleted].segmentsCompleted += 1;
    });

    // Convert dailyData into an array of entries, sorted by totalMiles in descending order
    const sortedByMiles = Object.entries(dailyData).sort(
        (a, b) => b[1].totalMiles - a[1].totalMiles
    );

    // Extract the top 10 days with the most miles
    const topTenMiles = sortedByMiles.slice(0, 10).map(([date, data]) => ({
        date,
        miles: data.totalMiles,
    }));

    // Now find the max values for the other categories
    let mostSegmentsInOneDay = { date: "", segments: 0 };
    let mostElevationInOneDay = { date: "", elevation: 0 };
    let mostRuggednessInOneDay = { date: "", ruggedness: 0 };

    let totalMiles = 0;
    let totalDays = Object.keys(dailyData).length;

    Object.entries(dailyData).forEach(([date, data]) => {
        totalMiles += data.totalMiles;

        if (data.segmentsCompleted > mostSegmentsInOneDay.segments) {
            mostSegmentsInOneDay = { date, segments: data.segmentsCompleted };
        }
        if (data.totalElevation > mostElevationInOneDay.elevation) {
            mostElevationInOneDay = { date, elevation: data.totalElevation };
        }
        if (data.totalRuggedness > mostRuggednessInOneDay.ruggedness) {
            mostRuggednessInOneDay = { date, ruggedness: data.totalRuggedness };
        }
    });

    // Calculate the average miles per day
    const averageMilesPerDay = totalMiles / totalDays;

    return {
        topTenMiles,
        mostSegmentsInOneDay,
        mostElevationInOneDay,
        mostRuggednessInOneDay,
        averageMilesPerDay,
    };
}
