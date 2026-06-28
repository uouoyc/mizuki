import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/202604180103450.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "cyou",
	bio: "与你的日常，就是奇迹",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/uouoyc",
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/2079872578",
		},
		{
			name: "YouTube",
			icon: "fa7-brands:youtube",
			url: "https://www.youtube.com/@uoyc",
		},
		{
			name: "X",
			icon: "fa7-brands:x-twitter",
			url: "https://x.com/uouoyc",
		},
	],
};
