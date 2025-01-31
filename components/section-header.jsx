import { motion } from 'framer-motion';

export function SectionHeader({ title, subtitle }) {
  return (
    <motion.header
      className=" mb-8 mt-0 sm:mt-10 relative w-fit cursor-pointer"
      aria-label="Section Header"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-lg transform -rotate-2 shadow-sm" />

      <div className="relative bg-background border border-emerald-500/20 rounded-lg px-6 py-4 transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl">
        <div className=" absolute spin-animation -top-1 -right-1 w-4 h-4 bg-emerald-500/20 transform rotate-12 rounded-sm" />
        <div className="absolute spin-animation -bottom-1 -left-1 w-4 h-4 bg-emerald-500/20 transform rotate-12 rounded-sm" />

        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-emerald-500/30 bg-background" />

        <div className="space-y-1">
          <h2 className="text-base md:text-xl font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-transparent bg-clip-text">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs md:text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
      </div>
    </motion.header>
  );
}
