document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const fileInput = document.getElementById('pdfFile');
    const dropZone = document.getElementById('dropZone');
    const processBtn = document.getElementById('processBtn');
    const operationSelect = document.getElementById('operation');
    const parameterInput = document.getElementById('parameter');

    let currentFile = null;
    let dailyUsage = {
        uploads: 0,
        lastUploadDate: null
    };

    // Initialize daily usage from localStorage
    const loadDailyUsage = () => {
        const saved = localStorage.getItem('pdfMasterDailyUsage');
        if (saved) {
            const parsed = JSON.parse(saved);
            const today = new Date().toDateString();
            if (parsed.lastUploadDate === today) {
                dailyUsage = parsed;
            } else {
                dailyUsage = {
                    uploads: 0,
                    lastUploadDate: today
                };
                localStorage.setItem('pdfMasterDailyUsage', JSON.stringify(dailyUsage));
            }
        }
    };

    loadDailyUsage();

    // File drag and drop handlers
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('drop-zone-active');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drop-zone-active');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('drop-zone-active');
        
        if (e.dataTransfer.files.length) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    });

    // File input change handler
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFileSelect(e.target.files[0]);
        }
    });

    // Operation type change handler
    operationSelect.addEventListener('change', function() {
        parameterInput.value = '';
        if (this.value === 'compress') {
            parameterInput.placeholder = 'Target size (MB)';
            parameterInput.type = 'number';
            parameterInput.step = '0.1';
            parameterInput.min = '0.1';
        } else {
            parameterInput.placeholder = 'Pages per file';
            parameterInput.type = 'number';
            parameterInput.step = '1';
            parameterInput.min = '1';
        }
        validateInputs();
    });

    // Parameter input validation
    parameterInput.addEventListener('input', validateInputs);

    function validateInputs() {
        const operation = operationSelect.value;
        const parameter = parseFloat(parameterInput.value);
        
        if (currentFile && parameter) {
            if (operation === 'compress') {
                processBtn.disabled = parameter >= currentFile.size / (1024 * 1024);
            } else {
                processBtn.disabled = parameter <= 0;
            }
        } else {
            processBtn.disabled = true;
        }

        processBtn.classList.toggle('opacity-50', processBtn.disabled);
    }

    function handleFileSelect(file) {
        // Check file type
        if (file.type !== 'application/pdf') {
            alert('Please upload a PDF file.');
            return;
        }

        // Check file size (5MB for free tier)
        if (file.size > 5 * 1024 * 1024) {
            alert('Free tier is limited to 5MB files. Please upgrade for larger files.');
            return;
        }

        // Check daily usage limit
        if (dailyUsage.uploads >= 1) {
            alert('Free tier is limited to 1 file per day. Please upgrade for unlimited processing.');
            return;
        }

        currentFile = file;
        dropZone.querySelector('p').textContent = `Selected: ${file.name}`;
        validateInputs();
    }

    // Process button click handler
    processBtn.addEventListener('click', async () => {
        if (!currentFile) return;

        // Show processing modal
        const processingModal = document.getElementById('processingModal');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        const statusText = document.getElementById('statusText');
        const downloadBtn = document.getElementById('downloadBtn');
        const retryBtn = document.getElementById('retryBtn');
        const beforeSize = document.getElementById('beforeSize');
        const afterSize = document.getElementById('afterSize');
        const timeRemaining = document.getElementById('timeRemaining');

        processingModal.classList.remove('hidden');
        downloadBtn.classList.add('hidden');
        retryBtn.classList.add('hidden');
        beforeSize.textContent = `${(currentFile.size / (1024 * 1024)).toFixed(2)} MB`;

        // Increment usage counter
        dailyUsage.uploads++;
        dailyUsage.lastUploadDate = new Date().toDateString();
        localStorage.setItem('pdfMasterDailyUsage', JSON.stringify(dailyUsage));

        // Simulate processing with progress
        processBtn.disabled = true;
        let progress = 0;
        const operation = operationSelect.value;

        try {
            const progressInterval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 95) progress = 95;
                progressBar.style.width = `${progress}%`;
                progressText.textContent = `${Math.round(progress)}%`;
                
                // Update estimated time
                const remaining = Math.round((100 - progress) / 10);
                timeRemaining.textContent = `${remaining} seconds`;
            }, 500);

            await simulateProcessing();
            clearInterval(progressInterval);
            
            // Simulate successful processing
            progress = 100;
            progressBar.style.width = '100%';
            progressText.textContent = '100%';
            statusText.textContent = 'Processing complete!';
            timeRemaining.textContent = '0 seconds';

            // Simulate compressed file size
            const compressionRatio = operation === 'compress' ? Math.random() * 0.4 + 0.3 : 1;
            const processedSize = currentFile.size * compressionRatio;
            afterSize.textContent = `${(processedSize / (1024 * 1024)).toFixed(2)} MB`;

            // Prepare download
            const filename = currentFile.name.replace('.pdf', '');
            const outputName = operation === 'compress' 
                ? `${filename}-compressed.pdf`
                : `${filename}-split.zip`;

            // Show download button
            downloadBtn.classList.remove('hidden');
            downloadBtn.onclick = () => {
                // Simulate file download
                const link = document.createElement('a');
                link.href = URL.createObjectURL(new Blob(['Simulated processed file'], {type: 'application/pdf'}));
                link.download = outputName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Auto close modal after download starts
                setTimeout(() => {
                    processingModal.classList.add('hidden');
                    resetForm();
                }, 1000);
            };

            // Auto trigger download after 1 second
            setTimeout(() => downloadBtn.click(), 1000);

        } catch (error) {
            statusText.textContent = 'Processing failed';
            retryBtn.classList.remove('hidden');
            console.error('Processing error:', error);
        }
    });

    // Retry button handler
    document.getElementById('retryBtn').addEventListener('click', () => {
        document.getElementById('processingModal').classList.add('hidden');
        processBtn.click();
    });

    // Helper function to handle file download
    function downloadFile(filename, content, mimeType = 'application/pdf') {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    });

    function resetForm() {
        currentFile = null;
        fileInput.value = '';
        dropZone.querySelector('p').textContent = 'Drop your PDF here or click to upload';
        parameterInput.value = '';
        validateInputs();
    }

    // Simulate file processing
    function simulateProcessing() {
        return new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});