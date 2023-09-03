"use client";
import React, { useEffect, useState } from "react";
import classes from "./Address.module.css";
import Button2 from "@/components/UI/Button2";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useAlert } from "@/lib/useAlert";

const page = () => {
    const { showAlert, colorAlert, alertMessage, handleAlertMessage } =
        useAlert();

    const [cookies] = useCookies(["token"]);
    const token = cookies["token"];
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const [userData, setUserData] = useState([]);
    const [allAddress, setAllAddress] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/authentication/current-user`,
                { headers }
            )
            .then((response) => {
                setUserData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token]);

    useEffect(() => {
        axios
            .get(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/address/getAllMyAddresses`,
                { headers }
            )
            .then((response) => {
                setAllAddress(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [form, setForm] = useState({
        line1: "",
        phone: "",
        title: "",
        userId: userData.id,
        userName: userData.fullName,
    });

    function handleChangeForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function addAds() {
        axios
            .post(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/address/addAddress`,
                form,
                { headers }
            )
            .then((res) => {
                handleAlertMessage(form.title, "ads", "add", "Green");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteAds(id, title) {
        axios
            .delete(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/address/deleteAddressById/${id}`,
                { headers }
            )
            .then((res) => {
                handleAlertMessage(title, "ads", "delete", "Red");
            })
            .catch((error) => {
                if (error.response.status == 404) {
                    handleAlertMessage(title, "ads", "cantDelete", "Red");
                } else {
                    console.error(error);
                }
            });
    }

    const [showFormAdd, setShowFormAdd] = useState(false);

    return (
        <section className="mainContainer">
            {showAlert && (
                <div className={`alert${colorAlert}`}>
                    <p>{alertMessage}</p>
                </div>
            )}

            <div>
                <p className={classes.head}>العناوين</p>
            </div>
            <div className={classes.allAddress}>
                {allAddress.length == 0 ? (
                    <p className={classes.isEmpty}>لا توجود عناوين مسجله</p>
                ) : (
                    <>
                        {allAddress.map((ads, index) => {
                            return (
                                <div key={index}>
                                    <p>
                                        {ads.title} /{" "}
                                        <span>{ads.userName}</span>
                                    </p>
                                    <p>
                                        رقم الهاتف : <span>{ads.phone}</span>
                                    </p>
                                    <p>{ads.line1}</p>
                                    <div className={classes.btns}>
                                        {/* <Button2 text="تعديل" /> */}
                                        <div
                                            onClick={() => {
                                                deleteAds(ads.id, ads.title);
                                            }}
                                        >
                                            <Button2 text="حذف" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
            <div
                className={classes.btns}
                onClick={() => {
                    setShowFormAdd(!showFormAdd);
                }}
            >
                <Button2 text="اضافه عنوان" />
            </div>
            {showFormAdd && (
                <div className={classes.addAddress}>
                    <form onSubmit={addAds}>
                        <div>
                            <label htmlFor="n1">اسم العنوان</label>
                            <input
                                type="text"
                                id="n1"
                                name="title"
                                placeholder="مثل : المنزل او العمل"
                                onChange={handleChangeForm}
                            />
                        </div>
                        <div>
                            <label htmlFor="n2">العنوان</label>
                            <input
                                type="text"
                                id="2"
                                name="line1"
                                placeholder="محافظه / مدينه / شارع"
                                onChange={handleChangeForm}
                            />
                        </div>
                        <div>
                            <label htmlFor="n3">رقم الهاتف</label>
                            <input
                                type="text"
                                id="n3"
                                name="phone"
                                placeholder="01200000001"
                                onChange={handleChangeForm}
                            />
                        </div>
                        <div
                            onClick={() => {
                                setShowFormAdd(false);
                                addAds();
                            }}
                            className={classes.btns}
                        >
                            <Button2 text="اضافه العنوان" />
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
};

export default page;
