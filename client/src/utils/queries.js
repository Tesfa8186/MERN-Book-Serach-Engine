import { gql } from "@apollo/client";
export const QUERY_ME = gql`
  query getMe {
    getMe {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
