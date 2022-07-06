import React, { useEffect, useState } from 'react';
import { UserResponse } from '../common/components/models';
import { SearchBar } from '../common/components/searchbar';
import { Table } from '../common/components/table-component/table';

export const Dashboard = () => {

    const [originalData, setOriginalData] = useState<UserResponse[]>([]);

    useEffect(() => {
        fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        .then((res) => res.json())
        .then((data: UserResponse[]) => {
            setOriginalData(data);
        });
    }, [])

    return (
        <React.Fragment>
            <SearchBar />
            <Table data={originalData}/>
        </React.Fragment>
    );
}