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
export type PhotosQueryVariables = {
    options?: PageQueryOptions | null;
};
export type PhotosQueryResponse = {
    readonly photos: {
        readonly data: ReadonlyArray<{
            readonly title: string | null;
            readonly url: string | null;
            readonly thumbnailUrl: string | null;
        } | null> | null;
    } | null;
};
export type PhotosQuery = {
    readonly response: PhotosQueryResponse;
    readonly variables: PhotosQueryVariables;
};



/*
query PhotosQuery(
  $options: PageQueryOptions
) {
  photos(options: $options) {
    data {
      title
      url
      thumbnailUrl
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
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "thumbnailUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PhotosQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PhotosPage",
        "kind": "LinkedField",
        "name": "photos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Photo",
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
    "name": "PhotosQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PhotosPage",
        "kind": "LinkedField",
        "name": "photos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Photo",
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
    "cacheID": "0cec9a9726915ab7d2106b97ffd1d5d5",
    "id": null,
    "metadata": {},
    "name": "PhotosQuery",
    "operationKind": "query",
    "text": "query PhotosQuery(\n  $options: PageQueryOptions\n) {\n  photos(options: $options) {\n    data {\n      title\n      url\n      thumbnailUrl\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '31af404a0c54105a498f686e96de86bb';
export default node;
