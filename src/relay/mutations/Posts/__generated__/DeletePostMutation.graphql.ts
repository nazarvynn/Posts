/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeletePostMutationVariables = {
    id: string;
};
export type DeletePostMutationResponse = {
    readonly deletePost: boolean | null;
};
export type DeletePostMutation = {
    readonly response: DeletePostMutationResponse;
    readonly variables: DeletePostMutationVariables;
};



/*
mutation DeletePostMutation(
  $id: ID!
) {
  deletePost(id: $id)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
      }
    ],
    "kind": "ScalarField",
    "name": "deletePost",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ac08ae324cd8a059df948cb73c301cde",
    "id": null,
    "metadata": {},
    "name": "DeletePostMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePostMutation(\n  $id: ID!\n) {\n  deletePost(id: $id)\n}\n"
  }
};
})();
(node as any).hash = '5e01a815ba8df133c6927ded97289127';
export default node;
