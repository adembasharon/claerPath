
import { useRef, useEffect, useState } from "react";
import { faCheck, faTimes, faInfoCicrcle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 



const userRegister = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PwdRegister = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#$%]).{8,24}&/;

const RegisterItems = () => {
    const UserRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [UserFocus, setUserFocus] = useState(false);

    const [Pwd, setPwd] = useState("");
    const [ValidPwd, setValidPwd] = useState(false);
    const [PwdFocus, SetPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus,setMatchFocus]=useState(false)




    return (
        <div>
            
    </div>



    )
}
export default RegisterItems;