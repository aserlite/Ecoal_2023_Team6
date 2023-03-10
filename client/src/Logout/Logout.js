import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useCookies } from 'react-cookie';


function Logout(props) {
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();

    const logged = props.cookies.td05
    async function handleLogout(){
        const deleted = (await axios.get("http://127.0.0.1:8000/api/logout",
            {
                headers: {
                    "Authorization": "Bearer " + logged.access_token,
                }
            })).data;
        props.removeCookie('td05',{path:'/'});
        navigate("/")
    }
    handleLogout()
    return (
        <>

        </>
    );
}

export default Logout
