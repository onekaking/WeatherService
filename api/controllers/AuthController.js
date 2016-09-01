var passport = require('passport');
 //   bcrypt = require('bcrypt');

module.exports = {
 
    login: function (req, res) {
        if(!req.session.passport) {
            res.view('login');
        } else if(req.session.passport.user) {
            res.redirect('/');
        }
    },

    register: function (req, res) {
        res.view('user/createUser');
    },

    createUser: function (req, res) {
        User.create({
            username: req.param('username'),
            password: req.param('password')
        }).exec(function createCB(err, created){
            if (err) throw(err);
            console.log('Created user with name ' + created.username);

            res.redirect('/');
        });
    },

    process: function(req, res){
        var self = this;
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                console.log(err);

                return res.send({
                    message: 'login failed'
                });

                res.send(err);
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                
                res.redirect('/');
            });
        })(req, res);
    },

    logout: function (req,res){
        req.logout();
        res.send('logout successful');
    }
};
