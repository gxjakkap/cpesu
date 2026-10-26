import { CalendarDaysIcon, FileTextIcon, PackageOpenIcon, ShoppingCartIcon } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6 shrink-0">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const links = [
  {
    label: "พรีออเดอร์เสื้อ\nCPE Open House 2026",
    href: "https://shop.cpesu.com/product/cpe-open-house-2026-t-shirt/",
    Icon: () => <ShoppingCartIcon className="size-6 shrink-0" />,
    textColor: "text-[#000000]",
    glow: true,
  },
  {
    label: "กิจกรรม CPE Open House 2026",
    href: "https://engopenhouse.kmutt.ac.th/activities?depts=CPE",
    Icon: () => <CalendarDaysIcon className="size-6 shrink-0" />,
    textColor: "text-[#000000]",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/student.cpe.kmutt",
    Icon: FacebookIcon,
    textColor: "text-[#1877F2]"
  },
  {
    label: "Instagram",
    href: "https://instagram.com/cpe_studentunion",
    Icon: InstagramIcon,
    textColor: "text-[#E1306C]"
  },
  {
    label: "ยืมพัสดุ",
    href: "https://dekcpe.link/sueqbr",
    Icon: PackageOpenIcon,
    textColor: "text-[#000000]"
  },
  {
    label: "รวมใบคำร้อง",
    href: "https://dekcpe.link/sureq",
    Icon: FileTextIcon,
    textColor: "text-[#000000]"
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="flex flex-col items-center gap-6 text-white max-w-sm w-full">
        <img
          src="/CPESU_logo_white_EN.svg"
          alt="Computer Engineering Student Union"
          className="w-56 sm:w-64"
        />

        {/* <div className="w-24 h-0.5 bg-white/30 rounded-full" /> */}

        <div className="flex flex-col gap-4 w-full">
          {links.map(({ label, href, Icon, textColor, glow }) => (
            <div key={label} className={glow ? "glow" : undefined}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex items-center whitespace-pre-line gap-4 px-6 py-4 rounded-2xl bg-white backdrop-blur-sm border border-white/20 font-medium text-lg tracking-wide transition-all duration-300 ${textColor} hover:border-transparent hover:scale-[1.02] hover:shadow-xl`}
              >
                <Icon />
                {label}
              </a>
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm font-light tracking-widest uppercase">
          Made by CPE Student Union 2026
        </p>
      </div>
    </main>
  );
}
