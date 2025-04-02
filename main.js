import './style.css';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { PDFDocument } from 'pdf-lib';

// 为PDF库创建全局变量方便访问
const PDFLib = { PDFDocument };

// Initialize i18next
i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          features: 'Features',
          howItWorks: 'How It Works',
          pricing: 'Pricing',
          faq: 'FAQ',
          getStarted: 'Get Started',
          hero: {
            title: 'Professional PDF Processing',
            subtitle: 'Made Simple',
            description: 'Compress and split PDFs with enterprise-grade security. Your files are processed locally and never stored on our servers.',
            selectOperation: 'Select Operation',
            compressPDF: 'Compress PDF',
            splitPDF: 'Split PDF',
            uploadPDF: 'Upload Your PDF',
            dragDrop: 'Drag and drop your PDF here or click to browse',
            maxFileSize: 'Maximum file size: 5MB (Free Plan)'
          },
          features: {
            title: 'Why Choose PDF Pro?',
            secure: {
              title: '100% Secure',
              description: 'Your files are processed locally in your browser. We never store or transmit your documents.'
            },
            fast: {
              title: 'Lightning Fast',
              description: 'Advanced algorithms ensure quick processing while maintaining quality.'
            },
            quality: {
              title: 'Professional Quality',
              description: 'Enterprise-grade compression and splitting technology.'
            }
          },
          howItWorks: {
            title: 'How It Works',
            step1: 'Upload',
            step1Desc: 'Select your PDF file',
            step2: 'Choose Options',
            step2Desc: 'Select compression level or splitting parameters',
            step3: 'Process',
            step3Desc: 'We process your file locally',
            step4: 'Download',
            step4Desc: 'Get your processed PDF'
          },
          pricing: {
            title: 'Simple, Transparent Pricing',
            free: {
              title: 'Free',
              price: '$0',
              period: '/month',
              features: ['1 file per day', 'Max 5MB file size', 'Basic compression', 'Watermarked output'],
              button: 'Get Started'
            },
            pro: {
              title: 'Pro',
              price: '$9.99',
              period: '/month',
              features: ['Unlimited files', 'Max 100MB file size', 'Advanced compression', 'No watermark', 'Priority processing'],
              button: 'Subscribe Now'
            },
            enterprise: {
              title: 'Enterprise',
              price: '$49.99',
              period: '/month',
              features: ['Everything in Pro', 'Unlimited file size', 'API access', 'Custom branding', '24/7 support'],
              button: 'Contact Sales'
            }
          },
          faq: {
            title: 'Frequently Asked Questions',
            questions: {
              security: {
                question: 'Is my data secure?',
                answer: 'Yes, absolutely. All processing happens locally in your browser. We never store or transmit your files to any server.'
              },
              compression: {
                question: 'How does the compression work?',
                answer: 'We use advanced algorithms to optimize PDF content while maintaining quality. This includes image optimization, font subsetting, and structure optimization.'
              },
              fileSize: {
                question: 'What\'s the maximum file size?',
                answer: 'Free users can process files up to 5MB, Pro users up to 100MB, and Enterprise users have no limits.'
              },
              multiple: {
                question: 'Can I process multiple files at once?',
                answer: 'Yes, Pro and Enterprise users can process multiple files simultaneously. Free users are limited to one file per day.'
              }
            }
          },
          footer: {
            description: 'Professional PDF processing tools for everyone.',
            quickLinks: 'Quick Links',
            contact: 'Contact',
            legal: 'Legal',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service',
            copyright: '© 2024 PDF Pro. All rights reserved. Created by Zhu Yongchi'
          },
          processing: {
            processing: 'Processing...',
            success: 'Successfully processed!',
            compressed: 'Your file has been compressed.',
            split: 'Your file has been split.',
            processAnother: 'Process Another File',
            cancel: 'Cancel',
            enterPages: 'Enter page numbers to extract (comma-separated):',
            invalidPages: 'Please enter valid page numbers.',
            error: 'Error: ',
            dailyLimit: 'You have reached your daily free limit. Please upgrade for unlimited access.',
            sizeLimit: 'File exceeds the 5MB limit for free users. Please upgrade for larger file support.',
            invalidFile: 'Please select a PDF file.',
            processingProgress: 'Processing progress: {current} of {total} ({percent}%)',
            compressionLevel: 'Compression Level',
            lowCompression: 'Low',
            mediumCompression: 'Medium',
            highCompression: 'High',
            bestQuality: 'Best Quality',
            balancedQuality: 'Balanced Quality',
            lowestQuality: 'Lowest Quality',
            compressNow: 'Compress Now',
            compressionReport: 'Compression Report',
            originalSize: 'Original Size',
            compressedSize: 'Compressed Size',
            spaceSaved: 'Space Saved',
            close: 'Close',
            splitMode: 'Split Mode',
            customSplit: 'Custom Pages',
            rangeSplit: 'Page Range',
            splitAllPages: 'All Pages',
            enterPagesCustom: 'Enter pages to extract:',
            pagesExample: 'e.g., 1,3,5-7,10',
            pagesCustomHelp: 'Use commas to separate pages and hyphens for ranges.',
            fromPage: 'From page:',
            toPage: 'To page:',
            splitNow: 'Split Now',
            splitAllDescription: 'Split each page into a separate file.',
            invalidRange: 'Please enter a valid page range.',
            compressing: 'Compressing your PDF...',
            splitting: 'Splitting your PDF...',
            addingWatermark: 'Adding watermark...',
            preparingDownload: 'Preparing your download...',
            loadingPdf: 'Loading PDF...'
          },
          payment: {
            upgradeTitle: 'Upgrade Your Plan',
            description: 'Unlock all features and process unlimited files.',
            cardNumber: 'Card Number',
            expDate: 'Expiration Date',
            cvc: 'CVC',
            name: 'Cardholder Name',
            namePlaceholder: 'Full Name',
            email: 'Email Address',
            payNow: 'Pay Now',
            securePayment: 'Your payment information is secure. We use industry-standard encryption to protect your data.',
            processing: 'Processing...',
            success: 'Payment successful! Your account has been upgraded.',
            formError: 'Please fill out all fields correctly.',
            currentPlan: 'Current Plan'
          }
        }
      },
      zh: {
        translation: {
          features: '功能特点',
          howItWorks: '工作原理',
          pricing: '价格',
          faq: '常见问题',
          getStarted: '立即开始',
          hero: {
            title: '专业PDF处理',
            subtitle: '简单易用',
            description: '使用企业级安全技术压缩和拆分PDF。所有文件在本地处理，绝不上传服务器。',
            selectOperation: '选择操作',
            compressPDF: '压缩PDF',
            splitPDF: '拆分PDF',
            uploadPDF: '上传PDF',
            dragDrop: '拖放PDF文件到这里或点击浏览',
            maxFileSize: '最大文件大小：5MB（免费版）'
          },
          features: {
            title: '为什么选择PDF Pro？',
            secure: {
              title: '100%安全',
              description: '文件在您的浏览器中本地处理。我们绝不存储或传输您的文档。'
            },
            fast: {
              title: '极速处理',
              description: '先进算法确保快速处理的同时保持质量。'
            },
            quality: {
              title: '专业品质',
              description: '企业级压缩和拆分技术。'
            }
          },
          howItWorks: {
            title: '工作原理',
            step1: '上传',
            step1Desc: '选择您的PDF文件',
            step2: '选择选项',
            step2Desc: '选择压缩级别或拆分参数',
            step3: '处理',
            step3Desc: '我们在本地处理您的文件',
            step4: '下载',
            step4Desc: '获取处理后的PDF'
          },
          pricing: {
            title: '简单透明的价格',
            free: {
              title: '免费版',
              price: '¥0',
              period: '/月',
              features: ['每天1个文件', '最大5MB文件大小', '基本压缩', '带水印输出'],
              button: '立即开始'
            },
            pro: {
              title: '专业版',
              price: '¥69',
              period: '/月',
              features: ['无限文件', '最大100MB文件大小', '高级压缩', '无水印', '优先处理'],
              button: '立即订阅'
            },
            enterprise: {
              title: '企业版',
              price: '¥349',
              period: '/月',
              features: ['包含专业版所有功能', '无限文件大小', 'API访问', '自定义品牌', '24/7支持'],
              button: '联系销售'
            }
          },
          faq: {
            title: '常见问题',
            questions: {
              security: {
                question: '我的数据安全吗？',
                answer: '是的，绝对安全。所有处理都在您的浏览器中本地进行。我们从不存储或传输您的文件到任何服务器。'
              },
              compression: {
                question: '压缩是如何工作的？',
                answer: '我们使用先进的算法优化PDF内容，同时保持质量。这包括图像优化、字体子集化和结构优化。'
              },
              fileSize: {
                question: '最大文件大小是多少？',
                answer: '免费用户可以处理最大5MB的文件，专业用户最大100MB，企业用户没有限制。'
              },
              multiple: {
                question: '我可以同时处理多个文件吗？',
                answer: '是的，专业版和企业版用户可以同时处理多个文件。免费用户每天限制一个文件。'
              }
            }
          },
          footer: {
            description: '为所有人提供专业的PDF处理工具。',
            quickLinks: '快速链接',
            contact: '联系我们',
            legal: '法律条款',
            privacyPolicy: '隐私政策',
            termsOfService: '服务条款',
            copyright: '© 2024 PDF Pro. 版权所有。由朱永池创建'
          },
          processing: {
            processing: '处理中...',
            success: '处理成功！',
            compressed: '您的文件已被压缩。',
            split: '您的文件已被拆分。',
            processAnother: '处理另一个文件',
            cancel: '取消',
            enterPages: '输入要提取的页码（用逗号分隔）：',
            invalidPages: '请输入有效的页码。',
            error: '错误：',
            dailyLimit: '您已达到每日免费限制。请升级以获得无限访问。',
            sizeLimit: '文件超过免费用户的5MB限制。请升级以获得更大文件支持。',
            invalidFile: '请选择PDF文件。',
            processingProgress: '处理进度：{current} of {total} ({percent}%)',
            compressionLevel: '压缩级别',
            lowCompression: '低',
            mediumCompression: '中',
            highCompression: '高',
            bestQuality: '最佳质量',
            balancedQuality: '平衡质量',
            lowestQuality: '最低质量',
            compressNow: '立即压缩',
            compressionReport: '压缩报告',
            originalSize: '原始大小',
            compressedSize: '压缩后大小',
            spaceSaved: '节省空间',
            close: '关闭',
            splitMode: '拆分模式',
            customSplit: '自定义页面',
            rangeSplit: '页面范围',
            splitAllPages: '所有页面',
            enterPagesCustom: '输入要提取的页面：',
            pagesExample: '例如：1,3,5-7,10',
            pagesCustomHelp: '用逗号分隔页码，用连字符表示范围。',
            fromPage: '起始页：',
            toPage: '结束页：',
            splitNow: '立即拆分',
            splitAllDescription: '将每一页拆分为单独的文件。',
            invalidRange: '请输入有效的页面范围。',
            compressing: '正在压缩您的PDF...',
            splitting: '正在拆分您的PDF...',
            addingWatermark: '正在添加水印...',
            preparingDownload: '正在准备下载...',
            loadingPdf: '正在加载PDF...'
          },
          payment: {
            upgradeTitle: '升级您的计划',
            description: '解锁所有功能并处理无限文件。',
            cardNumber: '卡号',
            expDate: '有效期',
            cvc: '安全码',
            name: '持卡人姓名',
            namePlaceholder: '姓名',
            email: '电子邮箱',
            payNow: '立即支付',
            securePayment: '您的支付信息是安全的。我们使用行业标准加密来保护您的数据。',
            processing: '处理中...',
            success: '支付成功！您的帐户已升级。',
            formError: '请正确填写所有字段。',
            currentPlan: '当前计划'
          }
        }
      }
    }
  }, function(err, t) {
    // 初始化完成后调用翻译函数
    if (err) {
      console.error('Error initializing i18n:', err);
    } else {
      updateUILanguage(i18next.language || 'en');
    }
  });

