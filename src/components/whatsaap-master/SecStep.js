import React, { useState } from 'react';
export const SecStep = ({ setState, state }) => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        },
        uploadBox: {
            border: '2px dashed #b5d0d2',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#f9fcfc',
            width: '60%',
        },
        icon: {
            width: '50px',
            marginBottom: '10px',
        },
        button: {
            backgroundColor: '#008080',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        fileInfo: {
            marginTop: '20px',
            textAlign: 'center',
        },
    };

    const [templateId, setTemplateId] = useState('');

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleSendNow = () => {
        // Handle send now logic
        console.log("Sending SMS now...");
    };

    const handleScheduleSMS = () => {
        // Handle schedule SMS logic
        console.log("Scheduling SMS...");
    };

    return (
        <div style={{ padding: '20px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="templateId" style={{ display: 'block', marginBottom: '8px' }}>Template Id*</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px' }}>Media (Upload IMAGE)</label>
                <div style={styles.container}>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <div style={styles.uploadBox} onClick={handleUploadClick}>
                        <img src="upload_icon.png" alt="Upload" style={styles.icon} />
                        <p>Upload a Media here...</p>
                        <button style={styles.button}>Click to Upload</button>
                    </div>
                    {file && (
                        <div style={styles.fileInfo}>
                            <p>Selected file: {file.name}</p>
                        </div>
                    )}

                </div>

            </div>

            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <p style={{ marginBottom: '0' }}>TEMPLATE DOWNLOAD</p>
                <small>This template has been created based on the above selections. Updated template has to be uploaded under the Audience section.</small>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={() => { setState(1) }} style={{ padding: '10px 20px', margin: "6px 0", backgroundColor: '#1e90ff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Back
                </button>
                <button onClick={handleSendNow} style={{ padding: '10px 20px', backgroundColor: '#1e90ff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Send Now
                </button>
                <button onClick={handleScheduleSMS} style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Schedule SMS
                </button>
            </div>
        </div>
    );
}
