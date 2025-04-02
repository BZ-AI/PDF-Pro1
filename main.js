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
    detection: {
      // 设置语言检测顺序
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
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
            maxFileSize: 'Maximum file size: 50MB (Free Plan, limited time offer until May 15, 2025)'
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
            loadingPdf: 'Loading PDF...',
            compressionComplete: 'Compression Complete',
            savedSpace: 'Saved Space: {percentage}%',
            compressionError: 'Compression Error: ',
            finalizing: 'Finalizing...',
            splitConfirm: 'Split PDF into {count} pages?',
            splitCanceled: 'Split canceled.',
            splitPrompt: 'Enter page ranges (comma-separated, e.g., 1,3-5,7)',
            splitComplete: 'Split complete. {count} pages split.',
            splitError: 'Split Error: ',
            creatingZip: 'Creating ZIP file...'
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
            maxFileSize: '最大文件大小：50MB（免费版，限时优惠至2025年5月15日）'
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
            loadingPdf: '正在加载PDF...',
            compressionComplete: '压缩完成',
            savedSpace: '节省空间：{percentage}%',
            compressionError: '压缩错误：',
            finalizing: '正在完成...',
            splitConfirm: '拆分PDF为{count}页？',
            splitCanceled: '拆分取消。',
            splitPrompt: '输入页面范围（用逗号分隔，例如1,3-5,7）',
            splitComplete: '拆分完成。{count}页拆分。',
            splitError: '拆分错误：',
            creatingZip: '正在创建ZIP文件...'
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

// DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
  // 初始化上传区域
  initializeUploadArea();
  
  // 初始化操作按钮
  initializeOperationButtons();
  
  // 初始化语言切换
  initializeLanguageSwitcher();
  
  // 初始化社交分享功能
  initializeShareFeature();
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
  const uploadArea = document.querySelector('.upload-area');
  const uploadDropArea = document.getElementById('upload-drop-area');
  const fileInput = document.getElementById('pdf-upload');
  const selectButton = document.getElementById('pdf-select-button');
  
  if (!uploadArea) return;
  
  // 拖放功能
  if (uploadDropArea) {
    uploadDropArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadDropArea.classList.add('border-primary-500');
    });
    
    uploadDropArea.addEventListener('dragleave', () => {
      uploadDropArea.classList.remove('border-primary-500');
    });
    
    uploadDropArea.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadDropArea.classList.remove('border-primary-500');
      
      if (e.dataTransfer.files.length) {
        fileInput.files = e.dataTransfer.files;
        handleFileUpload(e.dataTransfer.files[0]);
      }
    });
    
    // 点击上传区域触发文件选择
    uploadDropArea.addEventListener('click', (e) => {
      // 阻止冒泡确保不会重复触发事件
      if (e.target !== selectButton && !selectButton.contains(e.target)) {
        fileInput.click();
      }
    });
  }
  
  // 专门的选择文件按钮
  if (selectButton) {
    selectButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // 防止冒泡到上传区域
      console.log('选择文件按钮被点击');
      if (fileInput) {
        fileInput.click();
      }
    });
  }
  
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      console.log('文件输入变化');
      if (fileInput.files.length) {
        handleFileUpload(fileInput.files[0]);
      }
    });
  } else {
    console.error('未找到文件输入元素');
  }
}

// 初始化操作按钮
function initializeOperationButtons() {
  const compressBtn = document.querySelector('button:nth-child(1)');
  const splitBtn = document.querySelector('button:nth-child(2)');
  
  if (compressBtn) {
    compressBtn.addEventListener('click', () => {
      setActiveOperation('compress');
    });
  }
  
  if (splitBtn) {
    splitBtn.addEventListener('click', () => {
      setActiveOperation('split');
    });
  }
}

