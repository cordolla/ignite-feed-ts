import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine} from 'phosphor-react';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=300"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/cordolla.png" />

        <strong>Marcelo Barbosa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={18} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};