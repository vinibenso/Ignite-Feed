import { Header } from './components/header';
import { Post } from './Post';

import "./global.css"

export function App() {

  return (

    <div>

      <Header />

      <Post
        author="Vinicius Benso"
        content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora exercitationem eum labore ullam facilis, debitis doloremque assumenda distinctio dolores fugiat laborum asperiores dolorem aliquam aliquid officia corporis esse praesentium qui?"  
      /> 
      <Post
        author= "Paulinha"
        content= "Lorem ipsum dolor sit amet consectet!"

      />
  
    </div>

  )
}


