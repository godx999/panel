// Constants
const SELECTOR_CATEGORIES = ".w-full.max-w-\\[1500px\\] > div";
const SELECTOR_CARD = ".sun-card";
const SELECTOR_CARD_TEXT = ".ml-4.overflow-hidden";
const SELECTOR_CATEGORY_TITLE = "h2.text-2xl";
const DEFAULT_SEARCH_URL = "https://www.baidu.com/s?wd=";
const SEARCH_TIP_SHOW_TIME = 2000;
const SCROLL_THRESHOLD = 300;
const SCROLL_DURATION = 600;

// Element selector helper
const $ = (s: string): HTMLElement | null => document.querySelector(s);

// Elements cache
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

// Link filtering
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

// UI helpers
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

// Event handlers
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

export { DEFAULT_SEARCH_URL };
