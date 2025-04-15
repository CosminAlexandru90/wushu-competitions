interface TokenResponse {
    access_token: string;
    expires_at: string;
    scopes: string[];
}
export async function getAccessToken(): Promise<string> {
    const response = await fetch("http://localhost:9000/api/token", {
        credentials: "include", // Important if you're using session/cookie-based auth
    });

    if (!response.ok) {
        throw new Error("Failed to get access token");
    }

    const data: TokenResponse = await response.json();
    return data.access_token;
}