const RomanticWrapper = ({ children }: { children: React.ReactNode }) => (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#1a1a2e] via-[#4a192c] to-[#1a1a2e] text-rose-50/90 font-serif">
        <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('/noise.png')] mix-blend-overlay" />
        {children}
    </main>
);

export default RomanticWrapper;