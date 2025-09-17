export const metadata = {
  title: "Watchme",
  description: "Upload and share photos & videos easily",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

