import { useQuery} from '@apollo/client';
import { GET_CATEGORIES } from './schema';

function Apollo() {
    const response = useQuery(GET_CATEGORIES);
    const { loading,error, data } = response;
    
  return (
    <div>
      
    </div>
  )
}

export default Apollo
