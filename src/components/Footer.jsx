export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/60 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Companion. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
