import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { Jodit } from "jodit";

const CommonEditor = () => {
	const [content, setContent] = useState("");

	return (
		<>
			<JoditEditor
				value={content}
				onBlur={(value) => setContent(value)}
				// config={config}
			/>
		</>
	);
};

export default CommonEditor;
