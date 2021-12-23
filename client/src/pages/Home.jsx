import React from 'react'

export default function Home(props) {
  return <div>
    <h1 style={{color:"red",textAlign:'center'}}> BuyBest Home</h1>
    <h3 style={{textAlign:'left',margin:'auto'}}>  
    <p>This project is to build a full-stack (Mongoose/Express/React/Node) application with a functioning backend and frontend.</p>
    <ul>
      <li>
        The backend sever is a <span>MongoDB</span> with Mongoose/Express which is document-oriented and offers a faster query process. It works as <span>a complementary data storage of the transaction SQL databases for retail industry</span>. The information data of products and reviews is pulled into a MongoDB from the main SQL databases of a retail store.
      </li>
      <li>
        The frondend website is implemented with <span>React</span>/Node as a single page application<span>(SPA)</span>. Customers are allowed to interact with web pages to search products and read/write product reviews, by making requests(buttons, HTMLforms, dropsowns, searchbars, etc.) to get/post/update/delete reviews to the backend server.
      </li>
    </ul>
    <p>In this project, <span>Faker</span> is used to create the information data of products and reviews to test the project. Later on a third party API call <span>SerpApi</span> for some retail stores, like Home Depot or WalMart, is used to pull the data from the retail transaction databases into the MongoDB.</p>
     </h3>
  </div>
}