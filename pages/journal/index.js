import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {

  const res = await fetch('https://mockend.com/igdaloff/daylist/posts');
  const data = await res.json();

  return {
    props: { posts: data }
  }
}

const Journal = ({ posts }) => {
  return ( 
    <div>
      <Head>
        <title>Daylist | My Journal</title>
        <meta name="description" content="Your previous journal entries" />
      </Head> 
      <header>
        <h1>My Journal</h1>
        <h2><em>This is dummy data. When this project is finished, it will be an archive of real past daily entries.</em></h2>
      </header>
      <main>
        <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={'/journal/' + post.id}>
              <a>
                { new Date(post.createdAt).toDateString() }
              </a>
            </Link>
          </li>
        ))}
        </ul>
      </main>
    </div>
   );
}
 
export default Journal;