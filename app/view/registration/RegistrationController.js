Ext.define('TestDemoExt601.view.registration.RegistrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registrationController',
    /**
     * function will call on Next button click
     * @param{Ext.button} button
     */
    onNextButtonClick: function (button) {
        var view = this.getView(),
            viewname = view.down(button.viewname),
            form = button.up('form');
        if (form.isValid()) {
            localStorage.setItem(form.xtype, Ext.encode(form.getValues()));
            if (!viewname) {
                viewname = view.add({
                    xtype: button.viewname
                });
            }
            view.getLayout().setActiveItem(viewname);
        }
    },
    /**
     * function will call on Previous button click
     * @param{Ext.button} button
     */
    onPreButtonClick: function (button) {
        var view = this.getView(),
            viewname = view.down(button.viewname);
        if (!viewname) {
            viewname = view.add({
                xtype: button.viewname
            });
        }
        view.getLayout().setActiveItem(viewname);
    },
    /**
     * function will call on Back To Login button click
     * @param{Ext.button} button
     */
    onBackToLogin: function (button) {
        var mainCard = Ext.ComponentQuery.query('mainCard')[0],
            loginForm = mainCard.down('loginForm');
        loginForm.removeCls('bounceInRight').removeCls('bounceInLeft');
        mainCard.getLayout().setActiveItem(loginForm);
        loginForm.addCls('bounceInLeft');
    },
    /**
     * function will call on Submit button click
     * @param{Ext.button} button
     */
    onSubmitButtonClick: function (button) {
        var form = button.up('form'),
            values = form.getValues();
        if (form.isValid()) {
            if (!form.down('#termCondition').getValue()) {
                Ext.Msg.alert('Info', 'Please accept terms & conditions.');
                return;
            }
            localStorage.setItem('username', values.username);
            localStorage.setItem('password', window.btoa(values.password));
            Ext.Msg.alert('Success', 'You have successfully created your profile...<br>Please login with your credentials.');
            this.onBackToLogin();
        }
    },
    /**
     * Fires when the dirty state of the entire form changes.
     */
    onFormDirtyChange: function (basic, dirty, eOpts) {
        if (dirty) {
            var view = this.getView().getLayout().getActiveItem();
            view.down('#reset').setDisabled(false);
        }
    },

    // Fire when validity state of entire forms changes.
    onFormValidityChange: function (basic, valid, eOpts) {
        if (valid) {
            this.onFormDirtyChange();
        }
    },
    /**
     * function will call on reset button click
     * @param{Ext.button} button
     */
    onResetButtonClick: function (button) {
        button.up('form').getForm().reset();
        button.setDisabled(true);
    }
});