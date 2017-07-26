Ext.define('TestDemoExt601.view.login.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.loginController',
    /**
     * function will call on login button click
     * @param{Ext.button} button
     */
    onLoginButtonClick: function (button) {
        var form = button.up('form'),
            values = form.getValues();
        if (form.isValid()) {
            if (values.username == localStorage.getItem('username') && values.password == window.atob(localStorage.getItem('password'))) {
                Ext.Msg.alert('Success', 'You have successfully loged in...');
            } else {
                Ext.Msg.alert('Error', 'Please enter correct credentials.');
            }
            form.getForm().reset();
        }
    },
    /**
     * function will call on create acctount button click
     * @param{Ext.button} button
     */
    onCreateAccountButtonClick: function (button) {
        var mainCard = Ext.ComponentQuery.query('mainCard')[0],
            registration = mainCard.down('registration');
        if (!registration) {
            registration = mainCard.add({
                xtype: 'registration'
            });
        }
        registration.removeCls('bounceInRight');
        registration = mainCard.getLayout().setActiveItem(registration);
        registration.addCls('bounceInRight');
        registration.down('registrationPart1').getForm().reset();
    }
});