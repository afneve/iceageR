import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

import { iceAgeData } from '../../data/ice_age_data';
import { segmentStatus } from '../../data/progress_data';


const Stats = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    let monthTotals = {};
    let yearTotals = {};
    let monthData = [];
    let yearData = [];

    let date, year, month, distance;

    //Push any completed segments to new array
    for (let i = 0; i < iceAgeData.length; i++) {
        if (segmentStatus[iceAgeData[i].segment].dateCompleted) {
            distance = parseFloat(iceAgeData[i].iceagetraildistance).toFixed(2);
            distance = parseFloat(distance);

            date = segmentStatus[iceAgeData[i].segment].dateCompleted;
            date = (date.includes('/')) ? date.split('/') : (date.includes('-')) ? date.split('-') : date;

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

    for (const property in yearTotals) {
        yearData.push({
            name: property,
            miles: parseFloat(yearTotals[property].toFixed(1)),
            unit: 'miles'
        })
    }

    for (const property in monthTotals) {
        monthData.push({
            name: months[property - 1].substring(0, 3),
            miles: parseFloat(monthTotals[property].toFixed(1)),
            unit: 'miles'
        })
    }

    return (
        <div className='Stats'>
            <h2>Stats</h2>
            <p>
                Note: Miles are only recorded once a segment has been completed. For example, if segment X was started in Jan 2020, but
                wasn't completed until Mar 2022 the miles count toward Mar 2022.
            </p>
            <div className='miles'>
                <h3>Miles per year</h3>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart
                        width='100%'
                        height={300}
                        data={yearData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5
                        }}
                    >
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip
                            formatter={
                                (value, name, props) => {
                                    return [`${value} miles`, `${props.payload.name}`]
                                }
                            }
                        />
                        <Legend />
                        <Bar dataKey='miles' fill='#0C78C5' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='miles'>
                <h3>Miles per month</h3>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart
                        width='100%'
                        height={300}
                        data={monthData}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5
                        }}
                    >
                        <XAxis dataKey='name' />
                        <YAxis />
                        <Tooltip
                            formatter={
                                (value, name, props) => {
                                    return [`${value} miles`, `${props.payload.name}`]
                                }
                            }
                        />
                        <Legend />
                        <Bar dataKey='miles' fill='#0C78C5' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Stats;