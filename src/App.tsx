import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from './models/models';
import { createStyles, makeStyles, Theme, List, ListItem, ListItemText } from '@material-ui/core';
import {PaginationComponent} from './components/Pagination'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#0d1212'
    },
    listItemText: {
      backgroundColor: '#fee900',
      color: '#0d1212',
      fontSize: '12.25px',
      padding: '0.1em 0 0.1em 0',
    }
  })
);


const App: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.formula55.tj/results?type=prematch&date=2023-02-06&page=1&limit=10&desc"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    console.log(data);
  }

  return (
    <div className={classes.root}>
      <List component="nav">
        {data.data.map(item => (
          <React.Fragment key={item.id}>
            <ListItem  button>
              <ListItemText secondary={item.champ} classes={{ secondary: classes.listItemText }}/>
            </ListItem>
          </React.Fragment>
        ))}

        <div className="h-auto max-w-lg mx-auto transition-all duration-300 cursor-pointer filter mb-4 ">
        <div className="h-auto max-w-lg pl-2 text-lg font-bold inline-flex -space-x-px text-yellow-300">
          <PaginationComponent/>
        </div>
        </div>
      </List>
    </div>
  );
};

export default App;
