import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Drawer, List, ListItem, ListItemText, FormControlLabel, Switch as MuiSwitch, Grid, Paper } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Board from 'react-kanban';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const board = {
        columns: [
            {
                id: 1,
                title: 'To Do',
                cards: [{ id: 1, title: 'Task 1', description: 'Task 1 details' }],
            },
            {
                id: 2,
                title: 'In Progress',
                cards: [{ id: 2, title: 'Task 2', description: 'Task 2 details' }],
            },
            {
                id: 3,
                title: 'Done',
                cards: [{ id: 3, title: 'Task 3', description: 'Task 3 details' }],
            },
        ],
    };

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const events = [
        { title: 'Event 1', date: '2024-06-01' },
        { title: 'Event 2', date: '2024-06-02' },
    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'age', headerName: 'Age', width: 150 },
    ];

    const rows = [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Doe', age: 30 },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className="App" style={{ display: 'flex' }}>
                    <Drawer variant="permanent">
                        <List>
                            <ListItem button component="a" href="/">
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            {/* Add more links as needed */}
                        </List>
                    </Drawer>
                    <main style={{ flexGrow: 1, padding: '24px' }}>
                        <FormControlLabel
                            control={<MuiSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
                            label="Dark Mode"
                        />
                        <Switch>
                            <Route path="/" exact>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Paper style={{ padding: '16px' }}>
                                            <h2>Sales Data</h2>
                                            <Bar data={data} />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper style={{ padding: '16px' }}>
                                            <h2>Kanban Board</h2>
                                            <Board initialBoard={board} />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper style={{ padding: '16px' }}>
                                            <h2>Calendar</h2>
                                            <FullCalendar
                                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                                initialView="dayGridMonth"
                                                events={events}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper style={{ padding: '16px' }}>
                                            <h2>Data Table</h2>
                                            <div style={{ height: 400, width: '100%' }}>
                                                <DataGrid rows={rows} columns={columns} />
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