// 设置当前活动操作
function setActiveOperation(operation) {
  const compressBtn = document.querySelector('button:nth-child(1)');
  const splitBtn = document.querySelector('button:nth-child(2)');
  
  if (compressBtn && splitBtn) {
    if (operation === 'compress') {
      compressBtn.classList.add('bg-primary-600', 'text-white');
      compressBtn.classList.remove('bg-white', 'text-primary-600');
      splitBtn.classList.add('bg-white', 'text-primary-600');
      splitBtn.classList.remove('bg-primary-600', 'text-white');
    } else {
      splitBtn.classList.add('bg-primary-600', 'text-white');
      splitBtn.classList.remove('bg-white', 'text-primary-600');
      compressBtn.classList.add('bg-white', 'text-primary-600');
      compressBtn.classList.remove('bg-primary-600', 'text-white');
    }
    
    // 存储当前操作类型
    window.currentOperation = operation;
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

// 显示加载覆盖层
function showLoadingOverlay(message, progress = -1) {
  const overlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  const progressContainer = document.getElementById('progress-container');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  if (!overlay) return;
  
  if (loadingText) {
    loadingText.textContent = message || 'Processing...';
  }
  
  // 处理进度条显示
  if (progress >= 0 && progress <= 100 && progressContainer && progressBar && progressText) {
    // 显示进度条
    progressContainer.classList.remove('hidden');
    progressText.classList.remove('hidden');
    
    // 更新进度条
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
  } else if (progressContainer && progressText) {
    // 隐藏进度条（用于不确定进度的操作）
    progressContainer.classList.add('hidden');
    progressText.classList.add('hidden');
  }
  
  overlay.classList.remove('hidden');
}

// 隐藏加载覆盖层
function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  const progressContainer = document.getElementById('progress-container');
  const progressText = document.getElementById('progress-text');
  
  if (overlay) {
    overlay.classList.add('hidden');
  }
  
  // 重置进度条
  if (progressContainer && progressText) {
    progressContainer.classList.add('hidden');
    progressText.classList.add('hidden');
    
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = '0%';
    }
  }
}

// 处理文件上传
async function handleFileUpload(file) {
  if (!file) {
    console.error('No file selected');
    return;
  }
  
  console.log('文件选择:', file.name, file.type, file.size);
  
  // 检查文件类型是否为PDF
  if (file.type !== 'application/pdf') {
    alert(i18next.t('processing.invalidFile'));
    return;
  }
  
  // 限时促销：检查当前日期是否在促销期内
  const promotionEndDate = new Date('2025-05-15'); // 设置促销结束日期为2025年5月15日
  const currentDate = new Date();
  
  // 设置文件大小限制
  let maxSizeBytes = 5 * 1024 * 1024; // 默认5MB
  
  // 如果当前日期在促销期内，允许50MB
  if (currentDate <= promotionEndDate) {
    maxSizeBytes = 50 * 1024 * 1024; // 50MB
  }
  
  // 检查文件大小
  if (file.size > maxSizeBytes) {
    if (currentDate <= promotionEndDate) {
      alert('文件超过50MB限制。请升级到专业版以处理更大的文件。');
    } else {
      alert('促销期已结束，免费用户文件大小限制为5MB。请升级到专业版以处理更大的文件。');
    }
    return;
  }
  
  // 显示加载遮罩层，显示上传进度0%
  showLoadingOverlay(i18next.t('processing.loadingPdf'), 0);
  
  // 使用FileReader带进度显示读取文件
  try {
    console.log('开始处理文件...');
    
    // 使用Promise包装FileReader以支持进度
    const arrayBuffer = await readFileWithProgress(file);
    console.log('文件已读取为ArrayBuffer, 大小:', arrayBuffer.byteLength);
    
    // 确保当前操作类型已设置，默认为压缩
    if (!window.currentOperation) {
      console.log('未设置当前操作，默认设为压缩');
      window.currentOperation = 'compress';
      // 视觉上突出显示压缩按钮
      setActiveOperation('compress');
    }
    
    console.log('当前操作:', window.currentOperation);
    
    // 根据当前操作决定下一步
    if (window.currentOperation === 'compress') {
      await compressPDF(arrayBuffer);
    } else {
      await splitPDF(arrayBuffer);
    }
  } catch (error) {
    hideLoadingOverlay();
    console.error('处理文件时出错:', error);
    alert(i18next.t('processing.error') + error.message);
  }
}

