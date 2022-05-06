import Link from 'next/link';
import { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}

    <div
      className="border-b border-gray-300"
      style={{ backgroundColor: '#0b2c3d', height: '50px' }}
    >
      <div className="mx-auto max-w-screen-xl pt-2">
        <ul className="flex h-5 flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="border-none text-white hover:bg-yellow-400">
                Bán đất
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about">
              <a className="border-none text-white hover:bg-yellow-400">
                Bán nhà phố
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about">
              <a className="border-none text-white hover:bg-yellow-400">
                Bán biệt thự
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/video/">
              <a className="border-none text-white hover:bg-yellow-400">
                Bán chung cư
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/video/">
              <a className="border-none text-white hover:bg-yellow-400">
                BDS khác
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="mx-auto max-w-screen-xl">
      <div className="content py-5 text-xl">{props.children}</div>

      <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
