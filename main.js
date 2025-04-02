// 直接使用全局变量，这些库已通过script标签加载
const PDFLib = window.PDFLib || {};
const JSZip = window.JSZip || {};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  console.log('页面已加载，初始化应用程序...');
  
  // 检查必要的库是否已加载
  if (!window.PDFLib) {
    console.error('错误: PDFLib库未加载。请检查<script>标签是否正确包含pdf-lib。');
  }
  
  if (!window.JSZip) {
    console.error('错误: JSZip库未加载。请检查<script>标签是否正确包含jszip。');
  }
  
  // 初始化上传区域
  initializeUploadArea();
  
  // 初始化操作按钮
  initializeOperationButtons();
  
  // 初始化社交分享功能
  initializeShareFeature();
  
  // 启动倒计时
  startCountdown();
  
  // 设置默认操作为压缩
  window.currentOperation = 'compress';
  setActiveOperation('compress');
  
  console.log('应用程序初始化完成');
});

// 初始化上传区域
function initializeUploadArea() {
  const uploadDropArea = document.getElementById('upload-drop-area');
  const fileInput = document.getElementById('pdf-upload');
  const selectButton = document.getElementById('pdf-select-button');
  
  console.log('初始化上传区域');
  console.log('上传区域元素:', uploadDropArea ? '已找到' : '未找到');
  console.log('文件输入元素:', fileInput ? '已找到' : '未找到');
  console.log('选择按钮元素:', selectButton ? '已找到' : '未找到');
  
  if (!uploadDropArea || !fileInput || !selectButton) {
    console.error('上传组件缺失，无法初始化上传功能');
    return;
  }
  
  // 拖放功能
  uploadDropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadDropArea.classList.add('border-primary-500');
    console.log('文件拖动到上传区域上方');
  });
  
  uploadDropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadDropArea.classList.remove('border-primary-500');
    console.log('文件离开上传区域');
  });
  
  uploadDropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadDropArea.classList.remove('border-primary-500');
    console.log('文件已拖放到上传区域');
    
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0];
      console.log('选择的文件:', file.name, file.type, file.size);
      handleFileUpload(file);
    }
  });
  
  // 点击上传区域触发文件选择
  uploadDropArea.addEventListener('click', (e) => {
    // 阻止冒泡确保不会重复触发事件
    if (e.target !== selectButton && !selectButton.contains(e.target)) {
      console.log('点击上传区域，触发文件选择');
      fileInput.click();
    }
  });
  
  // 选择文件按钮点击事件
  selectButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // 防止冒泡到上传区域
    console.log('选择文件按钮被点击');
    fileInput.click();
  });
  
  // 文件选择变化事件
  fileInput.addEventListener('change', (e) => {
    console.log('文件输入变化事件触发');
    if (fileInput.files.length) {
      const file = fileInput.files[0];
      console.log('选择的文件:', file.name, file.type, file.size);
      handleFileUpload(file);
    }
  });
  
  console.log('上传区域初始化完成');
}

