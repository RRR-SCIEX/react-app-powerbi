import React, { Fragment } from "react";
import classes from "./Home.module.css";
import {
    AiOutlineShop,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import { MdAttachMoney, MdNotifications } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbCoins } from "react-icons/tb";
import { BsCart2, BsMusicNote } from "react-icons/bs";
// --------------tremor
import { Card, DonutChart, AreaChart } from "@tremor/react";

const cities = [
    {
        name: "egypt",
        sales: 9800,
    },
    {
        name: "Saudi Arabia",
        sales: 4567,
    },
];

const orders = [
    {
        name: "category1",
        sales: 9800,
    },
    {
        name: "category2",
        sales: 4567,
    },
    {
        name: "category3",
        sales: 14567,
    },
    {
        name: "category4",
        sales: 1467,
    },
];

const valueFormatter = (number) =>
    `$ ${Intl.NumberFormat("us").format(number).toString()}`;
// -------------------
const chartDataProfit = [
    {
        year: 1970,
        "Export Growth Rate": 2,
        "Export Growth Rate2": 15,
    },
    {
        year: 1971,
        "Export Growth Rate": 3,
        "Export Growth Rate2": 20,
    },
    {
        year: 1972,
        "Export Growth Rate": 5,
        "Export Growth Rate2": 1,
    },
    {
        year: 1973,
        "Export Growth Rate": 2,
        "Export Growth Rate2": 6,
    },
    {
        year: 1974,
        "Export Growth Rate": 8,
        "Export Growth Rate2": 7,
    },
    {
        year: 1984,
        "Export Growth Rate": 6,
        "Export Growth Rate2": 4,
    },
    {
        year: 1994,
        "Export Growth Rate": 19,
        "Export Growth Rate2": 15,
    },
    //...
];

