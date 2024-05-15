import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

const navigation = {
  support: [
    { page: 'help', href: '#' },
    { page: 'trackOrder', href: '#' },
    { page: 'shipping', href: '#' },
    { page: 'returns', href: '#' },
  ],
  company: [
    { page: 'about', href: '#' },
    { page: 'blog', href: '#' },
    { page: 'responsibility', href: '#' },
    { page: 'press', href: '#' },
  ],
};

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const { t } = useTranslation();

  return (
    <footer
      className="mt-24 border-t bg-gray-50"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        {t('footer.title')}
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  {t('footer.shop')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {collections.map((collection) => (
                    <li key={collection.id}>
                      <Link
                        className="text-base text-gray-500 hover:text-gray-600"
                        to={'/collections/' + collection.slug}
                        prefetch="intent"
                        key={collection.id}
                      >
                        {collection.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  {t('footer.support')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map(({ page, href }) => (
                    <li key={page}>
                      <a
                        href={href}
                        className="text-base text-gray-500 hover:text-gray-600"
                      >
                        {t(`navigation.support.${page}`)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  {t('address.company')}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a href="http://216.250.9.227:7878" target="_blank">
                      Noon Consulting
                    </a>
                  </li>
                  <li>
                    <a href="http://www.steelpipe.com.tm" target="_blank">
                      Steel Pipe
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              {t('checkout.detailsTitle')}
            </h3>

            <ul role="list" className="mt-4 space-y-4">
              <li>
                Imo: <a href="tel:+99363179400">+993 63 17 94 00</a>
              </li>
              <li>
                Link: <a href="tel:+99371190717">+993 71 19 07 17</a>
              </li>
              <li>
                WhatsApp: <a href="tel:+8613079909963">+86 130 7990 9963</a>
              </li>
              <li>
                Tiktok:
                <a
                  href="https://www.tiktok.com/@rovach.co.ltd"
                  target="_blank"
                  style={{ color: 'grey', marginLeft: 8 }}
                >
                  Rovach.co.ltd
                </a>
              </li>
              <li>
                <span>{t('address.streetLine1')}: </span>{' '}
                <span> G.Kulyýew (abýeznoý), Gujurly ýaşlar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
