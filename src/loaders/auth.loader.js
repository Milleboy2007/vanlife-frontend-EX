import { requireAuth } from "../services/auth";


export default async function authLoader(){
    await requireAuth()
}