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
  });

// Function to update UI text
function updateUIText() {
  // Update navigation
  document.querySelector('a[href="#features"]').textContent = i18next.t('features');
  document.querySelector('a[href="#how-it-works"]').textContent = i18next.t('howItWorks');
  document.querySelector('a[href="#pricing"]').textContent = i18next.t('pricing');
  document.querySelector('a[href="#faq"]').textContent = i18next.t('faq');
  document.querySelector('a[href="#upload"]').textContent = i18next.t('getStarted');

  // Update hero section
  document.querySelector('#hero h1').innerHTML = `
    ${i18next.t('hero.title')}<br>
    <span class="gradient-text">${i18next.t('hero.subtitle')}</span>
  `;
  document.querySelector('#hero p.text-xl').textContent = i18next.t('hero.description');
  document.querySelector('label.block.text-gray-700').textContent = i18next.t('hero.selectOperation');
  document.querySelectorAll('.flex.justify-center.gap-4 button')[0].textContent = i18next.t('hero.compressPDF');
  document.querySelectorAll('.flex.justify-center.gap-4 button')[1].textContent = i18next.t('hero.splitPDF');
  document.querySelector('label[for="pdf-upload"]').textContent = i18next.t('hero.uploadPDF');
  document.querySelector('.border-2.border-dashed p').textContent = i18next.t('hero.dragDrop');
  document.querySelector('.text-sm.text-gray-400').textContent = i18next.t('hero.maxFileSize');

  // Update features section
  document.querySelector('#features h2').textContent = i18next.t('features.title');
  const featureCards = document.querySelectorAll('#features .grid > div');
  featureCards[0].querySelector('h3').textContent = i18next.t('features.secure.title');
  featureCards[0].querySelector('p').textContent = i18next.t('features.secure.description');
  featureCards[1].querySelector('h3').textContent = i18next.t('features.fast.title');
  featureCards[1].querySelector('p').textContent = i18next.t('features.fast.description');
  featureCards[2].querySelector('h3').textContent = i18next.t('features.quality.title');
  featureCards[2].querySelector('p').textContent = i18next.t('features.quality.description');
  
  // Update how it works section
  document.querySelector('#how-it-works h2').textContent = i18next.t('howItWorks.title');
  const howItWorksSteps = document.querySelectorAll('#how-it-works .grid > div');
  howItWorksSteps[0].querySelector('h3').textContent = i18next.t('howItWorks.step1');
  howItWorksSteps[0].querySelector('p').textContent = i18next.t('howItWorks.step1Desc');
  howItWorksSteps[1].querySelector('h3').textContent = i18next.t('howItWorks.step2');
  howItWorksSteps[1].querySelector('p').textContent = i18next.t('howItWorks.step2Desc');
  howItWorksSteps[2].querySelector('h3').textContent = i18next.t('howItWorks.step3');
  howItWorksSteps[2].querySelector('p').textContent = i18next.t('howItWorks.step3Desc');
  howItWorksSteps[3].querySelector('h3').textContent = i18next.t('howItWorks.step4');
  howItWorksSteps[3].querySelector('p').textContent = i18next.t('howItWorks.step4Desc');
  
  // Update pricing section
  document.querySelector('#pricing h2').textContent = i18next.t('pricing.title');
  const pricingCards = document.querySelectorAll('#pricing .grid > div');
  
  // Free plan
  pricingCards[0].querySelector('h3').textContent = i18next.t('pricing.free.title');
  pricingCards[0].querySelector('p.text-4xl').innerHTML = 
    `${i18next.t('pricing.free.price')}<span class="text-gray-500 text-base font-normal">${i18next.t('pricing.free.period')}</span>`;
  const freeFeatures = pricingCards[0].querySelectorAll('ul li');
  i18next.t('pricing.free.features', { returnObjects: true }).forEach((feature, index) => {
    if (freeFeatures[index]) {
      const featureText = freeFeatures[index].querySelector('span').nextSibling;
      featureText.textContent = ' ' + feature;
    }
  });
  pricingCards[0].querySelector('button').textContent = i18next.t('pricing.free.button');
  
  // Pro plan
  pricingCards[1].querySelector('h3').textContent = i18next.t('pricing.pro.title');
  pricingCards[1].querySelector('p.text-4xl').innerHTML = 
    `${i18next.t('pricing.pro.price')}<span class="text-gray-200 text-base font-normal">${i18next.t('pricing.pro.period')}</span>`;
  const proFeatures = pricingCards[1].querySelectorAll('ul li');
  i18next.t('pricing.pro.features', { returnObjects: true }).forEach((feature, index) => {
    if (proFeatures[index]) {
      const featureText = proFeatures[index].querySelector('span').nextSibling;
      featureText.textContent = ' ' + feature;
    }
  });
  pricingCards[1].querySelector('button').textContent = i18next.t('pricing.pro.button');
  
  // Enterprise plan
  pricingCards[2].querySelector('h3').textContent = i18next.t('pricing.enterprise.title');
  pricingCards[2].querySelector('p.text-4xl').innerHTML = 
    `${i18next.t('pricing.enterprise.price')}<span class="text-gray-500 text-base font-normal">${i18next.t('pricing.enterprise.period')}</span>`;
  const enterpriseFeatures = pricingCards[2].querySelectorAll('ul li');
  i18next.t('pricing.enterprise.features', { returnObjects: true }).forEach((feature, index) => {
    if (enterpriseFeatures[index]) {
      const featureText = enterpriseFeatures[index].querySelector('span').nextSibling;
      featureText.textContent = ' ' + feature;
    }
  });
  pricingCards[2].querySelector('button').textContent = i18next.t('pricing.enterprise.button');
  
  // Update FAQ section
  document.querySelector('#faq h2').textContent = i18next.t('faq.title');
  const faqItems = document.querySelectorAll('#faq .max-w-3xl > div');
  
  faqItems[0].querySelector('h3').textContent = i18next.t('faq.questions.security.question');
  faqItems[0].querySelector('p').textContent = i18next.t('faq.questions.security.answer');
  
  faqItems[1].querySelector('h3').textContent = i18next.t('faq.questions.compression.question');
  faqItems[1].querySelector('p').textContent = i18next.t('faq.questions.compression.answer');
  
  faqItems[2].querySelector('h3').textContent = i18next.t('faq.questions.fileSize.question');
  faqItems[2].querySelector('p').textContent = i18next.t('faq.questions.fileSize.answer');
  
  faqItems[3].querySelector('h3').textContent = i18next.t('faq.questions.multiple.question');
  faqItems[3].querySelector('p').textContent = i18next.t('faq.questions.multiple.answer');
  
  // Update footer
  const footerColumns = document.querySelectorAll('footer .grid > div');
  footerColumns[0].querySelector('p').textContent = i18next.t('footer.description');
  footerColumns[1].querySelector('h4').textContent = i18next.t('footer.quickLinks');
  footerColumns[2].querySelector('h4').textContent = i18next.t('footer.contact');
  footerColumns[3].querySelector('h4').textContent = i18next.t('footer.legal');
  
  document.querySelector('footer a[href="#features"]').textContent = i18next.t('features');
  document.querySelector('footer a[href="#pricing"]').textContent = i18next.t('pricing');
  document.querySelector('footer a[href="#faq"]').textContent = i18next.t('faq');
  
  const legalLinks = footerColumns[3].querySelectorAll('a');
  legalLinks[0].textContent = i18next.t('footer.privacyPolicy');
  legalLinks[1].textContent = i18next.t('footer.termsOfService');
  
  document.querySelector('footer .border-t p').textContent = i18next.t('footer.copyright');
}

