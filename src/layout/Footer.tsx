import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
    <div className="border-t border-gray-300 py-8 text-center text-sm">
      Copyright © 2007 - 2021 Batdongsan.com.vn {new Date().getFullYear()}{' '}
      {AppConfig.title}
    </div>
  );
};

export default Footer;
