import Link from "next/link"
import Head from "next/head"

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Test = ({ ninjas }) => {
  return ( 
    <div>
      <Head>
        <title>Daylist | My Journal</title>
        <meta name="description" content="" />
      </Head>   
      <h1>List of days</h1>
      {ninjas.map(ninja => (
        <Link href={'/days/' + ninja.id} key={ninja.id}>
          <a>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
   );
}
 
export default Test;