const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public")); // Serve static files from the "public" directory

app.post("/download-cv", (req, res) => {
	// Generate the CV file
	// ...

	// Assuming the CV file is generated and saved as "cv.pdf"
	const fileUrl = "http://localhost:3000/cv.pdf";

	// Send the file URL as the response
	res.json({ fileUrl });
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
