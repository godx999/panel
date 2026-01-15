const SELECTOR_CATEGORIES = ".w-full.max-w-\\[1500px\\] > div";
const SELECTOR_CARD = ".sun-card";
const SELECTOR_CARD_TEXT = ".ml-4.overflow-hidden";
const SELECTOR_CATEGORY_TITLE = "h2.text-2xl";

const DEFAULT_SEARCH_URL = "https://www.baidu.com/s?wd=";
const IP_INFO_URL = "https://ip.xxir.com/";

const SEARCH_TIP_SHOW_TIME = 2000;
const SCROLL_THRESHOLD = 300;
const SCROLL_DURATION = 600;

const $ = (s: string): HTMLElement | null => document.querySelector(s);

export const createElementCache = () => ({
    clock: $("#clock"),
    date: $("#date"),
    ip: $("#ip-address"),
    ipBox: $("#ip-info"),
    input: $("#searchInput") as HTMLInputElement,
    engineBtn: $("#engineBtn"),
    menu: $("#engineMenu"),
    icon: $("#currentIcon"),
    proName: $("#pro-name"),
    proBox: $("#pro-info"),
    searchBtn: $("#searchBtn"),
    searchTip: $("#searchTip"),
    floatingSearchBtn: $("#floatingSearchBtn"),
});

export const filterLinks = (query: string) => {
    const categories = document.querySelectorAll(SELECTOR_CATEGORIES);

    categories.forEach((catElement) => {
        const cards = catElement.querySelectorAll(SELECTOR_CARD);
        let hasVisibleCard = false;

        cards.forEach((card: Element) => {
            const cardElement = card as HTMLElement;
            const textDiv = cardElement.querySelector(SELECTOR_CARD_TEXT) as HTMLElement;
            const text = textDiv?.textContent?.toLowerCase() || "";
            const url = cardElement.getAttribute("href")?.toLowerCase() || "";

            const matches = text.includes(query.toLowerCase()) || url.includes(query.toLowerCase());

            if (matches) {
                cardElement.style.display = "";
                hasVisibleCard = true;
            } else {
                cardElement.style.display = "none";
            }
        });

        const title = catElement.querySelector(SELECTOR_CATEGORY_TITLE) as HTMLElement;
        if (title) {
            title.style.display = hasVisibleCard ? "" : "none";
        }
    });
};

export const resetLinks = () => {
    const categories = document.querySelectorAll(SELECTOR_CATEGORIES);

    categories.forEach((catElement) => {
        const cards = catElement.querySelectorAll(SELECTOR_CARD);
        cards.forEach((card: Element) => {
            const cardElement = card as HTMLElement;
            cardElement.style.display = "";
        });

        const title = catElement.querySelector(SELECTOR_CATEGORY_TITLE) as HTMLElement;
        if (title) {
            title.style.display = "";
        }
    });
};

export const showSearchTip = (tipElement: HTMLElement | null) => {
    if (tipElement) {
        tipElement.style.opacity = "1";
        setTimeout(() => {
            if (tipElement) tipElement.style.opacity = "0";
        }, SEARCH_TIP_SHOW_TIME);
    }
};

export const updateTime = (clockEl: HTMLElement | null, dateEl: HTMLElement | null) => {
    const now = new Date();
    if (clockEl) {
        clockEl.innerText = now.toLocaleTimeString("zh-CN", {
            hour12: false,
        });
    }
    if (dateEl) {
        dateEl.innerText = now.toLocaleDateString("zh-CN", {
            month: "long",
            day: "numeric",
            weekday: "long",
        });
    }
};

export const scheduleInit = (cb: () => void) => {
    const ric = (window as any).requestIdleCallback;
    if (ric) {
        ric(cb, { timeout: 1200 });
    } else {
        setTimeout(cb, 200);
    }
};

export const setupEngineButtonHandler = (engineBtn: HTMLElement | null, menu: HTMLElement | null) => {
    if (engineBtn) {
        engineBtn.onclick = (e) => {
            e.stopPropagation();
            menu?.classList.toggle("hidden");
        };
    }
};

export const setupEngineItemHandlers = (
    menu: HTMLElement | null,
    icon: HTMLElement | null,
    input: HTMLInputElement | null,
    onEngineSelect: (url: string, iconClass: string) => void
) => {
    document.querySelectorAll(".engine-item").forEach((item) => {
        (item as HTMLElement).onclick = (e) => {
            const target = e.currentTarget as HTMLElement;
            const url = target.dataset.url || DEFAULT_SEARCH_URL;
            const iconClass = target.dataset.icon || "";

            onEngineSelect(url, iconClass);
            menu?.classList.add("hidden");
            input?.focus();
        };
    });
};

