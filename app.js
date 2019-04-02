const express = require('express');
const UserModel = require('./models/userModel');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 注册
app.post('/addUser', (req, res) => {

    // let uName = req.body.username;
    // let uPwd = req.body.password;
    // let uSex = req.body.sex;

    let user = new UserModel(req.body);

    user.save()
        .then(() => {
            res.send({
                code: 0,
                msg: '注册成功'
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                code: -1,
                msg: '注册失败'
            })
        })

})



// 修改
app.post('/updateUser', (req, res) => {
    let userId = req.body.userId;
    let age = req.body.age;

    UserModel.updateOne({
        _id: userId
    }, {
            age: age
        }).then(data => {
            console.log(data);
            res.send({
                code: 0,
                msg: '修改成功'
            })
        }).catch(error => {
            console.log(error);
            res.send({
                code: -1,
                msg: '修改失败'
            })
        })
})



// 删除
app.post('/deleteUser', (req, res) => {
    let userId = req.body.userId;

    UserModel.deleteOne({
        _id: userId
    }).then(data => {
        res.send({
            code: 0,
            msg: '删除成功'
        })
    }).catch(error => {
        res.send({
            code: -1,
            msg: '删除失败'
        })
    })
})



// 查询
app.get('/getUserList', (req, res) => {
    let searchText = req.query.searchText;

    UserModel.find({
        username: new RegExp(searchText)
    }, { password: 0 })
        .then(data => {
            console.log(data)
            res.send({
                code: 0,
                msg: '查询成功',
                list: data
            })
        })
        .catch(error => {
            res.send({
                code: -1,
                msg: '查询失败'
            })
        })
})











app.listen(3000);