import Link from 'next/link';

type FooterItemProps = {
  link: string;
  text: string;
};

const FooterItem: React.FC<FooterItemProps> = ({ link, text }) => {
  return (
    <Link href={link}>
      <a className="text-gray-400 md:text-white transition-all duration-500 ease-in-out hover:text-gray-500">
        {text.toUpperCase()}
      </a>
    </Link>
  );
};

export default FooterItem;
