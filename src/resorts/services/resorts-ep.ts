import {IResortVM} from "../vm"
export class ResortsEP {
	getResorts(filter: string) : Promise<IResortVM[]> {
		
		var result : IResortVM[] = [{
			id: "1964",
			name: "Zavjalikha",
			description: "The mountain ski resort", 
			shortDescription: "The mountain ski resort", 
			location : {
				country: "Russia",
				region : "Chelyabinskay oblast",
				city: "trehgorniy",
				geo : {lat: 54.792846, lon: 58.536246}
			},
			media : [
				{type: "video", importance : 3, tags: ["piste", "free-ride"], url: "http://www.youtube.com/watch?v=VkwnMZsF_Ek"},
				{type: "image", importance : 2, tags: ["piste"], url: "http://turanet.ru/uploads/manual/europe/russia/chel/4/8.jpg"},
				],
			contacts : [ {
				type: "phone", importance : 3, kind: "administration", value: "+7 (35191) 481-00"
				} ]						
		},
		{
			id: "1965",
			name: "Bannoe",
			description: "The mountain ski resort", 
			shortDescription: "The mountain ski resort", 
			location : {
				country: "Russia",
				region : "Bashkortostan",
				city: "Magnitogorsk",
				geo : {lat: 53.590665, lon: 58.595443}
			},
			media : [
				{type: "video", importance : 3, tags: ["review"], url: "http://www.youtube.com/watch?v=3ZtwjUt3s5w"},
				{type: "image", importance : 2, tags: ["piste"], url: "http://cs315130.vk.me/v315130786/4395/48okt7gBvGs.jpg"},
				],
			contacts : [ {
				type: "phone", importance : 3, kind: "administration", value: "+7 (3519) 255-601"
				} ]						
		}];
		
		return Promise.resolve(!filter ? result : 
			result.filter(f => f.name.toLowerCase().indexOf(filter.toLowerCase()) != -1));
	}
}