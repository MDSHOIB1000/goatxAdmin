// TemplatesTable.js
import React from 'react';
import TemplateRow from './TemplateRow';

function TemplatesTable() {
    const templates = [
        {
            userName: 'demo',
            templateName: 'testadcsda',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'IMAGE',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 16, 2024'
        },
        {
            userName: 'demo',
            templateName: 'dfbnvjfbdjvf',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'NONE',
            language: 'ar',
            status: 'APPROVED',
            createdAt: 'Aug 13, 2024'
        },
        {
            userName: 'demo',
            templateName: 'test_11_aug_24',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'TEXT',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 11, 2024'
        },
        {
            userName: 'demo',
            templateName: 'testing_with_aliya',
            phoneNumber: '+917250652850',
            templateType: 'marketing',
            headerType: 'IMAGE',
            language: 'en',
            status: 'APPROVED',
            createdAt: 'Aug 6, 2024'
        },
        {
            userName: 'demo_user',
            templateName: 'welcome_message',
            phoneNumber: '+918765432109',
            templateType: 'customer_service',
            headerType: 'VIDEO',
            language: 'es',
            status: 'PENDING',
            createdAt: 'Aug 5, 2024'
        }
    ];


    return (
        <table className=''>
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Template Name</th>
                    <th>Phone Number</th>
                    <th>Template type</th>
                    <th>Header Type</th>
                    <th>Language</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {templates.map((template, index) => (
                    <TemplateRow key={index} template={template} />
                ))}
            </tbody>
        </table>
    );
}

export default TemplatesTable;
