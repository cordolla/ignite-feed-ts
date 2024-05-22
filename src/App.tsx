import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from "./App.module.css";

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/cordolla.png',
      name: 'Marcelo Cordolla',
      role: 'Dev Junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto nomeu portifa' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-02 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/vitoria.png',
      name: 'Antonia Vitoria',
      role: 'Dev Junior'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto nomeu portifa' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-05-02 20:00:00'),
  }
]

export function App() {
  return (
    <>
       <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(posts => {
              return (
              <Post 
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
              )
            })}            
          </main>
        </div>
    </>
  )
}