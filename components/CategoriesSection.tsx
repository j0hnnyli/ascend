import categoriesInfo from '@/lib/content/categoriesInfo';
import CategoryCard from './CategoryCard';



export default function CategoriesSection(){

  return (
    <div 
      className='grid grid-col-1 md:grid-cols-3 gap-5'
    >
      {categoriesInfo.map((category) => (
        <CategoryCard
          key={category.id}
          href={category.href}
          title={category.title}
          img={category.img}
        />
      ))}
    </div>
  )
}