
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title,products}) =>{
    return (
        <div className='category-preview-container'>
            <h2>
                <span className='title'>{title.toUpperCase()}</span>
                <span className='quantity'>({products.length})</span>
            </h2>
            <div className='preview'>
                {
                products.filter((_,index)=>{
                    return index < 4
                }).map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })
                }
            </div>
        </div>)
}
export default CategoryPreview;