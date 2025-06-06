// CSS
import styles from './About.module.css'

import { Link } from 'react-router'

const About = () => {
  return (
    <div className={styles.about}>
      <h2> Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no front-end e Firebase
        no backend
      </p>
      <Link to='/posts/create' className='btn'>
        Criar Post
      </Link>
    </div>
  )
}

export default About