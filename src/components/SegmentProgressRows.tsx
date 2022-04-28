import { Component } from 'react';

import { segmentStatus } from '../data/progress_data';

import { Categories } from '../config/Categories';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class SegmentProgressRows extends Component<{ segments: { [key: string]: string | number; }[] }, { sort: string, sortBy: string, startFrom: string, displayWhichSegments: string }> {
    state = {
        sort: '',
        sortBy: '',
        startFrom: '',
        displayWhichSegments: 'all' // all, completed, uncompleted
    };


    handleSort = (sortBy: string) => {
        if (!sortBy) {
            return false;
        }

        this.setState({
            startFrom: sortBy === 'orderId' ? this.state.startFrom !== 'east' ? 'east' : 'west' : '',
            sort: sortBy !== this.state.sortBy || this.state.sort !== 'desc' ? 'desc' : 'asc',
            sortBy: sortBy
        });
    };

    sortRows = () => {
        let sortBy = this.state.sortBy;

        const segments = this.props.segments;

        if (!sortBy) {
            return segments;
        }

        if (sortBy === 'dateCompleted') {
            /*
            return segmentStatus.sort((a, b) => {

                let year = a[sortBy].split('/');
                console.log(year);
                return true;
            });

            */
        }

        return segments.sort((a: any, b: any) => {
            let comparison = 0;

            const valA = parseFloat(a[sortBy]),
                valB = parseFloat(b[sortBy]);

            if (valA > valB) {
                comparison = 1;
            } else if (valA < valB) {
                comparison = -1;
            }
            return (
                (this.state.sort === 'desc') ? (comparison * -1) : comparison
            );
        });
    };

    render() {
        const {
            sort,
            sortBy,
            startFrom,
            displayWhichSegments
        } = this.state;

        const isMobile = (window.innerWidth < 640);
        const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');
        const debugMode = (localStorage.getItem('debugMode') === 'true');


        const directionLabel = startFrom === 'east' ? '(East to West)' : '(West to East)';
        const directionLabelMobile = startFrom === 'east' ? '(E to W)' : '(W to E)';

        return (
            <>
                <tr>
                    {
                        Categories.map((category) => {
                            const categoryLabel = isMobile ? category.label.substring(0, 4) + '.' : category.label;

                            if (isMobile && category.key === 'booksection') {
                                return '';
                            } else {
                                return (
                                    <th
                                        key={category.sortBy}
                                        onClick={() => this.handleSort(category.sortBy)}>
                                        {category.label === 'Segment' ?
                                            `${categoryLabel} ${isMobile ? directionLabelMobile : directionLabel}`
                                            :
                                            <>
                                                {categoryLabel}
                                                <span>
                                                    {!!category.sortBy && sortBy === category.sortBy ?
                                                        sortBy && sort === 'desc' ?
                                                            <FontAwesomeIcon icon={faSortDown} /> :
                                                            <FontAwesomeIcon icon={faSortUp} />
                                                        :
                                                        !!category.sortBy && <FontAwesomeIcon icon={faSort} />}
                                                </span>
                                            </>
                                        }
                                    </th>
                                );
                            }
                        })
                    }
                </tr>
                {
                    this.sortRows().map((segment: {
                        [key: string]: string | number
                    }, index) => {
                        if (
                            (hideCompleted && !segmentStatus[segment.segment].dateCompleted)
                            ||
                            (displayWhichSegments === 'all' && segmentStatus[segment.segment])
                            ||
                            (displayWhichSegments === 'completed' && segmentStatus[segment.segment].dateCompleted)
                            ||
                            (displayWhichSegments === 'uncompleted' && !segmentStatus[segment.segment].dateCompleted)
                        ) {
                            return (
                                <tr key={index}>
                                    {
                                        Categories.map((category: {
                                            [key: string]: string
                                        }, index) => {
                                            if (isMobile && category.key === 'booksection') {
                                                return '';
                                            }
                                            else {
                                                return (
                                                    <td key={index}>
                                                        <span>
                                                            {
                                                                segmentStatus[segment.segment].dateCompleted && category.key === 'segment' &&
                                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                            }
                                                        </span>
                                                        {segment[category.key]}
                                                        {
                                                            debugMode && category.key === 'segment' &&
                                                            `(${segment.orderId})`
                                                        }
                                                        {
                                                            debugMode && category.key === 'booksection' &&
                                                            `(${segment.countyId})`
                                                        }
                                                    </td>
                                                );
                                            }

                                        })
                                    }
                                </tr>
                            );
                        }

                    })
                }
            </>
        );
    }
}

export default SegmentProgressRows;