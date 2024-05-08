import Link from 'next/link'
import Logos from "@/public/images/pasya.png"
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Pasar-Maya">
      <img src={Logos.src} className="w-16 h-16" />
        {/*<img src="../../public/images/pasarmaya-logo.svg" alt="aaaa"/>*/}
      {/*<svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
      {/*  <LogoBasah/>*/}
      {/*</svg>*/}
    </Link>
  )
}
