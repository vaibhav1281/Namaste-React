import { useEffect, useState } from "react"
import { MENU_API } from "../../utils/constant"


const useRestrauntMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResMenu(json);
    };

    return resMenu;
}

export default useRestrauntMenu;