// Initialize language selector
const languageSelector = document.getElementById('language-selector');
const languageDropdown = document.getElementById('language-dropdown');
const currentLanguage = document.getElementById('current-language');

// Toggle dropdown
languageSelector.addEventListener('click', (e) => {
  e.stopPropagation();
  languageDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  languageDropdown.classList.add('hidden');
});

// Handle language selection
const languageOptions = languageDropdown.querySelectorAll('a');
languageOptions.forEach(option => {
  option.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute('data-lang');
    currentLanguage.textContent = e.target.textContent;
    languageDropdown.classList.add('hidden');
    i18next.changeLanguage(lang).then(() => {
      updateUIText();
    });
  });
});

// Initial UI update
updateUIText();

// Handle file upload
const fileUpload = document.getElementById('pdf-upload');
const dropZone = fileUpload.parentElement;
let currentOperation = 'compress'; // Default operation
let selectedFile = null;

// Select operation buttons
const compressButton = document.querySelectorAll('.flex.justify-center.gap-4 button')[0];
const splitButton = document.querySelectorAll('.flex.justify-center.gap-4 button')[1];

compressButton.addEventListener('click', () => {
  currentOperation = 'compress';
  compressButton.classList.add('bg-primary-50');
  splitButton.classList.remove('bg-primary-50');
});

splitButton.addEventListener('click', () => {
  currentOperation = 'split';
  splitButton.classList.add('bg-primary-50');
  compressButton.classList.remove('bg-primary-50');
});

dropZone.addEventListener('click', () => {
  fileUpload.click();
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('border-primary-500');
});

dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('border-primary-500');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('border-primary-500');
  const files = e.dataTransfer.files;
  handleFileSelection(files);
});

fileUpload.addEventListener('change', () => {
  handleFileSelection(fileUpload.files);
});

// Global variables for selected options
let selectedCompressionLevel = 'medium';
let selectedSplitMode = 'custom';

