import { ILocationVM, IMediaVM, IContactVM } from "../global/vm"
export interface IResortVM {
	id: string
	name: string
	description: string 
	shortDescription: string 
	location : ILocationVM
	media : IMediaVM[]
	contacts : IContactVM[]			
}  

