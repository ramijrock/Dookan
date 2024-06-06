const isDev = false; //false mean staging
export default {
    BASE_URL: isDev ? "http://localhost:3000/admin/" : "https://gro-mart-admin.onrender.com/admin/",
    SUCCESS_TYPE: "success",
    ERROR_TYPE: "error",
    ALERT_TYPE: "alert",
    WARNING_TYPE: "warning",
}