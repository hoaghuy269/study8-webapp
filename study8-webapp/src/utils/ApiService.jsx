const API_BASE_URL = import.meta.env.VITE_API_URL;

export const callApi = async (endpoint, method = "GET", body = null) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": navigator.language,
                Authorization: localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",
            },
            body: body ? JSON.stringify(body) : null,
        });

        return await response.json();
    } catch (error) {
        console.error("Lỗi gọi API:", error);
        return { statusCode: 500, message: "Lỗi hệ thống" };
    }
};
