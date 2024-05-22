import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likesCount, setLikesCount] = useState(0);

    function handleCommentLikes(){
        setLikesCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment(){
    onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/cordolla.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Cordolla</strong>
                            <time title="25 de abril às 16:12" dateTime='2024-05-25 16:13:00'>Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentario'>
                            <Trash size={24}/> 
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleCommentLikes}>
                        <ThumbsUp />
                        Aplaudir <span>{likesCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}