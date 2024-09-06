import React from 'react';
import * as XLSX from 'xlsx';

export const DownloadExcel = () => {
    const table = document.getElementById('table-to-xls');
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });
    XLSX.writeFile(workbook, 'table.xlsx');
};