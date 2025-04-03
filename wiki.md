# Project Summary
**PDFMaster Pro** is a web application that offers professional PDF compression and splitting services. Users can upload PDF files, set compression sizes or splitting parameters, and receive processed files instantly. The application prioritizes user privacy by processing files locally without storing them on servers. With a modern and professional design, PDFMaster Pro aims to provide a seamless user experience.

# Project Module Description
The application consists of several functional modules:
1. **File Upload**: Users can drag and drop or click to upload PDF files.
2. **Processing Options**: Users can select between compressing or splitting the PDF and specify the target size or number of pages.
3. **Responsive Design**: The site adapts to various screen sizes ensuring usability across devices.
4. **Download Functionality**: Enhanced features include a processing modal with real-time progress, automatic downloads upon completion, manual download options, and retry functionality in case of errors.
5. **Pricing Plans**: Clear pricing tiers for users, including a free tier with limitations and premium options.
6. **FAQ Section**: Provides answers to common questions regarding data security, file size limits, and quality maintenance.

# Directory Tree
```
html_template/
    ├── index.html             # Main HTML structure of the website with updated download features
    ├── script.js              # JavaScript for handling file uploads, UI interactions, and download processes
    ├── style.css              # Custom styles for the website
    └── template_config.json    # Configuration file for templates (if needed)
index.html                     # Main HTML file (for deployment)
script.js                      # JavaScript file (for deployment)
style.css                      # CSS file (for deployment)
```

# File Description Inventory
- **index.html**: The primary HTML file containing the structure of the PDFMaster Pro web application, now includes enhanced download features.
- **style.css**: Contains custom styles to enhance the visual appearance of the web application.
- **script.js**: JavaScript file that manages file uploads, user interactions, and the enhanced download experience.

# Technology Stack
- **Frontend**: Pure HTML, TailwindCSS for styling, and JavaScript for interactivity.
- **Server**: A simple HTTP server for serving the application locally.

# Usage
To set up and run the project:
1. Navigate to the project directory.
2. Install dependencies (if any) using package managers like `pnpm`.
3. Start the server using a command such as `python3 -m http.server <port>` to serve the application locally.
4. Open your browser to view the application.

Note: Ensure that you comply with the file size and usage limits as specified in the application.