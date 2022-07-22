export const getStaticPaths = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(day => {
    return {
      params: { id: day.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json();

  return {
    props: { day: data }
  }
}

const dayDetails = ({ day }) => {
  return ( 
    <div>
      <h1>{ day.name }</h1>
      <p>{ day.email }</p>
    </div>
   );
}
 
export default dayDetails;