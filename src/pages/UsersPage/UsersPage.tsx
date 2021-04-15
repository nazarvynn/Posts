import React from 'react';

import Loader from '../../components/Loader/Loader';
import Table from '../../components/Table/Table';
import transformToNestedArray from '../../utils/transformToNestedArray';
import { USERS } from '../../core/const';

export default function UsersPage() {
    const isLoading = false;
    const columns = ['#', 'Email', 'User Name', 'User Role'];
    const tableData = transformToNestedArray(USERS, ['password']);

    return (
        <>
            <h1 className="my-4 page-tile">Users Page</h1>
            {isLoading && <Loader />}
            {!isLoading && <Table colums={columns} data={tableData} />}
        </>
    );
}
