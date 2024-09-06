    import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react'
function BordcastTextEditor() {
    const editor = useRef(null);
	const [content, setContent] = useState('');

	/* const config = useMemo(
		{
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		},
		[placeholder]
	); */
  return (
    <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
  )
}

export default BordcastTextEditor
