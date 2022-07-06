import React from "react";
import { UserResponse } from "../models";
import { TableRow } from "./tableRow";


export const Table = (props: any) => {

    const tableRows = props.data.map((user: UserResponse) => {
        return (
            <TableRow row={user}/>
        );
    });

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </thead>
            <tbody>
                {tableRows}
            </tbody>

        </table>
    );
}