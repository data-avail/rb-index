export interface IGeoVM {
	lat: number, lon: number 
}

export interface ILocationVM {
	country: string
	region: string
	city: string
	geo: IGeoVM
}

export interface IMediaVM {
	type: string,
	tags: string[],
	url: string,
	importance: number
};

export interface IContactVM {
	type: string,
	kind: string,
	value: string,
	importance: number
};
