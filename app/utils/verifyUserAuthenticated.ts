import {getAuth} from "@clerk/remix/ssr.server";
import {redirect} from "@remix-run/node";

export async function verifyUserAuthenticated(request: Request) {
    const { userId } = await getAuth(request);
    if (!userId) {
        return redirect("/sign-in?redirect_url=" + request.url);
    }
}