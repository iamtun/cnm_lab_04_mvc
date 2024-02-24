import express from 'express';

const PORT = 3000;
const app = express();

//register middlewares
app.use(express.json({extended: false}));
app.use(express.static('./views'));

//config view
app.set('view engine', 'ejs');
app.set('views', './views');


// routers
app.get('/', (req, resp) => {
    const courses = [
        {
            id: 1,
            name: 'Cơ sở dữ liệu',
            course_type: 'Cơ sở',
            semester: 'HK1-2020-2021',
            department: 'K.CNTT'
        },
        {
            id: 2,
            name: 'Cấu trúc dữ liệu',
            course_type: 'Cơ sở',
            semester: 'HK1-2020-2021',
            department: 'K.CNTT'
        },
        {
            id: 3,
            name: 'Công nghệ phần mềm',
            course_type: 'Cơ sở ngành',
            semester: 'HK1-2020-2021',
            department: 'K.CNTT'
        },
        {
            id: 4,
            name: 'Công nghệ mới',
            course_type: 'Chuyên ngành',
            semester: 'HK1-2020-2021',
            department: 'K.CNTT'
        },
        {
            id: 5,
            name: 'Đồ án môn học',
            course_type: 'Chuyên ngành',
            semester: 'HK1-2020-2021',
            department: 'K.CNTT'
        }
    ]
    return resp.render('index', {courses})
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})