import { Layout } from 'antd'
import styles from '../styles/Home.module.css'

const { Header } = Layout;
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <Header className='home__header'>Learnify</Header>
      </Layout>
    </div>
  )
}
