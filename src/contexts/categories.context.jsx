import {createContext,useState,useEffect} from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase.utlis.js';

//
export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap,setCategoriesMap] = useState({});

    //Run only first time to generate data to db
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    },[]);

    const value = {categoriesMap};
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}