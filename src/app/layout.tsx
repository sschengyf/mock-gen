import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Mock gen',
  description: 'Generate mock data by GPT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">{children}</body>
    </html>
  );
}