// 全局变量
let currentCompressionLevel = 'medium'; // 默认压缩级别
let currentSplitType = 'each-page'; // 默认拆分方式
let currentFile = null; // 当前上传的文件

// DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
  debug('PDF Pro应用已加载');
  
  // 设置默认操作类型
  window.currentOperation = window.currentOperation || 'compress';
  
  // 默认压缩级别
  window.currentCompressionLevel = 'medium';
  
  // 初始化上传区域
  initializeUploadArea();
  
  // 初始化UI控件
  initializeUIControls();
  
  // 初始化操作按钮
  initializeOperationButtons();
  
  // 初始化语言切换器
  initializeLanguageSwitcher();
  
  debug('界面初始化完成');
});

// 更新UI语言
function updateUILanguage(lang) {
  // 设置当前语言显示
  const currentLanguageEl = document.getElementById('current-language');
  if (currentLanguageEl) {
    const langMap = {
      'en': '英语',
      'zh': '中文',
      'es': 'Español',
      'fr': 'Français',
      'de': 'Deutsch',
      'ja': '日本語',
      'ko': '한국어'
    };
    currentLanguageEl.textContent = langMap[lang] || langMap['en'];
  }
  
  // 更新可翻译元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = i18next.t(key);
    }
  });
}

// 初始化上传区域
function initializeUploadArea() {
  const fileInput = document.getElementById('pdf-upload');
  const dropArea = document.getElementById('upload-drop-area');
  const selectButton = document.getElementById('pdf-select-button');
  
  if (fileInput && dropArea) {
    // 选择文件
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        handleFileUpload(file);
      }
    });
    
    // 拖放处理
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // 高亮拖放区域
    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, () => {
        dropArea.classList.add('border-primary-500');
        dropArea.classList.add('bg-primary-50');
      });
    });
    
    // 移除高亮
    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('border-primary-500');
        dropArea.classList.remove('bg-primary-50');
      });
    });
    
    // 处理拖放文件
    dropArea.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      
      if (file && file.type === 'application/pdf') {
        handleFileUpload(file);
      } else {
        alert('请上传PDF文件');
      }
    });
    
    // 点击选择按钮
    if (selectButton) {
      selectButton.addEventListener('click', (e) => {
        e.preventDefault(); // 防止表单提交
        fileInput.click();
      });
    }
  }
}

