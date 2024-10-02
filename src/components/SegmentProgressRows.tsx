import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSort,
    faSortUp,
    faSortDown,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { segmentStatus } from "../data/progress_data";
import { Categories } from "../config/Categories";

class SegmentProgressRows extends Component<
    {
        segments: {
            [key: string]: string | number;
        }[];
    },
    {
        sort: string;
        sortBy: string;
        startFrom: string;
        displayWhichSegments: string;
    }
> {
    state = {
        sort: "",
        sortBy: "",
        startFrom: "",
        displayWhichSegments: "all", // all, completed, uncompleted
    };

    handleSort = (sortBy: string) => {
        if (!sortBy) {
            return false;
        }

        this.setState({
            startFrom:
                sortBy === "orderId"
                    ? this.state.startFrom !== "east"
                        ? "east"
                        : "west"
                    : "",
            sort:
                sortBy !== this.state.sortBy || this.state.sort !== "desc"
                    ? "desc"
                    : "asc",
            sortBy: sortBy,
        });
    };

    sortRows = () => {
        let sortBy = this.state.sortBy;

        const segments = this.props.segments;

        if (!sortBy) {
            return segments;
        }

        if (sortBy === "dateCompleted") {
            return segments.sort((a: any, b: any) => {
                if (!segmentStatus[a.segment].dateCompleted) {
                    return 1;
                }
                if (!segmentStatus[b.segment].dateCompleted) {
                    return -1;
                }

                // Parse the date strings into Date objects
                var dateA = new Date(segmentStatus[a.segment].dateCompleted);
                var dateB = new Date(segmentStatus[b.segment].dateCompleted);
                // Sort in ascending or descending order
                if (this.state.sort === "asc") {
                    return dateA.valueOf() - dateB.valueOf();
                } else {
                    return dateB.valueOf() - dateA.valueOf();
                }
            });
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
            return this.state.sort === "desc" ? comparison * -1 : comparison;
        });
    };

    render() {
        const { sort, sortBy, startFrom, displayWhichSegments } = this.state;

        const isMobile = window.innerWidth < 640;
        const hideCompleted = localStorage.getItem("hideCompleted") === "true";
        const debugMode = localStorage.getItem("debugMode") === "true";

        const directionLabel =
            startFrom === "east" ? "(East to West)" : "(West to East)";
        const directionLabelMobile =
            startFrom === "east" ? "(E to W)" : "(W to E)";

        return (
            <>
                <tr>
                    {Categories.map((category) => {
                        const categoryLabel = isMobile
                            ? category.label.substring(0, 4) + "."
                            : category.label;

                        if (
                            isMobile &&
                            (category.key === "booksection" ||
                                category.key === "dateCompleted")
                        ) {
                            return "";
                        } else {
                            return (
                                <th
                                    key={category.sortBy}
                                    data-testid={`${category.label}-heading`}
                                    onClick={() =>
                                        this.handleSort(category.sortBy)
                                    }
                                >
                                    {category.label === "Segment" ? (
                                        `${categoryLabel} ${
                                            isMobile
                                                ? directionLabelMobile
                                                : directionLabel
                                        }`
                                    ) : (
                                        <>
                                            {categoryLabel}
                                            <span>
                                                {!!category.sortBy &&
                                                sortBy === category.sortBy ? (
                                                    sortBy &&
                                                    sort === "desc" ? (
                                                        <FontAwesomeIcon
                                                            icon={faSortDown}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={faSortUp}
                                                        />
                                                    )
                                                ) : (
                                                    !!category.sortBy && (
                                                        <FontAwesomeIcon
                                                            icon={faSort}
                                                        />
                                                    )
                                                )}
                                            </span>
                                        </>
                                    )}
                                </th>
                            );
                        }
                    })}
                </tr>
                {this.sortRows().map(
                    (
                        segment: {
                            [key: string]: string | number;
                        },
                        index: any
                    ) => {
                        if (
                            (hideCompleted &&
                                !segmentStatus[segment.segment]
                                    .dateCompleted) ||
                            (displayWhichSegments === "all" &&
                                segmentStatus[segment.segment]) ||
                            (displayWhichSegments === "completed" &&
                                segmentStatus[segment.segment].dateCompleted) ||
                            (displayWhichSegments === "uncompleted" &&
                                !segmentStatus[segment.segment].dateCompleted)
                        ) {
                            return (
                                <tr key={index}>
                                    {Categories.map(
                                        (
                                            category: {
                                                [key: string]: string;
                                            },
                                            index
                                        ) => {
                                            if (
                                                isMobile &&
                                                (category.key ===
                                                    "booksection" ||
                                                    category.key ===
                                                        "dateCompleted")
                                            ) {
                                                return "";
                                            } else {
                                                let cellValue =
                                                    category.key ===
                                                    "dateCompleted"
                                                        ? segmentStatus[
                                                              segment.segment
                                                          ].dateCompleted
                                                        : segment[category.key];

                                                if (
                                                    category.key ===
                                                        "booksection" &&
                                                    cellValue.includes("Count")
                                                ) {
                                                    cellValue =
                                                        cellValue.split(
                                                            "Count"
                                                        )[0];
                                                }

                                                return (
                                                    <td key={index}>
                                                        <span>
                                                            {segmentStatus[
                                                                segment.segment
                                                            ].dateCompleted &&
                                                                category.key ===
                                                                    "segment" && (
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faCheckCircle
                                                                        }
                                                                    />
                                                                )}
                                                            {segmentStatus[
                                                                segment.segment
                                                            ].partial &&
                                                                category.key ===
                                                                    "segment" && (
                                                                    <span className="partial-warn">
                                                                        &#9888;
                                                                    </span>
                                                                )}
                                                        </span>
                                                        {cellValue}
                                                        {debugMode &&
                                                            category.key ===
                                                                "segment" &&
                                                            `(${segment.orderId})`}
                                                        {debugMode &&
                                                            category.key ===
                                                                "booksection" &&
                                                            `(${segment.countyId})`}
                                                    </td>
                                                );
                                            }
                                        }
                                    )}
                                </tr>
                            );
                        } else {
                            return null;
                        }
                    }
                )}
            </>
        );
    }
}

export default SegmentProgressRows;
