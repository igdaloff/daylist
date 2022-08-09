export const getStaticPaths = async () =>{
  const res = await fetch('https://mockend.com/igdaloff/daylist/posts');
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
  const res = await fetch('https://mockend.com/igdaloff/daylist/posts/' + id)
  const data = await res.json();

  return {
    props: { day: data }
  }
}

const journalDayDetails = ({ day }) => {
  return ( 
    <header>
      <h1>{ new Date(day.createdAt).toDateString() }</h1>      
    </header>
   );
}
 
export default journalDayDetails;