// 使用FileReader读取文件并显示进度
function readFileWithProgress(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    // 进度事件处理
    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        showLoadingOverlay(i18next.t('processing.loadingPdf'), progress);
      }
    };
    
    // 完成事件处理
    reader.onload = () => {
      resolve(reader.result);
    };
    
    // 错误处理
    reader.onerror = () => {
      reject(new Error('文件读取失败'));
    };
    
    // 开始读取文件
    reader.readAsArrayBuffer(file);
  });
}

// 压缩PDF（实际实现）
async function compressPDF(arrayBuffer) {
  try {
    showLoadingOverlay(i18next.t('processing.compressing'), 10);
    console.log('开始压缩PDF...');
    
    // 加载PDF文档
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    
    showLoadingOverlay(i18next.t('processing.compressing'), 40);
    
    // 创建用于保存压缩后的PDF的新文档
    const compressedPdfDoc = await PDFLib.PDFDocument.create();
    
    // 获取原始PDF的页数
    const pageCount = pdfDoc.getPageCount();
    
    // 复制所有页到新文档
    for (let i = 0; i < pageCount; i++) {
      // 更新进度：40% + 占总进度50%的复制页面进度
      const progress = 40 + Math.round((i / pageCount) * 50);
      showLoadingOverlay(i18next.t('processing.compressing'), progress);
      
      const [copiedPage] = await compressedPdfDoc.copyPages(pdfDoc, [i]);
      compressedPdfDoc.addPage(copiedPage);
    }
    
    // 设置压缩选项
    const compressOptions = {
      useObjectStreams: true,
      useCompression: true
    };
    
    showLoadingOverlay(i18next.t('processing.finalizing'), 90);
    
    // 保存压缩后的PDF
    const compressedPdfBytes = await compressedPdfDoc.save(compressOptions);
    
    // 显示压缩报告
    showCompressionReport(arrayBuffer.byteLength, compressedPdfBytes.byteLength);
    
    // 隐藏加载遮罩层
    hideLoadingOverlay();
    
    // 创建下载链接
    downloadPDF(compressedPdfBytes, 'compressed.pdf');
    
  } catch (error) {
    console.error('压缩PDF时出错:', error);
    hideLoadingOverlay();
    alert(i18next.t('processing.compressionError') + error.message);
  }
}

// 显示压缩报告
function showCompressionReport(originalSize, compressedSize) {
  const savedPercentage = Math.round(((originalSize - compressedSize) / originalSize) * 100);
  const originalSizeFormatted = formatFileSize(originalSize);
  const compressedSizeFormatted = formatFileSize(compressedSize);
  
  // 显示结果
  const resultElement = document.getElementById('compression-result');
  if (resultElement) {
    // 创建结果HTML
    resultElement.innerHTML = `
      <div class="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
        <h3 class="text-lg font-semibold text-green-800 mb-2">${i18next.t('processing.compressionComplete')}</h3>
        <div class="grid grid-cols-2 gap-2 mb-2">
          <div>
            <p class="text-sm text-gray-600">${i18next.t('processing.originalSize')}</p>
            <p class="font-medium">${originalSizeFormatted}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">${i18next.t('processing.compressedSize')}</p>
            <p class="font-medium">${compressedSizeFormatted}</p>
          </div>
        </div>
        <div class="bg-gray-200 rounded-full h-2.5 mb-2">
          <div class="bg-green-600 h-2.5 rounded-full" style="width: ${savedPercentage}%"></div>
        </div>
        <p class="text-center text-green-700 font-medium">
          ${i18next.t('processing.savedSpace', { percentage: savedPercentage })}
        </p>
      </div>
    `;
    resultElement.classList.remove('hidden');
  }
}

