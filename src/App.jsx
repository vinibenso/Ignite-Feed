import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css";

import "./global.css";

export function App() {

  return (

    <div>
      <Header />
        <div className={styles.wrapper}>

          <Sidebar />

            <main>
              <Post 
              author="Vinicius Benso"
              content= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur pariatur recusandae distinctio necessitatibus nam obcaecati magni tempora dolore ipsum non, illo perferendis ipsa reprehenderit ratione a assumenda fuga consectetur harum."

              />
              <Post 
              author="Vinicius Benso"
              content= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. onsequuntur pariatur recusandae distinctio necessitatibus nam obcaecati magni tempora dolore ipsum non, ill perferendis ipsa reprehenderit ratione a assumenda fuga consectetur harum."
            
              />

          </main>
        
        </div>

    </div>

  )
}


