export default function Section ({ children }) {
    return (
        <div className="section">
            {children}
            <style jsx>{`
                .section {
                    display: flex;
                    background-color: #eeeee8;
                    padding: 5em;
                }
            `}   
            </style>
        </div>
    );
}