// 拆分PDF（实际实现）
async function splitPDF(arrayBuffer) {
  try {
    showLoadingOverlay(i18next.t('processing.splitting'), 10);
    console.log('开始拆分PDF...');
    
    // 加载PDF文档
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    
    // 获取PDF页数
    const pageCount = pdfDoc.getPageCount();
    console.log(`PDF共有${pageCount}页`);
    
    showLoadingOverlay(i18next.t('processing.splitting'), 30);
    
    // 询问用户希望如何拆分PDF
    let splitOption = confirm(i18next.t('processing.splitConfirm', { count: pageCount })) ? 'custom' : 'all';
    let pageRanges = [];
    
    if (splitOption === 'custom') {
      // 获取用户输入的页面范围
      const input = prompt(i18next.t('processing.splitPrompt', { count: pageCount }), '1, 3-5, 7');
      
      if (!input || input.trim() === '') {
        hideLoadingOverlay();
        alert(i18next.t('processing.splitCanceled'));
        return;
      }
      
      try {
        pageRanges = parsePageRanges(input, pageCount);
      } catch (error) {
        hideLoadingOverlay();
        alert(error.message);
        return;
      }
    } else {
      // 拆分所有页面
      pageRanges = Array.from({ length: pageCount }, (_, i) => [i]);
    }
    
    console.log('将拆分以下页面范围:', pageRanges);
    
    showLoadingOverlay(i18next.t('processing.splitting'), 50);
    
    // 拆分并下载PDF
    const zip = new JSZip();
    
    // 处理每个页面范围
    for (let i = 0; i < pageRanges.length; i++) {
      // 更新进度：50% + 占总进度45%的处理页面进度
      const progress = 50 + Math.round((i / pageRanges.length) * 45);
      showLoadingOverlay(i18next.t('processing.splittingPage', { current: i + 1, total: pageRanges.length }), progress);
      
      const range = pageRanges[i];
      
      // 创建新的PDF文档
      const newPdfDoc = await PDFLib.PDFDocument.create();
      
      // 复制指定页面
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, range);
      
      // 添加页面到新文档
      copiedPages.forEach(page => {
        newPdfDoc.addPage(page);
      });
      
      // 保存新PDF
      const newPdfBytes = await newPdfDoc.save();
      
      // 添加到ZIP文件
      let filename;
      if (pageRanges.length === pageCount) {
        // 如果是拆分所有页面，使用页码作为文件名
        filename = `page_${range[0] + 1}.pdf`;
      } else if (range.length === 1) {
        // 如果只有一页，使用页码作为文件名
        filename = `page_${range[0] + 1}.pdf`;
      } else {
        // 否则使用范围作为文件名
        filename = `pages_${range[0] + 1}_to_${range[range.length - 1] + 1}.pdf`;
      }
      
      zip.file(filename, newPdfBytes);
    }
    
    showLoadingOverlay(i18next.t('processing.creatingZip'), 95);
    
    // 生成ZIP文件
    const zipContent = await zip.generateAsync({ type: 'blob' });
    
    // 隐藏加载遮罩层
    hideLoadingOverlay();
    
    // 下载ZIP文件
    const link = document.createElement('a');
    link.href = URL.createObjectURL(zipContent);
    link.download = 'split_pdf.zip';
    link.click();
    
    // 显示拆分完成消息
    alert(i18next.t('processing.splitComplete', { count: pageRanges.length }));
    
  } catch (error) {
    console.error('拆分PDF时出错:', error);
    hideLoadingOverlay();
    alert(i18next.t('processing.splitError') + error.message);
  }
}

