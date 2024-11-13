import Link from "next/link";

const Social = ({ children }: { children: React.ReactNode }) => {
  return <Link href="#">{children}</Link>;
};

export default Social;
