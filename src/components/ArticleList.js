import React from 'react';

const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
    },
    {
      id: 3,
      title: "Function Components vs Class Components",
      date: "December 10, 2020",
      preview: "React, meet OOJS.",
    },
  ];




function ArticleList(props){

    console.log(posts)
//     const articlelist = props.ArticleList.map((posts) => {
//         return <li>{posts}</li>
// })

    // return (articlelist)
    return (
    <div> 
        <li>{posts}</li>
    </div>
    )

}
    
    
    

export default ArticleList;