// 初始化UI控件
function initializeUIControls() {
  // 初始化压缩级别选择
  const compressionLevels = document.querySelectorAll('.compression-level');
  compressionLevels.forEach(button => {
    button.addEventListener('click', function() {
      // 清除所有按钮的active状态
      compressionLevels.forEach(btn => {
        btn.classList.remove('active');
        btn.classList.remove('border-primary-500');
        btn.classList.remove('bg-primary-50');
      });
      
      // 为当前点击的按钮添加active状态
      this.classList.add('active');
      this.classList.add('border-primary-500');
      this.classList.add('bg-primary-50');
      
      // 设置压缩级别
      window.currentCompressionLevel = this.getAttribute('data-level');
      debug(`选择了压缩级别: ${window.currentCompressionLevel}`);
      
      // 如果是自定义大小，显示自定义大小选项
      const customSizeOptions = document.getElementById('custom-size-options');
      if (window.currentCompressionLevel === 'custom' && customSizeOptions) {
        customSizeOptions.classList.remove('hidden');
      } else if (customSizeOptions) {
        customSizeOptions.classList.add('hidden');
      }
    });
  });
  
  // 初始化自定义大小滑块和输入框联动
  const customSizeSlider = document.getElementById('custom-size-slider');
  const customSizeInput = document.getElementById('custom-size-input');
  
  if (customSizeSlider && customSizeInput) {
    // 滑块变化时更新输入框
    customSizeSlider.addEventListener('input', function() {
      customSizeInput.value = this.value;
    });
    
    // 输入框变化时更新滑块
    customSizeInput.addEventListener('input', function() {
      customSizeSlider.value = this.value;
    });
  }
  
  // 初始化压缩按钮
  const compressBtn = document.getElementById('compress-btn');
  if (compressBtn) {
    compressBtn.addEventListener('click', async function() {
      // 开始压缩处理
      await startProcessing();
    });
  }
  
  // 初始化下载按钮
  const downloadBtn = document.getElementById('download-pdf');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
      if (window.lastProcessedResult) {
        // 下载处理后的PDF
        downloadPDF(window.lastProcessedResult, 'compressed.pdf');
      }
    });
  }
  
  // 初始化处理新文件按钮
  const processNewBtn = document.getElementById('process-new');
  if (processNewBtn) {
    processNewBtn.addEventListener('click', function() {
      // 重置界面
      resetUploadArea();
    });
  }
}

// 重置上传区域
function resetUploadArea() {
  // 隐藏所有结果区域
  const compressionResults = document.getElementById('compression-results');
  if (compressionResults) {
    compressionResults.classList.add('hidden');
  }
  
  const compressOptions = document.getElementById('compress-options');
  if (compressOptions) {
    compressOptions.classList.add('hidden');
  }
  
  const uploadProgressArea = document.getElementById('upload-progress-area');
  if (uploadProgressArea) {
    uploadProgressArea.classList.add('hidden');
  }
  
  // 显示上传区域
  const uploadDropArea = document.getElementById('upload-drop-area');
  if (uploadDropArea) {
    uploadDropArea.classList.remove('hidden');
  }
  
  // 清除上传文件
  const fileInput = document.getElementById('pdf-upload');
  if (fileInput) {
    fileInput.value = '';
  }
  
  // 重置全局变量
  window.currentPdfFile = null;
  window.lastProcessedResult = null;
}

