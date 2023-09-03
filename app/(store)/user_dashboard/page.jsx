
import React, { Fragment} from "react";
import classes from "./UserDashboard.module.css";
import Dash from "@/components/userDashboard/Dash";


const UserDashboard = () => {
    return (
        <Fragment>
            <section className={`mainContainer ${classes.section}`}>
                <p className={classes.title}>لوحة التحكم الخاصة بي</p>
                <div className={classes.up}>
                    <Dash
                        href="/user_dashboard/account_info"
                        src="/images/person.png"
                        head="معلومات الحساب"
                        details="تغيير البريد الالكتروني وكلمة السر , تغيير الاسم الأول واسم العائلة"
                    />
                    <Dash
                        href="/user_dashboard/orders"
                        src="/images/person.png"
                        head="طلباتي "
                        details="تتبع الطلب, اعادة الطلب"
                    />
                    <Dash
                        href="/favorite"
                        src="/images/person.png"
                        head="قائمة الأمنيات "
                        details="شارك قائمة الأمنيات, اضف مفضلاتك لسلة الشراء"
                    />
                    <Dash
                        href="/user_dashboard/address"
                        src="/images/person.png"
                        head="سجل العناوين "
                        details="تغيير اعدادات الفوترة وعنوان الشحن اضف عنوان جديد"
                    />
                    <Dash
                        href=""
                        src="/images/person.png"
                        head=" طريقة الدفع المحفوظة"
                        details="عرض طريقة الدفع المحفوظة, حذف طريقة الدفع المحفوظة"
                    />
                    <Dash
                        href=""
                        src="/images/person.png"
                        head="برنامج نُهديك "
                        details="عرض نقاطك, عرض قوانين استحقاق وصرف النقاط"
                    />
                </div>
            </section>
        </Fragment>
    );
};

export default UserDashboard;
