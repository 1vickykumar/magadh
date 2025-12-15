import { API_BASE_URL, PATH } from "../constant/url";
import { getToken } from "../utils/utils";

export async function signup(params) {
    try {
        console.log(`${API_BASE_URL}${PATH.signup}`);
        const response = await fetch(`${API_BASE_URL}${PATH.signup}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default async function login(params) {
    try {
        const response = await fetch(API_BASE_URL + PATH.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        });

        const loginData = await response.json();
        return loginData;
    }
    catch (err) {
        console.log(err);
    }
}

// Get user profile
export async function getUserProfile() {
    try {
        const token = getToken();
        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await fetch(API_BASE_URL + PATH.profile, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// Update user profile
export async function updateUserProfile(params) {
    try {
        const token = getToken();
        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await fetch(API_BASE_URL + PATH.update_profile, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(params)
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// Get cart items
export async function getCartItems() {
    try {
        const token = getToken();
        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await fetch(API_BASE_URL + PATH.cart, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// Update cart item quantity
export async function updateCartItem(productId, quantity) {
    try {
        const token = getToken();
        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await fetch(API_BASE_URL + PATH.cart_item, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ productId, quantity })
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// Remove cart item
export async function removeCartItem(productId) {
    try {
        const token = getToken();
        if (!token) {
            throw new Error("No authentication token found");
        }

        const response = await fetch(API_BASE_URL + PATH.cart_item, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ productId })
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}