// 开始处理文件
async function startProcessing() {
  try {
    debug('开始处理文件');
    
    // 检查是否有文件
    if (!window.currentPdfFile) {
      alert('请先上传PDF文件。');
      return;
    }
    
    // 显示处理进度覆盖层
    showProcessingOverlay();
    
    // 获取文件数据
    const file = window.currentPdfFile;
    const arrayBuffer = await file.arrayBuffer();
    
    // 判断处理类型
    if (window.currentOperation === 'compress') {
      debug('开始压缩PDF文件');
      await compressPDF(arrayBuffer, window.currentCompressionLevel || 'medium');
    } else if (window.currentOperation === 'split') {
      debug('开始拆分PDF文件');
      // 获取拆分选项
      const splitOptions = {
        type: 'all-pages' // 默认拆分所有页
      };
      
      // 如果有自定义范围
      const startPageEl = document.getElementById('split-start-page');
      const endPageEl = document.getElementById('split-end-page'); 
      
      if (startPageEl && endPageEl) {
        splitOptions.type = 'custom-range';
        splitOptions.startPage = parseInt(startPageEl.value);
        splitOptions.endPage = parseInt(endPageEl.value);
      }
      
      await splitPDF(arrayBuffer, splitOptions);
    }
  } catch (error) {
    debug(`处理过程中出错: ${error.message}`);
    console.error('处理过程中出错:', error);
    alert('处理过程中出错: ' + error.message);
    hideProcessingOverlay();
  }
}

// 处理文件上传
async function handleFileUpload(file) {
  try {
    debug(`文件已选择: ${file.name} - ${formatFileSize(file.size)}`);
    
    // 验证文件类型
    if (!file.type || file.type !== 'application/pdf') {
      alert('请选择PDF文件。');
      return;
    }
    
    // 验证文件大小
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      alert(`文件大小超过限制 (${formatFileSize(maxSize)})。请选择更小的文件。`);
      return;
    }
    
    // 存储当前文件
    window.currentPdfFile = file;
    
    // 隐藏拖放区域
    const uploadDropArea = document.getElementById('upload-drop-area');
    if (uploadDropArea) {
      uploadDropArea.classList.add('hidden');
    }
    
    // 显示上传进度
    showUploadProgress(file);
    
    // 模拟上传
    await simulateFileUpload(file);
    
    // 隐藏上传进度
    hideUploadProgress();
    
    // 加载PDF文件
    const arrayBuffer = await file.arrayBuffer();
    debug(`文件已加载到内存: ${formatFileSize(arrayBuffer.byteLength)}`);
    
    // 根据当前操作类型更新UI
    if (window.currentOperation === 'compress') {
      // 对于压缩操作，显示压缩选项
      const compressOptions = document.getElementById('compress-options');
      if (compressOptions) {
        compressOptions.classList.remove('hidden');
      }
    } else if (window.currentOperation === 'split') {
      // 对于拆分操作，显示拆分选项（如果有的话）
      const splitOptions = document.getElementById('split-options');
      if (splitOptions) {
        splitOptions.classList.remove('hidden');
      }
    }
  } catch (error) {
    debug(`处理文件上传时出错: ${error.message}`);
    console.error('处理文件上传时出错:', error);
    alert('处理文件上传时出错: ' + error.message);
  }
}

// 显示文件上传进度
function showUploadProgress(file) {
  const uploadProgressArea = document.getElementById('upload-progress-area');
  const uploadingFilename = document.getElementById('uploading-filename');
  const uploadProgressBar = document.getElementById('upload-progress-bar');
  const uploadProgressText = document.getElementById('upload-progress-text');
  
  if (uploadProgressArea) {
    uploadProgressArea.classList.remove('hidden');
  }
  
  if (uploadingFilename) {
    uploadingFilename.textContent = file.name;
  }
  
  if (uploadProgressBar) {
    uploadProgressBar.style.width = '0%';
  }
  
  if (uploadProgressText) {
    uploadProgressText.textContent = '0%';
  }
  
  debug(`正在上传文件: ${file.name}`);
}

// 隐藏上传进度
function hideUploadProgress() {
  const uploadProgressArea = document.getElementById('upload-progress-area');
  
  if (uploadProgressArea) {
    uploadProgressArea.classList.add('hidden');
  }
  
  debug('文件上传完成');
}

// 模拟文件上传过程
async function simulateFileUpload(file) {
  return new Promise((resolve) => {
    const uploadProgressBar = document.getElementById('upload-progress-bar');
    const uploadProgressText = document.getElementById('upload-progress-text');
    const uploadSpeed = document.getElementById('upload-speed');
    
    let progress = 0;
    const totalSize = file.size;
    const updateInterval = 50; // 更新间隔(ms)
    
    // 根据文件大小计算适当的增量，确保总时间在1-3秒
    const increment = Math.max(1, Math.min(5, Math.ceil(file.size / (1024 * 1024))));
    
    const interval = setInterval(() => {
      progress += increment;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        if (uploadProgressBar) uploadProgressBar.style.width = '100%';
        if (uploadProgressText) uploadProgressText.textContent = '100%';
        if (uploadSpeed) uploadSpeed.textContent = '完成';
        
        // 模拟完成后延迟一点时间再返回
        setTimeout(resolve, 300);
      } else {
        if (uploadProgressBar) uploadProgressBar.style.width = `${progress}%`;
        if (uploadProgressText) uploadProgressText.textContent = `${progress}%`;
        
        // 计算并显示上传速度
        const loadedBytes = Math.floor(totalSize * (progress / 100));
        const speedKBps = Math.floor((loadedBytes / 1024) / ((progress / 100) * 2)); // 假设总时间约2秒
        if (uploadSpeed) uploadSpeed.textContent = `${speedKBps} KB/s`;
      }
    }, updateInterval);
  });
}