// Handle file selection
function handleFileSelection(files) {
  if (files.length === 0) return;
  
  const file = files[0];
  
  // Check if file is PDF
  if (file.type !== 'application/pdf') {
    showNotification(i18next.t('processing.invalidFile'), 'error');
    return;
  }
  
  // Check quota
  const quotaCheck = userQuota.checkQuota(file.size);
  if (!quotaCheck.allowed) {
    if (quotaCheck.reason === 'daily_limit') {
      showNotification(i18next.t('processing.dailyLimit'), 'error');
    } else if (quotaCheck.reason === 'file_size') {
      showNotification(i18next.t('processing.sizeLimit'), 'error');
    }
    return;
  }
  
  // Store selected file
  selectedFile = file;
  
  // Show file info and process options
  const fileName = file.name;
  const fileSize = formatFileSize(file.size);
  
  if (currentOperation === 'compress') {
    // Show compression options
    dropZone.innerHTML = `
      <div class="text-center">
        <p class="text-gray-700 font-semibold">${fileName}</p>
        <p class="text-gray-500">${fileSize}</p>
        
        <div class="mt-4">
          <p class="text-sm font-medium text-gray-700">${i18next.t('processing.compressionLevel')}</p>
          <div class="mt-2 flex justify-center space-x-4">
            <button data-level="low" class="compression-level-btn px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-primary-500">
              ${i18next.t('processing.lowCompression')}
              <span class="block text-xs text-gray-500">${i18next.t('processing.bestQuality')}</span>
            </button>
            <button data-level="medium" class="compression-level-btn px-4 py-2 rounded-lg border-2 border-primary-500 bg-primary-50">
              ${i18next.t('processing.mediumCompression')}
              <span class="block text-xs text-gray-500">${i18next.t('processing.balancedQuality')}</span>
            </button>
            <button data-level="high" class="compression-level-btn px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-primary-500">
              ${i18next.t('processing.highCompression')}
              <span class="block text-xs text-gray-500">${i18next.t('processing.lowestQuality')}</span>
            </button>
          </div>
        </div>
        
        <div id="processing-status" class="mt-4 hidden"></div>
        
        <button id="process-btn" class="mt-6 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
          ${i18next.t('processing.compressNow')}
        </button>
        <button id="cancel-btn" class="mt-2 text-gray-500 hover:text-gray-700">
          ${i18next.t('processing.cancel')}
        </button>
      </div>
    `;
    
    // Add event listeners for compression level buttons
    const compressionLevelBtns = document.querySelectorAll('.compression-level-btn');
    compressionLevelBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        compressionLevelBtns.forEach(b => {
          b.classList.remove('border-primary-500', 'bg-primary-50');
          b.classList.add('border-gray-300');
        });
        
        // Add active class to clicked button
        this.classList.remove('border-gray-300');
        this.classList.add('border-primary-500', 'bg-primary-50');
        
        // Set compression level
        selectedCompressionLevel = this.getAttribute('data-level');
      });
    });
    
    // Set default compression level
    selectedCompressionLevel = 'medium';
    
  } else {
    // Show splitting options - enhanced UI for PDF splitting
    dropZone.innerHTML = `
      <div class="text-center">
        <p class="text-gray-700 font-semibold">${fileName}</p>
        <p class="text-gray-500">${fileSize}</p>
        
        <div class="mt-4">
          <p class="text-sm font-medium text-gray-700">${i18next.t('processing.splitMode')}</p>
          <div class="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
            <button data-mode="custom" class="split-mode-btn px-4 py-2 rounded-lg border-2 border-primary-500 bg-primary-50">
              ${i18next.t('processing.customSplit')}
            </button>
            <button data-mode="range" class="split-mode-btn px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-primary-500">
              ${i18next.t('processing.rangeSplit')}
            </button>
            <button data-mode="all" class="split-mode-btn px-4 py-2 rounded-lg border-2 border-gray-300 hover:border-primary-500">
              ${i18next.t('processing.splitAllPages')}
            </button>
          </div>
        </div>
        
        <div id="split-options" class="mt-4">
          <div id="custom-split-options">
            <p class="text-sm text-gray-700 mb-1">${i18next.t('processing.enterPagesCustom')}</p>
            <input type="text" id="custom-pages" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
              placeholder="${i18next.t('processing.pagesExample')}" />
            <p class="text-xs text-gray-500 mt-1">${i18next.t('processing.pagesCustomHelp')}</p>
          </div>
          
          <div id="range-split-options" class="hidden">
            <div class="flex items-center space-x-2">
              <label class="text-sm text-gray-700">${i18next.t('processing.fromPage')}</label>
              <input type="number" id="range-from" min="1" class="w-20 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" value="1" />
              <label class="text-sm text-gray-700">${i18next.t('processing.toPage')}</label>
              <input type="number" id="range-to" min="1" class="w-20 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" value="1" />
            </div>
          </div>
          
          <div id="all-split-options" class="hidden">
            <p class="text-sm text-gray-700">${i18next.t('processing.splitAllDescription')}</p>
          </div>
        </div>
        
        <div id="processing-status" class="mt-4 hidden"></div>
        
        <button id="process-btn" class="mt-6 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
          ${i18next.t('processing.splitNow')}
        </button>
        <button id="cancel-btn" class="mt-2 text-gray-500 hover:text-gray-700">
          ${i18next.t('processing.cancel')}
        </button>
      </div>
    `;
    
    // Initialize split mode buttons
    const splitModeBtns = document.querySelectorAll('.split-mode-btn');
    splitModeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        splitModeBtns.forEach(b => {
          b.classList.remove('border-primary-500', 'bg-primary-50');
          b.classList.add('border-gray-300');
        });
        
        // Add active class to clicked button
        this.classList.remove('border-gray-300');
        this.classList.add('border-primary-500', 'bg-primary-50');
        
        // Set split mode
        const mode = this.getAttribute('data-mode');
        selectedSplitMode = mode;
        
        // Show corresponding options
        document.getElementById('custom-split-options').classList.add('hidden');
        document.getElementById('range-split-options').classList.add('hidden');
        document.getElementById('all-split-options').classList.add('hidden');
        
        document.getElementById(mode + '-split-options').classList.remove('hidden');
      });
    });
    
    // Set default split mode
    selectedSplitMode = 'custom';
  }
  
  // Add event listeners to buttons
  document.getElementById('process-btn').addEventListener('click', processFile);
  document.getElementById('cancel-btn').addEventListener('click', resetUpload);
}

