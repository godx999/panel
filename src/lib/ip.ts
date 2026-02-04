import { IP_API_PRIMARY, IP_API_FALLBACK } from "./config";

interface IpApiResponse {
    ip?: string;
    IP?: string;
    as?: { info?: string; name?: string };
    country?: { name?: string; code?: string } | string;
    province?: { name?: string; code?: string } | string;
    city?: { name?: string; code?: string } | string;
    district?: { name?: string; code?: string } | string;
    type?: string;
    net?: string;
    isp?: string;
    regions?: string[];
}

export const fetchIpInfo = async (ipEl: HTMLElement | null, ipBoxEl: HTMLElement | null) => {
    if (!ipEl || !ipBoxEl) return;

    try {
        let data: IpApiResponse | null = null;
        let apiUsed = "primary";

        try {
            const res = await fetch(IP_API_PRIMARY, {
                cache: "no-store",
                signal: AbortSignal.timeout(1500),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            data = await res.json();
        } catch (primaryError) {
            console.warn("主 IP API 请求失败，尝试备用 API...", primaryError);
            apiUsed = "fallback";
            try {
                const res = await fetch(IP_API_FALLBACK, {
                    cache: "no-store",
                    signal: AbortSignal.timeout(1500),
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                data = await res.json();
            } catch (fallbackError) {
                console.warn("备用 IP API 也失败:", fallbackError);
                data = null;
            }
        }

        let displayText = "";

        if (data) {
            let ip = "";
            let operator = "";
            let country = "";
            let province = "";
            let city = "";
            let district = "";
            let type = "";

            if (apiUsed === "primary") {
                ip = data.ip || "";
                operator = data.as?.info || data.as?.name || "";

                const countryData = data.country;
                country = typeof countryData === "object" ? (countryData?.name || countryData?.code || "") : (countryData || "");

                const provinceData = data.province;
                province = typeof provinceData === "object" ? (provinceData?.name || provinceData?.code || "") : (provinceData || "");

                const cityData = data.city;
                city = typeof cityData === "object" ? (cityData?.name || cityData?.code || "") : (cityData || "");

                const districtData = data.district;
                district = typeof districtData === "object" ? (districtData?.name || districtData?.code || "") : (districtData || "");

                type = data.type || data.net || "";

                // Fallback to regions if specific fields are missing
                if (!province && data.regions?.[0]) province = data.regions[0];
                if (!city && data.regions?.[1]) city = data.regions[1];
                if (!district && data.regions?.[2]) district = data.regions[2];

            } else if (apiUsed === "fallback") {
                ip = data.ip || data.IP || "";
                country = typeof data.country === "string" ? data.country : "";
                province = typeof data.province === "string" ? data.province : "";
                city = typeof data.city === "string" ? data.city : "";
                operator = data.isp || "";
                type = data.type || "";
                district = typeof data.district === "string" ? data.district : "";
            }

            const accessMethod = ip.includes(":") ? "IPv6" : "IPv4";

            // Format: Dual stack IP address (current IP) | Access method (IPv6/IPv4) | ISP | Country | Province | City | District | Type
            const parts = [
                ip,
                accessMethod,
                operator,
                country,
                province,
                city,
                district,
                type

            ].filter(Boolean);

            displayText = parts.join(" · ");
        }

        ipEl.innerText = displayText || "Enjoy your day";
    } catch (error) {
        console.error("获取 IP 信息发生异常:", error);
        ipEl.innerText = "Enjoy your day";
    } finally {
        ipBoxEl.style.opacity = "1";
    }
};
