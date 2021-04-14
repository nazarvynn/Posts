/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type OperatorKindEnum = 'GTE' | 'LIKE' | 'LTE' | 'NE' | '%future added value';
export type SortOrderEnum = 'ASC' | 'DESC' | '%future added value';
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
export type GalleryPagePhotoQueryVariables = {
    options?: PageQueryOptions | null;
};
export type GalleryPagePhotoQueryResponse = {
    readonly photos: {
        readonly data: ReadonlyArray<{
            readonly title: string | null;
            readonly url: string | null;
            readonly thumbnailUrl: string | null;
        } | null> | null;
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
};
export type GalleryPagePhotoQuery = {
    readonly response: GalleryPagePhotoQueryResponse;
    readonly variables: GalleryPagePhotoQueryVariables;
};

/*
query GalleryPagePhotoQuery(
  $options: PageQueryOptions
) {
  photos(options: $options) {
    data {
      id
      title
      url
      thumbnailUrl
    }
    meta {
      totalCount
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
            {
                defaultValue: null,
                kind: 'LocalArgument',
                name: 'options',
            },
        ],
        v1 = [
            {
                alias: null,
                args: [
                    {
                        kind: 'Variable',
                        name: 'options',
                        variableName: 'options',
                    },
                ],
                concreteType: 'PhotosPage',
                kind: 'LinkedField',
                name: 'photos',
                plural: false,
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: 'Photo',
                        kind: 'LinkedField',
                        name: 'data',
                        plural: true,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'id',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'title',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'url',
                                storageKey: null,
                            },
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'thumbnailUrl',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: 'PageMetadata',
                        kind: 'LinkedField',
                        name: 'meta',
                        plural: false,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'totalCount',
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                storageKey: null,
            },
        ];
    return {
        fragment: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Fragment',
            metadata: null,
            name: 'GalleryPagePhotoQuery',
            selections: v1 /*: any*/,
            type: 'Query',
            abstractKey: null,
        },
        kind: 'Request',
        operation: {
            argumentDefinitions: v0 /*: any*/,
            kind: 'Operation',
            name: 'GalleryPagePhotoQuery',
            selections: v1 /*: any*/,
        },
        params: {
            cacheID: 'c69f8bd7e95155593ac6f3890c96563e',
            id: null,
            metadata: {},
            name: 'GalleryPagePhotoQuery',
            operationKind: 'query',
            text:
                'query GalleryPagePhotoQuery(\n  $options: PageQueryOptions\n) {\n  photos(options: $options) {\n    data {\n      id\n      title\n      url\n      thumbnailUrl\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n',
        },
    };
})();
(node as any).hash = 'bcf3fb92c6cba6f168cc44fe6519d03f';
export default node;
