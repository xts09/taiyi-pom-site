import Image from "next/image";

export function Footer() {
  return (
    <footer className="site-footer border-t border-white/10 bg-slate-950 px-6 py-8 text-xs text-slate-400">
      <div className="site-footer-inner mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="site-footer-brand">
          <span className="site-footer-logo">
            <Image
              src="/platform-wordmark-white.png"
              alt="PLATFORM registered trademark"
              width={1400}
              height={217}
            />
          </span>
          <div>
            <p className="site-footer-company">
              Jiangsu Taiyi Nano Technology Co., Ltd.
            </p>
            <p className="site-footer-line">
              Modified POM & Engineering Plastic Compounds
            </p>
          </div>
        </div>

        <p className="site-footer-copy">
          &copy; 2026 Jiangsu Taiyi Nano Technology Co., Ltd.
        </p>
      </div>
    </footer>
  );
}