export const setupInputHandlers = (
    input: HTMLInputElement | null,
    searchTip: HTMLElement | null,
    onSearch: () => void,
    onFilter: (query: string) => void,
    onReset: () => void
) => {
    if (!input) return;

    let originalPlaceholder = "";

    input.onfocus = () => {
        originalPlaceholder = input.placeholder;
        input.placeholder = "请输入搜索内容";
        if (searchTip) searchTip.style.opacity = "0";
    };

    input.onblur = () => {
        input.placeholder = originalPlaceholder;
    };

    input.oninput = () => {
        const query = input.value.trim();
        if (query) {
            onFilter(query);
        } else {
            onReset();
        }
    };

    input.onkeydown = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
        if (e.key === "Escape") {
            input.value = "";
            onReset();
            input.blur();
        }
    };
};

export const setupSearchButtonHandler = (searchBtn: HTMLElement | null, onSearch: () => void) => {
    if (searchBtn) {
        searchBtn.onclick = () => {
            onSearch();
        };
    }
};

export const setupFloatingButtonHandler = (
    floatingBtn: HTMLElement | null,
    input: HTMLInputElement | null
) => {
    if (floatingBtn) {
        floatingBtn.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setTimeout(() => {
                input?.focus();
            }, SCROLL_DURATION);
        };
    }
};

export const setupScrollListener = (floatingBtn: HTMLElement | null) => {
    window.addEventListener("scroll", () => {
        if (floatingBtn) {
            if (window.scrollY > SCROLL_THRESHOLD) {
                floatingBtn.style.opacity = "1";
                floatingBtn.style.pointerEvents = "auto";
            } else {
                floatingBtn.style.opacity = "0";
                floatingBtn.style.pointerEvents = "none";
            }
        }
    });
};

export const setupDocumentClickHandler = (menu: HTMLElement | null) => {
    document.onclick = () => menu?.classList.add("hidden");
};

export const setupIPInfoHandler = (ipBox: HTMLElement | null) => {
    if (ipBox) {
        ipBox.onclick = (e) => {
            e.stopPropagation();
            window.open(IP_INFO_URL, "_blank");
        };
    }
};

export const checkUrlStatus = async (url: string, client: any) => {
    try {
        const response = await client.network.getNetworkUrlstatus({ url });
        return response;
    } catch (error) {
        return { status: 'error', error: error };
    }
};

export const updateStatusIndicator = (card: HTMLElement, status: number | string) => {
    const indicator = card.querySelector('.status-indicator') as HTMLElement;
    if (!indicator) return;

    indicator.classList.remove('opacity-50', 'bg-gray-400');

    if (status === 200) {
        // 绿灯 - 正常
        indicator.style.backgroundColor = '#4ade80';
        indicator.style.boxShadow = '0 0 8px #4ade80';
        indicator.title = '可用 (200)';
        indicator.classList.add('opacity-100');
    } else if (status === 429) {
        // 黄灯 - 限流
        indicator.style.backgroundColor = '#fbbf24';
        indicator.style.boxShadow = '0 0 8px #fbbf24';
        indicator.title = `限流 (${status})`;
        indicator.classList.add('opacity-100');
    } else if (status === 403) {
        // 橙灯 - 禁止访问
        indicator.style.backgroundColor = '#fb923c';
        indicator.style.boxShadow = '0 0 8px #fb923c';
        indicator.title = `禁止访问 (${status})`;
        indicator.classList.add('opacity-100');
    } else {
        // 红灯 - 错误
        indicator.style.backgroundColor = '#ef4444';
        indicator.style.boxShadow = '0 0 8px #ef4444';
        indicator.title = typeof status === 'number' ? `错误 (${status})` : '无法访问';
        indicator.classList.add('opacity-100');
    }
};

export const checkAllUrls = async (client: any) => {
    const cards = document.querySelectorAll('.sun-card');

    for (const card of cards) {
        const url = (card as HTMLElement).getAttribute('data-url');
        if (!url) continue;

        try {
            const result = await checkUrlStatus(url, client);
            updateStatusIndicator(card as HTMLElement, result.status || 'error');
        } catch (error) {
            updateStatusIndicator(card as HTMLElement, 'error');
        }

        await new Promise(resolve => setTimeout(resolve, 100));
    }
};

export { DEFAULT_SEARCH_URL, IP_INFO_URL };