// 解析页面范围
function parsePageRanges(input, pageCount) {
  const ranges = [];
  const parts = input.split(',');
  
  for (const part of parts) {
    const trimmed = part.trim();
    
    if (trimmed.includes('-')) {
      // 处理范围，如 "1-5"
      const [start, end] = trimmed.split('-').map(num => parseInt(num.trim(), 10) - 1);
      
      if (isNaN(start) || isNaN(end)) {
        throw new Error(i18next.t('processing.invalidPageRange'));
      }
      
      if (start < 0 || end >= pageCount || start > end) {
        throw new Error(i18next.t('processing.pageOutOfRange', { count: pageCount }));
      }
      
      // 将范围内的所有页面添加到结果中
      const pagesInRange = [];
      for (let i = start; i <= end; i++) {
        pagesInRange.push(i);
      }
      ranges.push(pagesInRange);
    } else {
      // 处理单页，如 "3"
      const pageNum = parseInt(trimmed, 10) - 1;
      
      if (isNaN(pageNum)) {
        throw new Error(i18next.t('processing.invalidPageNumber'));
      }
      
      if (pageNum < 0 || pageNum >= pageCount) {
        throw new Error(i18next.t('processing.pageOutOfRange', { count: pageCount }));
      }
      
      ranges.push([pageNum]);
    }
  }
  
  return ranges;
}