// 更新操作选项界面
function updateOperationOptions() {
  const compressOptions = document.getElementById('compress-options');
  const splitOptions = document.getElementById('split-options');
  
  if (compressOptions && splitOptions) {
    if (window.currentOperation === 'compress') {
      compressOptions.classList.remove('hidden');
      splitOptions.classList.add('hidden');
    } else {
      compressOptions.classList.add('hidden');
      splitOptions.classList.remove('hidden');
    }
  }
  
  // 更新处理按钮文本
  updateProcessButtonText();
}

// 更新拆分选项
async function updateSplitOptions(file) {
  if (window.currentOperation !== 'split') return;
  
  try {
    // 读取PDF以获取页面数量
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    const pageCount = pdfDoc.getPageCount();
    
    // 更新结束页码输入框的最大值和默认值
    const endPageInput = document.getElementById('split-end-page');
    if (endPageInput) {
      endPageInput.max = pageCount;
      endPageInput.value = pageCount;
    }
    
    // 更新开始页码输入框的最大值
    const startPageInput = document.getElementById('split-start-page');
    if (startPageInput) {
      startPageInput.max = pageCount;
    }
    
    debug(`PDF有${pageCount}页`);
  } catch (error) {
    debug(`获取PDF页数时出错: ${error.message}`);
  }
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 初始化操作按钮
function initializeOperationButtons() {
  const compressBtn = document.querySelector('button:nth-child(1)');
  const splitBtn = document.querySelector('button:nth-child(2)');
  
  if (compressBtn) {
    compressBtn.addEventListener('click', () => {
      setActiveOperation('compress');
      debug('选择了压缩操作');
      
      // 如果已经有文件上传，提示用户操作已切换但将继续使用当前文件
      if (window.currentPdfFile) {
        debug(`操作已切换为压缩，使用当前文件: ${window.currentPdfFile.name}`);
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 right-4 bg-primary-600 text-white px-4 py-2 rounded shadow-lg z-50 transform transition-transform duration-300';
        toast.innerHTML = `<div class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>已切换至压缩操作，将使用当前文件</div>`;
        document.body.appendChild(toast);
        
        // 3秒后移除
        setTimeout(() => {
          toast.classList.add('translate-x-full');
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 300);
        }, 3000);
      }
    });
  }
  
  if (splitBtn) {
    splitBtn.addEventListener('click', () => {
      setActiveOperation('split');
      debug('选择了拆分操作');
      
      // 如果已经有文件上传，提示用户操作已切换但将继续使用当前文件
      if (window.currentPdfFile) {
        debug(`操作已切换为拆分，使用当前文件: ${window.currentPdfFile.name}`);
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 right-4 bg-primary-600 text-white px-4 py-2 rounded shadow-lg z-50 transform transition-transform duration-300';
        toast.innerHTML = `<div class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>已切换至拆分操作，将使用当前文件</div>`;
        document.body.appendChild(toast);
        
        // 3秒后移除
        setTimeout(() => {
          toast.classList.add('translate-x-full');
          setTimeout(() => {
            document.body.removeChild(toast);
          }, 300);
        }, 3000);
      }
    });
  }
}

// 更新文件处理进度
function updateFileProgress(percent) {
  const progressBar = document.getElementById('file-progress-bar');
  const progressText = document.getElementById('file-progress-text');
  
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
  
  if (progressText) {
    progressText.textContent = `${percent}%`;
  }
}

// 显示处理结果
function showProcessResult(operation, data) {
  try {
    debug(`显示处理结果: ${operation}`);
    
    // 保存处理结果，用于下载
    window.lastProcessedResult = data.bytes;
    
    // 隐藏所有选项面板
    const compressOptions = document.getElementById('compress-options');
    const splitOptions = document.getElementById('split-options');
    
    if (compressOptions) compressOptions.classList.add('hidden');
    if (splitOptions) splitOptions?.classList.add('hidden');
    
    // 显示相应的结果面板
    if (operation === 'compress') {
      // 显示压缩结果
      const compressionResults = document.getElementById('compression-results');
      if (compressionResults) {
        compressionResults.classList.remove('hidden');
      }
      
      // 更新压缩结果数据
      const originalSize = document.getElementById('original-size');
      const compressedSize = document.getElementById('compressed-size');
      const compressionRatio = document.getElementById('compression-ratio');
      
      if (originalSize) originalSize.textContent = formatFileSize(data.originalSize);
      if (compressedSize) compressedSize.textContent = formatFileSize(data.compressedSize);
      if (compressionRatio) compressionRatio.textContent = `${data.ratio}%`;
      
      // 计算压缩百分比文字（如"减小了25%"）
      const reductionPercent = data.ratio;
      const reductionText = reductionPercent > 0 
        ? `减小了${reductionPercent}%` 
        : `增大了${Math.abs(reductionPercent)}%`;
      
      // 如果有自定义元素显示压缩减小比例，可以更新这里
      const compressionResultText = document.getElementById('compression-result-text');
      if (compressionResultText) {
        compressionResultText.textContent = reductionText;
        // 根据压缩效果添加不同颜色
        if (reductionPercent > 30) {
          compressionResultText.className = 'text-green-600 font-bold';
        } else if (reductionPercent > 0) {
          compressionResultText.className = 'text-blue-600 font-bold';
        } else {
          compressionResultText.className = 'text-red-600 font-bold';
        }
      }
      
      debug(`压缩结果: 原始大小=${formatFileSize(data.originalSize)}, 压缩后=${formatFileSize(data.compressedSize)}, 压缩率=${data.ratio}%`);
      
      // 确保下载按钮可见并可点击
      const downloadBtn = document.getElementById('download-pdf');
      if (downloadBtn) {
        downloadBtn.disabled = false;
        downloadBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        downloadBtn.classList.add('hover:bg-primary-700');
      }
    } else if (operation === 'split') {
      // 隐藏压缩结果
      const compressionResults = document.getElementById('compression-results');
      if (compressionResults) compressionResults.classList.add('hidden');
      
      // TODO: 实现拆分结果显示
      debug('拆分结果显示暂未实现');
    }
  } catch (error) {
    debug(`显示处理结果时出错: ${error.message}`);
    console.error('显示处理结果时出错:', error);
  }
}

