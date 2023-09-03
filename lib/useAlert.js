import { useState } from "react";

export const useAlert = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [colorAlert, setColorAlert] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleAlertMessage = (nameProduct, state, action, color) => {
        setColorAlert(color);
        let message = "";

        if (state === "fav") {
            if (action === "add") {
                message = `تم اضافة ${nameProduct} إلى قائمة المفضله`;
            } else if (action === "alreadyExist") {
                message = `${nameProduct} موجود بالفعل في المفضله`;
            } else if (action === "notEnough") {
                message = `${nameProduct} غير متوفر حالياً`;
            }
            else if(action==="delete"){
                message=`تم ازاله ${nameProduct} من المفضله`
            }
        }

        if(state==="cart"){
            if(action==="delete"){
                message=`تم ازاله ${nameProduct} من السله`
            }
            if (action === "add") {
                message = `تم اضافه ${nameProduct} الى قائمه السله`;
            }
            if (action === "alreadyExist") {
                message = `${nameProduct} موجود بالفعل في السله`;
            }
            if (action === "notEnough") {
                message = `${nameProduct} غير متوفر حاليا`;
            }
        }

        if (state === "ads") {
            if (action === "add") {
                message = `تم اضافه عنوان '${nameProduct}'`;
            }
            if (action === "delete") {
                message = `تم حذف العنوان '${nameProduct}'`;
            }
            if (action === "cantDelete") {
                message =`هناك طلبات على هذه العنوان لا يمكنك حذفه`;
            }
        }

        if(state==="order"){
            if(action==="notEnough"){
                message=`المنتجات اصبحت غير متوفره`
            }
            if(action==="noData"){
                message=`هناك خطاء في العنوان او المشتريات`
            }
            
        }

        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    };

    return { showAlert, colorAlert, alertMessage, handleAlertMessage };
};
