import React from 'react'
// import { Link } from 'react-router-dom'

export const Article = ({ImageIUrl,Title,Desc,Author,Date,Source,Url,isArticle,content}) => {
  return (
    <div className='ArticleView'>
        <img src={ImageIUrl} alt="" className="ArticleImage" />
        <p className="Articletitle">{Title}</p>
        {!isArticle?<p className="ArticleAuthor">Author: {Author}</p>:""}
        {!isArticle?<p className="ArticleDate">Date: {Date}</p>:""}
        {!isArticle?<p className="ArticleSource">Source: {Source}</p>:""}
        {!isArticle?<p className="ArticleDesc">Descriptoin :<br/>{Desc}</p>:<p className="ArticleDesc">{Desc}</p>}
        {!isArticle?<a href={Url} target='_blank'><button className="button">Go to Article</button></a>:""}
        {/* <Link to={Url}><button className="button">Go to Article</button></Link> */}
    </div>  
  )
}
