import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
    return (
    <Layout firstpost>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <h1>First Post !</h1>
        </section>
      </Layout>
    )
} 