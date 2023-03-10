import React, {useEffect, useState} from "react";
import axios from "axios";
export const useStat = () =>{
    const [profile, setProfile] = useState()
    const token = localStorage.getItem('accessToken')

    useEffect( () => {
        if (localStorage.length) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                })
                .then(async (res) => {
                    // setProfile(res.data);
                 await axios.post("http://localhost:8080/ingles", { email: res.data.email })
                        .then((scces) => setProfile(scces.data))

                })
                .catch((err) => console.log(err));
        }
    },
    [ ]
);
    return{
        setProfile, profile
    }
}