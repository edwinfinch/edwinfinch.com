import styles from './NavBarComponent.module.css';

export default function NavBarComponent(){
  return (
    <header className={styles.header}>
      <nav className={styles.navBar}>
        {/* <ul> */}
        <ul className={styles.blur}>
          <li><a className={styles.active}>Work</a></li>
          <li><a>About</a></li>
          <li><a>Hobbies</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}