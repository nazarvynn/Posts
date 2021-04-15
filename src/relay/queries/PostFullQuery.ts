import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query PostFullQuery($id: ID!) {
        post(id: $id) {
            id
            title
            body
            user {
                name
                email
            }
            comments {
                data {
                    email
                    body
                }
            }
        }
    }
`;
