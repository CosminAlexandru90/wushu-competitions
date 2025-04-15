import { getAccessToken } from "./AuthService.ts";

export type UserInfo = {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    preferred_username: string;
    resource_access:{
        'spring-with-test-scope':{
            roles: string[];
        }
    }
}

export async function getUserInfo(): Promise<UserInfo> {
    const token = await getAccessToken();

    const response = await fetch("http://localhost:9000/api/userinfo", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user info");
    }

    return response.json();
}
