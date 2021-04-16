/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type OperatorKindEnum = "GTE" | "LIKE" | "LTE" | "NE" | "%future added value";
export type SortOrderEnum = "ASC" | "DESC" | "%future added value";
export type PageQueryOptions = {
    paginate?: PaginateOptions | null;
    slice?: SliceOptions | null;
    sort?: Array<SortOptions | null> | null;
    operators?: Array<OperatorOptions | null> | null;
    search?: SearchOptions | null;
};
export type PaginateOptions = {
    page?: number | null;
    limit?: number | null;
};
export type SliceOptions = {
    start?: number | null;
    end?: number | null;
    limit?: number | null;
};
export type SortOptions = {
    field?: string | null;
    order?: SortOrderEnum | null;
};
export type OperatorOptions = {
    kind?: OperatorKindEnum | null;
    field?: string | null;
    value?: string | null;
};
export type SearchOptions = {
    q?: string | null;
};
export type CommentsQueryVariables = {
    options?: PageQueryOptions | null;
};
export type CommentsQueryResponse = {
    readonly comments: {
        readonly data: ReadonlyArray<{
            readonly name: string | null;
            readonly email: string | null;
            readonly body: string | null;
        } | null> | null;
    } | null;
};
export type CommentsQuery = {
    readonly response: CommentsQueryResponse;
    readonly variables: CommentsQueryVariables;
};



/*
query CommentsQuery(
  $options: PageQueryOptions
) {
  comments(options: $options) {
    data {
      name
      email
      body
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "options"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "options",
    "variableName": "options"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommentsPage",
        "kind": "LinkedField",
        "name": "comments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CommentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CommentsPage",
        "kind": "LinkedField",
        "name": "comments",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "data",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cc9a45635ba5629b7564dc677a409645",
    "id": null,
    "metadata": {},
    "name": "CommentsQuery",
    "operationKind": "query",
    "text": "query CommentsQuery(\n  $options: PageQueryOptions\n) {\n  comments(options: $options) {\n    data {\n      name\n      email\n      body\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '05f328ccd138efc5c58094fd1fc3dcf2';
export default node;
