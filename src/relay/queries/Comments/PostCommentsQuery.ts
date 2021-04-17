import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query PostCommentsQuery($id: ID!) {
        post(id: $id) {
            comments {
                data {
                    email
                    body
                }
            }
        }
    }
`;
