import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling
import { CiSaveUp1, CiSaveDown1 } from 'react-icons/ci'; // Assuming these are the correct icons

function ExportPdf() {
    const [pdfLoader, setPdfLoader] = useState(false);

    const pdfDownload = () => {
        const capture = document.querySelector('.exppdf'); // Make sure .exppdf class exists and contains the content you want to export
        setPdfLoader(true);

        // Use html2canvas to capture the content as an image
        html2canvas(capture).then((pdfCanvas) => {
            const pdfData = pdfCanvas.toDataURL('image/png'); // Convert canvas to base64 encoded image data

            // Create a new jsPDF instance
            const doc = new jsPDF('p', 'mm', 'a4');

            // Calculate dimensions
            const contentWidth = capture.offsetWidth;
            const contentHeight = capture.offsetHeight;
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = doc.internal.pageSize.getHeight();
            const widthRatio = pdfWidth / contentWidth;
            const heightRatio = pdfHeight / contentHeight;
            const ratio = Math.min(widthRatio, heightRatio);

            // Add image to the PDF
            doc.addImage(pdfData, 'PNG', 0, 0, contentWidth * ratio, contentHeight * ratio);

            // Save PDF
            doc.save('PDF_Download');

            // Reset loader state
            setPdfLoader(false);
        });
    };

    return (
        <>
            <Button variant="" className="btn-sm py-1 px-2 bg-warning" onClick={pdfDownload} disabled={pdfLoader}>
                {pdfLoader ? (
                    <span>
                        <CiSaveUp1 className='fs-4 fw-bold text-white'/> PDF EXPORTING
                    </span>
                ) : (
                    <span>
                        EXPORT PDF <CiSaveDown1 className='fs-4 fw-bold text-white' />
                    </span>
                )}
            </Button>
        </>
    );
}

export default ExportPdf;