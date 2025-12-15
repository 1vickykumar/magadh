const LOGIN_INFO = "login_info";

export function storeLoginData(loginData) {
    localStorage.setItem(LOGIN_INFO, JSON.stringify(loginData));
}

function getStoredData() {
    const raw = localStorage.getItem(LOGIN_INFO);
    if (!raw) return null;

    try {
        return JSON.parse(raw);
    } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
        return null;
    }
}

export function getName() {
    const data = getStoredData();
    return data?.name || null;
}

export function getToken() {
    const data = getStoredData();
    return data?.token || null;
}

export function getUserData() {
    const data = getStoredData();
    return data?.data || null;
}

export function clearStorage() {
    localStorage.removeItem(LOGIN_INFO);
}
