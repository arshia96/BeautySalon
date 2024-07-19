import http from "./httpService";

export function registerOtp(data) {
    return http.post("/api/register/", data).then(({ data }) => data);
}

export function verifyOtp(data) {
    return http.post("/api/verify-otp/", data).then(({ data }) => data);
}

export default { registerOtp, verifyOtp };