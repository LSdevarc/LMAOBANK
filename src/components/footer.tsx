export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-black text-2xl mb-4 gradient-text">LMAOBANK</h3>
            <p className="text-gray-400">The future of automated revenue sharing on Solana.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contract</h4>
            <p className="text-gray-400 text-sm font-mono break-all">H74CYmXgMkYHYuSRsZt6RJb4NYp2u72Vw8BS5huApump</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition">Twitter</a></li>
              <li><a href="#" className="hover:text-accent transition">Discord</a></li>
              <li><a href="#" className="hover:text-accent transition">Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Disclaimer</h4>
            <p className="text-xs text-gray-500">This is a memecoin. Always do your own research before investing.</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 LMAOBANK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
