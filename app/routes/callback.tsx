import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import LoadingRing from "~/components/LoadingRing";
import { useAuth0 } from "~/hooks/useAuth";
import { commitSession, getSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.hostname;
  const isLocal = domain === "localhost";

  const auth = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    host: isLocal ? "http://" + domain + ":3000" : "https://" + domain,
  };

  return auth;
};

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const formData = await request.formData();
  const userValue = formData.get("user") as string;
  const user = JSON.parse(userValue);

  if (!user) {
    return redirect("/login");
  }

  const baseURL = process.env.API_URL;
  if (!baseURL) {
    throw new Error("API_URL environment variable is not set");
  }

  const payload = JSON.stringify({
    username: user.nickname,
    picture: user.picture,
    email: user.email,
    role: "user"
  });
  try {
    const response = await fetch(`${baseURL}/users/`, {
      method: "POST",
      body: payload,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      // Handle non-2xx responses
      console.error("Server error:", response.statusText);
      return redirect("/login");
    }

    const responseData = await response.json();
    console.log("User created successfully:", responseData);
    session.set("user", responseData);

    return redirect("/dashboard", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error: any) {
    // Handle network errors or JSON parsing errors
    console.error("Error creating user:", error.message);
    return redirect("/login");
  }
};

function Route() {
  const data = useLoaderData();

  const auth0Config = {
    domain: data?.domain,
    clientID: data?.clientId,
    redirectUri: data?.host + "/callback",
    responseType: "token id_token",
  };

  const { handleAuthentication } = useAuth0(auth0Config);

  const startAuth = async () => {
    await handleAuthentication();
  };

  useEffect(() => {
    startAuth();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingRing />
    </div>
  );
}

export default Route;