// 压缩PDF
async function compressPDF(arrayBuffer, compressionLevel = 'medium') {
  try {
    // 显示处理进度
    showProcessingOverlay();
    updateFileProgress(10);
    
    debug(`开始压缩PDF，压缩级别：${compressionLevel}`);
    updateProgress('加载PDF文件...');
    
    // 使用pdf-lib加载PDF文档
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    updateFileProgress(30);
    
    // 获取PDF页数
    const pages = pdfDoc.getPages();
    const pageCount = pages.length;
    
    debug(`成功加载PDF，页数：${pageCount}`);
    updateProgress(`正在准备压缩${pageCount}页...`);
    
    // 创建一个新的PDF文档用于保存压缩后的内容
    const compressedPdf = await PDFLib.PDFDocument.create();
    updateFileProgress(40);
    
    // 复制所有页面到新文档，应用压缩选项
    for (let i = 0; i < pageCount; i++) {
      updateProgress(`正在处理第${i+1}页，共${pageCount}页`);
      const [copiedPage] = await compressedPdf.copyPages(pdfDoc, [i]);
      compressedPdf.addPage(copiedPage);
      
      // 更新进度，页面复制占30%的进度
      const progressPercent = 40 + Math.floor((i + 1) / pageCount * 30);
      updateFileProgress(progressPercent);
    }
    
    // 根据选择的压缩级别设置压缩选项
    const compressionOptions = {
      useObjectStreams: true,
      addDefaultPage: false,
      preserveExistingEncryption: false
    };
    
    debug(`应用${compressionLevel}级别压缩...`);
    updateProgress(`正在应用${getCompressionLevelName(compressionLevel)}压缩...`);
    
    // 应用不同的压缩策略
    switch(compressionLevel) {
      case 'lossless':
        // 无损压缩 - 最保守的压缩，保持文档质量
        compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 1 } };
        break;
      case 'extreme':
        // 高压缩低质量
        compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 9 } };
        break;
      case 'custom':
        // 自定义大小压缩尝试根据目标大小调整压缩参数
        const customSizeInput = document.getElementById('custom-size-input');
        const targetSize = parseFloat(customSizeInput ? customSizeInput.value : 1000) * 1024; // 转换为字节
        
        // 基于原始大小和目标大小计算预估的压缩参数
        const originalSize = arrayBuffer.byteLength;
        const compressionRatio = targetSize / originalSize;
        
        debug(`自定义压缩: 目标大小=${formatFileSize(targetSize)}, 原始大小=${formatFileSize(originalSize)}, 比例=${compressionRatio.toFixed(2)}`);
        
        // 计算合适的压缩级别，根据目标压缩比例
        if (compressionRatio > 0.8) {
          compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 3 } };
        } else if (compressionRatio > 0.6) {
          compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 5 } };
        } else if (compressionRatio > 0.4) {
          compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 7 } };
        } else {
          compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 9 } };
        }
        break;
      case 'medium':
      default:
        // 中等压缩和质量
        compressionOptions.objectCompressionMethod = { CompressFlate: { effort: 5 } };
        break;
    }
    
    // 设置PDF元数据以减小文件大小
    compressedPdf.setCreator('PDF Pro');
    compressedPdf.setProducer('PDF Pro Compression Tool');
    updateFileProgress(70);

    // 免费用户添加水印
    const isPro = false; // 这里应该根据用户状态来判断，现在默认为免费用户
    if (!isPro) {
      updateFileProgress(75);
      debug('添加水印...');
      updateProgress('添加水印...');
      
      // 为所有页面添加水印
      for (let i = 0; i < pageCount; i++) {
        const page = compressedPdf.getPages()[i];
        const { width, height } = page.getSize();
        
        // 创建水印文本
        page.drawText('PDF Pro - 免费版', {
          x: width / 2 - 60,
          y: height / 2 - 20,
          size: 24,
          color: PDFLib.rgb(0.7, 0.7, 0.7),
          opacity: 0.3,
          rotate: PDFLib.degrees(45),
        });
        
        // 添加网站链接
        page.drawText('pdfpro.example.com', {
          x: width / 2 - 50,
          y: height / 2 - 50,
          size: 12,
          color: PDFLib.rgb(0.7, 0.7, 0.7),
          opacity: 0.3,
          rotate: PDFLib.degrees(45),
        });
        
        // 更新进度
        const watermarkProgress = 75 + Math.floor((i + 1) / pageCount * 15);
        updateFileProgress(watermarkProgress);
      }
    }
    
    updateFileProgress(90);
    updateProgress('正在保存PDF文件...');
    
    // 保存压缩后的PDF
    const compressedBytes = await compressedPdf.save(compressionOptions);
    updateFileProgress(95);
    
    // 计算压缩率
    const originalSize = arrayBuffer.byteLength;
    const compressedSize = compressedBytes.byteLength;
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    
    // 显示结果
    debug(`压缩完成：原始大小=${formatFileSize(originalSize)}, 压缩后大小=${formatFileSize(compressedSize)}, 压缩率=${compressionRatio}%`);
    updateProgress('压缩完成！');
    
    // 显示处理结果
    showProcessResult('compress', {
      originalSize: originalSize,
      compressedSize: compressedSize,
      ratio: compressionRatio,
      bytes: compressedBytes
    });
    
    updateFileProgress(100);
    
    // 隐藏处理进度覆盖层
    setTimeout(() => {
      hideProcessingOverlay();
    }, 500);
    
    return compressedBytes;
  } catch (error) {
    // 隐藏处理进度覆盖层
    hideProcessingOverlay();
    debug(`压缩PDF时出错: ${error.message}`);
    console.error('压缩PDF时出错:', error);
    alert('处理PDF时出错: ' + error.message);
    throw error;
  }
}

