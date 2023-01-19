import React from 'react';
import { GET_STATS } from '../../Api';
import useFecth from '../../Hooks/useFecth';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import { UserStatsGraphs } from './UserStatsGraphs';

const UserStats = () => {
  const { loading, data, error, request } = useFecth();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </section>
    );
  else return null;
};

export default UserStats;
