const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let goals = [];

app.post('/add-goal', (req, res) => {
    const { goal } = req.body;
    if(goal.trim() !== "") goals.push({ text: goal, done: false });
    res.json({ success: true });
});

app.post('/toggle-goal', (req, res) => {
    const { index } = req.body;
    if(goals[index]) goals[index].done = !goals[index].done;
    res.json({ success: true });
});

app.post('/delete-goal', (req, res) => {
    const { index } = req.body;
    goals.splice(index, 1);
    res.json({ success: true });
});

app.get('/goals', (req, res) => {
    res.json(goals);
});

app.listen(3000, () => {
    console.log("🚀 MICROGOAL Server started on http://localhost:3000");
});