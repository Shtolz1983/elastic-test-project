import { useEffect, useState } from 'react';
import SerachBlock from '../components/SerachBlock';
import UserCardList from '../components/UserCardList';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getPaginationUser } from '../redux/reducers/users';
import { getTotalPage } from '../utils/pagination';
import { LIMIT } from '../constants';

const SearchPage = () => {
  const { isLoading, error, users, count } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getPaginationUser({ limit: LIMIT, page: page }));
  }, [page]);

  return (
    <>
      <SerachBlock />
      {error ? (
        <div className="content-block">
          <h3> {error}</h3>
        </div>
      ) : (
        <>
          <div className="content-block">
            {isLoading ? (
              <h3
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                Loading....
              </h3>
            ) : (
              <UserCardList users={users} />
            )}
          </div>
          <div className="pagination-block">
            {count && (
              <Pagination
                count={getTotalPage(count, LIMIT)}
                onChange={(_, page) => setPage(page)}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
