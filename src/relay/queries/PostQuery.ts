import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    query PostQuery($id: ID!) {
        post(id: $id) {
            id
            title
            body
            user {
                name
                username
                email
            }
            comments {
                data {
                    name
                    email
                    body
                }
            }
        }
    }
`;
