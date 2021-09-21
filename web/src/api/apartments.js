import { gql, useQuery } from '@apollo/client';

export const useFindAllApartments = () => {
  const query = gql`
    query GetApartments {
      getApartments {
        region
        subregion
        apartmenttype
        quarter
        year
        averagerent
      }
    }
  `;
  const { loading, error, data } = useQuery(query);
  return {
    apartmentsLoading: loading,
    apartmentsError: error,
    apartments: data?.getApartments || [],
  };
};
