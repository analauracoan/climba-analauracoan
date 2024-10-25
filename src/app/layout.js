import "./globals.css";

export const metadata = {
  title: "Climba",
  description: "Ana Laura Coan para Climba",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
