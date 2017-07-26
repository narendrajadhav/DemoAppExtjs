Ext.define('TestDemoExt601.view.login.Login', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    xtype: 'loginForm',
    cls: 'login-form bounceInRight animated',
    dockedItems: [{
        xtype: 'toolbar',
        cls: 'hedar-toolbar',
        dock: 'top',
        items: [{
            text: '<b >Let\'\s Log In</b>'
        }]
    }],
    controller: 'loginController',
    items: [{
        xtype: 'container',
        cls: 'login-full-container',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'container',
            height: 400,
            width: 400,
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            cls: 'login-field-container',
            defaults: {
                xtype: 'textfield',
                width: '100%',
                margin: '10 20',
                height: 50
            },
            items: [{
                xtype: 'box',
                margin: '0 20',
                html: '<b>Signin into your account</b>'
            }, {
                emptyText: 'Username',
                name: 'username',
                iconCLs: 'user',
                allowBlank: false
            }, {
                name: 'password',
                emptyText: 'Password',
                allowBlank: false,
                inputType: 'password'
            }, {
                xtype: 'button',
                text: '<b style="font-size: 18px;">Login</b>',
                style: {
                    background: '#589242',
                    border: 0
                },
                handler: 'onLoginButtonClick'
            }, {
                xtype: 'button',
                text: '<b style="color: #3c3c3c;font-size: 18px;">Create Account</b>',
                style: {
                    background: 'transparent',
                    border: 0
                },
                handler: 'onCreateAccountButtonClick'
            }]
        }]
    }]
});