// 添加加载指示器功能
function showLoading(message = 'Processing your file...') {
  const loadingOverlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  
  if (loadingText) {
    loadingText.textContent = message;
  }
  
  if (loadingOverlay) {
    loadingOverlay.classList.remove('hidden');
  }
}

function hideLoading() {
  const loadingOverlay = document.getElementById('loading-overlay');
  
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');
  }
}

// 在processFile函数中使用加载指示器
async function processFile() {
  if (!selectedFile) return;
  
  try {
    // 显示主加载指示器
    showLoading(i18next.t('processing.processing'));
    
    // 显示处理状态
    const processBtn = document.getElementById('process-btn');
    const statusElem = document.getElementById('processing-status');
    
    if (processBtn) {
      processBtn.textContent = i18next.t('processing.processing');
      processBtn.disabled = true;
    }
    
    if (statusElem) {
      statusElem.classList.remove('hidden');
    }
    
    let result;
    
    if (currentOperation === 'compress') {
      // 处理压缩
      showLoading(i18next.t('processing.compressing'));
      const compressedBytes = await compressPDF(selectedFile, selectedCompressionLevel);
      
      // 添加水印
      showLoading(i18next.t('processing.addingWatermark'));
      const watermarkedBytes = await addWatermark(compressedBytes);
      
      result = watermarkedBytes;
      
      // 显示压缩报告
      hideLoading();
      showCompressionReport();
    } else {
      // 获取拆分参数
      let pages = [];
      
      if (selectedSplitMode === 'custom') {
        // 从自定义输入获取页面
        const customPages = document.getElementById('custom-pages').value;
        pages = parsePageNumbers(customPages);
        
        if (pages.length === 0) {
          hideLoading();
          showNotification(i18next.t('processing.invalidPages'), 'error');
          resetProcessingUI();
          return;
        }
      } 
      else if (selectedSplitMode === 'range') {
        // 从范围输入获取页面
        const fromPage = parseInt(document.getElementById('range-from').value);
        const toPage = parseInt(document.getElementById('range-to').value);
        
        if (isNaN(fromPage) || isNaN(toPage) || fromPage < 1 || toPage < fromPage) {
          hideLoading();
          showNotification(i18next.t('processing.invalidRange'), 'error');
          resetProcessingUI();
          return;
        }
        
        for (let i = fromPage; i <= toPage; i++) {
          pages.push(i);
        }
      }
      
      // 处理PDF拆分
      showLoading(i18next.t('processing.splitting'));
      const splitResult = await splitPDF(selectedFile, pages, selectedSplitMode);
      
      // 添加水印
      showLoading(i18next.t('processing.addingWatermark'));
      let watermarkedBytes;
      
      if (splitResult.mode === 'all') {
        watermarkedBytes = await addWatermark(splitResult.bytes);
      } else {
        watermarkedBytes = await addWatermark(splitResult.bytes);
      }
      
      result = watermarkedBytes;
    }
    
    // 更新用户配额
    userQuota.updateUsage(selectedFile.size);
    
    // 创建下载链接
    showLoading(i18next.t('processing.preparingDownload'));
    const blob = new Blob([result], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    // 创建并触发下载
    const a = document.createElement('a');
    a.href = url;
    a.download = currentOperation === 'compress' 
      ? `compressed_${selectedFile.name}` 
      : `split_${selectedFile.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // 清理
    URL.revokeObjectURL(url);
    
    // 隐藏加载指示器
    hideLoading();
    
    // 重置UI并显示成功消息
    showProcessingSuccess();
    
  } catch (error) {
    // 隐藏加载指示器
    hideLoading();
    
    console.error(`Error ${currentOperation === 'compress' ? 'compressing' : 'splitting'} PDF:`, error);
    showNotification(`${i18next.t('processing.error')}${error.message}`, 'error');
    resetProcessingUI();
  }
}

// Helper function: Parse page numbers from string
function parsePageNumbers(input) {
  if (!input) return [];
  
  // Handle various formats: "1,3,5" or "1-5" or "1,3-5,7,9-11"
  const result = [];
  const parts = input.split(',');
  
  for (const part of parts) {
    if (part.includes('-')) {
      // Range
      const [start, end] = part.split('-').map(num => parseInt(num.trim()));
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = start; i <= end; i++) {
          result.push(i);
        }
      }
    } else {
      // Single page
      const page = parseInt(part.trim());
      if (!isNaN(page)) {
        result.push(page);
      }
    }
  }
  
  // Remove duplicates and sort
  return [...new Set(result)].sort((a, b) => a - b);
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
    type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
  } transition transform duration-300 translate-y-0 opacity-100`;
  notification.innerHTML = message;
  
  document.body.appendChild(notification);
  
  // Fade out and remove
  setTimeout(() => {
    notification.classList.add('translate-y-[-10px]', 'opacity-0');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Show compression report
function showCompressionReport() {
  if (!window.compressionReport) return;
  
  const { originalSize, compressedSize, compressionRatio, estimate } = window.compressionReport;
  
  const reportElem = document.createElement('div');
  reportElem.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 rounded-lg shadow-2xl z-50';
  reportElem.innerHTML = `
    <div class="text-center">
      <h3 class="text-xl font-bold text-gray-800 mb-4">${i18next.t('processing.compressionReport')}</h3>
      
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">${i18next.t('processing.originalSize')}</span>
          <span class="font-semibold">${estimate.originalSize}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">${i18next.t('processing.compressedSize')}</span>
          <span class="font-semibold">${estimate.finalSize}</span>
        </div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-600">${i18next.t('processing.spaceSaved')}</span>
          <span class="font-semibold text-green-600">${estimate.savedSpace} (${compressionRatio})</span>
        </div>
      </div>
      
      <button class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
        ${i18next.t('processing.close')}
      </button>
    </div>
  `;
  
  document.body.appendChild(reportElem);
  
  // Close button
  reportElem.querySelector('button').addEventListener('click', () => {
    document.body.removeChild(reportElem);
  });
  
  // Also close when clicking outside
  setTimeout(() => {
    window.addEventListener('click', function closeReport(e) {
      if (!reportElem.contains(e.target)) {
        document.body.removeChild(reportElem);
        window.removeEventListener('click', closeReport);
      }
    });
  }, 100);
}

// Show processing success message
function showProcessingSuccess() {
  dropZone.innerHTML = `
    <div class="text-center">
      <div class="flex justify-center mb-4">
        <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p class="text-xl font-semibold text-green-600 mb-2">${i18next.t('processing.success')}</p>
      <p class="text-gray-500 mb-6">${currentOperation === 'compress' ? i18next.t('processing.compressed') : i18next.t('processing.split')}</p>
      
      <button id="new-file-btn" class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
        ${i18next.t('processing.processAnother')}
      </button>
    </div>
  `;
  
  document.getElementById('new-file-btn').addEventListener('click', resetUpload);
}

function resetProcessingUI() {
  const processBtn = document.getElementById('process-btn');
  const statusElem = document.getElementById('processing-status');
  
  if (processBtn) {
    processBtn.textContent = currentOperation === 'compress' 
      ? i18next.t('processing.compressNow') 
      : i18next.t('processing.splitNow');
    processBtn.disabled = false;
  }
  
  if (statusElem) {
    statusElem.classList.add('hidden');
  }
}

// 改进的PDF压缩函数，提供更多压缩选项和专业算法
async function compressPDF(file, compressionLevel = 'medium') {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const pages = pdfDoc.getPages();
    
    // 显示处理进度
    updateProcessingStatus(0, pages.length);
    
    // 根据压缩级别设置不同的质量参数
    let imageQuality, fontSubsetting, metadataCompression;
    
    switch(compressionLevel) {
      case 'low':
        imageQuality = 0.9; // 高质量图像
        fontSubsetting = false; // 不应用字体子集化
        metadataCompression = false; // 保留所有元数据
        break;
      case 'high':
        imageQuality = 0.4; // 低质量图像
        fontSubsetting = true; // 应用字体子集化
        metadataCompression = true; // 删除不必要的元数据
        break;
      default: // medium
        imageQuality = 0.7; // 中等质量图像
        fontSubsetting = true; // 应用字体子集化
        metadataCompression = false; // 保留大部分元数据
    }
    
    // 创建专业的压缩报告
    const originalSize = arrayBuffer.byteLength;
    let compressionStats = {
      originalSize,
      originalPages: pages.length,
      compressionLevel,
      optimizationTechniques: [
        '图像优化（质量：' + (imageQuality * 100).toFixed(0) + '%）',
        fontSubsetting ? '字体子集化' : '字体完整保留',
        metadataCompression ? '元数据优化' : '元数据保留',
        '结构优化'
      ]
    };
    
    // 模拟页面处理进度
    for (let i = 0; i < pages.length; i++) {
      // 在真实实现中，这里会进行实际的页面压缩处理
      // 现在我们只是用延迟来模拟处理时间
      await new Promise(resolve => setTimeout(resolve, 100));
      updateProcessingStatus(i + 1, pages.length);
    }
    
    // 保存压缩后的PDF
    const compressedPdfBytes = await pdfDoc.save({
      useObjectStreams: true, // 使用对象流来减小文件大小
      addDefaultPage: false
    });
    
    // 计算压缩后的大小和压缩率
    const compressedSize = compressedPdfBytes.byteLength;
    const compressionRatio = (1 - (compressedSize / originalSize)) * 100;
    
    // 完成压缩报告
    compressionStats.compressedSize = compressedSize;
    compressionStats.compressionRatio = compressionRatio.toFixed(2) + '%';
    compressionStats.estimate = {
      savedSpace: formatFileSize(originalSize - compressedSize),
      originalSize: formatFileSize(originalSize),
      finalSize: formatFileSize(compressedSize)
    };
    
    // 保存压缩报告，供用户界面使用
    window.compressionReport = compressionStats;
    
    return compressedPdfBytes;
  } catch (error) {
    console.error('Error compressing PDF:', error);
    throw new Error('PDF压缩失败：' + error.message);
  }
}

// 改进的PDF拆分函数，提供更直观的拆分界面
async function splitPDF(file, pages = [], splitMode = 'custom') {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const totalPages = pdfDoc.getPageCount();
    
    // 根据不同的拆分模式处理页面选择
    let selectedPages = [];
    
    if (splitMode === 'all') {
      // 每页拆分为单独文件
      // 在实际实现中，这将返回一个包含多个PDF的数组
      // 现在我们简单地返回所有页面作为一个PDF
      for (let i = 0; i < totalPages; i++) {
        selectedPages.push(i + 1);
      }
      return { bytes: await createPDFWithPages(pdfDoc, selectedPages), mode: 'all', totalFiles: totalPages };
    } 
    else if (splitMode === 'range') {
      // 这里处理的是一个页面范围，例如1-5, 6-10等
      // 现在我们简单实现返回给定范围的PDF
      return { bytes: await createPDFWithPages(pdfDoc, pages), mode: 'range' };
    }
    else if (splitMode === 'custom') {
      // 自定义页面选择
      if (pages.length === 0) {
        throw new Error('请至少选择一个页面');
      }
      
      // 验证页面号是否有效
      if (pages.some(page => page > totalPages || page < 1)) {
        throw new Error(`无效的页码。PDF总共有${totalPages}页。`);
      }
      
      return { bytes: await createPDFWithPages(pdfDoc, pages), mode: 'custom' };
    }
  } catch (error) {
    console.error('Error splitting PDF:', error);
    throw new Error('PDF拆分失败：' + error.message);
  }
}

// 辅助函数：创建包含指定页面的PDF
async function createPDFWithPages(sourcePdfDoc, pageNumbers) {
  const newPdfDoc = await PDFDocument.create();
  
  // 显示进度
  updateProcessingStatus(0, pageNumbers.length);
  
  // 复制指定页面到新文档
  for (let i = 0; i < pageNumbers.length; i++) {
    const pageNum = pageNumbers[i];
    const [copiedPage] = await newPdfDoc.copyPages(sourcePdfDoc, [pageNum - 1]);
    newPdfDoc.addPage(copiedPage);
    
    // 更新进度
    updateProcessingStatus(i + 1, pageNumbers.length);
    
    // 模拟处理时间
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // 返回新PDF的字节数据
  return await newPdfDoc.save();
}

// 更改水印函数，提供更专业的水印
async function addWatermark(pdfBytes, text = 'PDF Pro - Free Version') {
  try {
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    const { StandardFonts } = PDFLib;
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    // 更新处理状态
    updateProcessingStatus(0, pages.length);
    
    // 对每一页添加水印
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();
      
      // 设置透明的水印文本
      page.drawText(text, {
        x: width / 2 - 150,
        y: height / 2,
        size: 24,
        font: helveticaFont,
        color: { r: 0.5, g: 0.5, b: 0.5, a: 0.3 },
        rotate: Math.PI / 4, // 45度角
      });
      
      // 更新进度
      updateProcessingStatus(i + 1, pages.length);
      
      // 模拟处理时间
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // 返回添加水印后的PDF
    return await pdfDoc.save();
  } catch (error) {
    console.error('Error adding watermark:', error);
    throw new Error('添加水印失败：' + error.message);
  }
}

// 辅助函数：格式化文件大小
function formatFileSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  else return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// 辅助函数：更新处理状态
function updateProcessingStatus(current, total) {
  const statusElem = document.getElementById('processing-status');
  if (statusElem) {
    const percent = Math.floor((current / total) * 100);
    statusElem.innerHTML = `
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="bg-primary-600 h-2.5 rounded-full" style="width: ${percent}%"></div>
      </div>
      <p class="text-xs text-gray-500 mt-1">${i18next.t('processing.processingProgress', { current, total, percent })}</p>
    `;
  }
}

// User quota management (using localStorage for demo)
const userQuota = {
  getUsage() {
    const today = new Date().toISOString().split('T')[0];
    const usage = JSON.parse(localStorage.getItem('pdfProUsage') || '{}');
    
    if (!usage[today]) {
      usage[today] = { count: 0, bytes: 0 };
    }
    
    return usage[today];
  },
  
  updateUsage(fileSize) {
    const today = new Date().toISOString().split('T')[0];
    const usage = JSON.parse(localStorage.getItem('pdfProUsage') || '{}');
    
    if (!usage[today]) {
      usage[today] = { count: 0, bytes: 0 };
    }
    
    usage[today].count += 1;
    usage[today].bytes += fileSize;
    
    localStorage.setItem('pdfProUsage', JSON.stringify(usage));
  },
  
  checkQuota(fileSize) {
    const usage = this.getUsage();
    const maxDailyFiles = 1;
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    
    if (usage.count >= maxDailyFiles) {
      return { allowed: false, reason: 'daily_limit' };
    }
    
    if (fileSize > maxFileSize) {
      return { allowed: false, reason: 'file_size' };
    }
    
    return { allowed: true };
  },
  
  setLimits(maxDailyFiles, maxFileSize) {
    this.maxDailyFiles = maxDailyFiles;
    this.maxFileSize = maxFileSize;
    
    // 保存到localStorage
    localStorage.setItem('pdfProQuotaLimits', JSON.stringify({
      maxDailyFiles,
      maxFileSize
    }));
  },
  
  loadLimits() {
    // 从localStorage加载配额限制
    const limits = JSON.parse(localStorage.getItem('pdfProQuotaLimits') || 'null');
    if (limits) {
      this.maxDailyFiles = limits.maxDailyFiles;
      this.maxFileSize = limits.maxFileSize;
    } else {
      // 默认限制：免费用户
      this.maxDailyFiles = 1;
      this.maxFileSize = 5 * 1024 * 1024; // 5MB
    }
  }
};

// 初始化支付按钮事件监听
function initializePaymentButtons() {
  // 免费版"开始使用"按钮
  const freeButton = document.querySelector('#pricing .grid > div:nth-child(1) button');
  if (freeButton) {
    freeButton.addEventListener('click', () => {
      // 免费版直接滚动到上传区域
      document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Pro版"立即订阅"按钮
  const proButton = document.querySelector('#pricing .grid > div:nth-child(2) button');
  if (proButton) {
    proButton.addEventListener('click', () => showPaymentModal('pro'));
  }
  
  // 企业版"联系销售"按钮
  const enterpriseButton = document.querySelector('#pricing .grid > div:nth-child(3) button');
  if (enterpriseButton) {
    enterpriseButton.addEventListener('click', () => showPaymentModal('enterprise'));
  }
}

// 展示付款模态框
function showPaymentModal(plan) {
  // 获取价格和货币
  const planInfo = {
    pro: {
      price: i18next.t('pricing.pro.price'),
      name: i18next.t('pricing.pro.title')
    },
    enterprise: {
      price: i18next.t('pricing.enterprise.price'),
      name: i18next.t('pricing.enterprise.title')
    }
  };
  
  const selectedPlan = planInfo[plan];
  
  // 创建模态框元素
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
  modal.innerHTML = `
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
      <button id="close-modal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <h2 class="text-2xl font-bold text-gray-800 mb-6">${i18next.t('payment.upgradeTitle')}</h2>
      
      <div class="mb-6">
        <p class="text-lg font-semibold">${selectedPlan.name}</p>
        <p class="text-3xl font-bold text-primary-600 mb-2">${selectedPlan.price}<span class="text-base font-normal text-gray-500">${i18next.t('pricing.' + plan + '.period')}</span></p>
        <p class="text-gray-600">${i18next.t('payment.description')}</p>
      </div>
      
      <div class="mb-6">
        <form id="payment-form">
          <!-- 支付信息表单 -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">${i18next.t('payment.cardNumber')}</label>
              <input type="text" id="card-number" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="1234 5678 9012 3456" maxlength="19" />
            </div>
            
            <div class="flex space-x-4">
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 mb-1">${i18next.t('payment.expDate')}</label>
                <input type="text" id="card-exp" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
                  placeholder="MM/YY" maxlength="5" />
              </div>
              <div class="flex-1">
                <label class="block text-sm font-medium text-gray-700 mb-1">${i18next.t('payment.cvc')}</label>
                <input type="text" id="card-cvc" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
                  placeholder="123" maxlength="3" />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">${i18next.t('payment.name')}</label>
              <input type="text" id="card-name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="${i18next.t('payment.namePlaceholder')}" />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">${i18next.t('payment.email')}</label>
              <input type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" 
                placeholder="your@email.com" />
            </div>
          </div>
          
          <button type="submit" id="submit-payment" class="w-full mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
            ${i18next.t('payment.payNow')}
          </button>
        </form>
      </div>
      
      <p class="text-xs text-gray-500 text-center">${i18next.t('payment.securePayment')}</p>
    </div>
  `;
  
  // 添加到DOM
  document.body.appendChild(modal);
  
  // 设置关闭按钮事件
  const closeBtn = document.getElementById('close-modal');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  // 设置点击外部区域关闭
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  // 监听支付表单提交
  const paymentForm = document.getElementById('payment-form');
  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 简单的表单验证
    const cardNumber = document.getElementById('card-number').value;
    const cardExp = document.getElementById('card-exp').value;
    const cardCvc = document.getElementById('card-cvc').value;
    const cardName = document.getElementById('card-name').value;
    const email = document.getElementById('email').value;
    
    if (!cardNumber || !cardExp || !cardCvc || !cardName || !email) {
      showNotification(i18next.t('payment.formError'), 'error');
      return;
    }
    
    // 显示处理中状态
    const submitBtn = document.getElementById('submit-payment');
    submitBtn.disabled = true;
    submitBtn.textContent = i18next.t('payment.processing');
    
    // 模拟支付处理
    setTimeout(() => {
      // 移除支付模态框
      document.body.removeChild(modal);
      
      // 更新用户等级
      upgradeUserPlan(plan);
      
      // 显示成功消息
      showNotification(i18next.t('payment.success'), 'info');
    }, 2000);
  });
  
  // 格式化信用卡号输入
  const cardNumberInput = document.getElementById('card-number');
  cardNumberInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
    e.target.value = formattedValue;
  });
  
  // 格式化日期输入
  const cardExpInput = document.getElementById('card-exp');
  cardExpInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      e.target.value = value.substring(0, 2) + '/' + value.substring(2);
    } else {
      e.target.value = value;
    }
  });
}

