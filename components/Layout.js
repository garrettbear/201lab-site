export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        :root {
          font-size: 16px;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          color: #444;
          font-size: 16px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
