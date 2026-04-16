import { getHostVans } from "../services/api"
import { requireAuth } from "../services/auth"

export default async function hostDashboardLoader({request}){
    const user = await requireAuth(request)

    const vans = await getHostVans(user.id)

    return {user:user, vans:vans}
}