import styles from './Footer.module.css'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className="copyright">
          Copyright <span id="datetime">2021</span>
        </div>
      </footer>
  )
}
