import Link from "next/link"

export default function Footer () {
    return (
        <div className="footer">
          <div>
            <Link href="/contact">
                <a className="footer-link">Hit us up.</a>
            </Link>     
          </div>
          <div>
            <p className="footer-text">
                2021 © || 201 Lab
            </p>
          </div>
        </div>
    );
}