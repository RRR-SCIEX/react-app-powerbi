// import React, { Fragment, useState } from "react";
// import classes from "./Edit.module.css";
// import Button from "../UI/Button";
// import ButtonClose from "../UI/ButtonClose";
// import { useCookies } from "react-cookie";
// import Loading from "../loading/Loading";
// import axios from "axios";

// const EditEmail = (props) => {
//     const [cookies] = useCookies(["token"]);
//     const token = cookies["token"];

//     const [loading, setLoading] = useState(false);

//     const [form, setForm] = useState({
//         oldEmail: "",
//         newEmail: "",
//     });
    
//     function handleChangeForm(e) {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     }

//     const handlePaste = (e) => {
//         const pastedText = e.clipboardData.getData("text");
//         setForm({ ...form, [e.target.name]: pastedText });
//     };

//     function submit(e) {
//         e.preventDefault();
//         const headers = {
//             Authorization: `Bearer ${token}`,
//         };

//         axios
//             .put(
//                 `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/changeEmail`,
//                 form,
//                 { headers }
//             )
//             .then((response) => {})
//             .catch((error) => {
//                 console.error(error);
//             });
//     }

//     return (
//         <Fragment>
//             {loading && <Loading />}

//             <section className={classes.section}>
//                 <form className={classes.form} onSubmit={submit}>
//                     <ButtonClose click={props.Close} />

//                     <p> تغير {props.title} </p>
//                     <div>
//                         <label htmlFor="n1">{props.title} الحاليه </label>
//                         <input
//                             type="text"
//                             id="n1"
//                             name={`old${props.name}`}
//                             onChange={handleChangeForm}
//                             onPaste={handlePaste}
//                             autoComplete="off"
//                             value={props.email}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="n2"> {props.title} الجديده </label>
//                         <input
//                             type="text"
//                             id="n2"
//                             name={`new${props.name}`}
//                             onChange={handleChangeForm}
//                             onPaste={handlePaste}
//                             autoComplete="off"
//                         />
//                     </div>
//                     <Button text="حفظ التغير" />
//                 </form>
//             </section>
//         </Fragment>
//     );
// };

// export default EditEmail;
