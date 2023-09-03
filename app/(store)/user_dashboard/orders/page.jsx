"use client";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./Order.module.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { Pagination } from "@mantine/core";

const Order = () => {
    const [cookies] = useCookies(["token"]);
    const [page, setPage] = useState(0);
    const [orderSize,setOrderSize]=useState()

    const token = cookies["token"];
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/order/getMyOrders?page=${page}&size=5`,
                { headers }
            )
            .then((response) => {
                setAllOrder(response.data.data.orders);
                setOrderSize(response.data.data.size);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page]);

    // ------------------
    let ordersData = allOrder;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(orderSize / itemsPerPage);
    const currentPageData = ordersData;
    const handlePageChange = (newPage) => {
        setPage(newPage-1);
    };

    return (
        <Fragment>
            <section className="mainContainer">
                <div>
                    <p className={classes.head}>الطلبات</p>
                </div>
                <div className={classes.part}>
                    <p className={classes.subTitle}>الطلبات الاخيره</p>
                    <div>
                        <div className={classes.head}>
                            <div>رقم الطلب</div>
                            <div> التاريخ</div>
                            <div> الحاله</div>
                            <div>العنوان</div>
                            <div>المشتريات</div>
                        </div>
                        {currentPageData.map((order) => {
                            let customTime = order.createdDate;
                            let date = customTime.split("T")[0];
                            return (
                                <div className={classes.body} key={order.id}>
                                    <div>{order.id}</div>
                                    <div>{date}</div>
                                    <div className={classes.status}>
                                        {order.status == "PENDING" ? (
                                            <p className={classes.pending}>
                                                جاري
                                            </p>
                                        ) : (
                                            <p>{order.status} </p>
                                        )}
                                    </div>
                                    <div>
                                        <p title={order.address.line1}>
                                            {order.address.title}
                                        </p>
                                    </div>
                                    <div>
                                        <Link
                                            href={`/user_dashboard/orders/${order.id}`}
                                        >
                                            <u> التفاصيل</u>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div>عدد الطلبات : {orderSize}</div>
                </div>
                <Pagination
                    className={classes.pagination}
                    total={totalPages}
                    position="center"
                    page={page}
                    onChange={handlePageChange}
                    styles={(theme) => ({
                        control: {
                            "&[data-active]": {
                                backgroundImage: theme.fn.gradient({
                                    from: "#10bc3bd7",
                                    to: "#10bc3bd7",
                                }),
                                border: 0,
                            },
                        },
                    })}
                />
            </section>
        </Fragment>
    );
};

export default Order;
