import './App.css';
import { useQuery,gql } from '@apollo/client';
import DisplayLocations from './components/DisplayLocations';

function App() {
  const GET_LOCATIONS = gql`
  query getLocations{
    locations{
      id,
      name,
      description,
      photo
    }
  }
  `

  const { loading, error, data } = useQuery(GET_LOCATIONS);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  return (
    <>
    <h1>My First Apollo App</h1>
    <DisplayLocations data={data} />
    </>
  );
}

export default App;
