import './directory.styles.scss';
import CategoryItem from '../categories/category-item.component';

const Directory = ({categories}) =>{
    return(
      <section className='main-container'>
        {/*  */}
        <div>
          <h1 className='heading-1'>Browse categories</h1>
          <div className="categories-container">
            {categories.map(category =>{
              return <CategoryItem category={category} key={category.id}/>
            })}
          </div>
        </div>
        {/*  */}
      </section>
    );
}
export default Directory;