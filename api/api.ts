import { OpenFoodFacts } from "../types/OpenFoodFacts";
import axios from 'axios';
import PocketBase from 'pocketbase'

const getProductsByName = async (name: string) => {
    const products: OpenFoodFacts[] = (await axios.get("https://fr.openfoodfacts.org/cgi/search.pl?search_terms=" + name + "&search_simple=1&json=1")).data.products;
    return products
}

const pb = new PocketBase('http://192.168.2.21:8090').autoCancellation(false);

export {
    getProductsByName,
    pb
}