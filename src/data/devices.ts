// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description?: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "OPPO Find X8",
			image: "/images/device/oppofindx8.png",
			specs: "12GB + 256GB",
			link: "https://www.oppo.com/",
		},
		{
			name: "Redmi K30S Ultra",
			image: "/images/device/redmik30sultra.png",
			specs: "8GB + 128GB",
			link: "https://www.mi.com/",
		},
	],
	Computer: [
		{
			name: "ThinkBook 14+",
			image: "/images/device/thinkbook14+.png",
			specs: "16GB + 512GB",
			link: "https://www.lenovo.com/",
		},
	],
};
