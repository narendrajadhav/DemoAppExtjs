Ext.define('TestDemoExt601.view.registration.RegistrationPart1', {
    extend: 'Ext.form.Panel',
    layout: 'fit',
    xtype: 'registrationPart1',
    title: 'Part 1',
    items: [{
        xtype: 'fieldset',
        height: 500,
        title: 'Personal Details',
        items: [{
            xtype: 'panel',
            flex: 1,
            layout: 'hbox',
            defaults: {
                xtype: 'textfield',
                flex: 1,
                width: '100%',
                margin: 20,
                labelWidth: 150,
                allowBlank: false
            },
            items: [{
                fieldLabel: 'Name of Application *',
                name: 'Name'
            }, {
                fieldLabel: 'Address *',
                name: 'Address'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Gendor',
                items: [{
                    boxLabel: 'Male',
                    inputValue: 'Male',
                    name: 'gender',
                    checked: true
                }, {
                    boxLabel: 'Female',
                    inputValue: 'Female',
                    name: 'gender'
                }]
            }]
        }, {
            xtype: 'panel',
            flex: 1,
            layout: 'hbox',
            defaults: {
                xtype: 'textfield',
                flex: 1,
                width: '100%',
                margin: 20,
                labelWidth: 150,
                allowBlank: false
            },
            items: [{
                fieldLabel: 'District *',
                name: 'District'
            }, {
                fieldLabel: 'State *',
                name: 'State'
            }, {
                fieldLabel: 'Pincode *',
                name: 'Pincode'
            }]
        }, {
            xtype: 'panel',
            flex: 1,
            layout: 'hbox',
            defaults: {
                xtype: 'textfield',
                flex: 1,
                width: '100%',
                margin: 20,
                labelWidth: 150,
                allowBlank: false
            },
            items: [{
                fieldLabel: 'Email *',
                regex: /^([\w\-\’\-]+)(\.[\w-\’\-]+)*@([\w\-]+\.){1,5}([A-Za-z]){2,4}$/,
                regexText: 'Please enter valid email',
                name: 'Email'
            }, {
                fieldLabel: 'Mobile Number *',
                name: 'MobileNo'
            }, {
                fieldLabel: 'Phone Number',
                name: 'PhoneNo',
                allowBlank: true
            }]
        }, {
            xtype: 'panel',
            flex: 1,
            layout: 'hbox',
            defaults: {
                flex: 1,
                width: '100%',
                margin: 20,
                labelWidth: 150,
                allowBlank: false
            },
            items: [{
                xtype: 'fieldcontainer',
                fieldLabel: 'Know Language *',

                defaultType: 'checkboxfield',
                layout: 'hbox',
                items: [{
                    boxLabel: 'English',
                    name: 'Language',
                    inputValue: 'English',
                    checked: true
                }, {
                    boxLabel: 'Hindi',
                    name: 'Language',
                    inputValue: 'Hindi'
                }, {
                    boxLabel: 'Gujrati',
                    name: 'Language',
                    inputValue: 'Gujrati'
                }]
            }, {
                xtype: 'datefield',
                editable: false,
                fieldLabel: 'Date of Birth *',
                name: 'DOB'
            }, {
                xtype: 'filefield',
                name: 'photo',
                fieldLabel: 'Photo',
                labelWidth: 50,
                msgTarget: 'side',
                allowBlank: false,
                anchor: '100%',
                buttonText: 'Select Photo...'
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
            text: 'Back to Login',
            handler: 'onBackToLogin'
        },
        '->', {
            text: 'Reset',
            itemId: 'reset',
            disabled: true,
            handler: 'onResetButtonClick'
        }, {
            text: 'Next',
            handler: 'onNextButtonClick',
            viewname: 'registrationPart2'
        }
    ]
});