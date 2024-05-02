import { Table, TableColumns } from '@/shared/ui';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useMemo } from 'react';
import { apiClient } from '@/shared/api/client';

interface Params {
  slug: string;
}

export const getServerSideProps = (async (context) => {
  console.log('context', context.params);

  try {
    const { data } = await apiClient.post('/property/filter', {});
    console.log('data', data);

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: [],
      },
    };
  }
}) satisfies GetServerSideProps<{ data: any }>;

const DictionaryPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const columns = useMemo<TableColumns<any>>(
    () => [
      {
        accessorKey: 'id',
      },
    ],
    [],
  );
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DictionaryPage;
