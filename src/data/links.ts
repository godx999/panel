export const SEARCH_ENGINES = [
  { id: 'bing', name: 'Bing', url: 'https://cn.bing.com/search?q=', icon: 'fab fa-microsoft' },
  { id: 'baidu', name: 'Baidu', url: 'https://www.baidu.com/s?wd=', icon: 'fas fa-paw' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: 'fab fa-google' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=', icon: 'fab fa-github' }
];

// 链接配置类型
export interface LinkItem {
  name: string;
  url: string;
  icon: string;
  color: string;
  /** 是否使用远程 API 获取图标，默认为 true，设为 false 则直接使用 FontAwesome 图标 */
  useIcon?: boolean;
}

export interface Category {
  title: string;
  links: LinkItem[];
}

export const CATEGORIES: Category[] = [
  {
    title: "内网",
    links: [
      { name: "Lucky", url: "http://100.117.79.107:16601/moechan/#/login", icon: "far fa-star", color: "#ffffff", useIcon: false },
      { name: "MoviePilot", url: "http://100.117.79.107:4000/#/dashboard", icon: "fas fa-clapperboard", color: "#ffffff", useIcon: false },
      { name: "Qbittorrent", url: "http://100.117.79.107:33445/", icon: "fas fa-rss", color: "#ffffff", useIcon: false },
      { name: "OpenList", url: "http://100.117.79.107:5244/", icon: "far fa-file", color: "#ffffff", useIcon: false },
      { name: "ASUS-Router", url: "http://100.106.0.84/", icon: "fas fa-wifi", color: "#ffffff", useIcon: false },
      { name: "OpenWrt", url: "http://192.168.10.3:8080/cgi-bin/luci/", icon: "fas fa-globe", color: "#ffffff", useIcon: false }
    ]
  },
  {
    title: "PT",
    links: [
      { name: "M-Team", url: "https://ob.m-team.cc/index", icon: "fab fa-bilibili", color: "#00aeec", useIcon: true },
      { name: "PTerClub", url: "https://pterclub.net/index.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "HDSky", url: "https://hdsky.me/torrents.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "SSD", url: "https://springsunday.net/index.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "TTG", url: "https://totheglory.im/browse.php?c=M", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "OurBits", url: "https://ourbits.club/torrents.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "KeepFRDS", url: "https://pt.keepfrds.com/torrents.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "DIC", url: "https://dicmusic.com/torrents.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "CHDBits", url: "https://ptchdbits.co/torrents.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true },
      { name: "Audiences", url: "https://audiences.me/torrents.php", icon: "fab fa-tiktok", color: "#ff0050", useIcon: true }
    ]
  },
  {
    title: "Website",
    links: [
      { name: "妖火", url: "https://yaohuo.me", icon: "fab fa-bilibili", color: "#00aeec", useIcon: true },
      { name: "百度贴吧", url: "https://tieba.baidu.com", icon: "fab fa-bilibili", color: "#00aeec", useIcon: true },
      { name: "CloudFlare", url: "https://CloudFlare.com", icon: "fab fa-bilibili", color: "#00aeec", useIcon: true },
      { name: "GitHub", url: "https://github.com/", icon: "fab fa-bilibili", color: "#00aeec", useIcon: true },
      { name: "TMDB", url: "https://www.themoviedb.org/", icon: "fab fa-bilibili", color: "#00aeec", useIcon: true }
    ]
  },
  {
    title: "Tools",
    links: [
      { name: "有道翻译", url: "https://fanyi.youdao.com/index.html#/TextTranslate", icon: "fas fa-language", color: "#e83e35", useIcon: true },
      { name: "SM.MS", url: "https://sm.ms/", icon: "fas fa-server", color: "#663399", useIcon: true },
      { name: "ImgBB", url: "https://zh-tw.imgbb.com/", icon: "fas fa-dog", color: "#f39c12", useIcon: true },
      { name: "GitHub Proxy", url: "https://ghproxy.link/", icon: "fas fa-dog", color: "#f39c12", useIcon: true },
      { name: "Prosettings", url: "https://prosettings.net/", icon: "fas fa-sliders-h", color: "#27ae60", useIcon: true },
      { name: "二维码识别", url: "https://jiema.wwei.cn/", icon: "fas fa-qrcode", color: "#3498db", useIcon: true },
      { name: "系统库", url: "https://www.xitongku.com/", icon: "fas fa-compact-disc", color: "#9b59b6", useIcon: true },
      { name: "active", url: "https://massgrave.dev/", icon: "fas fa-key", color: "#e67e22", useIcon: true },
      { name: "bootcn", url: "https://www.bootcdn.cn/", icon: "fas fa-bolt", color: "#f1c40f", useIcon: true },
      { name: "ping0", url: "https://ping0.cc", icon: "fas fa-wifi", color: "#1abc9c", useIcon: true },
      { name: "雨云", url: "https://app.rainyun.com/dashboard", icon: "fas fa-cloud", color: "#34ace0", useIcon: true },
      { name: "七牛云", url: "https://portal.qiniu.com/home", icon: "fas fa-cloud-upload-alt", color: "#007fff", useIcon: true },
      { name: "DNSPod", url: "https://console.dnspod.cn/", icon: "fas fa-network-wired", color: "#0052d9", useIcon: true },
      { name: "阿里云", url: "https://home.console.aliyun.com/home/dashboard/ProductAndService", icon: "fab fa-alipay", color: "#ff6a00", useIcon: true },
      { name: "rls", url: "https://rls.ovh/", icon: "fas fa-terminal", color: "#ed1c24", useIcon: true },
      { name: "举个栗子", url: "https://www.alcy.cc/", icon: "fas fa-chestnut", color: "#27ae60", useIcon: true },
      { name: "中国科学技术大学测速网站", url: "https://test.ustc.edu.cn/", icon: "fas fa-gauge-high", color: "#004098", useIcon: true },
      { name: "ip测漏", url: "https://ipcelou.com", icon: "fas fa-shield-alt", color: "#2c3e50", useIcon: true },
      { name: "双子星", url: "https://v2-dev.xsyd.top/", icon: "fas fa-star", color: "#f1c40f", useIcon: true }
    ]
  }
];
