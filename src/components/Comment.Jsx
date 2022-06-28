import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment (){
  return(
  <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/vinibenso.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
              <div className={styles.authorAndTime}>
                  <strong>Vinicius Benso</strong>
                  <time title="27 de junho às 09:12" dateTime='2022-06-27 09:12:00'> Cerca de 2h atrás </time>
              </div>
              <button  title="Apagar Comentário">
                <Trash  size={24}/>
              </button>
          </header>
          <p>
            Muito bom Vini, parabéns!! 👏👏
          </p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

  </div>
  )
}