import React, { useState } from "react";
import "@/wab/client/components/pages/LandingPage.sass";
import suiNovaLogo from "@/wab/client/assets/suinova-logo.svg";
import WalletSvgIcon from "@/wab/client/plasmic/plasmic_kit_icons/icons/PlasmicIcon__WalletSvg";
import ActivitySvgIcon from "@/wab/client/plasmic/plasmic_kit_icons/icons/PlasmicIcon__ActivitySvg";
import ImageUploadsIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__ImageUploads";
import CoinsSvgIcon from "@/wab/client/plasmic/plasmic_kit_icons/icons/PlasmicIcon__CoinsSvg";
import MoveSvgIcon from "@/wab/client/plasmic/plasmic_kit_icons/icons/PlasmicIcon__MoveSvg";

const LandingPage = () => {
  const [draggingWidget, setDraggingWidget] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const widgets = [
    { icon: WalletSvgIcon, label: "Connect Wallet Button" },
    { icon: WalletSvgIcon, label: "Wallet Address Button" },
    { icon: WalletSvgIcon, label: "Wallet List" },
    { icon: ImageUploadsIcon, label: "NFT Card" },
    { icon: ActivitySvgIcon, label: "Collection Card" },
    { icon: CoinsSvgIcon, label: "Category Card" },
  ];

  return (
    <div>
      <header>
        <div className="container">
          <div className="nav">
            <div className="logo">
              <img src={suiNovaLogo} width={50} style={{ padding: "8px 0px" }} />
            </div>
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
            </nav>
            <div className="nav-cta">
              <a href="/connect-wallet" className="btn btn-primary">
                Get Started
              </a>
            </div>
            <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ❌
        </button>

        {/* Mobile Nav Links */}
        <div className="drawer-links">
          <a href="#features" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)}>
            How It Works
          </a>
        </div>

        {/* CTA Button */}
        <div className="drawer-cta">
          <a
            href="/connect-wallet"
            className="btn-primary"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Design & Launch Your DApps - No Code, No Limits!
              </h1>
              <p className="hero-subtitle">
                Create, deploy, and manage decentralized applications in minutes
                with no code required.
              </p>
              <div className="hero-btns">
                <a href="/connect-wallet" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="illus-container">
                <div className="illus-head">
                  <span className="illus-head-brand">SuiNova</span>
                  <button className="illus-head-btn">Preview</button>
                </div>

                <div className="illus-grid-layout">
                  {/* Component Library */}
                  <div className="illus-component-library">
                    <h3 className="illus-section-title">Components</h3>
                    <div className="illus-component-list">
                      {widgets.map((widget) => (
                        <div
                          key={widget.label}
                          className="illus-widget-item"
                          draggable
                          onDragStart={() => setDraggingWidget(widget.label)}
                          onDragEnd={() => setDraggingWidget(null)}
                        >
                          <widget.icon className="illus-widget-icon" />
                          <span className="illus-widget-label">
                            {widget.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Canvas */}
                  <div className="illus-canvas">
                    <h3 className="illus-section-title">Canvas</h3>
                    <div
                      className={`illus-canvas-body ${
                        draggingWidget ? "illus-dragging" : ""
                      }`}
                    >
                      {draggingWidget && (
                        <div className="illus-canvas-overlay">
                          Drop {draggingWidget} here
                        </div>
                      )}

                      {/* Example placed components */}
                      <div className="illus-placed-component illus-top-left">
                        <WalletSvgIcon className="illus-component-icon" />
                        <span className="illus-component-label">
                          Wallet Connect
                        </span>
                        <MoveSvgIcon className="illus-move-icon" />
                      </div>

                      <div className="illus-placed-component illus-bottom-right">
                        <ImageUploadsIcon className="illus-component-icon" />
                        <span className="illus-component-label">
                          NFT Gallery
                        </span>
                        <MoveSvgIcon className="illus-move-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Drag indicator */}
                {draggingWidget && (
                  <div className="absolute inset-0 border-2 border-dashed border-[#0081f1]/30 rounded-lg" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose SuiNova?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Drag-and-Drop Editor</h3>
              <p className="feature-desc">
                Create complex dApps with our intuitive visual editor. Drag,
                drop, and connect components to build powerful blockchain
                applications without writing a single line of code.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">+100 Available Templates</h3>
              <p className="feature-desc">
                Choose from our extensive library of over 100 professionally
                designed templates to jumpstart your project. Customize them to
                fit your brand and needs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="feature-title">NFT Marketplace Templates</h3>
              <p className="feature-desc">
                Launch your own NFT marketplace with our specialized templates.
                Includes minting, listing, bidding, and transaction
                functionality, ready to customize and deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Building with SuiNova is simple. Follow these steps to create and
              launch your dApp.
            </p>
          </div>
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              {/* <div className="step-image">
                        <img src="/api/placeholder/250/150" alt="Connect Wallet"/>
                    </div> */}
              <h3 className="step-title">Connect Wallet</h3>
              <p className="step-desc">
                Connect your crypto wallet to start building your decentralized
                application.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              {/* <div className="step-image">
                        <img src="/api/placeholder/250/150" alt="Select Template"/>
                    </div> */}
              <h3 className="step-title">Create Project</h3>
              <p className="step-desc">
                Start with a blank canvas or choose from our library of
                templates to kickstart your project.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              {/* <div className="step-image">
                        <img src="/api/placeholder/250/150" alt="Customize Project"/>
                    </div> */}
              <h3 className="step-title">Customize Project</h3>
              <p className="step-desc">
                Personalize your dApp with our intuitive drag-and-drop editor to
                match your vision.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              {/* <div className="step-image">
                        <img src="/api/placeholder/250/150" alt="Publish Project"/>
                    </div> */}
              <h3 className="step-title">Publish Project</h3>
              <p className="step-desc">
                With one click, deploy your dApp to the blockchain and make it
                available to the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a
                href="https://www.facebook.com/varmeta.techcompany"
                className="social-link"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/var-meta/"
                className="social-link"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/var_meta"
                className="social-link"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95724 14.8821 3.28346C14.0247 3.60968 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/VAR-META-Tech"
                className="social-link"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22M9 19C4 20.5 4 16.5 2 16L9 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <p className="copyright">Copyright © 2025 SuiNova</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
