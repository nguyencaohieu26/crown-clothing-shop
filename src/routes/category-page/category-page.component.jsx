import './category-page.styles.scss';
import { useContext,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
const CategoryPage = () =>{
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])

    return (<div className='container-1'>
        <h3>{category}</h3>
        <div className='category-container-1'>
        {
            products && (products.map(product =>{
                return (<ProductCard key={product.id} product={product}/>)
            }))
        }
    </div>
    </div>)
}
export default CategoryPage;