// 获取压缩级别的中文名称
function getCompressionLevelName(level) {
  switch(level) {
    case 'lossless': return '无损';
    case 'medium': return '中等';
    case 'extreme': return '极限';
    case 'custom': return '自定义';
    default: return '中等';
  }
}

// 拆分PDF
async function splitPDF(arrayBuffer, options = {}) {
  try {
    // 显示处理进度覆盖层
    showProcessingOverlay();
    updateFileProgress(10);
    
    debug(`开始拆分PDF，选项：${JSON.stringify(options)}`);
    
    // 使用pdf-lib加载PDF文档
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    updateFileProgress(30);
    
    // 获取PDF页数
    const pages = pdfDoc.getPages();
    const pageCount = pages.length;
    
    if (pageCount <= 1) {
      hideProcessingOverlay();
      alert('此PDF文件只有一页，无法拆分。');
      return;
    }
    
    // 创建一个包含拆分后所有PDF的数组
    const splitPdfs = [];
    const splitNames = [];
    updateFileProgress(40);
    
    // 根据拆分选项确定需要处理的页面
    let pagesToProcess = [];
    
    if (options.type === 'custom-range') {
      // 自定义页面范围
      const startPage = options.startPage || 1;
      const endPage = options.endPage || pageCount;
      
      // 验证页面范围
      if (startPage < 1 || startPage > pageCount || endPage < startPage || endPage > pageCount) {
        hideProcessingOverlay();
        alert('请输入有效的页面范围。');
        return;
      }
      
      // 创建一个新的PDF文档
      const newPdf = await PDFLib.PDFDocument.create();
      
      // 复制指定范围的页面
      for (let i = startPage - 1; i < endPage; i++) {
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);
        
        // 更新进度
        const progressPercent = 40 + Math.floor((i - startPage + 1) / (endPage - startPage + 1) * 50);
        updateFileProgress(progressPercent);
      }
      
      // 设置元数据
      newPdf.setCreator('PDF Pro');
      newPdf.setProducer('PDF Pro Splitting Tool');
      
      // 保存文档
      const pdfBytes = await newPdf.save();
      
      // 添加到拆分文档数组
      splitPdfs.push(pdfBytes);
      splitNames.push(`split_pages_${startPage}_to_${endPage}.pdf`);
    } else {
      // 默认每页一个文件
      for (let i = 0; i < pageCount; i++) {
        // 创建新的PDF文档
        const newPdf = await PDFLib.PDFDocument.create();
        
        // 复制当前页面到新文档
        const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
        newPdf.addPage(copiedPage);
        
        // 设置元数据
        newPdf.setCreator('PDF Pro');
        newPdf.setProducer('PDF Pro Splitting Tool');
        
        // 保存文档
        const pdfBytes = await newPdf.save();
        
        // 添加到拆分文档数组
        splitPdfs.push(pdfBytes);
        splitNames.push(`split_page_${i + 1}.pdf`);
        
        // 更新进度，文档处理占总进度的50%
        const progressPercent = 40 + Math.floor((i + 1) / pageCount * 50);
        updateFileProgress(progressPercent);
      }
    }
    
    updateFileProgress(95);
    
    // 如果有拆分的文档，准备下载
    if (splitPdfs.length > 0) {
      // 记录处理结果
      if (splitPdfs.length === 1) {
        // 单个文件情况
        window.lastProcessedResult = splitPdfs[0];
        
        // 显示处理结果
        showProcessResult('split', {
          bytes: splitPdfs[0]
        });
      } else {
        // 多个文件情况 - 这里简化处理，只允许下载第一个文件
        window.lastProcessedResult = splitPdfs[0];
        window.allSplitFiles = {
          pdfs: splitPdfs,
          names: splitNames
        };
        
        // 显示处理结果
        showProcessResult('split', {
          bytes: splitPdfs[0]
        });
        
        // 告知用户有多个文件
        const downloadButton = document.getElementById('download-button');
        if (downloadButton) {
          downloadButton.textContent = `下载第一个文件 (共${splitPdfs.length}个)`;
        }
      }
      
      // 隐藏处理进度覆盖层
      hideProcessingOverlay();
      updateFileProgress(100);
      
      debug(`拆分完成，生成了${splitPdfs.length}个文件`);
      
      return splitPdfs;
    }
  } catch (error) {
    // 隐藏处理进度覆盖层
    hideProcessingOverlay();
    debug(`拆分PDF时出错: ${error.message}`);
    console.error('拆分PDF时出错:', error);
    alert('处理PDF时出错: ' + error.message);
    throw error;
  }
}

// 下载PDF
function downloadPDF(pdfBytes, fileName = 'document.pdf') {
  try {
    debug(`开始下载文件: ${fileName}, 大小: ${(pdfBytes.byteLength / 1024 / 1024).toFixed(2)}MB`);
    
    // 创建Blob
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    
    // 使用download.js库下载
    if (typeof download === 'function') {
      download(blob, fileName, 'application/pdf');
      debug('使用download.js库下载文件');
    } else {
      // 备用下载方法
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      
      // 清理
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
      
      debug('使用备用方法下载文件');
    }
    
    debug('文件下载成功');
    return true;
  } catch (error) {
    debug(`下载PDF时出错: ${error.message}`);
    console.error('下载PDF时出错:', error);
    alert('下载文件时出错: ' + error.message);
    return false;
  }
}

// 显示处理进度覆盖层
function showProcessingOverlay() {
  const processingOverlay = document.querySelector('.processing-overlay');
  if (processingOverlay) {
    processingOverlay.classList.remove('hidden');
  }
  
  // 重置进度条
  updateFileProgress(0);
}

