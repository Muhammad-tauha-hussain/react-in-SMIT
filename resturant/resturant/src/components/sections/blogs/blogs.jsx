import React from 'react'
import Heading from '../../heading/heading'
import { foodBlogPosts } from '../../../utils/blogs.js';
import Card from '../../cards/card'
import './blogs.css'
const Blogs = () => {
    // console.log(foodBlogPosts);
  return (
    <div className='container w-[80%] m-auto'>
        <div className="heading">
            <Heading title={"OUR"} spanElement={" BLOGS"}/>
        </div>
        
        <div className="blogs-cards flex flex-wrap gap-4">
            {foodBlogPosts.map((item,index)=>(
                <Card key={index} title={item.title} image={item.image} price={item.content} isbutton={true} variant={"blogs"}/>
            ))}
        </div>
    </div>
  )
}

export default Blogs
