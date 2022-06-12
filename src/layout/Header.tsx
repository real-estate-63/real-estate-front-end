import { HeartTwoTone } from '@ant-design/icons';
import Link from 'next/link';

const RouteMock = [
  { path: '/', name: 'Nhà đất bán' },
  { path: '/nha-dat-cho-thue', name: 'Nhà đất cho thuê' },
  { path: '/du-an', name: 'Dự án' },
  { path: '/tin-tuc', name: 'Tin tức' },
  { path: '/phong-thuy', name: 'Phong thuỷ' },
];

const AuthMock = [
  { path: '/login', name: 'Đăng nhập' },
  { path: '/sign-up', name: 'Đăng ký' },
  { path: '/post', name: 'Đăng tin', key: 'dang_tin' },
];

const Header = () => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000000' }}>
      <div className="mx-auto flex max-w-screen-xl">
        <div className="mr-auto">
          <ul className="flex h-5 flex-wrap" style={{ height: '100px' }}>
            {RouteMock.map((item, index) => (
              <li key={index} className="my-auto mr-6">
                <Link href={item.path}>
                  <a className="border-b text-sm font-medium text-black hover:border-b-rose-500 hover:text-black">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <ul className="flex h-5 flex-wrap" style={{ height: '100px' }}>
            <li className="my-auto mr-6">
              <a className="rounded border-2 border-solid border-transparent p-3 text-sm font-medium hover:bg-neutral-100 hover:text-black">
                <HeartTwoTone className="pb-1" twoToneColor="#eb2f96" />
              </a>
            </li>
            {AuthMock.map((item, index) => (
              <li key={index} className="my-auto mr-6">
                <Link href={item.path}>
                  {item.key === 'dang_tin' ? (
                    <a className="rounded border-2 border-solid p-3 text-sm font-medium text-black hover:bg-neutral-100 hover:text-black">
                      {item.name}
                    </a>
                  ) : (
                    <a className="rounded border-2 border-solid border-transparent p-3 text-sm font-medium text-black hover:bg-neutral-100 hover:text-black">
                      {item.name}
                    </a>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
