import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  query categories {
    items {
      id
      name
    }
  }
`;