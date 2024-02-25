## ---- NodeJS MVC with EJS --- 

### 1. init project
- Run: `npm init` after click enter then package.json created auto with content
    ```json
    {
    "name": "lab_04_mvc",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
    },
    "author": "",
    "license": "ISC"
    }
    ```
- Create `index.js` with content `console.log('hi')` after add "start": "node index" to scripts in package.json
- In terminal input: `npm start` after view terminal show `hi` -> OK

### 2. install packages:
- Run: `npm i ejs nodemon` -> chill for waiting
- After packages installed -> view package.json -> name and version package added in `dependencies`

### 3. add nodemon to auto restart when change code
- change `"start": "nodemon index"`

### 4. add code to index:

    ```js
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
        return resp.render('index', {courses}) //send data to ejs
    })



    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

    ```

### 5. views -> go source to read