// 格式化文件大小
function formatFileSize(bytes) {
  if (bytes < 1024) {
    return bytes + ' bytes';
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + ' KB';
  } else {
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
}

// 下载处理后的PDF
function downloadPDF(pdfBytes, fileName) {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  
  // 清理
  setTimeout(() => {
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }, 100);
}

// 社交分享功能
function initializeShareFeature() {
  const shareToggle = document.getElementById('share-toggle');
  const shareButtons = document.getElementById('share-buttons');
  const qrModal = document.getElementById('qr-modal');
  const closeModal = document.getElementById('close-modal');
  const qrTitle = document.getElementById('qr-title');
  const qrcodeContainer = document.getElementById('qrcode-container');
  const downloadQrBtn = document.getElementById('download-qr');
  const copySuccess = document.getElementById('copy-success');
  
  console.log('初始化社交分享功能');
  
  // 检查share-toggle是否存在
  if (!shareToggle) {
    console.warn('Share toggle button not found');
  }
  
  // 检查share-buttons是否存在
  if (!shareButtons) {
    console.warn('Share buttons container not found');
  }
  
  // 悬浮按钮功能
  if (shareToggle && shareButtons) {
    // 显示/隐藏分享按钮
    shareToggle.addEventListener('click', () => {
      console.log('Share toggle clicked');
      const isHidden = shareButtons.classList.contains('hidden');
      
      if (isHidden) {
        shareButtons.classList.remove('hidden');
        // 延迟一帧以确保DOM更新，然后添加动画
        requestAnimationFrame(() => {
          shareButtons.classList.remove('opacity-0', 'translate-y-4');
        });
      } else {
        shareButtons.classList.add('opacity-0', 'translate-y-4');
        // 等待过渡完成后隐藏
        setTimeout(() => {
          shareButtons.classList.add('hidden');
        }, 300);
      }
    });
  }
  
  // 查找并处理所有分享按钮
  const floatingShareButtons = document.querySelectorAll('.share-button');
  const footerShareButtons = document.querySelectorAll('.footer-share-button');
  
  console.log('找到悬浮分享按钮数量:', floatingShareButtons.length);
  console.log('找到页脚分享按钮数量:', footerShareButtons.length);
  
  // 为悬浮分享按钮添加事件监听器
  floatingShareButtons.forEach((button, index) => {
    const platform = button.getAttribute('data-platform');
    console.log(`悬浮按钮 ${index+1}: 平台=${platform || '未设置'}`);
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // 阻止事件冒泡
      const platform = button.getAttribute('data-platform');
      console.log('悬浮分享按钮被点击，平台:', platform);
      if (platform) {
        shareContent(platform);
      } else {
        console.warn('按钮未设置data-platform属性');
      }
    });
  });
  
  // 为页脚分享按钮添加事件监听器
  footerShareButtons.forEach((button, index) => {
    const platform = button.getAttribute('data-platform');
    console.log(`页脚按钮 ${index+1}: 平台=${platform || '未设置'}`);
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // 阻止事件冒泡
      const platform = button.getAttribute('data-platform');
      console.log('页脚分享按钮被点击，平台:', platform);
      if (platform) {
        shareContent(platform);
      } else {
        console.warn('页脚按钮未设置data-platform属性');
      }
    });
  });
  
  // 关闭二维码模态框
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      qrModal.classList.add('hidden');
    });
  } else {
    console.warn('Close modal button not found');
  }
  
  // 下载二维码
  if (downloadQrBtn) {
    downloadQrBtn.addEventListener('click', downloadQRCode);
  } else {
    console.warn('Download QR button not found');
  }
  
  // 检查是否有问题的分享按钮
  setTimeout(() => {
    const allButtons = [...floatingShareButtons, ...footerShareButtons];
    const nonFunctionalButtons = allButtons.filter(button => !button.getAttribute('data-platform'));
    if (nonFunctionalButtons.length > 0) {
      console.warn(`发现 ${nonFunctionalButtons.length} 个没有data-platform属性的分享按钮`);
      nonFunctionalButtons.forEach((button, i) => {
        console.warn(`有问题的按钮 ${i+1}:`, button.outerHTML);
      });
    }
    
    // 验证所有平台是否都支持
    const platforms = new Set(Array.from(allButtons).map(btn => btn.getAttribute('data-platform')).filter(Boolean));
    console.log('支持的分享平台:', Array.from(platforms).join(', '));
  }, 1000);
  
  // 分享内容
  function shareContent(platform) {
    console.log('执行分享到平台:', platform);
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const description = encodeURIComponent('专业的PDF处理工具，免费用户现在可享受50MB上传限制！');
    
    switch(platform) {
      case 'wechat':
        showQRCode('微信', url);
        break;
      case 'qq':
        window.open(`http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&desc=${description}`, '_blank');
        break;
      case 'weibo':
        window.open(`http://service.weibo.com/share/share.php?url=${url}&title=${title}`, '_blank');
        break;
      case 'facebook':
        console.log('分享到Facebook:', url);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        console.log('分享到Twitter:', url, title);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        break;
      case 'linkedin':
        console.log('分享到LinkedIn:', url);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
      case 'pinterest':
        console.log('分享到Pinterest:', url, title);
        window.open(`https://pinterest.com/pin/create/button/?url=${url}&description=${title}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(window.location.href)
          .then(() => {
            if (copySuccess) {
              copySuccess.classList.remove('hidden');
              setTimeout(() => {
                copySuccess.classList.add('hidden');
              }, 3000);
            }
            console.log('链接已复制到剪贴板:', window.location.href);
          })
          .catch(err => {
            console.error('复制失败:', err);
            alert('复制链接失败，请手动复制：' + window.location.href);
          });
        break;
      default:
        console.warn('未知的分享平台:', platform);
    }
  }
  
  // 显示二维码
  function showQRCode(title, url) {
    if (!qrModal) {
      console.error('QR Modal not found');
      return;
    }
    
    if (!qrTitle) {
      console.error('QR Title element not found');
      return;
    }
    
    if (!qrcodeContainer) {
      console.error('QRCode container not found');
      return;
    }
    
    qrTitle.textContent = `分享到${title}`;
    qrcodeContainer.innerHTML = ''; // 清空容器
    
    // 创建QR代码 - 使用在线API生成二维码
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
    const qrImage = document.createElement('img');
    qrImage.src = qrImageUrl;
    qrImage.alt = '分享二维码';
    qrImage.className = 'w-full h-full';
    qrcodeContainer.appendChild(qrImage);
    
    // 显示模态框
    qrModal.classList.remove('hidden');
  }
  
  // 下载二维码
  function downloadQRCode() {
    const qrImg = qrcodeContainer.querySelector('img');
    if (!qrImg) {
      console.error('QR image not found');
      return;
    }
    
    // 创建临时链接并触发下载
    const a = document.createElement('a');
    a.href = qrImg.src;
    a.download = 'share-qrcode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}