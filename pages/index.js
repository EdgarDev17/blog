import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/post'
import Link from 'next/link'
import Date from '../components/Date'

export async function getStaticProps() {
	const allPosts = getSortedPostsData()
	return {
		props: {
			allPosts,
		},
	}
}

export default function Home({ allPosts }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hey People! I'm a software developer focusing on building
					better user experience and scalable web apps! 👌🏼
				</p>
				<ul className={utilStyles.list}>
					{allPosts.map(({ id, date, title }) => {
						return (
							<>
								<li className={utilStyles.listItem} key={id}>
									<Link href={`/posts/${id}`}>
										<a>{title}</a>
									</Link>
								</li>
								<small className={utilStyles.lightText}>
									<Date dateString={date} />
								</small>
							</>
						)
					})}
				</ul>
			</section>
		</Layout>
	)
}