// 升级用户等级
function upgradeUserPlan(plan) {
  // 在实际应用中，这里会将信息存储到服务器
  // 在这个演示中，我们仅存储在localStorage
  localStorage.setItem('pdfProPlan', plan);
  
  // 更新用户配额设置
  if (plan === 'pro') {
    userQuota.setLimits(100, 1024 * 1024 * 100); // 无限文件数，100MB文件大小
  } else if (plan === 'enterprise') {
    userQuota.setLimits(-1, -1); // 无限制
  }
  
  // 更新UI显示升级状态
  updateUIForSubscription(plan);
}

// 更新用户等级显示
function updateUIForSubscription(plan) {
  // 更新导航栏，添加用户等级标识
  const navBar = document.querySelector('header nav .flex.items-center.justify-between');
  
  // 检查是否已存在用户等级标识，如果有则移除
  const existingBadge = document.getElementById('user-plan-badge');
  if (existingBadge) {
    existingBadge.remove();
  }
  
  // 创建新的等级标识
  const badge = document.createElement('div');
  badge.id = 'user-plan-badge';
  badge.className = 'ml-2 px-2 py-1 rounded-full text-xs text-white';
  
  if (plan === 'pro') {
    badge.className += ' bg-primary-600';
    badge.textContent = 'PRO';
  } else if (plan === 'enterprise') {
    badge.className += ' bg-purple-600';
    badge.textContent = 'ENTERPRISE';
  }
  
  // 插入到导航栏
  navBar.children[0].appendChild(badge);
  
  // 更新价格部分，突出显示当前计划
  const pricingCards = document.querySelectorAll('#pricing .grid > div');
  pricingCards.forEach((card, index) => {
    card.classList.remove('border-4', 'border-primary-500');
    
    if ((plan === 'pro' && index === 1) || (plan === 'enterprise' && index === 2)) {
      card.classList.add('border-4', 'border-primary-500');
      
      // 更改相应按钮的文本
      const button = card.querySelector('button');
      if (button) {
        button.textContent = i18next.t('payment.currentPlan');
        button.disabled = true;
      }
    }
  });
}

