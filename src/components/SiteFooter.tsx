"use client";

export function SiteFooter() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Logo */}
          <div className="lg:col-span-1">
            <a href="/" className="font-heading text-[22px] font-bold tracking-[-0.02em] uppercase text-white">
              Vintage
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-[14px] text-white/70 hover:text-white transition-colors">About</a></li>
              <li><a href="/contact" className="text-[14px] text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/pricing" className="text-[14px] text-white/70 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-white/40 mb-5">Explore</h4>
            <ul className="space-y-3">
              <li><a href="/service" className="text-[14px] text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="/career" className="text-[14px] text-white/70 hover:text-white transition-colors">Career</a></li>
              <li><a href="/blog" className="text-[14px] text-white/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-white/40 mb-5">Utility Pages</h4>
            <ul className="space-y-3">
              <li><a href="/license" className="text-[14px] text-white/70 hover:text-white transition-colors">License</a></li>
              <li><a href="/terms-and-conditions" className="text-[14px] text-white/70 hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="/404" className="text-[14px] text-white/70 hover:text-white transition-colors">404 Page</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-white/40 mb-5">Working Hours</h4>
            <p className="text-[14px] text-white/70 leading-[1.8]">
              Mon-Fri: 9am-8pm<br />
              Sat: 9am - 7pm
            </p>
          </div>

          {/* Keep in Touch */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[0.08em] uppercase text-white/40 mb-5">Keep in Touch</h4>
            <p className="text-[14px] text-white/70 leading-[1.8] mb-3">
              Address: 24A Kingston St, Los Vegas NC 28202, USA.
            </p>
            <a href="mailto:support@vintage.com" className="block text-[14px] text-white/70 hover:text-white transition-colors mb-1">Mail: support@vintage.com</a>
            <a href="tel:(+22)123-4567-900" className="block text-[14px] text-white/70 hover:text-white transition-colors">Phone: (+22)123-4567-900</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[13px] text-white/40">© 2024 Vintage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