// 隐藏处理进度覆盖层
function hideProcessingOverlay() {
  const processingOverlay = document.querySelector('.processing-overlay');
  if (processingOverlay) {
    processingOverlay.classList.add('hidden');
  }
}

// 更新进度条
function updateProgress(message) {
  const progressOverlay = document.querySelector('.processing-overlay-message');
  if (progressOverlay) {
    progressOverlay.textContent = message;
  }
}

// 初始化语言切换器
function initializeLanguageSwitcher() {
  const languageSelector = document.getElementById('language-selector');
  const languageDropdown = document.getElementById('language-dropdown');
  
  if (!languageSelector || !languageDropdown) return;
  
  languageSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('hidden');
  });
  
  document.addEventListener('click', () => {
    languageDropdown.classList.add('hidden');
  });
  
  const languageOptions = languageDropdown.querySelectorAll('a');
  languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute('data-lang');
      if (lang) {
        i18next.changeLanguage(lang, (err) => {
          if (!err) {
            updateUILanguage(lang);
            document.getElementById('current-language').textContent = e.target.textContent;
          }
        });
      }
    });
  });
}

// 设置当前活动操作
function setActiveOperation(operation) {
  // 保存当前的操作类型
  const previousOperation = window.currentOperation;
  
  // 更新当前操作类型
  window.currentOperation = operation;
  
  // 只有在操作类型发生变化且没有已上传文件时才完全重置上传区域
  if (previousOperation !== operation) {
    if (!window.currentPdfFile) {
      // 没有上传文件，完全重置界面
      resetUploadArea();
    } else {
      // 已有上传文件，只更新操作选项显示，保留文件状态
      updateOperationOptionsWithCurrentFile();
    }
  }
  
  // 高亮当前选中的操作按钮
  const compressBtn = document.querySelector('button:nth-child(1)');
  const splitBtn = document.querySelector('button:nth-child(2)');
  
  if (operation === 'compress' && compressBtn && splitBtn) {
    compressBtn.classList.remove('bg-white', 'border-2', 'border-primary-600', 'text-primary-600');
    compressBtn.classList.add('bg-primary-600', 'text-white');
    
    splitBtn.classList.remove('bg-primary-600', 'text-white');
    splitBtn.classList.add('bg-white', 'border-2', 'border-primary-600', 'text-primary-600');
  } else if (operation === 'split' && compressBtn && splitBtn) {
    splitBtn.classList.remove('bg-white', 'border-2', 'border-primary-600', 'text-primary-600');
    splitBtn.classList.add('bg-primary-600', 'text-white');
    
    compressBtn.classList.remove('bg-primary-600', 'text-white');
    compressBtn.classList.add('bg-white', 'border-2', 'border-primary-600', 'text-primary-600');
  }
}

// 在已有文件的情况下更新操作选项显示
function updateOperationOptionsWithCurrentFile() {
  // 隐藏上传拖放区域，因为文件已经上传
  const uploadDropArea = document.getElementById('upload-drop-area');
  if (uploadDropArea) {
    uploadDropArea.classList.add('hidden');
  }
  
  // 隐藏所有选项面板
  const compressOptions = document.getElementById('compress-options');
  const splitOptions = document.getElementById('split-options');
  const compressionResults = document.getElementById('compression-results');
  
  // 隐藏所有区域
  if (compressOptions) compressOptions.classList.add('hidden');
  if (splitOptions) splitOptions?.classList.add('hidden');
  if (compressionResults) compressionResults.classList.add('hidden');
  
  // 根据当前操作类型显示对应选项
  if (window.currentOperation === 'compress') {
    if (compressOptions) compressOptions.classList.remove('hidden');
  } else if (window.currentOperation === 'split') {
    if (splitOptions) splitOptions?.classList.remove('hidden');
  }
  
  debug(`已更新操作选项显示，当前操作: ${window.currentOperation}，当前文件: ${window.currentPdfFile?.name}`);
}

// 调试日志函数
function debug(message) {
  console.log(message);
  
  const debugPanel = document.getElementById('debug-panel');
  const debugMessages = document.getElementById('debug-messages');
  
  if (debugPanel && debugMessages) {
    const logItem = document.createElement('div');
    logItem.className = 'mb-1 border-b border-gray-700 pb-1';
    logItem.innerHTML = `<span class="text-gray-400">[${new Date().toLocaleTimeString()}]</span> ${message}`;
    debugMessages.appendChild(logItem);
    
    // 保持滚动到底部
    debugMessages.scrollTop = debugMessages.scrollHeight;
    
    // 显示调试面板
    debugPanel.style.display = 'block';
  }
}

// 初始化调试面板
function initializeDebugPanel() {
  const debugPanel = document.getElementById('debug-panel');
  const toggleButton = document.getElementById('toggle-debug');
  
  if (debugPanel && toggleButton) {
    toggleButton.addEventListener('click', () => {
      if (debugPanel.style.display === 'none') {
        debugPanel.style.display = 'block';
        toggleButton.textContent = '隐藏';
      } else {
        debugPanel.style.display = 'none';
        toggleButton.textContent = '显示';
      }
    });
    
    // 添加显示调试面板的快捷键 (Alt+D)
    document.addEventListener('keydown', (e) => {
      if (e.altKey && e.key === 'd') {
        debugPanel.style.display = debugPanel.style.display === 'none' ? 'block' : 'none';
        toggleButton.textContent = debugPanel.style.display === 'none' ? '显示' : '隐藏';
      }
    });
    
    // 默认情况下显示调试面板（方便开发）
    debugPanel.style.display = 'block';
  }
}

// 初始化社交分享功能
function initializeShareFeature() {
  const shareButtons = document.querySelectorAll('.share-button');
  
  shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = button.getAttribute('data-platform');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      let shareUrl = '';
      
      switch (platform) {
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'linkedin':
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank');
      }
    });
  });
}