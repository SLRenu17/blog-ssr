import "./globals.css";

export const metadata = {
  title: {
    default: "Pipeline Cleaning Services in UAE",
    template: "%s | Abhi Drain Line Cleaning",
  },
  description:
    "Professional pipeline and drain line cleaning services in UAE for residential, commercial, and industrial needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <a href="/" style={{ marginRight: "20px" }}>Home</a>
          <a href="/blogs">Blogs</a>
        </header>

        {children}

        <footer className="footer">
          © {new Date().getFullYear()} Abhi Drain Line Cleaning Services
        </footer>
      </body>
    </html>
  );
}