// 初始化操作按钮
function initializeOperationButtons() {
  const compressBtn = document.getElementById('compress-btn');
  const splitBtn = document.getElementById('split-btn');
  
  console.log('初始化操作按钮');
  console.log('压缩按钮:', compressBtn ? '已找到' : '未找到');
  console.log('拆分按钮:', splitBtn ? '已找到' : '未找到');
  
  if (compressBtn) {
    compressBtn.addEventListener('click', () => {
      console.log('选择压缩操作');
      setActiveOperation('compress');
    });
  }
  
  if (splitBtn) {
    splitBtn.addEventListener('click', () => {
      console.log('选择拆分操作');
      setActiveOperation('split');
    });
  }
  
  // 初始化设置压缩操作为默认
  if (compressBtn && splitBtn) {
    setActiveOperation('compress');
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

// 使用FileReader读取文件并显示进度
function readFileWithProgress(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    // 进度事件处理
    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        showLoadingOverlay('正在加载PDF...', progress);
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

// 显示加载覆盖层
function showLoadingOverlay(message, progress = -1) {
  const overlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  const progressContainer = document.getElementById('progress-container');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  if (!overlay) {
    console.error('加载覆盖层元素未找到');
    return;
  }
  
  if (loadingText) {
    loadingText.textContent = message || '处理中...';
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
  console.log('显示加载覆盖层:', message, progress >= 0 ? progress + '%' : '');
}

// 隐藏加载覆盖层
function hideLoadingOverlay() {
  const overlay = document.getElementById('loading-overlay');
  const progressContainer = document.getElementById('progress-container');
  const progressText = document.getElementById('progress-text');
  
  if (!overlay) {
    console.error('加载覆盖层元素未找到');
    return;
  }
  
  overlay.classList.add('hidden');
  console.log('隐藏加载覆盖层');
  
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
    console.error('未选择文件');
    return;
  }
  
  console.log('文件选择:', file.name, file.type, file.size);
  
  // 检查文件类型是否为PDF
  if (file.type !== 'application/pdf') {
    alert('请选择PDF文件');
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
  showLoadingOverlay('正在加载PDF...', 0);
  
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
    alert('处理出错: ' + error.message);
  }
}

// 压缩PDF（实际实现）
async function compressPDF(arrayBuffer) {
  try {
    console.log('开始压缩PDF，文件大小:', arrayBuffer.byteLength, '字节');
    showLoadingOverlay('正在压缩PDF...', 10);
    
    // 检查PDF-Lib库是否正确加载
    if (!window.PDFLib || !window.PDFLib.PDFDocument) {
      throw new Error('PDF-Lib库未正确加载，无法处理PDF文件');
    }
    
    // 基本的PDF处理逻辑
    alert('PDF压缩功能正在开发中，即将完成。目前已成功上传文件。');
    
    // 隐藏加载遮罩层
    hideLoadingOverlay();
    
  } catch (error) {
    console.error('压缩PDF时出错:', error);
    hideLoadingOverlay();
    alert('压缩出错: ' + error.message);
  }
}

// 拆分PDF（实际实现）
async function splitPDF(arrayBuffer) {
  try {
    console.log('开始拆分PDF，文件大小:', arrayBuffer.byteLength, '字节');
    showLoadingOverlay('正在拆分PDF...', 10);
    
    // 检查PDF-Lib库是否正确加载
    if (!window.PDFLib || !window.PDFLib.PDFDocument) {
      throw new Error('PDF-Lib库未正确加载，无法处理PDF文件');
    }
    
    // 基本的PDF处理逻辑
    alert('PDF拆分功能正在开发中，即将完成。目前已成功上传文件。');
    
    // 隐藏加载遮罩层
    hideLoadingOverlay();
    
  } catch (error) {
    console.error('拆分PDF时出错:', error);
    hideLoadingOverlay();
    alert('拆分出错: ' + error.message);
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

// 启动倒计时
function startCountdown() {
  // 促销结束日期
  const endDate = new Date('2025-05-15T23:59:59');
  const countdownElement = document.getElementById('countdown-timer');
  
  if (!countdownElement) {
    console.error('倒计时元素未找到');
    return;
  }
  
  console.log('启动倒计时，目标日期:', endDate.toLocaleDateString());
  
  // 更新倒计时函数
  function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) {
      countdownElement.textContent = '促销已结束';
      return;
    }
    
    // 计算剩余时间
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // 更新显示
    countdownElement.textContent = `${days}天${hours.toString().padStart(2, '0')}时${minutes.toString().padStart(2, '0')}分${seconds.toString().padStart(2, '0')}秒`;
  }
  
  // 立即执行一次
  updateCountdown();
  
  // 每秒更新一次
  setInterval(updateCountdown, 1000);
  
  console.log('倒计时已启动');
}