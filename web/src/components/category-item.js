import React from 'react';
import { Link } from 'gatsby'

const CategoryItem = ({ category }) => {
    const { title, slug, image_thumbnail } = category;
    return (
        <Link to={`/${slug}`} className='block w-auto hover:drop-shadow-lg hover:scale-95 transition-all'>
            <div className={`rounded-2xl overflow-hidden relative`} style={{ background: '#f1f5f8' }}>
                <img alt={title} src={image_thumbnail.localFile.publicURL} className="h-250 object-cover m-auto" />
            </div>
            <div className='mt-2'>
                <label className='text-xl font-bold'>{title}</label>
            </div>
        </Link>
    )
}
export default CategoryItem