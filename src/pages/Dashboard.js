import React from 'react';
import { Grid, Paper } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveBar } from '@nivo/bar';

const dataPie = [
  {
    id: 'javascript',
    label: 'javascript',
    value: 455,
    color: 'hsl(37, 70%, 50%)',
  },
  // Add more data here
];

const dataBar = [
  {
    country: 'AD',
    'hot dog': 73,
    'hot dogColor': 'hsl(143, 70%, 50%)',
    burger: 160,
    burgerColor: 'hsl(156, 70%, 50%)',
    sandwich: 173,
    sandwichColor: 'hsl(127, 70%, 50%)',
    kebab: 194,
    kebabColor: 'hsl(58, 70%, 50%)',
    fries: 13,
    friesColor: 'hsl(290, 70%, 50%)',
    donut: 44,
    donutColor: 'hsl(161, 70%, 50%)',
  },
  // Add more data here
];

const Dashboard = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Paper style={{ height: 400 }}>
        <ResponsivePie data={dataPie} />
      </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
      <Paper style={{ height: 400 }}>
        <ResponsiveBar data={dataBar} />
      </Paper>
    </Grid>
  </Grid>
);

export default Dashboard;
