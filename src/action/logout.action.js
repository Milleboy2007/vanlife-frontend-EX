import { redirect } from "react-router-dom";
import { logoutUser } from "../services/api";


export default async function logoutAction(){
    try{
        await logoutUser()
        return redirect("/")
    }catch (e){
        console.error(e)
        return redirect("/")
    }
}