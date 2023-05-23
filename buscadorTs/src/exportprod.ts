
//import axios, { AxiosResponse } from 'axios';
//import { User } from './interfaces/user.interface';

//export async function getUsers() {
//	const response = await axios.get(
//        `https://fakestoreapi.com/products/users/${id}`  //lo saque de la pagina de fakestoreapi, muestra el primero, porue id no anda
//	                                );
//    const user: User = response.data;
//   	return user;
//                                    }

//import { temp1, temp2 } from './nombreDelArchivo';
import {productos} from './productos/productos.ts';

import { productosdb} from './productos/productos.interfaces.ts';


export function productosbase(){
    const respuesta=import { productos } from  `./productos/productos.ts/${nombre} `;
    const salida: productosdb=respuesta.data
    return salida;
}

 