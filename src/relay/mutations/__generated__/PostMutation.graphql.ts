/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdatePostInput = {
    title?: string | null;
    body?: string | null;
};
export type PostMutationVariables = {
    id: string;
    input: UpdatePostInput;
};
export type PostMutationResponse = {
    readonly updatePost: {
        readonly id: string | null;
        readonly body: string | null;
    } | null;
};
export type PostMutation = {
    readonly response: PostMutationResponse;
    readonly variables: PostMutationVariables;
};



/*
mutation PostMutation(
  $id: ID!
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "updatePost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "body",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3f846a3d0fd2348b454baa28de88c764",
    "id": null,
    "metadata": {},
    "name": "PostMutation",
    "operationKind": "mutation",
    "text": "mutation PostMutation(\n  $id: ID!\n  $input: UpdatePostInput!\n) {\n  updatePost(id: $id, input: $input) {\n    id\n    body\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e6e3b9d892883f91c6cecf5eb6805df4';
export default node;
