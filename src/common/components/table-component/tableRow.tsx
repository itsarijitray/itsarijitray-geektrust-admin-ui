import React from "react";

export const TableRow = (props: any) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.role}
            </td>
        </tr>
    );
}