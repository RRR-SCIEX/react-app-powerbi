"use client";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./AccountInfo.module.css";
import Button2 from "@/components/UI/Button2";
import { useCookies } from "react-cookie";
import axios from "axios";
import EditPassword from "../../../../components/userDashboard/EditPass";
import Loading from "@/components/loading/Loading";
// import EditEmail from "@/components/userDashboard/EditEmail";
const AccountInfo = () => {
    const [cookies] = useCookies(["token"]);
    const token = cookies["token"];

    const [showEditPassword, setShowEditPassword] = useState(false);
    function handleShowEditPassword(e) {
        e.preventDefault();
        setShowEditPassword(!showEditPassword);
    }
    // const [showEditEmail, setShowEditEmail] = useState(false);
    // function handleShowEditEmail(e) {
    //     e.preventDefault();
    //     setShowEditEmail(!showEditEmail);
    // }

    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        if (token) {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
             
            

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
        }
    }, [token]);

    const [form, setForm] = useState({
        fullName: userData.fullName || "",
        phone: userData.phone || "",
    });

    function handleChangeForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function upDateUser(e) {
        e.preventDefault();
        setLoading(true);

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        try {
            axios.put(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/updateUser`,
                form,
                { headers }
            );
            setLoading(false);
            alert("تم ");
        } catch {
            setLoading(false);
        }
    }

    return (
        <Fragment>
            {loading && <Loading />}
            <section className={`mainContainer ${classes.section}`}>
                <div className={classes.userDetails}>
                    <div className={classes.img}>
                        <img src={"/images/person.png"} alt="" />
                    </div>
                    <div>
                        <p>
                            اهلا بيك يا <span>{userData.fullName}</span>
                        </p>
                        <p>
                            نقاط نُهديك الخاصه بك :{" "}
                            <span>{userData.points}</span>
                        </p>
                        <p>
                            تنتهي صلاحيه <span>0</span> نقطه خلال 30 يوم
                        </p>
                    </div>
                </div>
                <p className={classes.head}>تعديل بيانات الحساب</p>

                <form onSubmit={upDateUser}>
                    <div>
                        <div>
                            <label htmlFor="n1">الإسم</label>
                            <input
                                type="text"
                                id="n1"
                                name="fullName"
                                placeholder={userData.fullName}
                                defaultValue={userData.fullName || ""}
                                onChange={handleChangeForm}
                            />
                        </div>
                        <div>
                            <label htmlFor="n4">هاتف</label>
                            <input
                                type="number"
                                id="n4"
                                name="phone"
                                placeholder={userData.phone}
                                defaultValue={userData.phone || ""}
                                onChange={handleChangeForm}
                            />
                        </div>
                        <div>
                            <label htmlFor="n1">الايميل</label>
                            <input
                                type="text"
                                id="n1"
                                name="email"
                                placeholder={userData.email}
                                defaultValue={userData.email || ""}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="n2">رقم عضوية نهديك</label>
                            <input
                                type="text"
                                id="n2"
                                placeholder={userData.id}
                                disabled
                            />
                        </div>
                        {/* <div>
                            <label htmlFor="n3">الجنس</label>
                            <select id="n3">
                                <option value="انثى">انثى</option>
                                <option value="ذكر">ذكر</option>
                                <option value="غير محدد">غير محدد</option>
                            </select>
                        </div> */}
                    </div>
                    <div className={classes.btns}>
                        <div>
                            <button
                                onClick={handleShowEditPassword}
                                className={classes.btn}
                            >
                                تغير كلمه السر
                            </button>
                            {/* <button
                                onClick={handleShowEditEmail}
                                className={classes.btn}
                            >
                                تغير البريد الالكتروني
                            </button> */}
                        </div>
                        <Button2 text="حفظ" />
                    </div>
                </form>
            </section>
            {showEditPassword && (
                <EditPassword
                    Close={handleShowEditPassword}
                    title="كلمه السر"
                    titleEn="changePassword"
                    name="Password"
                    email={userData.email}
                />
            )}
            {/* {showEditEmail && (
                <EditEmail
                    Close={handleShowEditEmail}
                    title="البريد الالكتروني"
                    titleEn="changeEmail"
                    name="Email"
                    email={userData.email}
                />
            )} */}
        </Fragment>
    );
};

export default AccountInfo;
