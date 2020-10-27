import Head from 'next/head';
// Types and type guards
import type {LoreEntry as LoreEntryType} from '@vantage/types';
import type {FunctionComponent} from 'react';
import type {GetStaticProps} from 'next';
// Lib
import {getAllEntries} from '@vantage/lib/lore';
// Components
import {LoreEntry} from 'page-components/lore';
import {Layout} from '@vantage/components';

type Props = {
  loreEntries: Array<Omit<LoreEntryType, 'content'>>;
};

const siteTitle = 'The Lore of Vantage';

const Lore: FunctionComponent<Props> = (props) => (
  <>
    <Head>
      <title>{siteTitle}</title>
      <meta name="og:title" content={siteTitle} />
    </Head>
    <Layout heading="Here you'll find everything about the lore of Vantage.">
      {props.loreEntries.map((loreEntry, index) => (
        <LoreEntry
          key={loreEntry.id}
          loreEntry={loreEntry}
          isLast={index === props.loreEntries.length - 1}
        />
      ))}
    </Layout>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const loreEntries = await getAllEntries();
  return {
    props: {
      loreEntries,
    },
  };
};

export default Lore;
