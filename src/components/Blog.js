import React from "react";
import Article from "./Article"


const Blog = ({data}) => {
    return <div className="blog">
        {data.map((el,index) => {
            return <Article key={index} title={el.title} text={el.text} date={el.date}/>
        })}
    </div>
}

export default Blog;