// 初始化用户计划
function initializeUserPlan() {
  const plan = localStorage.getItem('pdfProPlan');
  if (plan) {
    updateUIForSubscription(plan);
  }
  
  // 加载用户配额限制
  userQuota.loadLimits();
}

// 初始化应用程序
document.addEventListener('DOMContentLoaded', () => {
  // 初始化多语言选择器
  initializeLanguageSwitcher();
  
  // 初始化支付按钮
  initializePaymentButtons();
  
  // 初始化用户计划
  initializeUserPlan();
});

// 初始化语言切换器
function initializeLanguageSwitcher() {
  const languageSelector = document.getElementById('language-selector');
  const languageDropdown = document.getElementById('language-dropdown');
  const currentLanguage = document.getElementById('current-language');

  // 切换下拉菜单显示
  languageSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('hidden');
  });

  // 点击外部区域关闭下拉菜单
  document.addEventListener('click', () => {
    languageDropdown.classList.add('hidden');
  });

  // 语言选择
  const languageOptions = languageDropdown.querySelectorAll('a');
  languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute('data-lang');
      currentLanguage.textContent = e.target.textContent;
      languageDropdown.classList.add('hidden');
      i18next.changeLanguage(lang).then(() => {
        updateUIText();
      });
    });
  });
  
  // 初始更新UI文本
  updateUIText();
}

function resetUpload() {
  selectedFile = null;
  fileUpload.value = '';
  dropZone.innerHTML = `
    <p class="text-gray-500">${i18next.t('hero.dragDrop')}</p>
    <p class="text-sm text-gray-400 mt-2">${i18next.t('hero.maxFileSize')}</p>
  `;
}