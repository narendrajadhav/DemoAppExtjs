Ext.define('TestDemoExt601.view.registration.RegistrationPart3', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    xtype: 'registrationPart3',
    title: 'Part 3',
    items: [{
        xtype: 'panel',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'panel',
            height: 400,
            width: 400,
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            defaults: {
                xtype: 'textfield',
                width: '100%',
                margin: '10 20',
                height: 50,
                labelAlign: 'top'
            },
            items: [{
                xtype: 'box',
                margin: '0 20',
                html: '<b>Set user name & password</b>'
            }, {
                fieldLabel: 'Username',
                name: 'username',
                iconCLs: 'user',
                allowBlank: false
            }, {
                name: 'password',
                fieldLabel: 'Password',
                allowBlank: false,
                inputType: 'password'
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield',
                    itemId: 'termCondition'
                }, {
                    html: '<b>I accept with the term and condition<br> <a href="">User Agreement and Privacy policy </a><b>'
                }]
            }]
        }]
    }],
    listeners: {
        dirtychange: 'onFormDirtyChange',
        _validitychange0: 'onFormValidityChange',
        _validitychange1: 'onFormValidityChange',
        validitychange: function () {
            var me = this,
                args = Ext.toArray(arguments, 0, -1);
            args.unshift('_validitychange0');
            me.fireEvent.apply(me, args);
            args[0] = '_validitychange1';
            me.fireEvent.apply(me, args);
        }
    },
    fbar: [{
            text: 'Previous',
            handler: 'onPreButtonClick',
            viewname: 'registrationPart2'
        },
        '->', {
            text: 'Accept and Submit',
            handler: 'onSubmitButtonClick'
        }
    ]
});