const Home = (props) => {
    return (
        <Fragment>
            <section className={classes.section}>
                <div className={classes.static}>
                    <div>
                        <div className={classes.img}>
                            <AiOutlineUser />
                        </div>
                        <div className={classes.text}>
                            <p>unique users</p>
                            <p>
                                <span>4000</span>
                                <span className={classes.green}>+ 100</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className={classes.img}>
                            <AiOutlineShop />
                        </div>
                        <div className={classes.text}>
                            <p>products unAvailable</p>
                            <p>
                                <span>2520</span>
                                <span className={classes.red}>-1%</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.img}>
                            <AiOutlineShoppingCart />
                        </div>
                        <div className={classes.text}>
                            <p>order today</p>
                            <p>
                                <span>{154}</span>
                                <span className={classes.green}>+112</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.img}>
                            <MdAttachMoney />
                        </div>
                        <div className={classes.text}>
                            <p>profits today</p>
                            <p>
                                <span>
                                    {201}
                                    <span className={classes.small}>$</span>
                                </span>
                                <span className={classes.green}>+112</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.part2}>
                    <div className={classes.charts}>
                        <p className={classes.head}>
                            Analytics{" "}
                            <span>
                                <TbBrandGoogleAnalytics />
                            </span>
                        </p>
                        <div className={classes.divUpForCharts}>
                            <div className={classes.divChartWithDetails}>
                                <div className={classes.text}>
                                    <div className={classes.head}>
                                        <p>
                                            profits{" "}
                                            <span>
                                                <TbCoins />
                                            </span>
                                        </p>
                                        <select name="" id="">
                                            <option value="">day</option>
                                            <option value="">week</option>
                                            <option value="">month</option>
                                        </select>
                                    </div>
                                    <p className={classes.num}>
                                        545<span>$</span>
                                    </p>
                                    <p className={classes.per}>
                                        this week{" "}
                                        <span className={classes.green}>
                                            +25
                                        </span>
                                    </p>

                                    <DonutChart
                                        variant="pie"
                                        data={cities}
                                        category="sales"
                                        index="name"
                                        valueFormatter={valueFormatter}
                                        colors={["red", "green"]}
                                    />
                                </div>
                                <div>
                                    <Card className="p-2">
                                        <AreaChart
                                            className="mt-4 "
                                            data={chartDataProfit}
                                            index="year"
                                            categories={[
                                                "Export Growth Rate",
                                                "Export Growth Rate2",
                                            ]}
                                            colors={["green", "red"]}
                                            valueFormatter={valueFormatter}
                                            curveType="monotone"
                                            showLegend={false}
                                            showGridLines={false}
                                        />
                                    </Card>
                                </div>
                            </div>
                            <div className={classes.divChartWithDetails}>
                                <div className={classes.text}>
                                    <div className={classes.head}>
                                        <p>
                                            orders{" "}
                                            <span>
                                                <BsCart2 />
                                            </span>
                                        </p>
                                        <select name="" id="">
                                            <option value="">day</option>
                                            <option value="">week</option>
                                            <option value="">month</option>
                                        </select>
                                    </div>
                                    <p className={classes.num}>250</p>
                                    <p className={classes.per}>
                                        this week{" "}
                                        <span className={classes.green}>
                                            +25
                                        </span>
                                    </p>

                                    <DonutChart
                                        variant="pie"
                                        data={orders}
                                        category="sales"
                                        index="name"
                                        valueFormatter={valueFormatter}
                                        colors={[
                                            "slate",
                                            "lime",
                                            "indigo",
                                            "orange",
                                        ]}
                                    />
                                </div>
                                <div>
                                    <Card className="p-2">
                                        <AreaChart
                                            className="mt-4"
                                            data={chartDataProfit}
                                            index="year"
                                            categories={["Export Growth Rate"]}
                                            colors={["red", "gray"]}
                                            valueFormatter={valueFormatter}
                                            curveType="monotone"
                                            showLegend={false}
                                            showGridLines={false}
                                        />
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <div className={classes.list}>
                            <div>
                                <div className={classes.img}>
                                    <MdAttachMoney />
                                </div>
                                <div className={classes.text}>
                                    <p>
                                        <span>
                                            cost : {200}
                                            <span className={classes.small}>
                                                $
                                            </span>
                                        </span>
                                        <span className={classes.green}>
                                            +112
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <MdAttachMoney />
                                </div>
                                <div className={classes.text}>
                                    <p>
                                        <span>
                                            cost : {200}
                                            <span className={classes.small}>
                                                $
                                            </span>
                                        </span>
                                        <span className={classes.green}>
                                            +112
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <MdAttachMoney />
                                </div>
                                <div className={classes.text}>
                                    <p>
                                        <span>
                                            cost : {200}
                                            <span className={classes.small}>
                                                $
                                            </span>
                                        </span>
                                        <span className={classes.green}>
                                            +112
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className={classes.img}>
                                    <MdAttachMoney />
                                </div>
                                <div className={classes.text}>
                                    <p>
                                        <span>
                                            cost : {200}
                                            <span className={classes.small}>
                                                $
                                            </span>
                                        </span>
                                        <span className={classes.green}>
                                            +112
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={classes.head}>
                            last notification
                            <span>
                                <BsMusicNote />
                            </span>
                        </p>

                        <div className={classes.note}>
                            <div className={classes.imgNote}>
                                <MdNotifications />
                            </div>
                            <div className={classes.text}>
                                <p>seller one make order</p>
                            </div>
                            <span className={classes.alert}></span>
                        </div>
                        <div className={classes.note}>
                            <div className={classes.imgNote}>
                                <MdNotifications />
                            </div>
                            <div className={classes.text}>
                                <p>seller one make order</p>
                            </div>
                            <span className={classes.alert}></span>
                        </div>
                        <div className={classes.note}>
                            <div className={classes.imgNote}>
                                <MdNotifications />
                            </div>
                            <div className={classes.text}>
                                <p>seller one make order</p>
                            </div>
                            <span className={classes.alert}></span>
                        </div>
                        <div className={classes.note}>
                            <div className={classes.imgNote}>
                                <MdNotifications />
                            </div>
                            <div className={classes.text}>
                                <p>seller one make order</p>
                            </div>
                            <span className={classes.alert}></span>
                        </div>
                        <div className={classes.note}>
                            <div className={classes.imgNote}>
                                <MdNotifications />
                            </div>
                            <div className={classes.text}>
                                <p>seller one make order</p>
                            </div>
                            <span className={classes.alert}></span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;
