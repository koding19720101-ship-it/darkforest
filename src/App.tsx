import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Play, 
  Copy, 
  Check, 
  ExternalLink, 
  FileCode, 
  ShieldCheck, 
  Gamepad2, 
  Info, 
  Maximize2, 
  Minimize2, 
  X, 
  HardDrive, 
  Keyboard, 
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [downloading, setDownloading] = useState(false);
  const [downloadCount, setDownloadCount] = useState(148);
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'controls' | 'guide'>('info');

  const fileUrl = '/dark_forest.html';
  const downloadFileName = 'dark_forest.html';
  const fileSize = '608 KB';

  // Handle direct file download
  const handleDownload = () => {
    setDownloading(true);
    setShowToast(true);
    setDownloadCount(prev => prev + 1);

    // Create an anchor tag and simulate click
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = downloadFileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setTimeout(() => {
      setDownloading(false);
    }, 1200);

    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  // Copy shareable download link
  const handleCopyLink = () => {
    const fullUrl = window.location.origin + fileUrl;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Close preview on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (previewOpen) {
          setPreviewOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewOpen]);

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Background Architectural Grid Lines */}
      <div className="fixed inset-0 bg-grid-lines pointer-events-none opacity-40" />
      <div className="fixed inset-0 bg-radial-fade pointer-events-none" />

      {/* Decorative White Geometric Corner Lines */}
      <div className="fixed top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white pointer-events-none z-10" />
      <div className="fixed top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white pointer-events-none z-10" />
      <div className="fixed bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white pointer-events-none z-10" />
      <div className="fixed bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white pointer-events-none z-10" />

      {/* Top Header - Strict 3-zone contract with clean white lines */}
      <header className="relative z-20 border-b border-white/20 bg-black/80 backdrop-blur-md px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Brand Zone */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white flex items-center justify-center font-mono text-sm font-bold tracking-tighter">
              DF
            </div>
            <span className="text-lg font-bold tracking-wider uppercase text-white whitespace-nowrap">
              Dark Forest
            </span>
          </div>

          {/* Quick Nav / Status */}
          <div className="hidden sm:flex items-center gap-6 text-xs font-mono text-white/70">
            <span>FILE: DARK_FOREST.HTML</span>
            <span className="text-white/30">|</span>
            <span>SIZE: 608 KB</span>
            <span className="text-white/30">|</span>
            <span>FORMAT: HTML5 / THREE.JS</span>
          </div>

          {/* Action Zone */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPreviewOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>웹에서 플레이</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-5xl mx-auto w-full">
        
        {/* Top Tagline / Context */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 border border-white/20 px-3 py-1 text-xs font-mono tracking-widest uppercase mb-4 text-white/80">
            <span className="w-1.5 h-1.5 bg-emerald-400 inline-block animate-pulse"></span>
            최신 업데이트 버전 · 3D Standalone HTML
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 text-balance">
            어둠의 숲 — 4일
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            별도의 설치나 서버 구동 없이, 브라우저에서 바로 실행 가능한 3D 생존 호러 웹 게임 파일입니다.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CENTERPIECE: HUGE DOWNLOAD BUTTON & CARD (중앙에 큰 다운로드) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-2xl my-2 relative group">
          {/* Outer glowing white line border with corner marks */}
          <div className="relative border-2 border-white bg-black p-8 sm:p-12 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]">
            
            {/* Corner Crosshair Accents */}
            <span className="absolute -top-2.5 -left-2.5 text-white font-mono text-sm select-none">+</span>
            <span className="absolute -top-2.5 -right-2.5 text-white font-mono text-sm select-none">+</span>
            <span className="absolute -bottom-2.5 -left-2.5 text-white font-mono text-sm select-none">+</span>
            <span className="absolute -bottom-2.5 -right-2.5 text-white font-mono text-sm select-none">+</span>

            <div className="flex flex-col items-center text-center">
              
              {/* File Icon with white wireframe */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 border border-white/60 flex items-center justify-center mb-6 relative group-hover:border-white transition-colors">
                <FileCode className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                <div className="absolute -bottom-2 bg-black px-2 border border-white/40 text-[10px] font-mono tracking-widest text-white/80">
                  HTML5
                </div>
              </div>

              {/* File Name & Specifications */}
              <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-2">
                {downloadFileName}
              </h2>
              <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-white/70 mb-8">
                <span>{fileSize}</span>
                <span>·</span>
                <span>단일 독립 파일</span>
                <span>·</span>
                <span>오프라인 구동 가능</span>
              </div>

              {/* PRIMARY HUGE DOWNLOAD BUTTON */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full sm:w-4/5 py-5 sm:py-6 px-8 bg-white text-black font-extrabold text-lg sm:text-xl tracking-wider uppercase flex items-center justify-center gap-4 border-2 border-white hover:bg-black hover:text-white transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.99] disabled:opacity-70 group/btn"
              >
                <Download className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover/btn:translate-y-1 ${downloading ? 'animate-bounce' : ''}`} />
                <span>
                  {downloading ? '다운로드 시작 중...' : '파일 다운로드'}
                </span>
              </button>

              {/* Secondary Actions Row */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full sm:w-4/5">
                <button
                  onClick={() => setPreviewOpen(true)}
                  className="flex-1 min-w-[150px] py-3 px-4 border border-white/40 hover:border-white text-white text-xs sm:text-sm font-mono tracking-wide flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 text-white" />
                  <span>웹에서 바로 실행</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="py-3 px-4 border border-white/40 hover:border-white text-white text-xs sm:text-sm font-mono tracking-wide flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
                  title="직접 다운로드 링크 복사"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>복사 완료</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white" />
                      <span>다운로드 링크 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Security & Integrity Note */}
              <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-between text-[11px] font-mono text-white/50 px-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white/70" />
                  악성코드 없음 · 100% 안전한 HTML 파일
                </span>
                <span className="hidden sm:inline">
                  누적 다운로드: {downloadCount.toLocaleString()}회
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INFORMATION & CONTROLS TABS (Clean White Outlines) */}
        {/* ========================================================================= */}
        <div className="w-full max-w-2xl mt-12">
          {/* Segmented Control Tabs */}
          <div className="grid grid-cols-3 border border-white/20 mb-4">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-2.5 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'info' 
                  ? 'bg-white text-black font-bold' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>파일 상세 정보</span>
            </button>
            <button
              onClick={() => setActiveTab('controls')}
              className={`py-2.5 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 border-x border-white/20 transition-colors cursor-pointer ${
                activeTab === 'controls' 
                  ? 'bg-white text-black font-bold' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Keyboard className="w-3.5 h-3.5" />
              <span>게임 조작법</span>
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`py-2.5 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'guide' 
                  ? 'bg-white text-black font-bold' 
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <HardDrive className="w-3.5 h-3.5" />
              <span>실행 방법</span>
            </button>
          </div>

          {/* Tab Content Box with White Outline */}
          <div className="border border-white/20 bg-black/60 p-6 text-sm font-light">
            
            {/* TAB 1: File Information */}
            {activeTab === 'info' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="border border-white/10 p-3">
                    <div className="text-white/40 mb-1">FILE NAME</div>
                    <div className="text-white font-medium">dark_forest.html</div>
                  </div>
                  <div className="border border-white/10 p-3">
                    <div className="text-white/40 mb-1">FILE SIZE</div>
                    <div className="text-white font-medium">617 KB (630,926 Bytes)</div>
                  </div>
                  <div className="border border-white/10 p-3">
                    <div className="text-white/40 mb-1">ENGINE / TECH</div>
                    <div className="text-white font-medium">Three.js, WebGL, Web Audio Synth</div>
                  </div>
                  <div className="border border-white/10 p-3">
                    <div className="text-white/40 mb-1">STATUS</div>
                    <div className="text-emerald-400 font-medium">최신 파일 반영 완료 (Updated)</div>
                  </div>
                </div>

                <div className="pt-2 text-white/70 text-xs leading-relaxed font-sans">
                  <p className="mb-2">
                    <strong className="text-white font-semibold">어둠의 숲 (Dark Forest)</strong>은 으스스한 안개와 거목들이 우거진 미지의 숲에서 4일 동안 손전등과 무전기, 아이템을 활용해 괴생명체의 위협으로부터 살아남는 1인칭 3D 생존 호러 게임입니다.
                  </p>
                  <p>
                    모든 3D 그래픽 렌더링 코드, 사운드 합성기, 몬스터 인공지능이 단 하나의 HTML 파일 안에 포함되어 있어 외부 인터넷 연결 없이도 완벽하게 구동됩니다.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: Controls Guide */}
            {activeTab === 'controls' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center justify-between border border-white/10 p-2.5">
                    <span className="text-white/60">이동 (Move)</span>
                    <span className="border border-white/30 px-2 py-0.5 text-white font-bold">W / A / S / D</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 p-2.5">
                    <span className="text-white/60">달리기 (Sprint)</span>
                    <span className="border border-white/30 px-2 py-0.5 text-white font-bold">Shift</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 p-2.5">
                    <span className="text-white/60">시점 회전 (Look)</span>
                    <span className="border border-white/30 px-2 py-0.5 text-white font-bold">마우스 이동</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 p-2.5">
                    <span className="text-white/60">손전등 토글 (Flashlight)</span>
                    <span className="border border-white/30 px-2 py-0.5 text-white font-bold">F 키 / 클릭</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 p-2.5">
                    <span className="text-white/60">소지품 아이템 사용</span>
                    <span className="border border-white/30 px-2 py-0.5 text-white font-bold">1 / 2 / 3 키</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 p-2.5">
                    <span className="text-white/60">무전 및 전화 응답</span>
                    <span className="border border-white/30 px-2 py-0.5 text-white font-bold">1 ~ 4 선택지</span>
                  </div>
                </div>
                <div className="text-[11px] text-white/50 pt-2 font-sans">
                  * 게임 화면을 클릭하면 마우스 포인터가 잠겨 360도 자유로운 1인칭 시점 조작이 활성화됩니다. 해제하려면 <kbd className="border border-white/30 px-1 font-mono">ESC</kbd>를 누르세요.
                </div>
              </div>
            )}

            {/* TAB 3: How to run */}
            {activeTab === 'guide' && (
              <div className="space-y-4 text-xs font-sans">
                <ol className="list-decimal list-inside space-y-2.5 text-white/80 leading-relaxed">
                  <li>
                    <strong className="text-white">파일 다운로드</strong>: 상단 중앙의 [파일 다운로드] 버튼을 눌러 <code className="font-mono text-white bg-white/10 px-1 py-0.5">dark_forest.html</code> 파일을 내려받습니다.
                  </li>
                  <li>
                    <strong className="text-white">더블 클릭 실행</strong>: 다운로드된 파일을 더블 클릭하여 기본 웹 브라우저(Chrome, Safari, Whale, Edge 등)로 실행합니다.
                  </li>
                  <li>
                    <strong className="text-white">사운드 허용</strong>: 브라우저 화면을 클릭하면 공포 앰비언스 사운드와 함께 게임이 시작됩니다. (이어폰 또는 헤드폰 권장)
                  </li>
                </ol>
                <div className="border-t border-white/10 pt-3 text-white/50 text-[11px] font-mono">
                  REQUIREMENT: WEBGL SUPPORTED BROWSER (NO INSTALLATION REQUIRED)
                </div>
              </div>
            )}

          </div>
        </div>

      </main>

      {/* Footer with subtle white line and copyright */}
      <footer className="relative z-10 border-t border-white/20 py-6 px-6 text-center text-xs font-mono text-white/50 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 border border-white inline-block"></span>
            <span>DARK FOREST WEB EDITION</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setPreviewOpen(true)}
              className="text-white/70 hover:text-white transition-colors cursor-pointer underline underline-offset-4"
            >
              웹 실행기 열기
            </button>
            <span>·</span>
            <button 
              onClick={handleDownload}
              className="text-white/70 hover:text-white transition-colors cursor-pointer underline underline-offset-4"
            >
              다운로드 (608 KB)
            </button>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* LIVE IN-BROWSER GAME PREVIEW / PLAYER MODAL */}
      {/* ========================================================================= */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-2 sm:p-6">
          {/* Modal Container with stark white border */}
          <div className={`relative w-full h-full bg-black border-2 border-white flex flex-col overflow-hidden ${isFullscreen ? 'p-0' : ''}`}>
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/30 bg-black text-xs font-mono">
              <div className="flex items-center gap-3">
                <Gamepad2 className="w-4 h-4 text-white" />
                <span className="font-bold tracking-wider uppercase text-white">
                  어둠의 숲 — 실시간 웹 플레이어
                </span>
                <span className="hidden md:inline text-white/50">| dark_forest.html</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="px-2.5 py-1 border border-white/30 hover:border-white text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="전체화면 전환"
                >
                  {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                  <span className="hidden sm:inline">{isFullscreen ? '기본화면' : '전체화면'}</span>
                </button>
                <button
                  onClick={() => setPreviewOpen(false)}
                  className="px-2.5 py-1 bg-white text-black font-bold flex items-center gap-1 hover:bg-white/90 transition-colors cursor-pointer"
                  title="닫기 (ESC)"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>닫기 [ESC]</span>
                </button>
              </div>
            </div>

            {/* iFrame Game Embed */}
            <div className="relative flex-1 w-full h-full bg-black">
              <iframe
                src={fileUrl}
                title="어둠의 숲 게임 플레이"
                className="w-full h-full border-0"
                allow="pointer-lock; fullscreen; autoplay; audio"
              />
            </div>

            {/* Modal Bottom Quick Info Bar */}
            <div className="px-4 py-2 border-t border-white/20 bg-black flex flex-wrap items-center justify-between text-[11px] font-mono text-white/60">
              <div className="flex items-center gap-3">
                <span>화면 클릭: 마우스 잠금 (1인칭 시점 활성화)</span>
                <span className="text-white/30">|</span>
                <span>ESC: 마우스 잠금 해제</span>
              </div>
              <div>
                <button 
                  onClick={handleDownload}
                  className="text-white hover:underline flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>이 버전 파일 다운로드하기</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TOAST NOTIFICATION ON DOWNLOAD */}
      {/* ========================================================================= */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-black border-2 border-white px-5 py-4 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
          <div className="font-mono text-xs">
            <div className="text-white font-bold">다운로드가 시작되었습니다.</div>
            <div className="text-white/60">dark_forest.html (608 KB)</div>
          </div>
          <button 
            onClick={() => setShowToast(false)}
            className="text-white/50 hover:text-white ml-2 p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
