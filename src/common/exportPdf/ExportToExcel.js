import React from 'react';
import * as XLSX from 'xlsx';
import { Button } from 'react-bootstrap';

const ExportToExcel = ({ data, fileName, columns }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data, { header: columns });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <Button variant="success" onClick={exportToExcel}>
      Export to Excel
    </Button>
  );
};

export default ExportToExcel;