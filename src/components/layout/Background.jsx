export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-dark-bg">
            {/* Primary Ambient Glow - Top Center */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] 
        bg-accent-primary/10 rounded-full blur-[120px] opacity-70 animate-pulse-slow"
            />

            {/* Secondary Glow - Bottom Right */}
            <div
                className="absolute bottom-0 right-0 w-[800px] h-[500px] 
        bg-accent-violet/5 rounded-full blur-[100px] opacity-50"
            />

            {/* Tertiary Glow - Top Left */}
            <div
                className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] 
        bg-accent-cyan/5 rounded-full blur-[100px] opacity-30"
            />

            {/* Subtle Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Vignette to focus attention */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-bg/80" />
        </div>
    );
}
