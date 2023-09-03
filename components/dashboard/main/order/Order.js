import React, { useState, useEffect } from "react";
import classes from "./Order.module.css";
import { CategoryBar, Card, Flex, Metric, Legend, Title } from "@tremor/react";
import { Pagination } from "@mantine/core";
import { BarChart } from "@tremor/react";
import Chart2 from "react-apexcharts";
import { createRoot } from "react-dom/client";
import { AgChartsReact } from "ag-charts-react";
import Iframe from "react-iframe";

const Order = () => {
    return (
        <section>
            <div className={classes.head}>
                <div className={classes.detailsOrderByDate}>
                    <div>
                        <p>New Quality Metrics & NPS Analysis</p>
                    </div>
                </div>
            </div>
            <div className={classes.section}>
                <div className={classes.upTable}>
                    <div>
                        <div className={classes.body}>
                            <Card>
                                <Iframe
                                    title="Quality Metrics & NPS Analytics"
                                    width="1140"
                                    height="541.25"
                                    src="https://app.powerbi.com/reportEmbed?reportId=02612bf5-d1dd-4164-a7de-3c2a74d01a51&appId=2cb029fa-7129-450a-b3e5-6e17f37f111b&autoAuth=true&ctid=771c9c47-7f24-44dc-958e-34f8713a8394"
                                    frameborder="0"
                                    allowFullScreen="true"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
