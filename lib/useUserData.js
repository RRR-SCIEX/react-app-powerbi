import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const useUserData = () => {
    const [cookies] = useCookies(["token"]);
    const token = cookies["token"];
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASEURL}/comma/authentication/current-user`,
                    {
                        headers,
                    }
                );
                setUserData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return {userData,headers};
};

export default useUserData;
