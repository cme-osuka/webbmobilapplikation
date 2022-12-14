import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    const response = await axios.get("http://localhost:1337/api/articles?populate=*");
    const articles = response.data.data;
    setArticles(articles);
  }

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <div className="App">
      {
        articles.map(article => (
          <div key={article.id}>
            <h2>{article.attributes.title}</h2>
            <p>Author: {article.attributes.users_permissions_user.data.attributes.email}</p>
            <ReactMarkdown>{article.attributes.content}</ReactMarkdown>
          </div>
        ))
      }
    </div>
  )
}

export default App
