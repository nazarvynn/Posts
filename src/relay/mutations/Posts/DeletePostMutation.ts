import { graphql } from 'babel-plugin-relay/macro';

export default graphql`
    mutation DeletePostMutation($id: ID!) {
        deletePost(id: $id)
    }
`;
