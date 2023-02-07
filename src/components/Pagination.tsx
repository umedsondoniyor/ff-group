import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { IPagination } from '../models/models';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItemText: {
      backgroundColor: '#fee900',
      color: '#0d1212',
    }
  })
);

export const PaginationComponent: React.FC = () => {
    const [page, setPage] = React.useState<number>(1);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Pagination 
        count={11} 
        page={page} 
        onChange={handleChange}
        variant="outlined" shape="rounded" 
        color = "primary"
        defaultPage={6}
        />
  );
};


