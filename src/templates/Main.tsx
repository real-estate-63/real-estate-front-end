import { ReactNode } from 'react';

import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased">
    {props.meta}

    <Header />
    <div style={{ backgroundColor: '#f6f6f6' }}>
      <div className="py-8 text-center text-sm"></div>

      <div className="mx-auto max-w-screen-xl">
        <div className="content py-5 text-xl">{props.children}</div>
      </div>

      <Footer />
    </div>
  </div>
);

export { Main };
