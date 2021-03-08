export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
          color: #444;
        }
      `}</style>
    </>
  )
}
