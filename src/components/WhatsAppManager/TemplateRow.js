// TemplateRow.js
import React from 'react';

function TemplateRow({ template }) {
    return (
        <tr>
            <td>{template.userName}</td>
            <td>{template.templateName}</td>
            <td>{template.phoneNumber}</td>
            <td>{template.templateType}</td>
            <td>{template.headerType}</td>
            <td>{template.language}</td>
            <td>{template.status}</td>
            <td>--</td>
        </tr>
    );
}

export default TemplateRow;
