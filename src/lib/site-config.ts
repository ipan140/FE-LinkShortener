// Read Backend API Base URL from environment variables (.env / PUBLIC_API_URL)
const backendUrl = (import.meta.env.PUBLIC_API_URL || "http://localhost:8000").replace(/\/+$/, "");

export const SITE_CONFIG = {
    brandName: "UltraFast Shortener",
    organizationName: "UltraFast Systems",
    defaultAuthor: "UltraFast Engineering Team",
    siteUrl: backendUrl,
    links: {
        home: "/",
        docsHome: "/docs",
        apiBase: backendUrl,
        swagger: `${backendUrl}/swagger/index.html`,
        metrics: `${backendUrl}/metrics`,
        health: `${backendUrl}/health`,
        github: "https://github.com",
    },
} as const;
