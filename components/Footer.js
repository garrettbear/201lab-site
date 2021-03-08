import Link from "next/link"

export default function Footer () {
    return (
        <div className="footer">
          <div className="footer-link">
            <Link href="/contact?amp=1">
                <a>Hit us up.</a>
            </Link>     
          </div>
          <div>
            <p className="footer-text">
                2021 © || 201 Lab
            </p>
          </div>
          <style jsx>{`
            .footer {
                background-color: black;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 8em;
            }
            a {
                font-size: 3em; 
                
                color: white;
            }
            .footer-text {

            }
          `}
          </style>
        </div>
    );
}