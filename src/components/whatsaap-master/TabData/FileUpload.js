import React, { useState } from 'react';
export const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    return (
        <div style={styles.container}>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div style={styles.uploadBox} onClick={handleUploadClick}>
                <img src="upload_icon.png" alt="Upload" style={styles.icon} />
                <p>Upload a contact file here...</p>
                <button style={styles.button}>Click to Upload</button>
            </div>
            {file && (
                <div style={styles.fileInfo}>
                    <p>Selected file: {file.name}</p>
                </div>
            )}
            <div className={`form-group `}>
                <label htmlFor="question">Please select the mobile number field in your file..</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected="">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>

            </div>
        </div>
    );
}

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

