import { useEffect, useState } from "react"
import { MENU_API, MENU_MAPI } from "../../utils/constant"

const useRestrauntMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const isMobile = window.innerWidth <= 768;
        const API = isMobile ? MENU_MAPI : MENU_API;
        const data = await fetch(API + resId);
        const json = await data.json();
        setResMenu(json);
    };

    return resMenu;
}

export default useRestrauntMenu;