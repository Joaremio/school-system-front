export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl  mx-auto px-2 mt-4 py-6">{children}</div>;
}
